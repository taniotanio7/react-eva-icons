import React, { Component } from "react";
import * as eva from "eva-icons";
import styled from "styled-components";

import Cards from "./Cards/Cards";
import Description from "./Description/Description";
import Header from "./Header/Header";
import LiveCode from "./LiveCode/LiveCode";
import Options from "./Options/Options";

const ANIMATION_TYPES = {
  ZOOM: "zoom",
  PULSE: "pulse",
  SHAKE: "shake",
  FLIP: "flip"
};

const Wrapper = styled.div`
  padding: 2em 4em;
  background-color: #f4f4f4;

  max-width: 100vw;
`;

const Body = styled.div`
  max-width: 100%;
  /* background-color: lightgoldenrodyellow; */
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: [],
      size: "medium"
    };
  }

  componentWillMount() {
    const icons = Object.keys(eva.icons);
    this.setState({ icons });
  }

  handleSize = (size) => this.setState({size});

  render() {
    const { icons, size } = this.state;

    const config = {
      fill: "#36f",
      size,
      animation: {
        type: ANIMATION_TYPES.PULSE,
        hover: true,
        infinite: false
      }
    };

    return (
      <Wrapper>
        <Header />

        <Body>
          <Description />

          {/* <Options 
            handleSize={this.handleSize}
            size={size}
          /> */}

          <Cards icons={icons} config={config} />
        </Body>
      </Wrapper>
    );
  }
}

export default App;
