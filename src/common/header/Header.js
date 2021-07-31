import React from "react";
import './Header.css';
//var logo="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg";
class Header extends React.Component{


    render(){
        return(<div className="header">
                <img src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"/>
             </div>)
    }

}
export default Header