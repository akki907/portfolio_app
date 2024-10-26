import { useEffect, useState } from 'react';

import styled from 'styled-components';

const Preloader = ({ setLoading }: any) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    //@ts-ignore
    const count = setInterval(() => {
      //@ts-ignore
      setCounter((counter) =>
        counter < 100 ? counter + 1 : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  async function reveal() {
    await setLoading(false);
  }

  return (
    <AppContainer>
      <div className='loader'>
        <div data-glitch='Loading...' className='glitch'>
          Loading...
        </div>
      </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  cursor: progress;
  display: flex;
  align-items: center;
  justify-content: center;
  .glitch {
    position: relative;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    letter-spacing: 5px;
    z-index: 1;
    animation: shift 1s ease-in-out infinite alternate;
  }

  .glitch:before,
  .glitch:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .glitch:before {
    animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #8b00ff;
    z-index: -1;
  }

  .glitch:after {
    animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    color: #00e571;
    z-index: -2;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-3px, 3px);
    }

    40% {
      transform: translate(-3px, -3px);
    }

    60% {
      transform: translate(3px, 3px);
    }

    80% {
      transform: translate(3px, -3px);
    }

    to {
      transform: translate(0);
    }
  }

  @keyframes shift {
    0%,
    40%,
    44%,
    58%,
    61%,
    65%,
    69%,
    73%,
    100% {
      transform: skewX(0deg);
    }

    41% {
      transform: skewX(10deg);
    }

    42% {
      transform: skewX(-10deg);
    }

    59% {
      transform: skewX(40deg) skewY(10deg);
    }

    60% {
      transform: skewX(-40deg) skewY(-10deg);
    }

    63% {
      transform: skewX(10deg) skewY(-5deg);
    }

    70% {
      transform: skewX(-50deg) skewY(-20deg);
    }

    71% {
      transform: skewX(10deg) skewY(-10deg);
    }
  }
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;

export default Preloader;
