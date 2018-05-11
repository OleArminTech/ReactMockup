import React from 'react'
import arminIcon from '../../../../res/img/ArminIcon.png'

const CollapseSkidMenuItem = (state) => {
  return (
    <a href="#" onClick={ state.collapseSkid }><img src={arminIcon} />
      <span>{ state.skidCollapsed ? 'Expand skid' : 'Collapse skid' }</span></a>
  )
}

export default CollapseSkidMenuItem
