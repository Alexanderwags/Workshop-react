import {
  GET_ALL_POST,
  GET_POST,
  GET_ALL_SPECIALITES,
  GET_SPECIALITES,
  GET_ALL_COURSES,
  GET_COURSES,
  GET_ALL_TEACHERS,
  GET_FRAGMENT,
} from "./actions";

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POST) {
    return {
      ...state,
      posts: action.posts,
    };
  }
  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post,
    };
  }
  return state;
};
export const specialityReducer = (state = {}, action) => {
  if (action.type === GET_ALL_SPECIALITES) {
    return {
      ...state,
      specialities: action.specialities,
    };
  }
  if (action.type === GET_SPECIALITES) {
    return {
      ...state,
      speciality: action.speciality,
    };
  }
  return state;
};
export const courseReducer = (state = {}, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses,
    };
  }
  if (action.type === GET_COURSES) {
    return {
      ...state,
      course: action.course,
    };
  }
  return state;
};
export const teacherReducer = (state = {}, action) => {
  if (action.type === GET_ALL_TEACHERS) {
    return action.teachers;
  }

  return state;
};
export const fragmentReducer = (state = {}, action) => {
  if (action.type === GET_FRAGMENT) {
    return {
      ...state,
      fragment: action.fragment,
    };
  }

  return state;
};
