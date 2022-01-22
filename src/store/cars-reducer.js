import {carsAPI} from "../api/api";

const SET_CARS = "SET_CARS";
const SET_SELECTED_CAR = "SET_SELECTED_CAR"

const initState = {
    cars: [],
    car: {}
}
const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case SET_SELECTED_CAR:
            return {
                ...state,
                car: action.car
            }
        default:
            return state
    }
}

const setCars = (cars) => ({type: SET_CARS, cars})
const setSelectedCar = (car) => ({type: SET_SELECTED_CAR, car})


export const getAllCars = () => async dispatch => {
    const data = await carsAPI.getAllCars();
    dispatch(setCars(data.cars))
}

export const getCar = (id) => async dispatch => {
    const data = await carsAPI.getCar(id);
    dispatch(setSelectedCar(data))
}

export const addCar = specs => async dispatch => {
    await carsAPI.addCar(specs);
    dispatch(getAllCars())
}

export const editCar = (id, specs) => async dispatch => {
    await carsAPI.editCar(id, specs);
    dispatch(getAllCars())
}

export const deleteCar = carId => async dispatch => {
    await carsAPI.deleteCar(carId);
    dispatch(getAllCars())
}

export default carsReducer
