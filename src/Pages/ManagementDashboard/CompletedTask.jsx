import Swal from "sweetalert2";
import useAxiosTasks from "../../hook/useAxiosData";
import useAxiosUsers from "../../hook/useAxiosUsers";
import ToDo from "./ToDo";


const CompletedTask = () => {
    const [tasks, refetch] = useAxiosTasks();
  
    const completedData = tasks?.filter((task) => task?.status === 'completed');
    

  const axiosUsers = useAxiosUsers();
 
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
                refetch()
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
        const status = 'completed';
        axiosUsers.patch(`/tasks/${id}`, {status}).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Now You Are Admin",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      };
    return (
        <div>
             <div>
           <div className="pt-6 w-full px-4 flex flex-col justify-center gap-4">
            {completedData?.map((task, index) => (
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
    );
};

export default CompletedTask;