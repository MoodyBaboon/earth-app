import React from "react";
import ReactDOM from "react-dom";
import style from "./scss/main.scss";
import MainPage from './containers/MainPage';

const App = () => {
  return (
    <div>
      <p className="header">React here!233</p>
      <MainPage />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
