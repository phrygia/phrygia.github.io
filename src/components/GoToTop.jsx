import React, { useEffect, useState } from "react"

const GoToTop = ({ theme }) => {
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
  )
}

export default GoToTop
