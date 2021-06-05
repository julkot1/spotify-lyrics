import { useRouter } from 'next/router'
import { useState } from 'react'
const Search = () => {
  const router = useRouter()
  const [q, setQ] = useState(router.query.q)

  const change = ({ target: { value } }) => {
    if (value.length)
      router.replace({ pathname: '/', query: { q: value } }, undefined, {
        shallow: true,
      })
    else router.push('/')
    setQ(value)
  }

  return (
    <div>
      <input type="text" value={q} placeholder="search" onChange={change} />
    </div>
  )
}

export default Search
