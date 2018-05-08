import React from 'react'
import arminIcon from '../../../../res/img/ArminIcon.png'

const HideSkidMenuItem = (state) => {
  return (
    <a href="#" onClick={ state.showSkid }><img src={arminIcon} />
      <span>{ state.skidShown ? 'Show skid' : 'Close skid' }</span></a>
  )
}

export default HideSkidMenuItem
