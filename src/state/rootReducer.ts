import { combineReducers } from "redux";
import modalsReducer from "./modals/reducer";
import caseStudiesReducer from "./caseStudies/reducer";
import adviceAndRealStoriesReducer from "./adviceAndRealStories/reducer";
import relatedContentReducer from "./relatedContent/reducer";
import videoPlaylistReducer from "./videoPlaylist/reducer";
import ratingFormReducer from "./ratingForm/reducer";
import videosReducer from "./videos/reducer";
import forumPosts from "./forumPosts/reducer";
import newsLetter from "./newsletter/reducer";
import articles from "./articles/reducer";
import search from "./search/reducer";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  modals: modalsReducer,
  caseStudies: caseStudiesReducer,
  adviceAndRealStories: adviceAndRealStoriesReducer,
  relatedContent: relatedContentReducer,
  videoPlaylist: videoPlaylistReducer,
  ratingForm: ratingFormReducer,
  videos: videosReducer,
  forumPosts,
  newsLetter,
  articles,
  search,
});

export default rootReducer;
