import React from 'react'
import './ButtonSignUp.scss'

const ButtonSignUp = () => {
   return (
     <button className="button-sign-up" onclick={(e) => {e.preventDefault()}}>
        CRIAR CONTA
     </button>
   )
}

export default ButtonSignUp
