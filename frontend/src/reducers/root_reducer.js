import { combineReducers } from "redux";
import session_errors_reducer from "./session_errors_reducer";
import SessionReducer from "./session_reducer";
import TweetReducer from "./tweets_reducer";
import errorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
  tweets: TweetReducer,
  session: SessionReducer,
  errors: errorsReducer

});

export default RootReducer;
