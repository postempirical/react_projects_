import React from 'react'

const Person = ({image, name, age}) => {
  return (
    <>
        <div>{name} -- {age}</div>
    </>
  )
}

export default Person