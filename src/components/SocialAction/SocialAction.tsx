import { TNews } from "../../models";
import { formatNumber } from "../../utils/formatNumber";
import { likes, comments, reposts, views } from '../../assets';

const SocialAction = ({ news }: { news: TNews }) => {
  return (
    <>
      <div className="social-actions">
        <div className="social-actions__likes likes">
          <img src={likes} className="likes__icon" alt="likes" />
          <span className="likes__count">{news.likes.count > 0 && news.likes.count}</span>
        </div>
        <div className="social-actions__comments comments">
          <img className="comments__icon" src={comments} alt="comments" />
          <span className="comments__count">{news.comments.count > 0 && news.comments.count}</span>
        </div>
        <div className="social-actions__reposts reposts">
          <img className="reposts__icon" src={reposts} alt="reposts" />
          <span className="reposts__count">{news.reposts.count > 0 && news.reposts.count}</span>
        </div>
      </div>
      <div className="social-actions__views views">
        <img className="views__icon" src={views} alt="views" />
        <span className="views__count">{formatNumber(news.views.count)}</span>
      </div>
    </>
  );
}

export default SocialAction;