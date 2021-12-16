import React, { useState, useEffect } from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a>
      </p>
      <button id="go-to-top" onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
        <span className="left"></span>
        <span className="right"></span>
        <p>Back To Top</p>
      </button>
    </footer>
  );
}

export default PageFooter;
