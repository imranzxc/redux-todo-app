import React from "react";

import ToDo from './containers/todo/todo'
import Title from "./components/title/title";


const App = () => (
  <div className="container">
    <Title title='Todo app'/>
    <ToDo/>
  </div>
)

export default App;
