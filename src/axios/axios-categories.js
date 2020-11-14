import axios from 'axios';

const instance = axios.create({
    baseURL: "https://good-intents-9aec3.firebaseio.com/"
});

export default instance;