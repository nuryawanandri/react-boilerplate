import React from 'react';

const About = props => (
  <div className="text-title">
    This is About Page....
    <div>{props.id ? `query value : ${props.id}` : 'There is no query'}</div>
  </div>
);

export default About;
