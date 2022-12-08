import * as React from "react"
import Header from '../components/header'
import Footer from '../components/Footer/footer'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Header></Header>
    )
  } else {
    header = (
      <Header></Header>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
