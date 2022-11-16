import { useState } from 'react';

function takeStartData(limit:number,location:any):number[] {
    if (location.pathname === '/page/1') {
     return [1, 2, 3, 4, 5,limit]
}
    const arr = window.localStorage.getItem('idx')
    if (arr) {
        const result = JSON.parse(arr)
        return result
    }
    
    return [1, 2, 3, 4, 5,limit]
}

export default function useRenderArray(limit:number,location:any) {
    const [renderEl, setRender] = useState(takeStartData(limit,location))
    return {renderEl, setRender}
}