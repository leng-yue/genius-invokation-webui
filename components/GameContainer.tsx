import { useEffect, useState } from "react";
import styled from "styled-components";
import Game from "./Game";


// Calculate the height of the game container
// Max width is 1280px, and max height is 720px
const GameContainerDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* w:h is 16:9 */
  height: min(calc(100vh - 64px), calc((100vw - 64px) * 9 / 16));
  width: min(calc((100vh - 64px) * 16 / 9), calc(100vw - 64px));
`;

// Require user to rotate the screen to landscape mode
  const AlertText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function GameContainer() {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight * 0.9);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return (
      <AlertText>
        Please rotate your screen to landscape mode <br />
        请将屏幕旋转到横屏模式
      </AlertText>
    );
  }

  return (
    <GameContainerDiv>
      <Game />
    </GameContainerDiv>
  );
}
