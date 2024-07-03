import React from 'react'
import styles from './Bottom.module.css';

const Botttom = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.explore}>
        <h2>Explore</h2>
        <a href="https://example.com">Dashboard</a>
        <a href="https://example.com">MarketPlace</a>
        <a href="https://example.com">Hire Developers</a>
      </div>
      <div className={styles.explore}>
        <h2>Learn & get Help</h2>
        <a href="https://example.com">Support</a>
        <a href="https://example.com">University</a>
        <a href="https://example.com">Courses</a>
        <a href="https://example.com">Blogs</a>
        <a href="https://example.com">Ebooks</a>
        <a href="https://example.com">Forum</a>
        <a href="https://example.com">Community</a>
        <a href="https://example.com">Developers</a>
        <a href="https://example.com">Wishlist</a>
        <a href="https://example.com">Status</a>
      </div>
      <div className={styles.explore}>
        <h2>Company</h2>
        <a href="https://example.com">About</a>
        <a href="https://example.com">Careers</a>
        <a href="https://example.com">Sitemap</a>
        <a href="https://example.com">Location</a>
        <a href="https://example.com">Stacks</a>
        <a href="https://example.com">Become an Affiliate</a>
      </div>
      <div className={styles.explore}>
        <h2>Terms $ Policy</h2>
        <a href="https://example.com">Terms of Services</a>
        <a href="https://example.com">Cookie Policy</a>
        <a href="https://example.com">Privacy Polycy</a>
        <a href="https://example.com">Cookies Preferences</a>
      </div>
      <div className={styles.explore}>
        <h2>Social</h2>
        <a href="https://example.com">Telegam</a>
        <a href="https://example.com">Instagram</a>
        <a href="https://example.com">Facebook</a>
        <a href="https://example.com">Twitter</a>
        <a href="https://example.com">Linkedin</a>
      </div>
    </div>
  )
}

export default Botttom
