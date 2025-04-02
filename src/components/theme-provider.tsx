'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";


const ThemeModeProvider = ({children}: any) => {
  return (
      <ThemeProvider attribute='class' enableSystem>
          {children}
    </ThemeProvider>
  )
}

export default ThemeModeProvider

// 'use client'

// import * as React from 'react'
// import {
//   ThemeProvider as NextThemesProvider,
//   type ThemeProviderProps,
// } from 'next-themes'

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }
