
import React, { useEffect, Dispatch, SetStateAction } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

type LoadingScreenProps = {
    setLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingScreen = ({ setLoading }: LoadingScreenProps) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="flex justify-center h-screen flex-col gap-2 items-center m-auto  cursor-progress">
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

            <Player
                autoplay
                loop
                src="/lottie/loader.json"
                style={{
                    width: "180px",
                    height: "180px",
                }}
            />
        </div>
    );
}

export default LoadingScreen;
