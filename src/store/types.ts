import {
  StoreReadyAction,
  SetEmailAction,
  SetCardID,
} from "../store/actions/actions";
import { CommentsLoading } from "../store/actions/CommentLoadingAction";
import {
  TagStateUpdateAction,
  AddTagToStore,
  TagLoadingAction,
} from "../store/actions/UiActions";

export const MODAL = "MODAL";
export const FIRE_TO_STORE = "FIRE_TO_STORE";
export const STORE_READY = "STORE_READY";
export const UPDATE_STORE = "UPDATE_STORE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_CARD_ID = "SET_CARD_ID";
export const GET_COMMENTS_FIRESTORE = "GET_COMMENTS_FIRESTORE";
export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const EMPTY_REDUX_STORE_COMMENTS = "EMPTY_REDUX_STORE_COMMENTS";
export const CURRENT_USER = "CURRENT_USER";
export const UPDATE_STORE_FIRESTORE = "UPDATE_STORE_FIRESTORE";
export const UPDATE_PIN = "UPDATE_PIN";
export const UPDATE_TAG_FROM_FIRE = "UPDATE_TAG_FROM_FIRE";
export const ADD_TAG_TO_STORE = "ADD_TAG_TO_STORE";
export const TAGS_LOADING = "TAGS_LOADING";
//Store
export interface Store {
  [id: string]: Task;
}

//Task
export interface Task {
  [id: string]: {
    caption: string | null;
    status: string | null;
    tag: string | null;
    timestamp: string | null;
  };
}

export interface Tag {
  [tag: string]: {
    backgroundColor: string;
    color: string;
  };
}

export interface UIState {
  show: boolean;
  fireDataLoaded: boolean;
  cardID: string;
  commentsLoading: boolean;
  tags: Tag;
  tagsLoading: boolean;
}
export interface CurrentUserState {
  email: string;
}

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

export type UiAction =
  | ModalAction
  | StoreReadyAction
  | SetEmailAction
  | SetCardID
  | CommentsLoading
  | TagStateUpdateAction
  | AddTagToStore
  | TagLoadingAction;
