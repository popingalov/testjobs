import axios from "axios";
const {REACT_APP_TOKEN} = process.env

const BASE = {
    URL: "https://api.json-generator.com/templates/ZM1r0eic3XEy",
    TOKEN:REACT_APP_TOKEN
}
axios.defaults.baseURL = BASE.URL;
axios.defaults.headers.common.Authorization = `Bearer ${BASE.TOKEN}`;



async function miniApi(page: number = 1) {
     const { data } = await axios.get<IData[]>(`/data?page=${page}`);
    return data
  }
  

export default  miniApi