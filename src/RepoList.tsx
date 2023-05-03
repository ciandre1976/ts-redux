import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionCreators } from "./state";
import { useSelector } from "react-redux";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.repo);
  console.log(state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ActionCreators.searchRep(term));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          type="text"
          placeholder="search package"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RepoList;
