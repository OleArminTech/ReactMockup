import React from 'react'
import arminIcon from '../../../../res/img/ArminIcon.png'

const HideSkidMenuItem = (state) => {
  return (
    <a href="#" onClick={ state.showSkid }><img src={arminIcon} />
      <span>{ state.skidShown ? 'Close skid' : 'Show skid' }</span></a>
  )
}

export default HideSkidMenuItem
