import React from 'react'
import './globals.css'
import Header from './components/Header'
import Providers from './Providers'
import Serit from './components/Serit'

const Layout = ({ children }) => {
    return (
        <html lang="tr" suppressHydrationWarning>
            <body >
                <Providers>
                    <Header /> {/*Her zaman sayfada olsun */}
                    <Serit />
                    {children}
                </Providers>
            </body>
        </html >
    )
}

export default Layout