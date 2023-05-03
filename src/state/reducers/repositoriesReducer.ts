interface RepoType {
  loading: boolean;
  error: string | null;
  data: string[]
}
interface SearchRepoAction {
  type: 'search_repo';
}
interface SearchRepoActionSuccess {
  type: 'search_repo_success';
  payload: string[];
}

interface SearchRepoActionError {
  type: 'search_repo_error';
  payload: 'string'
}

const reducer = (state: RepoType, action: SearchRepoAction |
  SearchRepoActionSuccess |
  SearchRepoActionError): RepoType => {
  switch (action.type) {
    case 'search_repo':
      return { loading: true, error: null, data: [] }
    case 'search_repo_success':
      return { loading: false, error: null, data: action.payload }
    case 'search_repo_error':
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
};


export default reducer;