import React from "react";
import styled from "styled-components";

const Card = styled.article`
  padding: 1em;
  background: papayawhip;
  text-align: center;
`;

const CharacerCard = ({ character }) => {
  return (
    <Card>
      <img src={character.image} alt="name" width="150" height="auto" />
      <p>{character.name}</p>
    </Card>
  );
};

export default CharacerCard;
