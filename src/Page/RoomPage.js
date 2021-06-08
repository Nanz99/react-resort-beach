import React from 'react'
import { Link } from 'react-router-dom'
import { RoomsContainer, Hero, Banner } from '../Components'

export default function RoomPage() {
   return (
      <>
         <Hero hero="roomsHero">
            <Banner title="our rooms">
               <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
         </Hero>
         <RoomsContainer />
      </>
   )
}
