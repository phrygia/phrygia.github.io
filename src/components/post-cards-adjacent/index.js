import { Link } from 'gatsby';
import React from 'react';
import Phrygia from '../../../assets/phrygia.jpg';

import './style.scss';

const PostCardsAdjacent = ({ prevPost, nextPost }) => {
  return (
    <>
      <div className="phrygia_info_post">
        <dl>
          <dt>
            <img src={Phrygia} alt="phrygia" />
          </dt>
          <dd>
            <strong>Chaeyeon Lee (phrygia)</strong>
            <p>Frontend Engineer 꿈꾸는 3년차 Publisher입니다-*</p>
          </dd>
        </dl>
      </div>
      <div className="post-cards-adjacent-wrapper prev_next">
        <div className="post-cards-adjacent">
          <div className="post-card-adjacent-wrapper">
            {nextPost && (
              <Link className="post-card prev" key={nextPost.id} to={nextPost.slug}>
                <div className="direction">이전 글</div>
                <div className="title">{nextPost.title}</div>
              </Link>
            )}
          </div>
          <div className="post-card-adjacent-wrapper">
            {prevPost && (
              <Link className="post-card next" key={prevPost.id} to={prevPost.slug}>
                <div className="direction">다음 글</div>
                <div className="title">{prevPost.title}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// PostCards.propTypes = {
//   contents: PropTypes.object({
//     id: PropTypes.string,
//     html: PropTypes.string,
//     frontmatter: PropTypes.object({
//       date: PropTypes.string,
//       title: PropTypes.string,
//       category: PropTypes.string,
//     }),
//
//   }).isRequired,
// };

export default PostCardsAdjacent;
