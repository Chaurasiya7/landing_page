import React from 'react'
import Cards from './Cards'

function CardsPage() {
  return (
    <div className='bg-white w-full md:py-[8rem] py-[4rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10' >
         <Cards user="Single User" price="$149" p1="500 GB Storage" p2="1 Granted User" p3="Send up to 2 GB" button="Start Trial"/>
         <Cards user="Partnership" price="$199" p1="1 TB Storage" p2="3 Granted User" p3="Send up to 10 GB" button="Start Trial" />
         <Cards user="Group Account" price="$299" p1="5 TB Storage" p2="10 Granted User" p3="Send up to 20 GB" button="Start Trial"/>

      </div>
    </div>
  )
}

export default CardsPage
