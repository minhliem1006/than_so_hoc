import React from 'react'
import Item from './Item'
const List = ({obj}) => {
  return (
   <div className='list'>
        <h1 className='title_list'> Thấu hiểu và phát triển bản thân</h1>
        <ul className='list-item'>
          {
            Object.keys(obj).map((key,index)=>{
               return <Item name={key} index={index} key={index} value={obj[key]}/>
            })
          }
          {/* <Item name='Số nội cảm'/>
          <Item fill={true} name='Số nội tâm'/>
          <Item name='Tương tác'/>
          <Item fill={true} name='Thái độ'/>
          <Item name='Nội tâm và tương tác'/>
          <Item fill={true} name='Số Lặp'/>
          <Item name='Số trưởng thành'/> */}
        </ul>
   </div>   
  )
}

export default List