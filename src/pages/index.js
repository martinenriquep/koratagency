import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/Cards/cards"
import Hero from "../components/hero"
import SocialInfo from "../components/socialInfo"




const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>

      <div className="text-center containerMar">
          <Hero/>
          <SocialInfo/>
          <Cards posts={posts} />    
      </div>
      
          
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      nodes {
        excerpt(pruneLength: 160)
        fields {
          slug
        }
        frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  blurredOptions: {width: 100}
                  placeholder: BLURRED
                  transformOptions: {cropFocus: CENTER}
                  aspectRatio: 0.7
                )
              }
            }
            imageExcerpt
            date
        }
      }
    }
  }
`
