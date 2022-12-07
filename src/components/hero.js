import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default function hero() {
  
  return (
    <>
      <div className='hero'>
          <div className='izqHero'>
            <h1 className='titleHero'>
              ¿Necesitas ayuda en <span>Internet o Redes Sociales</span> para tu negocio?
            </h1>
            <p className='helpHero'>
              ¡Nosotros te ayudamos!
            </p>
            <ul className='listHero'>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Creamos tu pagina de negocio en redes sociales</span></li>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Desarrollamos el contenido para tu Facebook e Instagram</span></li>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Diseñamos tus posteos mensuales y los publicamos</span></li>
            </ul>

            <button>Más Información</button>

          </div>
          <div className='derHero'>
              <StaticImage
                layout="constrained"
                formats={["auto", "webp", "avif"]}
                src="../images/hero.png"
                alt="Profile picture"
                transformOptions={{ fit: "cover", cropFocus: "attention" }}
                quality={90}
          />
          </div>

      </div>
    </>
  );
}
