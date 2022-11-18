import {useState,useEffect} from 'react'
import takeStartState from '../helperFunc/takeStartState'
export default function useApiControl() {
    const [data, setData]= useState<IData[]>()
    const [page, setPage] = useState(1)
    
  async  function start() {
      const result = await takeStartState(page)
      setData(result)

    }
    useEffect( () => {
       start()
    }, [page])
    
return {data,setPage}
} 