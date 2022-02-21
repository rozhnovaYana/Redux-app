import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { heroesRequest } from './heroesSlicer';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';


const HeroesList = () => {
    const heroesFilteredSelector = createSelector(
        state => state.heroes.heroes,
        state => state.filters.activeFilter,
        (heroes, activeFilter) => {
            if(activeFilter === 'all'){
                return heroes
            } 
            else {
                return heroes.filter(i => i.element === activeFilter)
            }
        }
    )
    const heroesFiltered = useSelector(heroesFilteredSelector)
    const { heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(heroesRequest())
    }, [dispatch]);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map((props) => {
            const key =  Math.round((Math.random() * (10000 - 1000) + 10))
            return <HeroesListItem key={key} {...props}/>
        })
    }

    const elements = renderHeroesList(heroesFiltered);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;