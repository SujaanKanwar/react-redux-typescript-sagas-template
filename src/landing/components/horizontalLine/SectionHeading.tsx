import React from 'react';
import "./SectionHeading.scss";

interface HorizontalLintProps{
  heading: string
}

const HorizontalLint: React.FC<HorizontalLintProps> = ({ heading }) => {
  
  return (
    <section className="hor-line-heading">{heading}</section>
  );
}
export default HorizontalLint;