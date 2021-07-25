import React from 'react'
import { selector } from 'recoil'
import todoListFilterState from '../atom/todoListFilterState'

const filteredTodoListState = selector({
    key : 'filteredTodoListState',
    get : ({get})=>{
        const filter = get(todoListFilterState)
        const list = get(todoListState);

        switch(filter){
            case 'Show Completed' :
                return list.filter((item)=>item.isCompleted);
                case  'Show Uncompleted' :
                    return list.filter((item)=>!item.isCompleted);
                    default :
                    return list;
        }
    }
})

export default filteredTodoListState