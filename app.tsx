
// JS code
// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;

import React from 'react';

//interface for the component's props
interface GreetingProps {
  name: string; // The `name` prop should be a string
}

// Annotating the component with the defined prop types
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // Rendering the greeting with the name prop
};

export default Greeting;


