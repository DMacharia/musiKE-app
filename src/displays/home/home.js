import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "../favourites/favourites";
import Feed from "../feed/feed";
import Library from "../library/library";
import Player from "../player/player";
import Trending from "../trending/trending";

export default function Home() {
	return (
		<Router>
			<div className="main-body">
				<Routes>
					<Route path="/" element={<Library />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/trending" element={<Trending />} />
					<Route path="/player" element={<Player />} />
					<Route path="/favourites" element={<Favourites />} />
				</Routes>
			</div>
		</Router>
	);
}
