import React, { useEffect, useState } from "react"
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
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 150) {
      setVisible(true)
    } else if (scrolled <= 150) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])

  return (
    <BodyWrapper
      className={`${isFull ? "full" : ""} ${theme}`}
      id="layout_container"
    >
      {children}
      <button
        id="go-to-top"
        onClick={scrollToTop}
        className={theme ?? ""}
        style={{ display: visible ? "block" : "none" }}
      >
        <span className="left"></span>
        <span className="right"></span>
        <p>Back To Top</p>
      </button>
    </BodyWrapper>
  )
}

export default Body
