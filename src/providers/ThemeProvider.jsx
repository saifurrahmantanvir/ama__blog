'use client';

import React from 'react'
import { useTheme } from 'src/context/ThemeContext'

const ThemeProvider = ({ children }) => {
   const { theme } = useTheme()
   const [mounted, setMounted] = React.useState(false)

   React.useEffect(() => {
      setMounted(true)
   }, [])

   if (mounted) {
      return (
         <div className={theme}>{children}</div>
      )
   }
}

export default ThemeProvider