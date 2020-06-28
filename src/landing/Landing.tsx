import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Header from "./components/header/Header";
import HorizontalLint from "./components/horizontalLine/SectionHeading";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div className="layout">
      <Header status="noData"></Header>
      <HorizontalLint heading="This will containt the sub-headings" />
      <hr />
    </div>
  );
};

const LandingContainer = () => {
  const dispatch = useDispatch();

  const stateToProps = useSelector(() => {});

  const dispatchToProps = {};

  return <Landing {...stateToProps} {...dispatchToProps} />;
};

export default LandingContainer;
