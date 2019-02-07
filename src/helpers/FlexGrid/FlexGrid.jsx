import React from 'react';

const FlexGrid = ({perRow, children, items}) => {

  let rowClass;

  switch(perRow){
    case 1:
      rowClass = 'one'
      break;
    case 2:
      rowClass = 'two'
      break;
    case 3:
      rowClass = 'three'
      break;
    case 4:
      rowClass = 'four'
      break;
    case 5:
      rowClass = 'five'
      break;
  }

  let doRender;

  items ? doRender = items : doRender = children

  return (
    <div className={`flex_grid ${rowClass}`}>
      { doRender}
    </div>
  )
}

export default FlexGrid