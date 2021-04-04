import { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  console.log( '88888',  loading, data )


  useEffect(() => {
    setLoading(true)
    console.log('13131313131313')
    axios.get(url).then( res => {
      setData(res.data)
      setLoading(false)
    })
  }, deps);
  
  console.log( '1919191919', loading, data )

  return [data,loading]
}

export default useURLLoader

