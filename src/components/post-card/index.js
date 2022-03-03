import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories, emoji } = post;

  return (
    <div className="post-card-wrapper" key={id}>
      <div className="date">
        {
          emoji && emoji.indexOf('img') !== -1 ? <img src={emoji} alt={emoji} /> : null
          // <img src="/img/no-img.jpg" className="no-img" alt="no-img" />
        }
        <p>
          <b>{date.split(',')[0].split(' ')[1]} </b> <br />
          {date.split(',')[0].split(' ')[0][0]}
          {date.split(',')[0].split(' ')[0][1]}
          {date.split(',')[0].split(' ')[0][2]}
        </p>
      </div>
      <div className="cont">
        <div className="categories">
          {categories.map((category) => (
            <div className="category" key={category}>
              <Link className="post-card" to={`/posts/${category}`}>
                #{category}
              </Link>
            </div>
          ))}
        </div>
        <div className="title">
          <Link className="post-card" to={slug}>
            {title}
          </Link>
        </div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link className="read-more" to={slug}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
