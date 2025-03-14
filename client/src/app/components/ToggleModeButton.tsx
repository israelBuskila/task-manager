import { useTheme } from "../hooks/useTheme";
import RenderIcon from "./RenderIcon";
import '../styles/ToggleModeButton.css'

const ToggleModeButton: React.FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <button className="toggle-mode" onClick={toggleTheme}>
            <RenderIcon className="sun" iconName="sun"/>
            <RenderIcon className="moon" iconName="moon" />
        </button>
    );
};

export default ToggleModeButton;
