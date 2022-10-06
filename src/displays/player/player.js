import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotifyApi";

export default function Player() {
	const location = useLocation();
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (location.state) {
			apiClient
				.get("playlists/" + location.state?.id + "/tracks")
				.then((res) => {
					// console.log(res);
					setTracks(res.data.items);
					setCurrentTrack(res.data?.items[0]?.track);
				});
		}
	}, [location.state]);

	useEffect(() => {
		setCurrentTrack(tracks[currentIndex]?.track);
	}, [currentIndex, tracks]);

	return (
		<div className="screen-container">
			<div className="left-player-body">
				<AudioPLayer
					currentTrack={currentTrack}
					total={tracks}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
			<div className="left-player-body">
				<SongCard album={currentTrack?.album} />
				<Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
			</div>
		</div>
	);
}
