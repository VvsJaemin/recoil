import React from 'react'
import { useRecoilState } from 'recoil'
import { filter } from 'rsvp';
import todoListFilterState from './atom/todoListFilterState'

const TodoListFilters =()=>{
    const [filters, setFilters] = useRecoilState(todoListFilterState);

    const updateFilter =({target : {value}})=>{
        setFilters(value)
    }

    return(
        <>
            Filter :
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">모두보기</option>
                <option value = "Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}