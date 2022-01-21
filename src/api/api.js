const baseURL = "https://test-backend.esverito.com/"

export const authAPI = {
    login() {
        console.log("login")

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

    add(specs) {
        return fetch(`${baseURL}car`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "brand": specs.brand,
                "carNumber": specs.carNumber,
                "engineType": specs.engineType,
                "mileage": 0,
                "model": specs.model,
                "new": true,
                "price": 0,
                "transmission": "MANUAL",
                "yearOfConstruction": 0
            })
        })
    }

}