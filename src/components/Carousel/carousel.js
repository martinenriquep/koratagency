import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"


import Carousel from 'react-bootstrap/Carousel';

export default function carousel() {
  
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const posts = data.allMarkdownRemark.nodes
        console.log(posts)
        return(

        <Carousel>
        <Carousel.Item>
        <GatsbyImage className="d-block w-75" image={getImage(posts[0].frontmatter.featuredImage)} alt={posts[0].frontmatter.title} />
          <Carousel.Caption>
            <span itemProp="headline">{posts[0].frontmatter.title}</span>
            <p dangerouslySetInnerHTML={{
                  __html: posts[0].frontmatter.excerpt || posts.excerpt,
                }}
                itemProp="excerpt"
              />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <GatsbyImage className="d-block w-75" image={getImage(posts[1].frontmatter.featuredImage)} alt={posts[1].frontmatter.title} />
          <Carousel.Caption>
            <span itemProp="headline">{posts[1].frontmatter.title}</span>
            <p dangerouslySetInnerHTML={{
                  __html: posts[1].frontmatter.excerpt || posts.excerpt,
                }}
                itemProp="excerpt"
              />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <GatsbyImage className="d-block w-75" image={getImage(posts[2].frontmatter.featuredImage)} alt={posts[2].frontmatter.title[1]} />
          <Carousel.Caption>
            <span itemProp="headline">{posts[2].frontmatter.title}</span>
            <p dangerouslySetInnerHTML={{
                  __html: posts[2].frontmatter.excerpt || posts.excerpt,
                }}
                itemProp="excerpt"
              />
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      )}
    }
    />
  )
}
