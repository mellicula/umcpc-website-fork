import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="h-full bg-club-blue-900 pt-12 px-20 lg:px-32 xl:px-48: 2xl:px-48">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
