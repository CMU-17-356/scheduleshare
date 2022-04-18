import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useClasses(pageNumber) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [classes, setClasses] = useState([])
  const [hasMore, setHasMore] = useState(false)

  let cancel

  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
      params: {page: pageNumber},
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setClasses( prevClasses => {
        return [... prevClasses, res.data.smth] //change this
      })
      setHasMore(res.data.length > 0)
      setLoading(flase)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return {loading, error, classes, hasMore}
}
