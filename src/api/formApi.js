import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-smtp-mail-server.herokuapp.com/",
});

export const formAPI = {
  sendMessage(formData) {
    return instance.post("sendMessage", formData);
  },
};
