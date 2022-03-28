import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const NavigationItem = ({ navItem }
) => {
    const dispatch = useDispatch();
    const changeTab = () => {
        dispatch({type: 'change-tab', navItem});
    };

    return (
        <>
            <Link to={navItem.path} onClick={changeTab} className={`list-group-item ${navItem.active && 'active'}`}>
                <i className={`fas ${navItem.icon} position-relative me-1`}></i>
                <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> {navItem.name}</div>
            </Link>
        </>
    );
}

export default NavigationItem;