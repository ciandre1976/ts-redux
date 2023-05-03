import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from 'redux';

export const searchRep = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPO })
    try {
      const data = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term,
        }
      })
      const names: string[] | null = data.objects.map((res) => {
        return res.package.name;
      })
      dispatch({
        type: ActionType.SEARCH_REPO,
        payload: names
      })
    }
    catch (err) {
      dispatch({ type: ActionType.SEARCH_REPO_ERROR, payload: err.message })
    }
  }
}