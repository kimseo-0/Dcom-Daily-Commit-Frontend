import React from 'react';
import {connect} from "react-redux";

const BottomNavigator = () => {
    return (
        <div>

        </div>
    );
}

function StateToProps(state){
    return {
        state : state
    }
}

export default connect(StateToProps)(BottomNavigator);
