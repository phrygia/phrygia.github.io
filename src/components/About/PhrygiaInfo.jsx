import React from "react"
import styled from "styled-components"
import { siteUrl } from "../../../blog-config"

const profileImageRoot =
  typeof window !== "undefined" && window.location.host === "localhost:8000"
    ? "http://localhost:8000"
    : siteUrl

const ImageBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${profileImageRoot}/phrygia.jpg);

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const PhrygiaInfo = () => {
  return (
    <div className="phrygia_info_post">
      <dl className="phrygia_info_dl">
        <dt>
          <ImageBox />
        </dt>
        <dd>
          <strong>Chaeyeon Lee (phrygia)</strong>
          <p>개발을 씹어먹고 싶은 주니어 프론트엔드 개발자 입니다-*</p>
        </dd>
      </dl>
    </div>
  )
}

export default PhrygiaInfo
