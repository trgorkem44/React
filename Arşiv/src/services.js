import axios from "axios";

export class Services {
    apiUrl = 'http://localhost:3001/book/'
    async getAllBookList() {
        const response = await axios(this.apiUrl)
        return response.data;
    }
    async saveBook(model) {
        await axios.post(this.apiUrl, model)
    }
}