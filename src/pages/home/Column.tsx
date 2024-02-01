import { DisplayType } from "./Home";
import { Grid, Card, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rateMovie } from "./Mutation";
import { useMutation } from "@tanstack/react-query";
import { ratebigTvShow } from "./Mutation";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_data: string;
  title?: string;
  name?: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const Column = (props: Props) => {
  const { data, displayType } = props;
  const [rating, setRating] = useState<number>(0);

  const { mutate: rateMovieMuatuion } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovie(id, rating),
  });

  const { mutate: rateTvShowMuatation } = useMutation({
    mutationKey: ["rateTvShow"],
    mutationFn: (id: number) => ratebigTvShow(id, rating),
  });

  const rate =
    displayType === DisplayType.Movies
      ? rateMovieMuatuion
      : rateTvShowMuatation;
  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {/* {props.displayType === DisplayType.Movies
        ? props.data[0].title
        : props.data[0].name} */}

      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${
                displayType === DisplayType.Movies ? "movie" : "tvshow"
              }/${displayData.id}`}
            >
              <Card
                style={{ height: 820 }}
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? data[0].title
                    : data[0].name
                }
                meta={`Release date: ${displayData.release_data} || Rating: ${displayData.vote_average}`}
                description={displayData.overview.slice(0, 300) + "..."}
              />
            </Link>
            <Form stylt={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    onChange={(e) => setRating(Number(e.target.value))}
                    action={{
                      color: "violet",
                      labelPostion: "right",
                      icon: "star",
                      content: "Rate",

                      onClick: () => rate(displayData.id),
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Column;
