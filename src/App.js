import React, {useEffect} from "react";
import {connect, Provider} from "react-redux";

import store from "./store/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainPage from "./components/MainPage/MainPage";

import './App.css';
import {login} from "./store/auth-reducer";

const App = ({login}) => {

    useEffect(()=>{
        login();
    },[login])

    return (
        <>
            <HeaderContainer/>
            <div className="app">
                <MainPage/>
            </div>
        </>
    );
}

const AppContainer = connect(null, {login})(App)

const CarsApp = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}


export default CarsApp;
