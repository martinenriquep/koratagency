import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default function SocialInfo() {
  
  return (
    <>
      <div className='hero'>
        <div className='imgSoInf-1'>
                <StaticImage
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/imgSection1.png"
                  alt="Profile picture"
                  transformOptions={{ fit: "cover", cropFocus: "attention" }}
                  quality={90}
            />
          </div>
          <div className='izqHero'>
            
            <h2 className='titleHero socialInfoTitle'>
              ¿Como lo hacemos?
            </h2>
            <ul className='listHero'>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Te escuchamos y creamos el contenido pensado en las necesidades de tu negocio, dándole una imagen profesional a tu perfil para convertir a tus seguidores en clientes.</span></li>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Realizamos publicaciones periódicas de acuerdo al plan que definamos juntos.</span></li>
              <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Generamos y optimizamos tus campañas digitales para obtener mejores resultados.</span></li>
                <li><span class="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 
                    9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 
                    2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                    </svg>
                  </span> 
                  <span className='listTextHero'>Te acompañamos y hacemos mediciones mensuales para ver tus resultados.</span></li>
            </ul>
            <div className='wrapButton'>
                <button className='socialInfobutton'>Más Información</button>
            </div>

            <div className='imgSoInf-2'>
                <StaticImage
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/imgSection1.png"
                  alt="Profile picture"
                  transformOptions={{ fit: "cover", cropFocus: "attention" }}
                  quality={90}
                 />
            </div>
          </div>

      </div>
    </>
  );
}
