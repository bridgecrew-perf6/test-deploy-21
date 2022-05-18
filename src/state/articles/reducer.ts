import types from "./types";

const singleArticleState = {
  title: {
    rendered: "",
  },
  content: {
    rendered: "",
    protected: false,
  },
  excerpt: {
    rendered: "",
    protected: false,
  },
  categories: [],
  tags: [],
  link: "",
  featured_image_url: "",
  featured_image_alt: "",
  "data type": "",
  "content type": "",
  article_id: "",
  article_modified: "",
  category_tree: [],
  countComments: 0,
};

const initialState = {
  loading: false,
  articles: [],
  allArticlesLoading: false,
  allArticlesData: [],
  allArticlesError: null,

  singleArticleLoading: false,
  singleArticleData: singleArticleState,
  singleArticleError: null,

  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLES:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };

    case types.FETCH_ALL_ARTICLES_LOADING:
      return {
        ...state,
        allArticlesLoading: true,
        allArticlesData: [],
        allArticlesError: null,
      };

    case types.FETCH_ALL_ARTICLES_DATA:
      return {
        ...state,
        allArticlesLoading: false,
        allArticlesData: action.payload,
        allArticlesError: null,
      };

    case types.FETCH_ALL_ARTICLES_ERROR:
      return {
        ...state,
        allArticlesLoading: false,
        allArticlesData: [],
        allArticlesError: action.payload,
      };

    case types.FETCH_ONE_ARTICLES_LOADING:
      return {
        ...state,
        singleArticleLoading: true,
        singleArticleData: singleArticleState,
        singleArticleError: null,
      };

    case types.FETCH_ONE_ARTICLES_DATA:
      return {
        ...state,
        singleArticleLoading: false,
        singleArticleData: action.payload,
        singleArticleError: null,
      };

    case types.FETCH_ONE_ARTICLES_ERROR:
      return {
        ...state,
        singleArticleLoading: false,
        singleArticleData: singleArticleState,
        singleArticleError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
