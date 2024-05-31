
import React, { useEffect } from "react";
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
        <div className="flex justify-center h-screen flex-col gap-2 items-center m-auto  cursor-progress">
            <div className="">
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
            <div className="">
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
        </div>
    );
}

export default LoadingScreen;
