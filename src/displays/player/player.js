import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../../components/audioPlayer/audioPlayer";
import Queue from "../../components/queue/queue";
import SongCard from "../../components/songCard/songCard";
import apiClient from "../../spotifyApi";
import "./player.css";

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
		<div className="screen-container flex">
			<div className="left-player-body">
				<Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
				<AudioPlayer
					currentTrack={currentTrack}
					total={tracks}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
			<div className="right-player-body">
				<SongCard album={currentTrack?.album} />
			</div>
		</div>
	);
}
