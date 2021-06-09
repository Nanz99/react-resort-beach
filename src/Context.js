import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

import {
    GET_ROOMS,
    CHANGE_STATE,
    FILTER
} from './Actions'
import reducer from './Reducer'

export const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {

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

    const [state, dispatch] = useReducer(reducer, initialState);
    const [filter, setFilter] = useState(initialState);

    useEffect(() => {
        getRooms();
    }, []);

    useEffect(() => {
        dispatch({ type: FILTER, payload: filter });
    }, [filter]);

    const getRooms = () => {
        dispatch({ type: GET_ROOMS });
    }

    

    const getRoom = (slug) => {
        let tempRooms = [...state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        console.log("room",room)
        return room;
    }

    const handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        dispatch({ type: CHANGE_STATE, payload: { key: name, value: value } });
        // dispatch({ type: FILTER, payload: state });
        setFilter({ ...filter, [name]: value });

    }
console.log(state)
    return (
        <RoomsContext.Provider value={{
            ...state,
            getRoom,
            handleChange,
        }}>
            {children}
        </RoomsContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(RoomsContext)
}