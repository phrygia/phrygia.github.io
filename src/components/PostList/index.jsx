import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"
import { Link } from "gatsby"
import dayjs from "dayjs"
import { useSelector } from "react-redux"
// import Divider from "components/Divider"
// import TagList from "components/TagList"

const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const PostWrapper = styled.div`
  position: relative;
  top: 0;
  transition: all 0.5s;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`

const Date = styled.p`
  font-size: 14.4px;
  color: #868e96;
`

const Excerpt = styled.p`
  line-height: 1.7;
  margin: 18px 0 25px;
  font-size: 16px;
  color: #495057;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;

  @media (max-width: 768px) {
    margin: 15px 0 20px;
    font-size: 14.5px;
  }

  &.dark {
    color: rgb(175, 185, 195);
  }
`

const PostTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 1.4;
  color: #212529;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }

  &.dark {
    color: #fff;
  }
`

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const PostList = ({ postList }) => {
  const { theme } = useSelector(state => state.theme)
  const [postCount, setPostCount] = useState(10)

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && postCount < postList.length) {
      setTimeout(() => setPostCount(postCount + 10), 300)
    }
  }, 250)

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad)

    return () => {
      window.removeEventListener("scroll", handleMoreLoad)
    }
  }, [postCount, postList])

  useEffect(() => {
    setPostCount(10)
  }, [postList])

  return (
    <PostListWrapper>
      {postList.slice(0, postCount).map((post, i) => {
        const { title, description, date } = post.frontmatter
        const { excerpt } = post
        const { slug } = post.fields

        return (
          <div key={i} className={i === 0 ? "first_post_list" : ""}>
            <PostWrapper>
              <PostTitle className={theme}>
                <Link to={slug}>{title}</Link>
              </PostTitle>
              {description ? (
                <Excerpt className={theme}>{description}</Excerpt>
              ) : (
                <Excerpt className={theme}>{excerpt}</Excerpt>
              )}
              <Date>{dayjs(date).format("YYYY월 M월 D일")} </Date>
              {/* <TagList tagList={tags} /> */}
            </PostWrapper>

            {/* {postCount - 1 !== i && postList.length - 1 !== i && (
              <Divider mt="30px" mb="32px" />
            )} */}
          </div>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList
