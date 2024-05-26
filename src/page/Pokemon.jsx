import * as React from "react";
import { useGetPostQuery } from "../store/reducer/apiSlice";
function Pokemon() {
  const { data, error, isLoading } = useGetPostQuery("bulbasaur");
  return (
    <>
      {error ? (
        <p>there was an error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </>
  );
}

export default Pokemon;
