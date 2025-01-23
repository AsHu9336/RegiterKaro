import React from 'react'
import Oracle from '../Assets/TrustedBy/Oracle.svg'
import Monday from '../Assets/TrustedBy/Monday.svg'
import Samsung from '../Assets/TrustedBy/Samsung.svg'
import Segment from '../Assets/TrustedBy/Segment.svg'
import Morpheus from '../Assets/TrustedBy/Morpheus.svg'


export default function TrustedBy() {
  return (
    <div className='py-16 px-32'>
        <div className='mb-12'>
            <h2 className='text-center font-bold text-2xl'>Trusted By Over 100+ Startups and freelance business</h2>
        </div>
        <div className='flex flex-row justify-around'>
            <div>
                <img src={Oracle} alt=""/>
            </div>
            <div>
                <img src={Morpheus} alt=""/>
            </div>
            <div>
                <img src={Morpheus} alt=""/>
            </div>
            <div>
                <img src={Samsung} alt=""/>
            </div>
            <div>
                <img src={Monday} alt=""/>
            </div>
            <div>
                <img src={Segment} alt=""/>
            </div>
        </div>
      
    </div>
  )
}
