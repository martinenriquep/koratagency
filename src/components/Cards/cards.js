import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';

import * as style from './Cards.module.scss'

export default function cards({posts}) {
  return (
    <div className={style.styleOl}>
    {posts.map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return (
        <Card className="col-lg-3 col-md-4 col-sm-6 col-xs-12 m-5 border-0 shadow" key={post.fields.slug}> 
           <Col >
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
           </Col>
        </Card>
  )
})}
</div>
  )
}
