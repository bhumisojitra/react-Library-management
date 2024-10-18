import { combineReducers } from "redux";
import libraryDataReducer from "./LibraryDataReducer";

const rootReducer = combineReducers({
    libraryData : libraryDataReducer
});

export default rootReducer;