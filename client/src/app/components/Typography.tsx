import '../styles/Typography.css'

interface TypographyProps {
    children: React.ReactNode;
    variant?: "small" | "medium" | "large";
};

const Typography: React.FC<TypographyProps> = ({ children, variant }) => {
    return (
        <p className={variant}>
            {children}
        </p>
    )
}
export default Typography