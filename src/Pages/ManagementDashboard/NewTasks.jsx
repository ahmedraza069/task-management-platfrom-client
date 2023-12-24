import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import moment from "moment";
import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";

import useAxiosUsers from "../../hook/useAxiosUsers";
import Swal from "sweetalert2";

import useAxiosTasks from "../../hook/useAxiosData";

const NewTasks = () => {
  const { user } = useContext(AuthContext) || {};
  const axiosUsers = useAxiosUsers();
  const [tasks, refetch] = useAxiosTasks();
  const { register, handleSubmit } = useForm();

  const todoData = tasks?.filter((task) => task.status === "todo");

  const onSubmit = async (data, e) => {
    const tasks = {
      email: user?.email,
      name: user?.displayName,
      title: data.title,
      priority: data.priority,
      startDate: data.startDate,
      endDate: data.deadlinesDate,
      description: data.description,
      status: "todo",
    };

    axiosUsers
      .post("/tasks", tasks)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Added to Todo Successfully!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });

    e.target.reset();
  };

  const handleDeleteTasks = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosUsers.delete(`/tasks/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdateStatus = (id) => {
    const status = "ongoing";
    axiosUsers.patch(`/tasks/${id}`, { status }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Moved to Ongoing!",
          text: "The task has been successfully marked as ongoing",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };


  return (
    <div>
      <div>
        <h3 className="font-bold text-4xl text-center bg-gray-600 py-7">
          Add Your To Do Task
        </h3>
        <div className=" bg-slate-500 flex flex-col items-center justify-center py-4 ">
          <div className="flex">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-4">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Task Title:</span>
                  </div>
                  <input
                    {...register("title")}
                    type="text"
                    required
                    placeholder="Type here"
                    className="input input-bordered text-black w-full max-w-xs"
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Priority:</span>
                  </div>
                  <select
                    {...register("priority")}
                    required
                    className=" select select-bordered text-black w-full max-w-xs"
                  >
                    <option value="">Select a poirity</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </label>
              </div>
              <div className="flex gap-4">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Start Date:</span>
                  </div>
                  <input
                    {...register("startDate")}
                    defaultValue={moment().format("YYYY-MM-DD")}
                    type="date"
                    required
                    className="input input-bordered text-black w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Deadlines: </span>
                  </div>
                  <input
                    {...register("deadlinesDate")}
                    type="date"
                    required
                    placeholder="Type here"
                    className="input input-bordered text-black w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-white">
                      Task Description:
                    </span>
                  </div>
                  <input
                    {...register("description")}
                    type="text"
                    required
                    placeholder="Type here"
                    className="input input-bordered text-black w-full"
                  />
                </label>
              </div>

              <input
                className="flex justify-center items-center mt-3 w-full bg-gray-900 text-white py-3 rounded-md"
                type="submit"
              />
            </form>
          </div>

          <div className="pt-6 w-full px-4 flex flex-col justify-center gap-4">
            {todoData.map((task, index) => (
              <ToDo
                key={task._id}
                task={task}
                index={index}
                handleUpdateStatus={handleUpdateStatus}
                handleDeleteTasks={handleDeleteTasks}
                
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTasks;
