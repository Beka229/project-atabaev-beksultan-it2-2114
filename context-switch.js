// context-switch.js
// Use and manage React Context API. Make Dynamic Context switch according to requirement 34.

// Example Context API usage
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const ParentComponent = ({ children }) => {
  const [value, setValue] = useState('Hello from parent');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue('Updated value')}>Update Value</button>
    </div>
  );
};

const App = () => {
  return (
    <ParentComponent>
      <ChildComponent />
    </ParentComponent>
  );
};

export default App;
