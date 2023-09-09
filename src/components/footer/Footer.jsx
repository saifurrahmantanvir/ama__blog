import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "@icons/facebook";
import { Spotify } from "@icons/spotify";
import { Whatsapp } from "@icons/whatsapp";
import { Youtube } from "@icons/youtube";

const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.info}>
            <div className={styles.logo}>
               <h1 className={styles.logoText}>@ama blog</h1>
            </div>
            <p className={styles.desc}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
               necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum.
            </p>
            <div className={styles.icons}>
               <Facebook />
               <Spotify />
               <Whatsapp />
               <Youtube />
            </div>
         </div>
         <div className={styles.links}>
            <div className={styles.list}>
               <span className={styles.listTitle}>Links</span>
               <Link href="/">Homepage</Link>
               <Link href="/">Blog</Link>
               <Link href="/">About</Link>
               <Link href="/">Contact</Link>
            </div>
            <div className={styles.list}>
               <span className={styles.listTitle}>Tags</span>
               <Link href="/">Style</Link>
               <Link href="/">Fashion</Link>
               <Link href="/">Coding</Link>
               <Link href="/">Travel</Link>
            </div>
            <div className={styles.list}>
               <span className={styles.listTitle}>Social</span>
               <Link href="/">Facebook</Link>
               <Link href="/">Instagram</Link>
               <Link href="/">Tiktok</Link>
               <Link href="/">Youtube</Link>
            </div>
         </div>
      </div>
   );
};

export default Footer;