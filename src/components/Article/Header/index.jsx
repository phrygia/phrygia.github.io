import React from "react"
import styled from "styled-components"

import { author } from "../../../../blog-config"

import Divider from "components/Divider"
import TagList from "components/TagList"
import dayjs from "dayjs"
import { useSelector } from "react-redux"

const Wrapper = styled.div`
  margin-top: 32px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const ArticleTitle = styled.h1`
  margin-bottom: 25.6px;
  line-height: 1.3;
  font-size: 40px;
  font-weight: 900;
  color: #212529;

  @media (max-width: 767px) {
    margin-bottom: 22px;
    font-size: 30px;
  }

  &.dark {
    color: #fff;
  }
`

const Information = styled.div`
  margin-bottom: 32px;
  font-size: 16px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const Author = styled.span`
  font-weight: 700;
  color: #495057;

  &.dark {
    color: rgb(248, 249, 250);
  }
`

const Date = styled.span`
  font-weight: 300;
  color: #495057;

  &.dark {
    color: rgb(248, 249, 250);
  }
`

const Header = ({ title, date, tags, minToRead }) => {
  const { theme } = useSelector(state => state.theme)

  return (
    <Wrapper>
      <ArticleTitle className={theme}> {title} </ArticleTitle>
      <Information>
        <Author className={theme}> {author} </Author>
        <Date className={theme}>· {dayjs(date).format("YYYY월 M월 D일")} </Date>
        <Date className={theme}>
          <span style={{ opacity: 0 }}>· {minToRead} min read</span>{" "}
        </Date>
      </Information>
      {tags && <TagList tagList={tags} />}
      <Divider mt="0" />
    </Wrapper>
  )
}

export default Header
