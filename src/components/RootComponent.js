import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const GET_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
`;

const RootComponent = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error {error.message}</p>;
  }

  const {
    // characters: { results: characters }
    characters: { results: characters }
  } = data;
  return (
    <section>
      <Title>Rick and Morty Characters </Title>
      <Grid>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    </section>
  );
};

export default RootComponent;
