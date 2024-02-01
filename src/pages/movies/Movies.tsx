import React from "react";
import { Segment, Header, Loader, Grid, Image, List } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesDetails } from "./Query";

const Movies = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid movie ID</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMoviesDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  console.log("Movie Data:", data); // Log the movie data

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data?.title ?? "Unknown Title"}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  size="medium"
                  centered
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Header>Is the movies for Adults:</List.Header>
                  {data.audlt ? "yes" : "false"}
                </List.Item>
                <List.Item>
                  <List.Header>Budget:</List.Header>
                  {data.budget}
                </List.Item>
                <List.Item>
                  <List.Header>Genres</List.Header>
                  {data.genres.map((genre: any) => (
                    <List.Item key={genre.id}> {genre.name}</List.Item>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>IMDB ID:</List.Header>
                  {data.imdb_id}
                </List.Item>
                <List.Item>
                  <List.Header>Popularity:</List.Header>
                  {data.popularity}
                </List.Item>
                <List.Item>
                  <List.Header>Production Company:</List.Header>
                  {data.production_companies
                    .map((company: any) => company.name)
                    .join(".")}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Movies;
