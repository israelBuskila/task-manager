import '../styles/Checkbox.css'
interface CheckboxProps {
    checked: boolean,
    onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    return (
        <div >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}
export default Checkbox