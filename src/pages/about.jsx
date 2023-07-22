import Layout from "components/Layout"
import SEO from "components/SEO"
import React from "react"
import { title, description, siteUrl } from "../../blog-config"
import About from "components/About/About"

const AboutPage = () => {
  return (
    <Layout isFull>
      <SEO title={title} description={description} url={siteUrl} />
      <About />
    </Layout>
  )
}

export default AboutPage
