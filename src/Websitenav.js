import React from 'react'
import styles from './Websitenav.module.css';
const Websitenav = (props) => {
  return (
    <div className={styles.navcontainer}>
      <div>
       <img src={props.imagesource}></img>
      </div>
 
      <a className={styles.anchortags} href="">Features</a>
      <a className={styles.anchortags}  href="">About us</a>
      <a className={styles.anchortags}  href="">Contact Us</a>
      <a className={styles.anchortags}  href="">Support</a>
      <a className={styles.anchortags}  href="">Terms</a>
      <a className={styles.anchortags}  href="">Details</a>
      <a className={styles.anchortags}  href=""></a>
      <div>
      <input className={styles.inputbox} placeholder="Search here..." type="text"></input>
      <button className={styles.Submitbox}>Submit</button>
      </div>
    </div>
  )
}

export default Websitenav
