import React from 'react'
import styles from './Props.module.css'
const Props = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <img alt="Logo" src={props.pic}></img>
      <p>{props.job_title}</p>
      <p>{props.exp}</p>
      <p>{props.salary}</p> 
      <p>{props.exp}</p>
      <p>{props.contactno}</p>
      <p>{props.Email}</p>

    </div>
  )
}

export default Props
