import React from "react";
import "./sidebarButton.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function SidebarButton(props) {

    
	return (
		<Link to={props.to}>
			<div className="btn-body">
				<IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
					{props.icon}
					<p className="btn-title">{props.title}</p>
				</IconContext.Provider>
			</div>
		</Link>
	);
}
