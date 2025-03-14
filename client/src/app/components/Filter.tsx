import { CategoryI } from "../types/TaskInterface";
import '../styles/Filter.css'

interface FilterProps {
  filter: { value: string, label: string }[];
  setFilter: (value: CategoryI | "Filter") => void
}


const Filter: React.FC<FilterProps> = ({
  filter,
  setFilter,
}) => (
  <div className="filter">
    <div className="select-wrapper ">
      <select onChange={(e) => setFilter(e.target.value as CategoryI | "Filter")}>
        {filter.map(option =>
        (<option key={option.value} value={option.value}>        
          {option.label}
        </option>
        ))}
      </select>
    </div>
  </div>
);
export default Filter