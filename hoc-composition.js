// hoc-composition.js
// Use and add for component HOC Composition of HOC according to requirement 33.

// Example HOC Composition
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

const withExclamation = WrappedComponent => {
  return props => {
    const modifiedProps = {
      ...props,
      text: props.text + '!',
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

const MyComponent = props => {
  return <div>{props.text}</div>;
};

const EnhancedComponent = withExclamation(withUpperCase(MyComponent));

export default EnhancedComponent;
