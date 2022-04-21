import React from 'react'

function UserInfo({id}) {

  const [user, setUser] = useState({})

  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
      body: {id: id}
    }).then(res => {
      setUser(res.data)
    }).catch(e => {
    })
  }, [])

  return (
    <div>UserInfo</div>
  )
}

export default UserInfo