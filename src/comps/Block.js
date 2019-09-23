import React from 'react'

import BlockA from './BlockA'

function Block(props) {
  const { data } = props
  const { A, B } = data
  return <div>
    <BlockA data={A}></BlockA>
    <div>{B.name}</div>
  </div>
}

export default Block