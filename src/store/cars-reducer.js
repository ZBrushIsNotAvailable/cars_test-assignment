import {carsAPI} from "../api/api";


const ADD_CAR = "ADD_CAR";
const SET_CARS = "SET_CARS";

const initState = {
    cars: []
}
const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,

            }
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        default:
            return state
    }
}

const addCarAC = (properties) => ({type: ADD_CAR, properties})
const setCars = (cars) => ({type: SET_CARS, cars})

export const addCar = specs => async dispatch => {
    const data = await carsAPI.add(specs);
    console.log(data)
}

export const getAllCars = () => async dispatch => {
    const data = await carsAPI.getAllCars();
    console.log("cars reducer", data.cars)
    dispatch(setCars(data.cars))
}

export default carsReducer
