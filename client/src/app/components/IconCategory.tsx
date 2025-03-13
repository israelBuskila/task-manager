import { CategoryI } from "../types/TaskInterface"

interface IconCategoryProps {
    name: CategoryI
}

const IconCategory: React.FC<IconCategoryProps> = ({name}) => {

    return(
    <div>
        <img src={name} />
    </div>
)}
export default IconCategory