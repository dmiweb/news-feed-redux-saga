import { TNews, TVideo, TArticle, TPost } from "../../models";
import SocialAction from "../SocialAction/SocialAction";
import { formatDate } from "../../utils/formatDate";
import { react, defaultImg } from '../../assets';

const NewsItem = ({ news }: { news: TNews }) => {
  const isTArticle = (news: TNews): news is TArticle => {
    return 'link' in news.attachments[0] &&
      news.attachments[0].link.description === 'Статья';
  }

  const isTVideo = (news: TNews): news is TVideo => {
    return news.attachments[1] !== undefined &&
      'link' in news.attachments[1];
  }

  const isTPost = (news: TNews): news is TPost => {
    return 'link' in news.attachments[0] &&
      news.attachments[0].link.description !== 'Статья';
  }

  return (
    <article className="news">
      <header className="news__header">
        <img src={react} className="news__icon" alt="Иконка новости" />
        <div className="news__header-container">
          <h3 className="news__source">Университет интернет-профессий Нетология</h3>
          <time className="news__data" dateTime={formatDate(news.date).dateTime}>
            {formatDate(news.date).formattedDate}
          </time>
        </div>
        <nav className="news__menu">&#8250;</nav>
      </header>

      <p className="news__text">{news.text}</p>

      <div className="news__content">
        <img src={defaultImg} className="news__image" alt="News image" />
        {isTArticle(news) &&
          <div className="news-image-content">
            <h2 className="news-image-content__title">{news.attachments[0].link.title}</h2>
            <p className="news-image-content__description">Университет интернет-профессий Нетология</p>
            <button className="news-image-content__details-btn">{news.attachments[0].link.button.title}</button>
          </div>
        }
        {
          isTVideo(news) &&
          <div className="news__title-container">
            <a href="##" className="news-title">{news.attachments[1].link.title}</a>
            <a href="##" className="news__url">{news.attachments[1].link.url}</a>
          </div>
        }
        {
          isTPost(news) &&
          <div className="news__title-container">
            <a href="##" className="news-title">{news.attachments[0].link.title}</a>
            <a href="##" className="news__url">{news.attachments[0].link.caption}</a>
          </div>
        }
      </div>

      <footer className="news__social-actions-container">
        <SocialAction news={news} />
      </footer>
    </article>
  );
}

export default NewsItem;