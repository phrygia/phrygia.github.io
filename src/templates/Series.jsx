import React from "react"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Layout from "components/Layout"
import SEO from "components/SEO"
import PostList from "components/PostList"
import Divider from "components/Divider"

import { description, siteUrl } from "../../blog-config"
import dayjs from "dayjs"

const Header = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

const Title = styled.h1`
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const Subtitle = styled.h3`
  display: inline-block;
  padding: 9px 11px 7px;
  margin: 0 8px 8px 0;
  border-radius: 50px;
  background-color: ${props => (props.selected ? "#6868ac" : "#f0f0f7")};
  color: ${props =>
    props.selected
      ? props.theme.colors.selectedTagText
      : props.theme.colors.tagText};
  text-decoration: none;
  font-size: 14.4px;
  transition: all 0.2s;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 8px 4px;
  }

  &.dark {
    color: #fff;
    background-color: ${props => (props.selected ? "#6868ac" : "#252525")};

    &:hover {
      opacity: 0.75;
    }
  }
`

const SeriesInform = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.colors.text};

  & > span {
    margin: 0 3px;
  }
`

const Date = styled.span`
  color: rgb(73, 80, 87);
  font-weight: lighter;

  &.dark {
    color: rgb(248, 249, 250);
  }
`

const Series = ({ pageContext, data }) => {
  const seriesName = pageContext.series
  const posts = data.posts.nodes
  const { theme } = useSelector(state => state.theme)

  return (
    <Layout>
      <SEO
        title={`SERIES: ${seriesName}`}
        description={description}
        url={siteUrl}
      />
      <Header>
        <Subtitle className={theme}> SERIES </Subtitle>
        <Title> {seriesName} </Title>
        <SeriesInform>
          <span>{posts.length} Posts</span>
          <span>·</span>
          <Date className={theme}>
            Last updated{" "}
            {dayjs(posts[posts.length - 1].frontmatter.date).format(
              "YYYY월 MM월 DD일"
            )}
          </Date>
        </SeriesInform>
        <Divider />
      </Header>
      <PostList postList={posts} />
    </Layout>
  )
}

export default Series

export const pageQuery = graphql`
  query BlogSeriesBySeriesName($series: String) {
    posts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          update(formatString: "MMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
