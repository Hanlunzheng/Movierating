import {
  Segment,
  Header,
  Loader,
  Grid,
  Image,
  List,
  Label,
  Accordion,
  Card,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTvShowDetails } from "./Query";

const TvShows = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid TV show</div>;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  const seasonsPanels = data.seasons.map((season: any) => ({
    key: season.id,
    title: `Season ${season.season_number}`,
    content: {
      content: (
        <Card
          style={{ height: "70px" }}
          meta={season.air_date}
          description={`${season.episode_count} episodes`}
        />
      ),
    },
  }));

  console.log("Movie Data:", data); // Log the movie data

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data?.name ?? "Unknown Title"}</Header>
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
                {data.poster_path ? (
                  <Image
                    size="medium"
                    centered
                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  />
                ) : (
                  <p>No poster available</p>
                  // or any alternative UI element or message
                )}
              </div>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Header>Created by:</List.Header>
                  <List.Description>
                    {/* {data.created_by
                      .map((creator: any) => creator.name)
                      .join(",")} */}
                  </List.Description>
                </List.Item>
                <List.Item>
                  <List.Header>Budget:</List.Header>${data.budget}
                </List.Item>
                <List.Item>
                  <List.Header>Genres</List.Header>
                  {data.genres.map((genre: any) => (
                    <Label key={genre.id}> {genre.name}</Label>
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
                <List.Item>
                  <List.Header>NetWork:</List.Header>
                  {data.networks.map((network: any) => (
                    <Image
                      key={network.id}
                      src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                      size="small"
                      style={{ marginRight: 10 }}
                    />
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Season:</List.Header>
                  <List.Description>
                    <Accordion
                      style={{ height: "200px", overflowY: "scroll" }}
                      defaultActiveIndex={0}
                      panels={seasonsPanels}
                    />
                  </List.Description>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default TvShows;
