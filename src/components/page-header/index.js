import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';

function PageHeader({ siteTitle }) {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header className="page-header-wrapper">
          <div className="page-header">
            <div className="front-section">
              <Link className="link" to="/">
                {siteTitle}
              </Link>
            </div>
            <div className="trailing-section">
              {/* <Link className="link" to="/about">
                about
              </Link> */}
              <Link className="link" to="/posts">
                posts
              </Link>
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
              <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              />
            </div>
          </div>
        </header>
      )}
    />
  );
}

export default PageHeader;
