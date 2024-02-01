import { useState } from "react";
import {
  Container,
  Menu,
  Segment,
  Header,
  //ColumnDisplay,
} from "semantic-ui-react";
import { DisplayType } from "../home/Home";
import { Navigate } from "react-router-dom";

const Rate = () => {
  const [activeMod, setActiveMod] = useState<DisplayType>(DisplayType.Movies);

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }
  return (
    <Container style={{ marginTop: 50 }}>
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeMod === DisplayType.Movies}
          onClick={() => setActiveMod(DisplayType.Movies)}
        />
        <Menu.Item
          name="Tv Shows"
          active={activeMod === DisplayType.TvShows}
          onClick={() => setActiveMod(DisplayType.TvShows)}
        />
      </Menu>
      <Segment>
        {activeMod === DisplayType.Movies ? (
          <div>
            <Header as={"h2"}>Rated Movies</Header>
            {/* <ColumnDisplay
              data={ratedMovies.result}
              displayType={DisplayType.Movies}
            /> */}
          </div>
        ) : (
          <Header as={"h2"}>Rated TV shows</Header>
        )}
      </Segment>
    </Container>
  );
};

export default Rate;
