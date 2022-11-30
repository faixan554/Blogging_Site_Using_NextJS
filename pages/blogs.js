import React from 'react'
import Bloggingpost from '../components/Bloggingpost'


function blogs() {
  return (
    <div>

      <h1 className='pt-40 md:pt-20 text-3xl font-medium title-font text-gray-900 text-center mt-24'>Resent Blogs</h1>

      {/* Blogging Posts */}
      <Bloggingpost/>
          
    </div>
  )
}

export default blogs