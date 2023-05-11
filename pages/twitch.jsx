import Image from 'next/image'
import React from 'react'
import proper from "../public/assets/projects/twitch.jpg"
import Link from 'next/link'

function twitch() {
  return (
    <div>
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
            <Image src={proper} alt="porp" />
          </div>
          <Link href="/">Back</Link>
    </div>
  )
}

export default twitch