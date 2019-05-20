import axios from 'axios';

export class RestUtil {

    static health() {
        axios.get("/health")
            .then((res) => {
                console.log(res);
            })
    }

    static getTaskList() {
        return axios.get("/get/tasks")
            .then((res) => {
                console.log(res)
            })
            .getValue
    }

}