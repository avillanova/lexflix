import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png'

export default (black) => {
	return (
		<header className={black.black ? 'black' : ''}>
			<div className="header-logo">
				<a href="/">
					<img src={logo} alt="Netflix"/>
				</a>
			</div>
			<div className="header-user">
				<a href="/">
					<img src={avatar} alt="User"/>
				</a>
			</div>
		</header>
	);
}