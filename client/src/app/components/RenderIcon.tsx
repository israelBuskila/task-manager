interface RenderIconProps {
    iconName: string;
    className: string
}

const RenderIcon: React.FC<RenderIconProps> = ({iconName, className}) => {
    const getIconPath = `/icons/icontype=${iconName}.png`;
    return <img className={className} src={getIconPath}/>
}
export default RenderIcon