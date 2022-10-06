import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import { useNavigate } from "react-router-dom";
import APIKit from "../../spotifyApi";

export default function Library() {
	const [playlists, setPlaylists] = useState(null); //set playlists state

	useEffect(() => {
		APIKit.get("me/playlists").then(function (res) {
			setPlaylists(res.data.items);
			console.log(res.data.items);
		});
	}, []);
    //idea is to go to a new screen(player) upon click of playlist
	const navigate = useNavigate();

	function playPlaylist(id){
		navigate("/player", { state: { id: id } });
	};

	return (
		<div className="screen-container">
			<div className="library-body">
				{playlists?.map((playlist) => (
					<div
						className="playlist-card"
						key={playlist.id}
						onClick={() => playPlaylist(playlist.id)}
					>
						<img
							src={playlist.images[0].url}
							className="playlist-image"
							alt="Playlist-Art"
						/>
						<p className="playlist-title">{playlist.name}</p>
						<p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
						<div className="playlist-fade">
							{" "}
							{/*playlist icon*/}
							<IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
								<AiFillPlayCircle />
							</IconContext.Provider>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
