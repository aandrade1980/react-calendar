import React from "react";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Calendar from "./components/Calendar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  );
}

export default App;
