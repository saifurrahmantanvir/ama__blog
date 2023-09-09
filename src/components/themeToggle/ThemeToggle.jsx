'use client';

import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useTheme } from 'src/context/ThemeContext'
import { Moon } from '@icons/moon';
import { Sun } from '@icons/sun';

const ThemeToggle = () => {
   const { theme, toggleTheme } = useTheme()

   return (
      <div className={styles.container} style={theme === 'light' ? { backgroundColor: '#0f172a' } : { backgroundColor: '#000' }} onClick={toggleTheme}>
         <Moon />
         <div className={styles[theme]} />
         <Sun />
      </div>
   )
}

export default ThemeToggle