import React from 'react'
import styles from "./header.module.css"
const Header = ({data}) => {
    console.log(data)
  return (
    
    <>
   
    {data.map(v=>
        (
            <div className={v.id%2===0 ? styles.orange:styles.gray} id={v.id}>
                <div className={styles.header}>
                <h3>{v.date}</h3>
                <img className={styles.img} src={v.image} alt="" />
                </div>
                <div className={styles.body}>
                    <div className={styles.d}>
                        <button className={styles.btn} >{v.button}</button>
                        <h1>{v.heading}</h1>
                        <h1>{v.pay}</h1>
                        <p>{v.product}</p>
                    </div>
                    <div className={styles.d1}>
                        <h1>-></h1>
                    </div>
                </div>
            </div>
        )
    
    )}
    </>
  )
}

export default Header