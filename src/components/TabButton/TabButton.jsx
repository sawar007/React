export default function TabButton({ isSelected = false, children, ...props }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    );
}
