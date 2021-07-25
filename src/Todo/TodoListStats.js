import React from 'react'
import { useRecoilValue } from 'recoil'
import todoListStatsState from './selectors/todoListStatsState'

const TodoListStats =()=>{

    const {totalNum, totalCompletedNum,totalUnCompletedNum, percentCompleted} = useRecoilValue(todoListStatsState)

    const formatterdPercentCompleted = Math.round(percentCompleted*100)

    return (
        <ul>
            <li>Total items : {totalNum}</li>
            <li>Items completed : {totalCompletedNum}</li>
            <li>Items not completed : {totalUnCompletedNum}</li>
            <li>Percent completed : {formatterdPercentCompleted}</li>
        </ul>
    )
}
export default TodoListStats