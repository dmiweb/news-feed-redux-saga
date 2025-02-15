import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestNews, requestPrevNews } from "../../actions/actionCreators";
import { TRootState } from "../../models";
import NewsItem from "../NewsItem/NewsItem";

const NewsFeed = () => {
  const { news, loading } = useSelector((state: TRootState) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadPreviousNews = () => {
    const lastNewsId = news[news.length - 1].id;

    dispatch(requestPrevNews({ id: lastNewsId }));
  }

  return (
    <>
      {loading && !news.length && <span className="loader-prev-news"></span>}

      {news.length ?
        <ul className="news-feed">
          {news.map(o =>
            <li key={o.id} id={String(o.id)} className="news-feed__item news-item">
              <NewsItem news={o} />
            </li>)}
        </ul> : null
      }

      {!loading && news.length && news.length % 5 === 0 ?
        <div className="wrap-loading-prev-news">
          <button className="loading-prev-news-btn" onClick={handleLoadPreviousNews}>
            к предыдущим записям
          </button>
        </div> : null
      }
      {news.length && loading ?
        <div className="wrap-loading-prev-news">
          <span className="loader-prev-news"></span>
        </div>
        : null
      }
    </>
  );
}

export default NewsFeed;