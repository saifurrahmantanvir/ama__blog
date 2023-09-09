'use client';

import React, { useEffect } from 'react';

const ThemeContext = React.createContext()

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = React.useState(() => {
      if (typeof window !== 'undefined') {
         return localStorage.getItem('theme') || 'dark';
      }

      return 'dark';
   })

   useEffect(() => {
      localStorage.setItem('theme', theme);
   }, [theme])

   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
   const context = React.useContext(ThemeContext)
   if (!context) {
      throw new Error('useTheme must be used inside the ThemeContextProvider')
   }
   return context;
}