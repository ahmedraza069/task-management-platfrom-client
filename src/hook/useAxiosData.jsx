
import { useQuery } from "@tanstack/react-query";

import useAxiosUsers from "./useAxiosUsers";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAxiosTasks = () => {
    const {user} = useContext(AuthContext)
    const axiosUsers = useAxiosUsers()
    const {refetch, data: tasks = []} = useQuery({
         queryKey: ['tasks'],
         queryFn: async () => {
             const res = await axiosUsers.get(`/tasks/${user?.email}`)
             return res.data;
         }
    })
    return [tasks, refetch]
};

export default useAxiosTasks;