import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import * as style from './Cards.module.scss'

export default function cards({posts}) {
  return (
    <ol className={style.cardStyles} style={{ listStyle: `none` }}>
    {posts.map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return (
        <Card style={{ width: '18rem' }} key={post.fields.slug}> 
          <GatsbyImage varian="top" image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.title} />
          <Card.Body>
            <Card.Title>
              <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
              </Link>
            </Card.Title>
            <Card.Text>
            <p dangerouslySetInnerHTML={{
                  __html: post.frontmatter.excerpt || post.excerpt,
                }}
                itemProp="excerpt"
              />
            </Card.Text>
            <Button className={style.buttonStyle} variant="primary">Leer más</Button>
          </Card.Body>
        </Card>
  )
})}
</ol>
  )
}
