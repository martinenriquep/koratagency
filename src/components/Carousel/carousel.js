import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Card from 'react-bootstrap/Card';

export default function carousel() {
  
  return (
    <Card className="bg-dark text-white hero">
      <Card.Img src="https://www.n-somerset.gov.uk/sites/default/files/2020-09/medical%20background.jpg" alt="Card image" />
      
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
