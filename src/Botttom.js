import React from 'react'
import styles from './Bottom.module.css';

const Botttom = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.explore}>
         <h2>Explore</h2>
         <a href="">Dashboard</a>
         <a href="">MarketPlace</a>
         <a href="">Hire Developers</a>
      </div>
      <div className={styles.explore}>
          <h2>Learn & get Help</h2>
          <a href="">Support</a>
          <a href="">University</a>
          <a href="">Courses</a>
          <a href="">Blogs</a>
          <a href="">Ebooks</a>
          <a href="">Forum</a>
          <a href="">Community</a>
          <a href="">Developers</a>
          <a href="">Wishlist</a>
          <a href="">Status</a>
      </div>
      <div className={styles.explore}>
          <h2>Company</h2>
          <a href="">About</a>
          <a href="">Careers</a>
          <a href="">Sitemap</a>
          <a href="">Location</a>
          <a href="">Stacks</a>
          <a href="">Become an Affiliate</a>
      </div>
      <div className={styles.explore}>
          <h2>Terms $ Policy</h2>
          <a href="">Terms of Services</a>
          <a href="">Cookie Policy</a>
          <a href="">Privacy Polycy</a>
          <a href="">Cookies Preferences</a>
      </div>
      <div className={styles.explore}>
         <h2>Social</h2>
        <a href="">Telegam</a>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Linkedin</a>
        
       
      </div>
    </div>
  )
}

export default Botttom
