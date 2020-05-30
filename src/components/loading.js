import React from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin:  0 auto;
  border-color: blue;
`;
 
class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={100}
          color={"#05faf3"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoadingComponent;