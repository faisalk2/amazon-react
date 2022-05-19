import React from 'react'
import Header from './Header'
import styles from "./header.module.css"

const arr=[
    {
        id:2,
        date:"28/10/2020",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ejmg7T8Y4T5yIzlxL3fvrcHCbKxwuG53xg&usqp=CAU",
        button:"Case Study",
        heading:"Amazon Gift",
        pay:"Pay",
        product:"Desktop-Mobile"

    },
    {
        id:3,
        date:"17-sep-2020",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgpOXCbE-ivMJeycxtybl4ywyODPVT0VhuQ&usqp=CAU",
        button:"Case Study",
        heading:"Apple Gift",
        pay:"Payment",
        product:"MacOS-Mobile"

    }
]

const Main = () => {
   
  return (
    <div className={styles.main}>
        <Header data={arr}/>
    </div>
  )
}

export default Main