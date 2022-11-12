import axios from "axios";


const BASE = {
    URL: "https://api.json-generator.com/templates/ZM1r0eic3XEy",
    TOKEN:"wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
}
axios.defaults.baseURL = BASE.URL;
axios.defaults.headers.common.Authorization = `Bearer ${BASE.TOKEN}`;



async function miniApi(page: number = 1) {
  
    const { data } = await axios.get<IData[]>(`/data?page=${page}`);
return data
  }
  
  
export default  miniApi