import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Switch } from '@material-ui/core';
import './style.scss';

const PageHeader = ({ siteTitle }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        // Don't render anything at compile time. Deferring rendering until we
        // know which theme to use on the client avoids incorrect initial
        // state being displayed.
        if (theme == null) {
          return null;
        }
        return (
          <header className="page-header-wrapper">
            <div className="page-header">
              <div className="front-section">
                <Link className="link" to="/">
                  {siteTitle}
                </Link>
              </div>
              <div className="trailing-section">
                <Link className="link" to="/posts">
                  Posts
                </Link>
                {/* <Link className="link mo" to="/posts/diary">
                  diary
                </Link> */}
                <button
                  className="link"
                  onClick={() =>
                    window.open(
                      'https://evanescent-dog-4c8.notion.site/phrygia-80b52376264e4ad98e08cde0c4b61a40',
                      '_blank',
                    )
                  }
                >
                  About
                </button>
                <button
                  className="link"
                  onClick={() => window.open('https://phrygia.github.io/phrygia-TIL/', '_blank')}
                >
                  TIL
                </button>
                <Switch
                  className="dark-mode-switch"
                  size="medium"
                  color="default"
                  checked={theme === 'dark'}
                  onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                />
              </div>
            </div>
          </header>
        );
      }}
    </ThemeToggler>
  );
};

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  siteTitle: ``,
};

export default PageHeader;
