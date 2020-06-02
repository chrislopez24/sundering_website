import React from "react";
import { render, cleanup } from "@testing-library/react";
import ComingSoon from "./comingsoon";

describe("Component Teaser Tests", () => {
  afterEach(cleanup);
  test("Test if the class .App-header is presented and rendered", () => {
    const { container } = render(<ComingSoon />);
    const linkElement = container.querySelector(".App-header");
    expect(linkElement).toBeInTheDocument();
  });
});
