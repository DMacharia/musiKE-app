import React from "react";
import "./sidebar.css";
import SidebarButtons from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
	return (
		<div className="sidebar-container">
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
				className="profile-img"
				alt="profile"
			/>
			<div>
				<SidebarButtons
					title="Feed"
					to="/displays/feed/feed.js"
					icon={<MdSpaceDashboard />}
				/>
				<SidebarButtons
					title="Favourites"
					to="/displays/favourites/favourites.js"
					icon={<MdFavorite />}
				/>
				<SidebarButtons
					title="Trending"
					to="/displays/trending/trending.js"
					icon={<FaGripfire />}
				/>
				<SidebarButtons
					title="Player"
					to="/displays/player/player.js"
					icon={<FaPlay />}
				/>
				<SidebarButtons
					title="Library"
					to="/displays/library/library.js"
					icon={<IoLibrary />}
				/>
			</div>
			<SidebarButtons title="Signout" to="" icon={<FaSignOutAlt />} />
		</div>
	);
}
