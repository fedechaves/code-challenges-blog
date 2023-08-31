import React, { useEffect, useState } from 'react'

const useEff = () => {
    const [primero, setPrimero] = useState("primero");
    useEffect(() => {
        console.log("fede")
        setPrimero("segundo")
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default useEff
