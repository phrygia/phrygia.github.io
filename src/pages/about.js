import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Phrygia from '../../assets/phrygia.jpg';
import Skill from '../../assets/skill.png';
// import Bio from '../components/bio';
// import TimeStampSection from '../components/timestamp-section';
// import ProjectSection from '../components/project-section';

function AboutPage({ data }) {
  // const metaData = data.site.siteMetadata;
  // const { author, about, language } = metaData;
  // const { timestamps, projects } = about;
  return (
    <Layout>
      <Seo title="About" />
      <div className="about_container">
        <div className="about_bg" style={{ backgroundImage: 'url(/img/aboutBg.jpeg)' }} />
        <img src={Phrygia} alt="" className="cy_img" />

        <section className="about_content">
          <article className="me">
            <h1>phrygia 👋</h1>
            <dl>
              <dt>
                <h3>
                  안녕하세요, <br />
                  저는 이채연입니다<span className="dot">.</span>
                </h3>
                <h5>
                  <b>before</b> : Web Publisher <br />
                  <span>(UI / Markup Developer)</span>
                  <b>current</b> : Frontend Developer <br />
                </h5>
              </dt>
              <dd>
                <b>Email.</b> <a href="mailto:dmsgp62@gmail.com">dmsgp62@gmail.com</a> <br />
                <b>Github. </b>
                <button onClick={() => window.open('https://github.com/phrygia', '_blank')}>
                  https://github.com/phrygia
                </button>
                <br />
                <b>Blog.</b> <Link to="/">https://phrygia.github.io</Link>
              </dd>
            </dl>
          </article>
          <article className="tit">
            <h3>
              Frontend Developer<span className="dot">.</span>
            </h3>
            <ul>
              <li>
                <i>과거에는</i> HTML 및 CSS를 이용한 퍼블리싱을 공부했습니다.
              </li>
              <li>
                <i>최근에는</i> JS언어를 기반으로 한 프레임워크, 라이브러리를 공부하고 있습니다.
              </li>
              <li>
                <i>요즘에는</i> Typescript 공부를 시작했습니다. 🙂
              </li>
              <li>
                <i>미래에는</i> 매일매일 성장하는 Frontend 개발자가 되고 싶습니다. ✨
              </li>
            </ul>
          </article>
          <article className="days">
            <p>
              안녕하세요, 아름다운 인터페이스 UI와 동적 애니메이션을 구현하는 것을 좋아합니다.
              <br />
              시맨틱 웹 태그를 기반으로 한 웹 최적화를 좋아하고, SCSS와 JAVASCRIP를 활용한
              애니메이션을 좋아합니다.
            </p>
            <p>
              컴포넌트를 활용한 재사용성에 관심을 두고 있으며 클린 코드를 지양합니다-* <br />
              항상 사용자 입장을 고려하고 편의성을 제공하려 노력하며, 이에 대해서 개발자 및
              디자이너들과의 토크도 좋아합니다. 커뮤니케이션을 좋아하지만 제 의견을 말하는 것보다는
              경청하는 것을 좋아합니다. ✨
            </p>
            <p>
              사용자뿐만 아니라 클라이언트도 200% 만족하는 서비스를 개발하는 것을 목표로 하고
              있습니다.
            </p>
          </article>
          <article className="stack">
            <h3>
              🛠️ Stacks<span className="dot">.</span>
            </h3>
            <img src={Skill} alt="" />
            <ul>
              <li>주로 사용하는 언어는 JS, TS 입니다.</li>
              <li>React 라이브러리를 사용할 수 있으며, 열심히 공부하고 있습니다 😄 (+ Next.js)</li>
              <li>CSS & SCSS 등 CSS Preprocessor를 사용할 수 있습니다.</li>
              <li>웹 접근성을 고려하여 UI를 개발하려고 항상 노력합니다.</li>
              <li>동적인 UI를 좋아하며 다양한 인터렉션 구현에 능숙합니다.</li>
              <li>다양한 웹 솔루션 사용에 능숙합니다 (카페24, 그누보드, 영카트, 워드프레스 등)</li>
            </ul>
          </article>
          {/* <article className="career">
            <h3>
              👩🏻‍💻 Career 커리어<span className="dot">.</span>
            </h3>
            <ul>
              <li></li>
            </ul>
          </article> */}
          <article className="education">
            <h3>
              👩🏻‍🎓 Education<span className="dot">.</span>
            </h3>
            <ul>
              <li>
                <span>2016</span> 건국대학교 의류학과 석사 졸업
              </li>
              <li>
                <span>2017.02 ~ 2017.07 </span> UI.UX 퍼블리싱 국비지원 교육 이수 (종로이젠컴퓨터)
              </li>
              {/* <li>한국방송통신 대학교 컴퓨터과학과 3학년 편입 재학중</li> */}
            </ul>
          </article>
          <article className="certificate">
            <h3>
              🏆 Certificate<span className="dot">.</span>{' '}
            </h3>
            <ul>
              <li>
                <h4>정보처리기사</h4>
                <p>한국산업인력공단</p>
                <span>2019년 8월 취득</span>
              </li>
              <li>
                <h4>컴퓨터그래픽스운용기능사</h4>
                <p>한국산업인력공단</p>
                <span>2017년 6월 취득</span>
              </li>
              <li>
                <h4>웹디자인기능사</h4>
                <p>한국산업인력공단</p>
                <span>2017년 6월 취득</span>
              </li>
              <li>
                <h4>컴퓨터 활용능력 2급</h4>
                <p>대한 상공회의소</p>
                <span>2017년 2월 취득</span>
              </li>
              <li>
                <h4>GTQ그래픽기술자격 1급</h4>
                <p>KPC한국생산성본부</p>
                <span>2016년 9월 취득</span>
              </li>
            </ul>
          </article>
          <p className="update">
            <b>updated</b> 2022.05.28
          </p>
        </section>
      </div>

      {/* <Bio author={author} language={language} /> */}
      {/* <TimeStampSection timestamps={timestamps} />
      <ProjectSection projects={projects} /> */}
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
