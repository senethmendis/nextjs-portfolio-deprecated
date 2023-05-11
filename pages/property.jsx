import Image from 'next/image'
import React from 'react'
import proper from "../public/assets/projects/property.jpg"
import Link from 'next/link'

function property() {
  return (
    
      <div>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:w-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
            <Image src={proper} alt="porp" />
          </div>
        </div>
        <Link href="/"> Back </Link>
      </div>
    </div>
    
  )
}

export default property