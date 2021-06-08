import React from 'react'
import { Title } from '.'
import { useGlobalContext } from '../Context'
import Loading from './Loading'
import Room from './Room'


export default function FeaturedRooms() {
   const { featuredRooms, loading,} = useGlobalContext()
  
   setTimeout(()=>{
      if (loading) {
         return <Loading />
      }
   },3000)
   return (
      <section className="featured-rooms">
         <Title title="Featured Rooms" />
         <div className="featured-rooms-center">
            {featuredRooms.map((item, index) => {
               return <Room key={index} {...item} />
            })}
         </div>
      </section>

   )
}
