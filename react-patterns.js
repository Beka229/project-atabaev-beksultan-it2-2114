// react-patterns.js
// Use React Patterns, Pass Functions as data sources. Use Render-function and Implement children & Clone elements according to requirement 31.

// Example React patterns
import React from 'react';

const ParentComponent = ({ children }) => {
  const data = 'Hello from parent';

  return <div>{children(data)}</div>;
};

const ChildComponent = data => {
  return <div>{data}</div>;
};

const App = () => {
  return <ParentComponent>{data => <ChildComponent {...data} />}</ParentComponent>;
};

export default App;
