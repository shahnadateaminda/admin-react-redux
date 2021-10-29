import {
  FETCH_CARDS_FAIL,
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  GET_USER_LIST_BEGINS,
  GET_USER_LIST_FAILS,
  GET_USER_LIST_SUCCESS,
} from "../constants";


export const getUserListBegins = () => {
  return {
    type: GET_USER_LIST_BEGINS,
  }
};

export const getUserListSuccess = (payLoad) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payLoad
  }
};

export const getUserListFails = (payLoad) => {
  return {
    type: GET_USER_LIST_FAILS,
    payLoad
  }
};

export const fetchCardStart = () => {
  return {
    type: FETCH_CARDS_START,
  };
};


export const fetchCardSuccess = (data) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    data
  };
};


export const fetchCardFail = (error) => {
  return {
    type: FETCH_CARDS_FAIL,
    error: error,
  };
};