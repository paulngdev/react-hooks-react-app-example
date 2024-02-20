import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <p className="App-intro">
        {"Paul".toUpperCase()}
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
