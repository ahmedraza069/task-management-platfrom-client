import axios from "axios";

const axiosUsers = axios.create({
    baseURL: 'https://task-management-platfrom-server.vercel.app/'
})
const useAxiosUsers = () => {
    return axiosUsers;
};

export default useAxiosUsers;