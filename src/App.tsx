import { Provider } from "react-redux";
import { store } from "./state";
import RepoList from "./RepoList";

function App() {
  return (
    <Provider store={store}>
      <h1>Search</h1>
      <RepoList />
    </Provider>
  );
}

export default App;
