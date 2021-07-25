import React from 'react'
import { selector } from 'recoil'

const todoListStatsState = selector({
    key : 'todoListStatsState',
    get : ({get})=>{
        const todoList = get(todoListState)
        const totalNum = todoList.length // todo 리스트의 총 개수 

        const totalCompletedNum = todoList.filter((item)=>item.isCompleted).length // 완료된 todo 리스트의 총 개수

        const totalUnCompletedNum = totalNum - totalCompletedNum
        // 완료되지 않은 todo 항목들의 총 개수

        const percentCompleted = totalNum ===0 ? 0 : totalCompletedNum / totalNum;

        // 완료된 todo리스트의 백분율

        return (
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum,
            percentCompleted,
            )
    }
})

export default todoListStatsState