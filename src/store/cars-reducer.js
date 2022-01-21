import {carsAPI} from "../api/api";

const SET_CARS = "SET_CARS";

const initState = {
    cars: []
}
const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        default:
            return state
    }
}

const setCars = (cars) => ({type: SET_CARS, cars})


export const getAllCars = () => async dispatch => {
    const data = await carsAPI.getAllCars();
    // console.log("cars reducer", data.cars)
    dispatch(setCars(data.cars))
}

export const addCar = specs => async dispatch => {
    const data = await carsAPI.addCar(specs);
    console.log(specs)
    console.log("addCar reducer", data)
    dispatch(getAllCars())
}

export const editCar = carId => async dispatch => {

}

export const deleteCar = carId => async dispatch => {
    const data = await carsAPI.deleteCar(carId);
    console.log("deleteCar red", data)
    dispatch(getAllCars())
}

export default carsReducer
