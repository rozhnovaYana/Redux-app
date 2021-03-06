
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useEffect } from "react"
import HeroeFilter from "../heroeFilter/heroeFilter";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter, filtersRequest } from "./filtersSlicer";
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
    const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filters)
    const dispatch = useDispatch();

    const onClick = (name) => {
        dispatch(setActiveFilter(name))
    }

    useEffect(() => {
        dispatch(filtersRequest())
    }, [dispatch]);

    if(filtersLoadingStatus === "loading"){
        return <Spinner/>
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const elements = filters.map((item) => {
        return(
            <HeroeFilter key={item.id} item={item} onClick={onClick} activeFilter={activeFilter}/>
        )
    });

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;