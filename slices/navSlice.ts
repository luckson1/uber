import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
export interface Nav {
    origin: {
       location: {
        lat: number;
        lng: number;
       },
       description: string;
    } | null,
    destination?: {
        location: {
            lat: number;
            lng: number;
           },
           description: string;
    }| null,
    travelTimeInformation?: string | null
}
const initialState:Nav={
    origin: null,
    destination: null,
    travelTimeInformation:null
}

export const navSlice=createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action)=> {
            state.origin=action.payload
        },
        setDestination: (state, action)=> {
            state.destination=action.payload
        },
        setTravelTimeInformation: (state, action)=> {
            state.travelTimeInformation=action.payload
        },
    }
})

export const {setDestination, setOrigin, setTravelTimeInformation}=navSlice.actions

//Selectors

export const selectOrigin=(state: RootState)=> state.nav.origin

export const selectDestination=(state: RootState)=> state.nav.destination

export const selecttravelTimeInformation=(state: RootState)=> state.nav.travelTimeInformation

export default navSlice.reducer