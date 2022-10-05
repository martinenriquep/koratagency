import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/Cards/cards"
import Carousel from "../components/Carousel/carousel"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
       <Container>
          <Row className="justify-content-center containerCarousel">
            <Col sm={10}><Carousel posts={posts} /></Col>
          </Row>
      </Container>

      <Container fluid className="text-center">
          <Cards posts={posts} />
      </Container>
      
          
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
        excerpt
        fields {
          slug
        }
        frontmatter {
            title
            excerpt
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
