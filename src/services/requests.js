import axios from "axios";

// const isDevelopment = import.meta.env.MODE === "development";
// const BASEURL = isDevelopment
//   ? "http://localhost:3000/api/"
//   : "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const BASEURL = "http://localhost:3000/api/";

const instance = axios.create({ baseURL: BASEURL });

// get all contacts
export const getContacts = async () => {
  try {
    let urlBackend =
      "/contacts?record_type=person&sort=created:desc&fields=first%20name,last%20name,email";

    const { data } = await instance.get(urlBackend);

    return data.resources;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};
