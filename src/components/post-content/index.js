import React from 'react';
import './style.scss';
import Phrygia from '../../../assets/phrygia.jpg';

function PostContent({ html }) {
  return (
    <div className="post-content">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="phrygia_info_post">
        <dl>
          <dt>
            <img src={Phrygia} alt="phrygia" />
          </dt>
          <dd>
            <strong>Chaeyeon Lee (phrygia)</strong>
            <p>4년차 마크업 개발자 및 신입 프론트엔드 개발자 입니다-*</p>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default PostContent;
