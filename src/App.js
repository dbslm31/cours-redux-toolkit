import { Provider } from "react-redux";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {
  return (
    //On  englobe l'app dans le provider
    <Provider>
      <div className="container">
        {/*Plus besoin de props task grâce à Redux
    On appelle Redux pour récupérer la liste des tâches
    Grâce au hook useSelector dans les composants enfants -> permet de recup les infos dans Redux */}
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
