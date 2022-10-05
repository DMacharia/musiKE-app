import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../components/authentication/login";
import Sidebar from "../../components/sidebar/sidebar";
import { setClientToken } from "../../spotifyApi";
import Favourites from "../favourites/favourites";
import Feed from "../feed/feed";
import Library from "../library/library";
import Player from "../player/player";
import Trending from "../trending/trending";
import "./home.css";

export default function Home() {
	const [token, setToken] = useState(""); //storage of the token state for loggin in

	useEffect(() => {
		const token = window.localStorage.getItem("token"); //check if there is an access token in the localStorage
		const hash = window.location.hash; //storing the hash in a variable
		window.location.hash = "";//clear location after token is stored
		if (!token && hash) {
			const _token = hash.split("&")[0].split("=")[1]; //splitting the hash by &  and = to get the client token
			window.localStorage.setItem("token", _token); //storing the token in localStorage
			setToken(_token); //set state to the current token
			setClientToken(_token);
		} else {
			setToken(token);
			setClientToken(token);
		}
	}, []);
	return !token ? (
		<Login /> //logic for loggin in
	) : (
		<Router>
			<div className="main-body">
				<Sidebar />
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
