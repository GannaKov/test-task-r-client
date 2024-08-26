import axios from "axios";

// const isDevelopment = import.meta.env.MODE === "development";
// const BASEURL = isDevelopment
//   ? "http://localhost:3000/api/"
//   : "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const BASEURL = "http://localhost:3000/api";

const instance = axios.create({ baseURL: BASEURL });

// get  contact by Id
export const getCurrentUser = async () => {
  try {
    let urlBackend = `/users/current-user`;

    const { data } = await instance.get(urlBackend);
    //console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};

// get all contacts with chat
export const getContactsWithChat = async () => {
  try {
    let urlBackend = "/users/withchat";

    const { data } = await instance.get(urlBackend);
    //console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};

// get  contact by Id
export const getContactById = async (userId) => {
  try {
    let urlBackend = `/users/${userId}`;

    const { data } = await instance.get(urlBackend);
    //console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};

// get  chat by Id
export const getChatById = async (chatId) => {
  try {
    let urlBackend = `/chats/${chatId}`;

    const { data } = await instance.get(urlBackend);
    //console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};
// get  message by Id
export const getMessageById = async (messageId) => {
  try {
    let urlBackend = `/message/${messageId}`;

    const { data } = await instance.get(urlBackend);
    //console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};

// create message
export const createMessage = async (chatId, message) => {
  try {
    let urlBackend = `/message/${chatId}`;
    //{ senderId, text }
    const { data } = await instance.post(urlBackend, message);
    console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};

export const getRandomQuotes = async () => {
  try {
    let urlBackend = `https://api.quotable.io/quotes/random?limit=1&maxLength=100`;
    const { data } = await instance.get(urlBackend);
    console.log("data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error.response ? error.response.data : new Error("Unknown error");
  }
};
