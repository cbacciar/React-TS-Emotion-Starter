import * as React from "react";
import {
  BasicButton,
  RoundButton,
  Container,
  DarkContainer
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Container>
          <div className="d-flex flex-row justify-content-center">
            <BasicButton color="primary">Unstyled BasicButton</BasicButton>
          </div>
        </Container>
        <DarkContainer fluid>
          <div className="d-flex flex-row justify-content-center">
            <RoundButton color="primary">Styled RoundButton</RoundButton>
          </div>
        </DarkContainer>
      </div>
    </React.Fragment>
  );
};

export default App;
