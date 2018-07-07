import React from 'react'
import About from './About'
import Archives from './Archives'
import Authors from './Authors'

const SideBar = (props) => {
  return (
    <aside className="col-md-4 blog-sidebar">
      <About />
      <Archives />
      <Authors />
    </aside>
  )
}

export default SideBar
