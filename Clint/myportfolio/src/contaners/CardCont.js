import React from 'react'
import { Home } from './Home'
import { Carousel } from './Carousel'

export const CardCont = (props) => {
  return (
    <>
      {props.Alldata.map((obj) => {
        return (
          <>
            <Home HomeContaner={obj} key={obj.sno} />
          </>
        )
      })}
      <div className='mt-5 d-flex align-items-center'>
      <Carousel CarouselContaner={props.projData} />
      </div>
    </>

  )
}
