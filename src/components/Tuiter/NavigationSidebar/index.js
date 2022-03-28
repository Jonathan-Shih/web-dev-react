import React from "react";
import {useSelector} from "react-redux";
import NavigationItem from "./navigation-item";

const NavigationSidebar = () => {
    const nav = useSelector(state => state.nav);
    return (
        <div>
            <div className="list-group">
                {
                    nav.map(item => <NavigationItem navItem={item} key={item.name}/>)
                }
            </div>
            <button type="submit" className="btn w-100 mt-3 btn-primary rounded-pill">Tuit</button>
        </div>
    );
}
export default NavigationSidebar;