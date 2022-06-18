import * as axios from "axios";

export const makeRequestAuth = async (data) => {

    return axios("http://localhost:8000/graphql", {
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
export const makeRequest = async (data) => {

  return axios("http://localhost:8000/graphql", {
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};


