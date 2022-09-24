import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Container from 'react-bootstrap/Container';

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 className="titleBlog" itemProp="headline">{post.frontmatter.title}</h1>
              <p className="descripBlog" dangerouslySetInnerHTML={{
                      __html: post.frontmatter.excerpt || post.excerpt,
                    }}
                    itemProp="excerpt"
                  />
               <p className="dateBlog">{post.frontmatter.date}</p>
              <figure><GatsbyImage image={image} alt={post.frontmatter.title} /></figure>
            </header>
            <section className="textBlog"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link style={{
                    textDecoration: `none`
                  }} to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link  style={{
                    textDecoration: `none`,
                  }} to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
      </Container>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.imageExcerpt || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
