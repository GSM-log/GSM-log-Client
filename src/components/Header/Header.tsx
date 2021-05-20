import React from "react";
import Logo from "assets/background/Logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="Header">
            <img src={Logo} alt="" />
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
        </div>
    );
};

export default Header;
