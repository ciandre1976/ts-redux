import { ActionType } from "../action-types";

interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}
interface SearchRepoActionSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoActionError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = SearchRepoAction |
  SearchRepoActionSuccess |
  SearchRepoActionError

