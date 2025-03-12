import React, {useContext} from 'react'
import { C_API } from '../../../App'

export const Number = () => {

    const {count} = useContext(C_API)

  return (
    <div>
        {count}
    </div>
  )
}
