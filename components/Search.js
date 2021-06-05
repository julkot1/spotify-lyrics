import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #00564d;
  outline: none;
  color: white;
  font-size: 1.5em;
`
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
      <StyledInput
        type="text"
        value={q}
        placeholder="search.."
        onChange={change}
      />
    </div>
  )
}

export default Search
