import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"
import { Link } from "gatsby"
import Divider from "components/Divider"
import dayjs from "dayjs"

const SeriesListWrapper = styled.div`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const TitleWrapper = styled.h1`
  font-size: 25px;
  margin-bottom: 24px;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const SeriesWrapper = styled.div`
  position: relative;
  top: 0;
  transition: all 0.5s;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`

const SeriesInform = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.tertiaryText};

  & > span {
    margin: 0 5px;
  }
`

const Date = styled.p`
  font-size: 14.4px;
`

const PostCount = styled.p`
  font-size: 14.4px;
`

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const SeriesList = ({ seriesList }) => {
  const [seriesCount, setSeriesCount] = useState(10)

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && seriesCount < seriesList.length) {
      setTimeout(() => setSeriesCount(seriesCount + 10), 300)
    }
  }, 250)

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad)

    return () => {
      window.removeEventListener("scroll", handleMoreLoad)
    }
  }, [seriesCount, seriesList])

  useEffect(() => {
    setSeriesCount(10)
  }, [seriesList])

  return (
    <SeriesListWrapper>
      {seriesList.slice(0, seriesCount).map((series, i) => {
        return (
          <div key={i}>
            <SeriesWrapper>
              <TitleWrapper>
                <Link to={`/series/${_.replace(series.name, /\s/g, "-")}`}>
                  {series.name}
                </Link>
              </TitleWrapper>
              <SeriesInform>
                <PostCount>{series.posts.length} Posts</PostCount>
                <span>·</span>
                <Date>
                  Last updated{" "}
                  {dayjs(series.lastUpdated).format("YYYY월 MM월 DD일")}
                </Date>
              </SeriesInform>
            </SeriesWrapper>
            {seriesCount - 1 !== i && seriesList.length - 1 !== i && (
              <Divider mt="48px" mb="32px" />
            )}
          </div>
        )
      })}
    </SeriesListWrapper>
  )
}

export default SeriesList
