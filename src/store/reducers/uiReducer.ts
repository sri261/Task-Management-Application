import {
  UIState,
  MODAL,
  STORE_READY,
  SET_EMAIL,
  SET_CARD_ID,
  COMMENTS_LOADING,
  UPDATE_TAG_FROM_FIRE,
  ADD_TAG_TO_STORE,
  TAGS_LOADING,
} from "../types";
import { UiAction } from "../types";
const initialState: UIState = {
  show: false,
  fireDataLoaded: false,
  cardID: "",
  commentsLoading: true,
  tags: {},
  tagsLoading: true,
};

export const uiReducer = (state: UIState = initialState, action: UiAction) => {
  switch (action.type) {
    case MODAL:
      return { ...state, show: action.payload };
    case STORE_READY:
      return { ...state, fireDataLoaded: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_CARD_ID:
      return { ...state, cardID: action.payload };
    case COMMENTS_LOADING:
      return { ...state, commentsLoading: action.payload };
    case UPDATE_TAG_FROM_FIRE:
      return { ...state, tags: action.payload };
    case ADD_TAG_TO_STORE:
      const temp = Object.assign(state.tags, action.payload);
      return { ...state, tags: temp };
    case TAGS_LOADING:
      return { ...state, tagsLoading: action.payload };
    default:
      return state;
  }
};
