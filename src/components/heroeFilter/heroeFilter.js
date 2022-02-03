import cx from "classnames";
const HeroeFilter = ({item, onClick, activeFilter}) => {
    const isActive = (item.name == activeFilter);
    return (
        <button 
            className={cx("btn", item.className, isActive && "active")} 
            onClick={() => onClick(item.name)}>
                {item.name}
        </button>
    )
}
export default HeroeFilter;