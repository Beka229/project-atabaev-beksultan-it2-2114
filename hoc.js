// hoc.js
// Implement and use React High-Order-Components (HOC) according to requirement 32.

// Example Higher Order Component (HOC)
import React from 'react';

const withUpperCase = WrappedComponent => {
  return props => {
    const modifiedProps = {
      ...props,
      text: props.text.toUpperCase(),
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

const MyComponent = props => {
  return <div>{props.text}</div>;
};

const MyComponentWithUpperCase = withUpperCase(MyComponent);

export default MyComponentWithUpperCase;
