import React from "react"
import styled from "styled-components"

import {
  FaGithub,
  FaKaggle,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaEnvelope,
} from "react-icons/fa"

import { siteUrl, description, author, links } from "../../../blog-config"

const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const profileImageRoot =
  typeof window !== "undefined" && window.location.host === "localhost:8000"
    ? "http://localhost:8000"
    : siteUrl

const Profile = styled.div`
  flex: 0 0 auto;
  margin-right: 22px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-image: url(${profileImageRoot}/phrygia.gif);
  background-size: 140%;
  background-position: center;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const Author = styled.div`
  margin-bottom: 4.8px;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const Description = styled.div`
  margin-bottom: 11.2px;
  line-height: 1.5;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const LinksWrapper = styled.div`
  & a {
    margin-right: 12px;
  }

  & svg {
    width: 18px;
    height: 18px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  & svg path {
    fill: #8888a7;
    transition: fill 0.3s;
  }

  & a:hover svg path {
    fill: #6a6a89;
  }
`

const Link = ({ link, children }) => {
  if (!link) return null
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const Bio = () => {
  const { github, kaggle, instagram, facebook, linkedIn, email, etc } = links

  return (
    <BioWrapper id="bio">
      <Profile />
      <div>
        <Author>@{author}</Author>
        <Description>{description}</Description>
        <LinksWrapper>
          <Link link={github}>
            <FaGithub />
          </Link>
          <Link link={kaggle}>
            <FaKaggle />
          </Link>
          <Link link={instagram}>
            <FaInstagram />
          </Link>
          <Link link={facebook}>
            <FaFacebook />
          </Link>
          <Link link={linkedIn}>
            <FaLinkedin />
          </Link>
          <Link link={email}>
            <FaEnvelope />
          </Link>
          <Link link={etc}>
            <FaLink />
          </Link>
        </LinksWrapper>
      </div>
    </BioWrapper>
  )
}

export default Bio
