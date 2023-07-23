import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

const TagListWrapper = styled.div`
  margin-bottom: 16px;
  word-break: break-all;
`

const TagLink = styled.div`
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

  &:hover {
    color: #fff;
    background-color: ${props =>
      props.selected ? "rgba(104,104,172,.6)" : "rgba(104,104,172,.6)"};
  }

  &.dark {
    color: #fff;
    background-color: ${props => (props.selected ? "#6868ac" : "#252525")};

    &:hover {
      opacity: 0.75;
    }
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  const { theme } = useSelector(state => state.theme)
  if (!tagList) return null

  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => (
          <Link key={JSON.stringify({ tag, i })} to={`/tags?q=${tag}`}>
            <TagLink className={theme}>{spaceToDash(tag)}</TagLink>
          </Link>
        ))}
      </TagListWrapper>
    )
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => (
        <Link
          key={JSON.stringify({ tag, i })}
          to={
            selected === tag.fieldValue ? "/tags" : `/tags?q=${tag.fieldValue}`
          }
        >
          <TagLink selected={tag.fieldValue === selected} className={theme}>
            {spaceToDash(tag.fieldValue)} ({tag.totalCount})
          </TagLink>
        </Link>
      ))}
    </TagListWrapper>
  )
}

export default TagList
