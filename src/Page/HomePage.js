import React from 'react'
import { Link } from 'react-router-dom'
import { Banner, FeaturedRooms, Hero, Services } from '../Components'
import NextNav from '../Components/NextNav'


export default function HomePage() {
   return (
      <>
         <NextNav />
         <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
               <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
         </Hero>
         <Services />
         <FeaturedRooms />
      </>
   )
}
