import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'


import * as style from './Cards.module.scss'

export default function cards({posts}) {
  return (
    <div className={style.styleOl}>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
    {posts.map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return (
        <Col>
            <Card key={post.fields.slug}> 
            <Link to={post.fields.slug} itemProp="url">
                  <figure className=''>
                      <GatsbyImage 
                      layout="constrained"
                      varian="top" 
                      height="210px"
                      image={getImage(post.frontmatter.featuredImage)} 
                      alt={post.frontmatter.title}
                      />
                  </figure>
                      <Card.Body>
                        <Card.Title>
                              <span itemProp="headline">{title}</span> 
                        </Card.Title>
                        <Card.Text>
                        <p dangerouslySetInnerHTML={{
                              __html: post.excerpt || post.excerpt,
                            }}
                            itemProp="excerpt"
                          />
                        </Card.Text>
                        <Button className="card-button" variant="primary">Leer más</Button>
                      </Card.Body>
              </Link>
            </Card>
        </Col>
  )
})}
    </Row>
    </div>
  )
}
