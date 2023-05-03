import { Provider } from "react-redux";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <h1>App</h1>
    </Provider>
  );
}

export default App;
