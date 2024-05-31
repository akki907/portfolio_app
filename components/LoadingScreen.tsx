
import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

type LoadingScreenProps = {
    setLoading?: any;
};

const LoadingScreen = ({ setLoading }: LoadingScreenProps) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="loading-screen">
            <div className="centered-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/laptop.json"
                    style={{
                        width: "80%",
                        height: "80%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
            </div>
            <div className="bottom-right-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/loadcode.json"
                    style={{
                        width: "80px",
                        height: "80px",
                    }}
                />
            </div>
        </div>
    );
}

export default LoadingScreen;
