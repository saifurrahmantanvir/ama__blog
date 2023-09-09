import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './navbar.module.css'
import { ThemeToggle, AuthLinks } from '@components'
import { Facebook } from '@icons/facebook'
import { Spotify } from '@icons/spotify'
import { Whatsapp } from '@icons/whatsapp'
import { Youtube } from '@icons/youtube'

const Navbar = () => {
   return (
      <div className={styles.container}>
         <div className={styles.social}>
            <Facebook />
            <Spotify />
            <Whatsapp />
            <Youtube />
         </div>
         <div className={styles.logo}>
            @ama blog
         </div>
         <div className={styles.links}>
            <ThemeToggle />
            <Link className={styles.desk} href='/'>Home</Link>
            <Link className={styles.desk} href='/contact'>Contact</Link>
            <Link className={styles.desk} href='/about'>About</Link>
            <AuthLinks />
         </div>
      </div>
   )
}

export default Navbar