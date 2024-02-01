import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";

import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./Mutation";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    await mutate();
    localStorage.setItem("guest_session_id", data.guest_session_id);
    navigate("/");
  }; //endpint from api we can call

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome to login in to registeing as Guest below
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button onClick={handleLogin} color="violet" size="large" fluid>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Auth;
