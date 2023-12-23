import { MdDeleteForever } from "react-icons/md";

import {  FaUserEdit } from "react-icons/fa";

import { LuListTodo } from "react-icons/lu";

import { MdPending } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";

const ToDo = ({ task, index, handleUpdateStatus, handleDeleteTasks }) => {
  const { title, description, date,_id } = task;
 

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full bg-gray-800 rounded-t-md">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-center text-base  text-white">
              <tr >
                <th></th>

                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-white">
              {/* row 1 */}
              <tr key={index}  className="bg-gray-400">
                <th >{index + 1}</th>
                <td>
                  {" "}
                  <div className="flex items-center justify-center  gap-3">
                    {title}
                  </div>
                </td>

                <td className="font-medium">{description}</td>
                <td className="">
                  {" "}
                  <div className="flex justify-center items-center">{date}</div>
                </td>
                <td className="">
                  {" "}
                  <div className="flex justify-center items-center">
                  
                    <button
                      onClick={() => handleUpdateStatus(_id)}
                      className="py-2 px-4 font-bold gap-1 text-lg text-white bg-gray-800 rounded-lg flex justify-center items-center"
                    >
                      {task.status === 'todo' && <LuListTodo size={24}/>}
                      {task.status === 'ongoing' && <MdPending size={18}/> }
                      {task.status === 'completed' && <GrStatusGood size={18}/> }
                      
                    </button>
                  </div>
                </td>

                <td>
                  <div className="flex flex-col justify-center items-center gap-2">
                  
                    <button onClick={() => handleDeleteTasks(_id)}
                 
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
