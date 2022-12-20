import styled from "styled-components";
import borderImage from "public/images/card-border.png";

type CharacterCardProps = {
  url: string;
  hp: number;
  energy: number;
  buffs: string[]; // TODO: Change to Buff[]
  activated?: boolean;
};

const CharacterImage = styled.img`
  object-fit: cover;
  width: 20%;
  border: 2px solid black;
  border-radius: 16px;
  /* Disable Dragging */
  -webkit-user-drag: none;
`;

const CharacterContainer = styled.div`
  display: inline;
  padding: 16px;
  position: relative;
`;

const CharacterHP = styled.div`
  position: absolute;
  top: 0;
  left: 15%;
  display: block;
  font-size: 1rem;
  color: red;
  background-color: white;
  padding: 2px;
`;

export default function CharacterCard(props: CharacterCardProps) {
  return (
    <CharacterContainer>
      <CharacterImage
        src={props.url}
        style={{
          borderColor: props.activated ? "red" : "black",
        }}
      />
      <CharacterHP>
        HP: {props.hp}, Energy: {props.energy}
      </CharacterHP>
    </CharacterContainer>
  );
}
