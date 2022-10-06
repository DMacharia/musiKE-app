import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotifyApi";

export default function Player() {
	const location = useLocation();
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		if (location.state) {
			apiClient
				.get("playlists/" + location.state?.id + "/tracks")
				.then((res) => {
					console.log(res.data);
				});
		}
	}, []);

	return (
		<div className="screen-container">
			<div className="left-player-body"></div>
			<div className="left-player-body"></div>
		</div>
	);
}
