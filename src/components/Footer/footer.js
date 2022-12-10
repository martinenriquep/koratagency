import React from 'react'
import { Link } from "gatsby"
import * as styles from './Footer.module.scss'

export default function footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.containerFooter}> 
          <div className={styles.rowFooter}> 
            <div className={styles.colFooter}>
                  <span>© {new Date().getFullYear()}, desarrollado por
                  <a href="https://www.daliastudio.tk">Korat Agency</a></span>
                </div>

                <div className={styles.colFooter}>
                    <Link className={styles.footerLink} href="#">
                      <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px" }}>
                          Facebook
                        </span>
                      </i>
                    </Link>
                    <Link className={styles.footerLink} href="#">
                      <i className="fab fa-instagram">
                        <span style={{ marginLeft: "10px" }}>
                          Instagram
                        </span>
                      </i>
                    </Link>
                    </div>
          </div> 
        </div>    
    </footer>
  )
}
