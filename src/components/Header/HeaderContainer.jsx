import React from "react";

import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    userName: state.authReducer.userName
});

export default connect(mapStateToProps)(HeaderContainer);