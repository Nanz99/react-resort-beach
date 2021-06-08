import React, { useContext, useEffect, useReducer, useState } from "react"

import {

    GET_ROOMS,
    FILTER_TYPE,
    FILTER_SIZE,
    FILTER_BREAKFAST,
    FILTER_PRICE,
    FILTER_CAPACITY,
    FILTER_PETS
} from './Actions'
import reducer from './Reducer'
const initialState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
}

const RoomsContext = React.createContext()

export const RoomsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        getRooms()
    }, [])
    const getRooms = () => {
        dispatch({ type: GET_ROOMS })
    }

    const filterRooms = (type, capacity, price) => {
        dispatch({ type: FILTER_TYPE, payload: { type } })
        dispatch({ type: FILTER_CAPACITY, payload: { capacity } })
        dispatch({ type: FILTER_PRICE, payload: { price } })
        // dispatch({ type: FILTER_SIZE, payload: { minSize, maxSize } })
        // dispatch({ type: FILTER_BREAKFAST, payload: { breakfast } })
        // dispatch({ type: FILTER_PETS, payload: { pets } })
    }
    // const filterByType = ({ type }) => {
    //     dispatch({ type: FILTER_TYPE, payload: { type } })
    // }
    // const filterByCapacity = ({ capacity }) => {
    //     dispatch({ type: FILTER_CAPACITY, payload: { capacity } })
    // }
    const handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = event.type === 'checkbox' ? target.checked : target.value;

        filterRooms({ [name]: value })
        // filterByType({ [name]: value })
        // filterByCapacity({ [name]: value })

        console.log({ [name]: value })
    }

    console.log(state)

    return (
        <RoomsContext.Provider value={{
            ...state,
            handleChange,
        }}>
            {children}
        </RoomsContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(RoomsContext)
}



