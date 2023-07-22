import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useSelector } from "react-redux"
import styled, { useTheme } from "styled-components"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { Utterances } from "utterances-react-component"
import { utterances } from "../../../../blog-config"
import MDSpinner from "react-md-spinner"
import Divider from "components/Divider"
// import Bio from "components/Bio"
import { siteUrl } from "../../../../blog-config"

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

const ArticleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
    padding: 0 12.8px;
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 12.8px;
    }
  }
`

const ArrowFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const ArticleButtonTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  overflow: hidden;
`

const Arrow = styled.div`
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  flex-basis: 24px;
  transition: left 0.3s;
`

const ArticleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  padding: 20.8px 16px;
  max-width: 295px;
  flex-basis: 295px;
  font-size: 17.6px;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #fff;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.nextPostButtonBackground};
  }

  & ${ArrowFlexWrapper} {
    flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  }

  & ${ArticleButtonTextWrapper} {
    align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  }

  & ${Arrow} {
    ${props => (props.right ? "margin-left: 16px" : "margin-right: 16px")};
  }

  &:hover ${Arrow} {
    left: ${props => (props.right ? 2 : -2)}px;
  }

  @media (max-width: 768px) {
    max-width: inherit;
    flex-basis: inherit;
    padding: 15px 10px;
    font-size: 15px;
  }
`

const ArticleButtonLabel = styled.div`
  margin-bottom: 9.6px;
  font-size: 12.8px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`

const ArticleButtonTitle = styled.div`
  padding: 2px 0;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`

const CommentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const SpinnerWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HiddenWrapper = styled.div`
  height: ${props => (props.isHidden ? "0px" : "auto")};
  overflow: ${props => (props.isHidden ? "hidden" : "auto")};
`

const ArticleButton = ({ right, children, onClick }) => {
  return (
    <ArticleButtonWrapper right={right} onClick={onClick}>
      <ArrowFlexWrapper>
        <Arrow>{right ? <BiRightArrowAlt /> : <BiLeftArrowAlt />}</Arrow>
        <ArticleButtonTextWrapper>
          <ArticleButtonLabel>
            {right ? <>Next Post</> : <>Previous Post</>}
          </ArticleButtonLabel>
          <ArticleButtonTitle>{children}</ArticleButtonTitle>
        </ArticleButtonTextWrapper>
      </ArrowFlexWrapper>
    </ArticleButtonWrapper>
  )
}

const Spinner = () => {
  const theme = useTheme()
  return (
    <SpinnerWrapper>
      <MDSpinner singleColor={theme.colors.spinner} />
    </SpinnerWrapper>
  )
}

const Comment = () => {
  const { theme } = useSelector(state => state.theme)
  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 1500)
  }, [])

  return (
    <>
      {spinner && <Spinner />}

      <HiddenWrapper isHidden={spinner}>
        <HiddenWrapper isHidden={theme === "light"}>
          <Utterances
            repo={utterances.repo}
            theme={`github-dark`}
            issueTerm={utterances.type}
          />
        </HiddenWrapper>
        <HiddenWrapper isHidden={theme === "dark"}>
          <Utterances
            repo={utterances.repo}
            theme={`github-light`}
            issueTerm={utterances.type}
          />
        </HiddenWrapper>
      </HiddenWrapper>
    </>
  )
}

const Footer = ({ previous, next }) => {
  return (
    <>
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
      <ArticleButtonContainer>
        {previous ? (
          <ArticleButton onClick={() => navigate(previous?.fields?.slug)}>
            {previous?.frontmatter?.title}
          </ArticleButton>
        ) : (
          <div></div>
        )}
        {next && (
          <ArticleButton right onClick={() => navigate(next?.fields?.slug)}>
            {next?.frontmatter?.title}
          </ArticleButton>
        )}
      </ArticleButtonContainer>
      {/* <Bio /> */}
      <CommentWrapper>
        <Divider mt="32px" />
        <Comment />
      </CommentWrapper>
    </>
  )
}

export default Footer
