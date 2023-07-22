import GoToTop from "components/GoToTop"
import React from "react"
import styled from "styled-components"

const BodyWrapper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
  max-width: 680px;

  &.full {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

const Body = ({ children, isFull, theme }) => {
  return (
    <BodyWrapper
      className={`${isFull ? "full" : ""} ${theme}`}
      id="layout_container"
    >
      {children}
      <GoToTop theme={theme} />
    </BodyWrapper>
  )
}

export default Body
