import React from 'react'
import { useGlobalContext } from '../Context'
import { RoomsFilter, RoomsList, Loading } from './'


export default function RoomsContainer() {
   const { loading, sortedRooms, rooms } = useGlobalContext()
   // if (loading) {
   //    return <Loading />
   // }
   return (
      <>
         <RoomsFilter rooms={rooms} />
         <RoomsList rooms={sortedRooms} />
      </>
   )
}
