import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css';
import Dropdown from "../components/Dropdown";
import CTAButton from "../components/CTAButton";
import { useAtom } from "jotai";
import { filterCategoryAtom, tasksAtom } from "../data/state";
import TaskItem from "../components/TaskItem";

const HomePage: React.FC = () => {
  const [tasks] = useAtom(tasksAtom); 
  const [filterCategory, setFilterCategory] = useAtom(filterCategoryAtom); 
  const navigate = useNavigate();

  const filteredTasks =
    filterCategory.length > 0
      ? tasks.filter(task => filterCategory.includes(task.category)) 
      : tasks; 

  const inProgressCount = filteredTasks.reduce((acc, t) => (t.completed ? acc : acc + 1), 0);
  const completedCount = filteredTasks.length - inProgressCount;

  return (
    <div>
    <div className="tasks">
      <div className="title-filter">
        <div className="progress">
          <div className="in-progress">In Progress</div>
          <div className="count">{inProgressCount}</div>
        </div>

        <Dropdown selectedItems={filterCategory} setSelectedItems={setFilterCategory} />
      </div>

      <div className="task-group">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="title-filter">
        <div className="progress">
          <div className="in-progress">Completed</div>
          <div className="count">{completedCount}</div>
        </div>

        <Dropdown selectedItems={filterCategory} setSelectedItems={setFilterCategory} />
      </div>

      
    </div>
    <div className="new-task">
         <CTAButton label="Add new task" variant="primary" onClick={() => navigate('/task')} fullWidth/>
         </div>
   
    </div>
  );
};

export default HomePage;
