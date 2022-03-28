import React from "react";
import navs from '../data/navigation.json';

const navigationReducer = (state = navs, action) => {
    switch (action.type) {
        case 'change-tab':
            return state.map(nav => {
                if(nav.name === action.navItem.name) {
                    nav.active = true;
                    return nav;
                } else {
                    nav.active = false;
                    return nav;
                }
            });
        default:
            return navs;
    }
};

export default navigationReducer;