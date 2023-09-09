import { Sora } from 'next/font/google'
import './globals.css';
import { Navbar, Footer } from "@components";
import { ThemeContextProvider } from 'src/context/ThemeContext';
import ThemeProvider from 'src/providers/ThemeProvider';
import AuthProvider from 'src/providers/AuthProvider';

const sora = Sora({ subsets: ['latin'], fallback: ['monospace'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeContextProvider>
          <AuthProvider>
            <ThemeProvider>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
