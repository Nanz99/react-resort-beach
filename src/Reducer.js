import {

   GET_ROOMS,
   FILTER_TYPE,
   FILTER_SIZE,
   FILTER_BREAKFAST,
   FILTER_PRICE,
   FILTER_CAPACITY,
   FILTER_PETS
} from './Actions'
import { roomsData } from './Utils/data'
const RoomsReducer = (state, action) => {
   let tempRooms = roomsData.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
   });
   if (action.type === GET_ROOMS) {
      let maxPrice = Math.max(...tempRooms.map(item => item.price))
      let maxSize = Math.max(...tempRooms.map(item => item.size));
      let newfeaturedRooms = tempRooms.filter(room => room.featured === true);
      return { ...state, rooms: tempRooms, price: maxPrice, maxPrice, maxSize, featuredRooms: newfeaturedRooms, sortedRooms: tempRooms }

   }

   if (action.type === FILTER_TYPE) {
      const { type } = action.payload
      if (type !== 'all') {
         return { ...state, sortedRooms: tempRooms.filter(room => room.type === type) }
      }
      return { ...state }
   }
   if (action.type === FILTER_CAPACITY) {
      let { capacity } = action.payload
      capacity = parseInt(capacity)
      if (capacity !== 1) {
         return {
            ...state, sortedRooms: tempRooms.filter(room => room.capacity > capacity)
         }
      }
      return { ...state }
   }
   if (action.type === FILTER_PRICE) {
      let { price } = action.payload
      price = parseInt(price)
      return {
         ...state, sortedRooms: tempRooms.filter(room => room.price <= price)
      }
   }
   if (action.type === FILTER_SIZE) {
      let { minSize, maxSize } = action.payload
      return {
         ...state, sortedRooms: tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
      }
   }
   if (action.type === FILTER_BREAKFAST) {
      const { breakfast } = action.payload
      if (breakfast) {
         return {
            ...state, sortedRooms: tempRooms.filter(room => room.breakfast === true)
         }
      }
   }
   if (action.type === FILTER_PETS) {
      const { pets } = action.payload
      if (pets) {
         return {
            ...state, sortedRooms: tempRooms.filter(room => room.pets === true)
         }
      }
   }

}

export default RoomsReducer