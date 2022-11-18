import { useState, useEffect } from 'react'
import { useLoadScript } from '@react-google-maps/api';

import takeStartState from '../helperFunc/takeStartState'
const googleKey = process.env.REACT_APP_GOOGLEKEY || 's';

export default function useApiControl() {
    const [data, setData]= useState<IData[]>()
    const [page, setPage] = useState(1)
      const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleKey,
      });
  
  async function start() {
      const result = await takeStartState(page)
      setData(result)

    }
  useEffect(() => {
      if(isLoaded && !data)  start()
    }, [page,isLoaded])
    
return {data,setPage}
} 