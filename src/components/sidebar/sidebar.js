import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButtons from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotifyApi";

//the sidebar needs to have buttons that link to various endpoints
//it also needs to get the image of the user upon sign-in
export default function Sidebar() {
	const [image, setImage] = useState(
		"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
	);

	useEffect(() => {
		apiClient.get("me").then((res) => {
			setImage(res.data.images[0].url);
		});
	}, []);

	return (
		<div className="sidebar-container">
			<img src={image} className="profile-img" alt="profile" />
			<div>
				<SidebarButtons title="Library" to="/" icon={<IoLibrary />} />
				<SidebarButtons title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
				<SidebarButtons
					title="Favourites"
					to="/favourites"
					icon={<MdFavorite />}
				/>
				<SidebarButtons title="Trending" to="/trending" icon={<FaGripfire />} />
				<SidebarButtons title="Player" to="/player" icon={<FaPlay />} />
			</div>
			<SidebarButtons title="Signout" to="" icon={<FaSignOutAlt />} />
		</div>
	);
}
