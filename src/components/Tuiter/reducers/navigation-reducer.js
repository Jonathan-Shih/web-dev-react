

import React from "react";
import tabs from '../data/navigation.json';

const navigationReducer = (state = tabs, action) => {
    switch (action.type) {
        case 'change-tab':
            return state.map(tab => {
                if(tab.name === action.tab.name) {
                    tab.active = true;
                    return tab;
                } else {
                    tab.active = false;
                    return tab;
                }
            });
        default:
            return tabs;
    }
};

export default navigationReducer;