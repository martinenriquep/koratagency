import React from 'react'
import * as styles from './Footer.module.scss'

export default function footer() {
  return (
    <footer className={styles.footer}>
        <div>   
            © {new Date().getFullYear()}, Todos los derechos reservados por
            {` `}
            <a href="https://www.daliastudio.tk">Dalia Studio</a>
        </div>    
    </footer>
  )
}
