'use client';

import { useEffect, useRef, useState } from 'react';
import { BiPause, BiPlay } from 'react-icons/bi';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.15;
            
            const attemptPlay = async () => {
                try {
                    await audioRef.current?.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Autoplay bloqueado, esperando interacción.");
                    setIsPlaying(false);
                }
            };

            attemptPlay();
        }
    }, []);

    return (
        <>
            <button
                onClick={toggleMusic}
                className=" fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:scale-110"
            >
                {isPlaying ? <BiPause size={22} /> : <BiPlay size={22} />}
            </button>
            <audio
                ref={audioRef}
                autoPlay
                loop
                playsInline
            >
                <source src="/music/osg_S_067.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
}