import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = useSelector((state) => console.log(state));
  return (
    <>
      {props.tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;
