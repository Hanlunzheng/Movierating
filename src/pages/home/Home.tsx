import { useState } from "react";

import { Button } from "semantic-ui-react";
import { fetchMovies, fetchTvShows } from "./Query";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

import Column from "./Column";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvShowData, isLoading: isLoadingTVShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }
  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <Button.Group>
        <Button
          onClick={() => setDisplayType(DisplayType.Movies)}
          color={displayType === DisplayType.Movies ? "blue" : undefined}
        >
          Movies
        </Button>
        <Button
          onClick={() => setDisplayType(DisplayType.TvShows)}
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
        >
          Tv Shows
        </Button>
      </Button.Group>

      {isLoadingMovies || isLoadingTVShows ? (
        <div>IS loading</div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {displayType === DisplayType.Movies ? (
            <Column data={movieData.results} displayType={DisplayType.Movies} />
          ) : (
            <Column
              data={tvShowData.results}
              displayType={DisplayType.TvShows}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
