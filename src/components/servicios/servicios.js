import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button';

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'


export default function Servicios({posts}) {
  return (
    <CardGroup >
      <Row xs={1} md={2}>
        <Col>
      <Card className='cardServicios'>
        <figure>
            <StaticImage
                      layout="constrained"
                      formats={["auto", "webp", "avif"]}
                      src="../../images/hero1.png"
                      alt="Profile picture"
                      transformOptions={{ fit: "cover", cropFocus: "attention" }}
                      quality={90}
              />
        </figure>
        <Card.Body>
          <Card.Title>Social Media Marketing</Card.Title>
          <Card.Text>
            Planificamos.  Desarrollamos las creatividades, calendarizamos,  moderamos, definimos el tono de voz, medimos y reportamos.  Definamos juntos los objetivos, de la estrategia nos encargamos nosotros.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
          <figure>
                <StaticImage
                          layout="constrained"
                          formats={["auto", "webp", "avif"]}
                          src="../../images/hero1.png"
                          alt="Profile picture"
                          transformOptions={{ fit: "cover", cropFocus: "attention" }}
                          quality={90}
                  />
            </figure>
        <Card.Body>
          <Card.Title>Facebook e Instgram ADS</Card.Title>
          <Card.Text>
            Sabemos cómo llegar a tus clientes potenciales para aumentar tus ventas o generar mayor reconocimiento de marca. Somos especialistas en medios digitales.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
          <figure>
                <StaticImage
                          layout="constrained"
                          formats={["auto", "webp", "avif"]}
                          src="../../images/hero1.png"
                          alt="Profile picture"
                          transformOptions={{ fit: "cover", cropFocus: "attention" }}
                          quality={90}
                  />
            </figure>
        <Card.Body>
          <Card.Title>Desarrollo Web & Mobile</Card.Title>
          <Card.Text>
            Creamos y mantenemos sitios en internet, mientras garantizamos la óptima experiencia de usuario.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>

      <Card>
          <figure>
                <StaticImage
                          layout="constrained"
                          formats={["auto", "webp", "avif"]}
                          src="../../images/hero1.png"
                          alt="Profile picture"
                          transformOptions={{ fit: "cover", cropFocus: "attention" }}
                          quality={90}
                  />
            </figure>
        <Card.Body>
          <Card.Title>SEO Local</Card.Title>
          <Card.Text>
            Sabemos lo que tenemos que hacer para que tu negocio aparezca en las primeras posiciones en Google.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </CardGroup>
  )
}
