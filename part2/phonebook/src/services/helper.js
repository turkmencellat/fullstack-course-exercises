import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const deleteAll = (newList) => {
  return axios.delete(`${baseUrl}/${newList}`);
};

const updateAll = (id, newNum) => {
  return axios.put(`${baseUrl}/${id}`, newNum);
};
export default {
  getAll: getAll,
  create: create,
  deleteAll: deleteAll,
  updateAll: updateAll,
};
