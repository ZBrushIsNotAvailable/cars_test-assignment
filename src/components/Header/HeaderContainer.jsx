import React from "react";
import {connect} from "react-redux";

import Header from "./Header";

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    userName: state.authReducer.userName
});

export default connect(mapStateToProps)(HeaderContainer);