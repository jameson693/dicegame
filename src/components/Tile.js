import React from 'react'
import styled from 'styled-components'

const TileUnstyled = ({ className, dice, handleClick, name }) => (
  <div className={className} onClick={handleClick}>
    {name}: {dice}
  </div>
)

const Tile = styled(TileUnstyled)`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  float: left;
  background-color: ${props => (props.isSelected ? 'cadetblue' : 'transparent')};
`

export default Tile
