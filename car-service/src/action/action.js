import axios from "axios";
const URL_API = 'http://localhost:3001/api/';
export const getStudent = id => {
  return dispatch => {
    axios.get(`${URL_API}students/${id}`).then(() => {
      dispatch({
        type: "GET_STUDENT",
        playload: id
      });
    });
  };
};
export const getStudentLists = () => {
  return dispatch => {
    axios.get(`${URL_API}students/`).then(res => {
      dispatch({
        type: "GET_STUDENT_LISTS",
        playload: res.data
      });
    });
  };
};
export const addStudent = data => {
  return dispatch => {
    axios.post(`${URL_API}students/`, data).then(res => {
      dispatch({
        type: "ADD_STUDENT",
        playload: res.data
      });
    });
  };
};
export const editStudent = data => {
  return dispatch => {
    axios.put(`${URL_API}students/${data.id}`, data).then(res => {
      dispatch({
        type: "EDIT_STUDENT",
        playload: res.data
      });
    });
  };
};
export const delStudent = id => {
  return dispatch => {
    axios.delete(`${URL_API}students/${id}`).then(res => {
      dispatch({
        type: "DEL_STUDENT",
        playload: res.data.id
      });
    });
  };
};
