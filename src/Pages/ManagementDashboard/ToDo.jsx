import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import { LuListTodo } from "react-icons/lu";

import { MdPending } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";

import { useForm } from "react-hook-form";
import useAxiosUsers from "../../hook/useAxiosUsers";
import Swal from "sweetalert2";
import useAxiosTasks from "../../hook/useAxiosData";


const ToDo = ({ task, index, handleUpdateStatus, handleDeleteTasks }) => {
  const { title, description, startDate, endDate, _id, priority } = task;
  const { register, handleSubmit } = useForm();
  const axiosUsers = useAxiosUsers();
  const [ refetch] = useAxiosTasks();

  const onSubmit = async (data, e) => {
    const tasks = {
      title: data.title,
      priority: data.priority,
      startDate: data.startDate,
      endDate: data.deadlinesDate,
      description: data.description,
      status: "todo",
    };
    axiosUsers.put(`/tasks/${_id}`, tasks).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Moved to Ongoing!",
          text: "The task has been updated successfully",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });

    e.target.reset();
  };



  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full bg-gray-800 rounded-t-md">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-center text-base  text-white">
              <tr>
                <th></th>

                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-white">
              {/* row 1 */}
              <tr key={index} className="bg-gray-400">
                <th>{index + 1}</th>
                <td>
                  {" "}
                  <div className="flex items-center justify-center font-medium  gap-3">
                    {title}
                  </div>
                </td>

                <td className="text-normal max-w-xs">{description}</td>
                <td className="">
                  {" "}
                  <div className="flex flex-col justify-center items-center">
                    <p className="border-b border-gray-900 p-1 rounded-t-md">
                      <span className="font-medium">Start Date:</span> <br />{" "}
                      {startDate}
                    </p>
                    <p className="border-t border-gray-900 p-1 rounded-b-md">
                      <span className="font-medium"> Deadlines:</span> <br />{" "}
                      {endDate}
                    </p>
                  </div>
                </td>
                <td className="">
                  <p className="py-1 px-2 font-medium gap-1 text-xs text-white bg-gray-800 rounded-lg flex justify-center items-center">
                    {priority}
                  </p>
                </td>
                <td className="">
                  {" "}
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleUpdateStatus(_id)}
                      className="py-2 px-4 font-bold gap-1 text-lg text-white bg-gray-800 rounded-lg flex justify-center items-center"
                    >
                      {task.status === "todo" && <LuListTodo size={24} />}
                      {task.status === "ongoing" && <MdPending size={18} />}
                      {task.status === "completed" && (
                        <GrStatusGood size={18} />
                      )}
                    </button>
                  </div>
                </td>

                <td>
                  <div className="flex flex-col justify-center items-center gap-2">
                    
                      {" "}
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                        className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center"
                      >
                        <FaUserEdit />
                      </button>
                    <dialog
                      id="my_modal_5"
                      className="modal  modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box bg-blue">
                        <div>
                          <h3 className="font-bold text-4xl text-center bg-gray-600 py-7">
                            Update Your Tasks
                          </h3>
                          <div className=" bg-slate-500 flex flex-col items-center justify-center py-4 ">
                            <div className="flex">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex gap-4">
                                  <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                      <span className="label-text text-white">
                                        Task Title:
                                      </span>
                                    </div>
                                    <input
                                      {...register("title")}
                                      defaultValue={title}
                                      type="text"
                                      required
                                      placeholder="Type here"
                                      className="input input-bordered text-black w-full max-w-xs"
                                    />
                                  </label>

                                  <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                      <span className="label-text text-white">
                                        Priority:
                                      </span>
                                    </div>
                                    <select
                                      {...register("priority")}
                                      required
                                      defaultValue={priority}
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
                                      <span className="label-text text-white">
                                        Start Date:
                                      </span>
                                    </div>
                                    <input
                                      {...register("startDate")}
                                      value={startDate}
                                      type="date"
                                      required
                                      className="input input-bordered text-black w-full max-w-xs"
                                    />
                                  </label>
                                  <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                      <span className="label-text text-white">
                                        Deadlines:{" "}
                                      </span>
                                    </div>
                                    <input
                                      {...register("deadlinesDate")}
                                      type="date"
                                      required
                                      defaultValue={endDate}
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
                                      defaultValue={description}
                                      placeholder="Type here"
                                      className="input input-bordered text-black w-full"
                                    />
                                  </label>
                                </div>

                                <input
                                
                                value={'Update Task'}
                                  className="flex justify-center items-center font-bold text-lg mt-3 w-full bg-gray-900 text-white  py-3 rounded-md"
                                  type="submit"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-blue text-white text-semibold">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    <button
                     onClick={() => handleDeleteTasks(_id)}
                      className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
