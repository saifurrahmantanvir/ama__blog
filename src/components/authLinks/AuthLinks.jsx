'use client';

import React from 'react';
import Link from 'next/link'
import styles from './authLinks.module.css'
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
   const [open, setOpen] = React.useState(false)

   const { status } = useSession()

   const handleNavOpen = () => {
      setOpen(!open)
   }

   return (
      <>
         {status === 'unauthenticated' ? (
            <Link href='/login' className={styles.desk}>Login</Link>
         ) : (
            <>
               <Link href='/write' className={styles.desk}>Write</Link>
               <span className={styles.desk} onClick={() => signOut()}>Logout</span>
            </>
         )}
         <div className={`${styles.burger} ${open ? styles.open : ''}`}
            onClick={handleNavOpen}>
            <span /><span /><span />
         </div>
         {open && (
            <div className={styles.responsiveMenu} onClick={handleNavOpen}>
               <Link href="/" >Home</Link>
               <Link href="/" >About</Link>
               <Link href="/" >Contact</Link>
               {status === "unauthenticated" ? (
                  <Link href="/login" >Login</Link>
               ) : (
                  <>
                     <Link href="/write" >Write</Link>
                     <span onClick={() => signOut()} >Logout</span>
                  </>
               )}
            </div>
         )}
      </>
   )
}

export default AuthLinks