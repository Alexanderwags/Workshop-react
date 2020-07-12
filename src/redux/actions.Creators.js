import Axios from "axios";
import {
  GET_ALL_POST,
  GET_ALL_SPECIALITES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_POST,
  GET_COURSES,
  GET_SPECIALITES,
  GET_TEACHERS,
  GET_FRAGMENT,
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL;
/* solicitud de toda la data  */
export const getAllPost = () => (dispatch) => {
  Axios.get(`${API_URL}/post`).then((resp) => {
    return dispatch({
      type: GET_ALL_POST,
      posts: resp.data,
    });
  });
};
export const getAllSpecialities = () => (dispatch) => {
  Axios.get(`${API_URL}/especialidades`).then((resp) => {
    return dispatch({
      type: GET_ALL_SPECIALITES,
      specialities: resp.data,
    });
  });
};
export const getAllCourses = () => (dispatch) => {
  Axios.get(`${API_URL}/cursos`).then((resp) => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: resp.data,
    });
  });
};
export const getAllTeachers = () => (dispatch) => {
  Axios.get(`${API_URL}/profesores`).then((resp) => {
    return dispatch({
      type: GET_ALL_TEACHERS,
      teachers: resp.data,
    });
  });
};

/**solicitud de una data de en espesifico */

export const getPost = (id) => (dispatch) => {
  Axios.get(`${API_URL}/post/${id}`).then((resp) => {
    return dispatch({
      type: GET_POST,
      post: resp.data,
    });
  });
};

export const getCourse = (id) => (dispatch) => {
  Axios.get(`${API_URL}/cursos/${id}`).then((resp) => {
    return dispatch({
      type: GET_COURSES,
      course: resp.data,
    });
  });
};

export const getSpeciality = (id) => (dispatch) => {
  Axios.get(`${API_URL}/especialidades/${id}`).then((resp) => {
    return dispatch({
      type: GET_SPECIALITES,
      speciality: resp.data,
    });
  });
};

export const getFragment = (id) => (dispatch) => {
  Axios.get(`${API_URL}/clases/${id}`).then((resp) => {
    return dispatch({
      type: GET_FRAGMENT,
      fragment: resp.data,
    });
  });
};
