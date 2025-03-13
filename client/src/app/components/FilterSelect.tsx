import { CategoryI } from "../types/TaskInterface";



const FilterSelect: React.FC<{ filter: string; setFilter: (value: CategoryI | "All") => void }> = ({
    filter,
    setFilter,
  }) => (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value as CategoryI | "All")}>
        {["All", "Work", "Personal", "Shopping"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
  export default FilterSelect