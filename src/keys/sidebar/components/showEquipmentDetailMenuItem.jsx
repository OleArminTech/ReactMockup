import React from 'react'
import arminIcon from '../../../../res/img/ArminIcon.png'

const ShowEquipmentDetailMenuItem = (state) => {
  return (
    <a href="#" onClick={ state.showEquipmentDetail }><img src={arminIcon} />
      <span>Equipment detail</span></a>
  )
}

export default ShowEquipmentDetailMenuItem
