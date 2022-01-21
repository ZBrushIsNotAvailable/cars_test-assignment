const baseURL = "https://test-backend.esverito.com/"

export const authAPI = {
    login() {
        // console.log("login")

        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": "aY2mJ56Q06b",
                "userName": "porselnoid@gmail.com",
            })
        }

        return fetch(`${baseURL}users/login`, settings)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return response.json().then(err => console.log("Login failed due to error2:", err))
            })
            .catch(err => console.log("Login failed due to error:", err))
    },
}

export const carsAPI = {

    getAllCars() {
        const settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
        }

        return fetch(`${baseURL}cars`, settings)
            .then(response => response.json())
            .catch(err => console.log("Error getting all cars:", err))
    },

    addCar({
               brand,
               number,
               engine,
               model,
           }) {

        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "brand": brand,
                "carNumber": number,
                "engineType": engine,
                "mileage": 0,
                "model": model,
                "new": true,
                "price": 0,
                "transmission": "MANUAL",
                "yearOfConstruction": 0
            })
        }

        return fetch(`${baseURL}car`, settings)
            .then(response => response.json())
            .catch(err => console.log("Error adding car:", err))
    },

    editCar({
                brand,
                number,
                engine,
                model,
            }){

        const settings = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "brand": brand,
                "carNumber": number,
                "engineType": engine,
                "mileage": 0,
                "model": model,
                "new": true,
                "price": 0,
                "transmission": "MANUAL",
                "yearOfConstruction": 0
            })
        }

        return fetch(`${baseURL}api/car`, settings)
            .then(response => response.json())
            .catch(err => console.log("Error adding car:", err))
    },

    deleteCar(carId) {

        const settings = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }

        return fetch(`${baseURL}car/${carId}`, settings)
            .then(response => response.json())
            .catch(err => console.log("Error adding car:", err))
    }
}