import React from 'react'

const ChiSo = ({name,value,data}) => {
  console.log(data)
  return (
    <div style={{marginTop:"30px",fontSize:"15px"}}>
        <h3 style={{margin:"10px 0"}}>{name}:<span style={{color:"#ad3718",marginLeft:"4px"}}>Số {value}</span> </h3>
        <p>
            Bạn luôn mong muốn lắng nghe và thấu hiểu những người xung quanh bạn. Bạn thường có xu hướng đặt mình vào vị trí của họ để đồng cảm và yêu thương.
        </p>
        <p>
            Bên trong bạn thôi thúc bạn tìm đến với những môi trường hòa hợp và kết nối tốt, nếu chưa, bạn sẽ là người làm điều đó. Bạn thoải mái với việc mình được công nhận ở vai trò người hỗ trợ đắc lực của tập thể, không quá quan tâm đến việc tranh giành quyền lực hay vị trí kiểm soát, lãnh đạo
        </p>
    </div>
  )
}

export default ChiSo