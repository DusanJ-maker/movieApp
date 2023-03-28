import React from 'react'
import styles from '../Footer/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerDivCenter}>
        <ul className={styles.RowFlex}>
          <li>© 2011 - 2023</li>
          <li>Blog</li>
          <li>DMCA</li>
          <li>API</li>
          <li>RSS</li>
          <li>Contact</li>
          <li>Browse Movies</li>
          <li>Requests</li>
          <li>Login</li>
          <li>Language</li>
        </ul>
      </div>
      <div className={styles.footerDivCenter}>
        <ul className={styles.RowFlex}>
          <li>EZTV</li>
          <li>YIFY Status</li>
          <li>YTS Proxies</li>
          <li>YTS Proxies (tor)</li>
          <li>Follow on Twitter</li>
        </ul>
      </div>
      <div className={styles.footerDivCenter}>
        <ul className={styles.RowFlex}>
          <p>By using this site you agree to and accept our User Agreement, which can be read here.</p>
        </ul>
      </div>
    </div>
  )
}

export default Footer