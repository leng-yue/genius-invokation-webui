import templateTable from "public/images/tables/template.jpeg";
import liyueTable from "public/images/tables/liyue.png";
import mondstadtTable from "public/images/tables/mondstadt.png";
import inazumaTable from "public/images/tables/inazuma.png";
import defaultTable from "public/images/tables/default.png";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import { useState } from "react";

type GameProps = {
  backgroundImage?: "template" | "liyue" | "mondstadt" | "inazuma" | "default";
};

const ALL_TABLES = {
  template: templateTable,
  liyue: liyueTable,
  mondstadt: mondstadtTable,
  inazuma: inazumaTable,
  default: defaultTable,
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 40% 20% 10%;
  grid-template-rows: 12% 38% 38% 12%;
`;

const GridItem = styled.div`
  background-color: rgba(255, 0, 0, 0);
  border: 1px solid rgba(255, 0, 0, 0.8);
  padding: 5px;
  font-size: 30px;
  text-align: center;
`;

const GameTable = styled(GridContainer)`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
`;

export default function Game({ backgroundImage }: GameProps) {
  if (!backgroundImage) {
    backgroundImage = "default";
  }

  if (!(backgroundImage in ALL_TABLES)) {
    backgroundImage = "default";
  }

  const [backgroundImageState, setBackgroundImageState] = useState(
    ALL_TABLES[backgroundImage]
  );

  const onChangeBackgroundImage = () => {
    if (backgroundImageState === ALL_TABLES["template"]) {
      setBackgroundImageState(ALL_TABLES["default"]);
    } else {
      setBackgroundImageState(ALL_TABLES["template"]);
    }
  };

  return (
    <GameTable
      style={{
        backgroundImage: `url(${backgroundImageState.src})`,
        // Scaling if not template, centered
        backgroundSize:
          backgroundImageState === ALL_TABLES["template"]
            ? "contain"
            : "150% 150%",
      }}
    >
      <GridItem>
        <button onClick={onChangeBackgroundImage}>Change</button>
      </GridItem>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem>
        <CharacterCard
          url="https://uploadstatic.mihoyo.com/ys-obc/2022/12/05/12109492/95a407a883c8b28185415afb259b3375_434236655863360491.png"
          hp={10}
          energy={3}
          buffs={["test", "test2"]}
        />
        <CharacterCard
          url="https://uploadstatic.mihoyo.com/ys-obc/2022/12/05/12109492/95a407a883c8b28185415afb259b3375_434236655863360491.png"
          hp={10}
          energy={3}
          buffs={["test", "test2"]}
          activated
        />
      </GridItem>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </GameTable>
  );
}
