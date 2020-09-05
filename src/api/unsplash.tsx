import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID wgaoopk_J4jarXYRbFFtNmp0WY7cDZ41-JEQsahW_9E"
    }
})