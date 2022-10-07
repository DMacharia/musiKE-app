import React, { useState, useRef, useEffect } from "react";
import Controls from "./controls.js";

export default function AudioPlayer({
	currentTrack,
	currentIndex,
	setCurrentIndex,
	total,
}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackProgress, setTrackProgress] = useState(0);
	var audioSrc = total[currentIndex]?.track.preview_url;


	const audioRef = useRef(new Audio(total[0]?.track.preview_url));

	const intervalRef = useRef();

	const isReady = useRef(false);


	const startTimer = () => {
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				handleNext();
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	useEffect(() => {
		if (audioRef.current.src) {
			if (isPlaying) {
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		} else {
			if (isPlaying) {
				audioRef.current = new Audio(audioSrc);
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(audioSrc);

		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [currentIndex]);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const handleNext = () => {
		if (currentIndex < total.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else setCurrentIndex(0);
	};

	const handlePrev = () => {
		if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
		else setCurrentIndex(currentIndex - 1);
	};

	const artists = [];
	currentTrack?.album?.artists.forEach((artist) => {
		artists.push(artist.name);
	});
	return (
		<div className="player-body flex">
			<div className="player-right-body flex">
				<p className="song-title">{currentTrack?.name}</p>
				<p className="song-artist">{artists.join(" | ")}</p>
				<div className="player-right-body flex">
					<div className="song-duration flex">
					</div>
					<Controls
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						handleNext={handleNext}
						handlePrev={handlePrev}
						total={total}
					/>
				</div>
			</div>
		</div>
	);
}
