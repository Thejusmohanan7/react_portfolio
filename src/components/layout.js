import React from 'react'
import Nav from './nav'
function layout() {
  return (
    <div>
      <Nav/>
       <main>{children}</main>
    </div>
  )
}

export default layout
