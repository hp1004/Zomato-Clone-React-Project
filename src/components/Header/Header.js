import React from 'react';
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";


const Header = () => {
    return (
        <div className='header'>
            <nav>
                <span>Get the App</span>
                <div className="right">
                    <span>Investor Relations</span>
                    <span>Add restaurant</span>
                    <span>Log in</span>
                    <span>Sign up</span>
                </div>
            </nav>

            <div className="headerContent">
                <img src={Logo} alt="logo-img" />
                <h3>Discover the best food & drinks in Pune</h3>
                <div className="input">
                    <select name="" id="">
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Dhule">Dhule</option>
                    </select>

                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                </div>
            </div>
        </div>
    )
}

export default Header
