import { useState } from 'react';

function takeStartData(limit:number):number[] {

    const arr = window.localStorage.getItem('idx')
    if (arr) {
        const result = JSON.parse(arr)
        return result
    }
    
    return [1, 2, 3, 4, 5,limit]
}

export default function useRenderArray(limit:number) {
    const [renderEl, setRender] = useState(takeStartData(limit))
    return {renderEl, setRender}
}