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
  width: 30%;
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
    <StyledInput
      type="text"
      value={q}
      placeholder="search..."
      onChange={change}
    />
  )
}

export default Search
