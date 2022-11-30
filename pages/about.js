import React from 'react'
import Team from '../components/Team'
import Statics from '../components/Statics'
import Testimonial from '../components/Testimonial'

function about() {
  return (
    <div className='pt-40 md:pt-20'>

      {/* Our Team */}
      <Team/>
      {/* Statics */}
      <Statics/>
      {/* Testimonials */}
      <Testimonial/>
  

    </div>
  )

}

export default about