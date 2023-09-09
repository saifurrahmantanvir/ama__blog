import React from 'react'

import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>
            <b>Hey, @ama blog here!</b> Discover my stories and creative ideas.
         </h1>
         <div className={styles.post}>
            <div className={styles.imgContainer}>
               <Image src='/lemon_juice.jpg' alt='' fill className={styles.image} />
            </div>

            <div className={styles.textContainer}>
               <h1 className={styles.postTitle}>Last among and style never met great. At no or september sportsmen.</h1>
               <p className={styles.postDesc}>
                  Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly ham windows sixteen.
               </p>
               <button className={styles.button}>Read More</button>
            </div>
         </div>
      </div>
   )
}

export default Featured