import React from 'react'

const Item = ({name,index,value}) => {
  const check = (index%2) !==0
  let style = {}
  if(check)
  { 
    style = {backgroundColor:"#ff4c4c"}
  }
  const getNewName = (name)=>{
      let newName = '';
      if(name==="soNoiCam")
        {

          newName = "Số nội cảm"

        }
        if(name==="soNoiTam")
        {

          newName = "Số nội tâm"

        }
        if(name==="tuongTac")
        {

          newName = "Tương tác"

        }   
        if(name==="thaiDo")
        {

          newName = "Thái độ"

        } 
        if(name==="noiTamVaTuongTac")
        {

          newName = "Nội tâm và tương tác"

        } 
        if(name==="soLap")
        {

          newName = "Số lặp"

        } 
        if(name==="soTruongThanh")
        {

          newName = "Số trưởng thành"

        } 
        if(name==="suMenh")
        {

          newName = "Sứ mệnh"

        } 
        if(name==="duongDoi")
        {

          newName = "Đường đời"

        } 
        if(name==="suMenhVaDuongDoi")
        {

          newName = "Sứ mệnh và đường đời"

        } 
        if(name==="soNgaySinh")
        {

          newName = "Số ngày sinh"

        } 
        if(name==="namCaNhan")
        {

          newName = "Năm cá nhân"

        } 
        if(name==="thangCaNhan")
        {

          newName = "Tháng cá nhân"

        } 
        if(name==="ngayCaNhan")
        {

          newName = "Ngày cá nhân"

        } 
      return newName;
  }
  const newName = getNewName(name);
  return (
    <div className='item'>
        <h3 style={{fontSize:"12px"}}>{newName}</h3>
        <div style={style} className='itemIndex'>{value}</div>
    </div>
  )
}

export default Item