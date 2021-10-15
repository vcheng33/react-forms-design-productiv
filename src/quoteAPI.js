import axios from "axios";

const API_BASE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

async function getInspirationalQuote() {
    const response = await axios.get(API_BASE_URL);
    return response.data.quote;
}

export {getInspirationalQuote};