import React, { useState,useEffect } from 'react'

const Form = ({ setShow, setFullInfo }) => {
  const [fullName, setFullName] = useState({})
  const [fullDay, setFullDay] = useState({})
  const [showInfo, setShowInfo] = useState('')
  let nameSuccess = '';
  let birthDaySuccess = '';
  let birthDaySuccess2 = '';
  let idSettimeOut= null;
  Object.values(fullName).forEach((str) => {
    return nameSuccess += str;
  });
  Object.values(fullDay).forEach((str) => {
    birthDaySuccess += str;
  });
  for (let i = 0; i < birthDaySuccess.length; i++) {
    // console.log(birthDaySuccess[i]);
    birthDaySuccess2 = birthDaySuccess2 + birthDaySuccess[i];
    if (i == 1 || i == 3) {

      birthDaySuccess2 += '/'
    }

  }

  //

  const handleChangeName = (e) => {
    // console.log(e.target.value);
    let countStep = Number(e.target.getAttribute("data-name")) + 1
    if (e.target.value !== '' && countStep <= 18) {
      let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
      // console.log(inputFocus);
      inputFocus.focus()
    }
    let dataFullDay = document.querySelectorAll('input[name="inputName"]')
    let day = []
    dataFullDay.forEach((item, index) => {
      day.push(item.value)
    })
    setFullName(day);
  }


  const handleChangeDay = (e) => {
    // console.log(e.target.value);
    let countStep = Number(e.target.getAttribute("data-day")) + 1
    if (e.target.value !== '' && countStep <= 8) {
      let inputFocus = document.querySelector(`input[data-day='${countStep}']`)
      // console.log(inputFocus);
      inputFocus.focus()
    }
    let dataFullDay = document.querySelectorAll('input[name="inputDay"]')
    let day = []
    dataFullDay.forEach((item, index) => {
      day.push(item.value)
    })
    setFullDay(day);
  }
  const changeName = (e) => {
    // console.log(e.key);
    let countStep = Number(e.target.getAttribute("data-name")) - 1
    if (e.key === 'Backspace' && e.target.value === '' && countStep >= 1) {
      // console.log(countStep);
      let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
      // console.log(inputFocus);
      setTimeout(inputFocus.focus(), 300)
    }
  }
  const changeDay = (e) => {
    // console.log(e.key);
    let countStep = Number(e.target.getAttribute("data-day")) - 1
    if (e.key === 'Backspace' && e.target.value === '' && countStep >= 1) {
      // console.log(countStep);
      let inputFocus = document.querySelector(`input[data-day='${countStep}']`)
      // console.log(inputFocus);
      setTimeout(inputFocus.focus(), 300)
      clearTimeout(inputFocus.focus())
    }


  }
  
  const hanleSubmit = (e) => {
    e.preventDefault();
    
    if(nameSuccess!==''&& birthDaySuccess2.length == 10 )
    {
      
      setFullInfo({
      nameSuccess,
      birthDaySuccess2,
      })
      setShow(true);
    }
    else{
      // console.log("....vao")
      setShowInfo("Vui lòng nhập đầy đủ thông tin")
      // idSettimeOut = setTimeout(() => {
      //   setShowInfo("")
      // }, 3000);
      // clearTimeout(setShowInfo())
    }
  }
  // useEffect(() => {
  //   return () => {
  //      clearTimeout(idSettimeOut);
  //   }
  // }, [idSettimeOut]);
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "20px", marginBottom: "10px" }}>{showInfo}</h1>
      <form className="formInput">
        <label>
          <b>Nhập đầy đủ họ tên khai sinh</b>
        </label>
        <br />
        <div>
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='1' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='2' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='3' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='4' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='5' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='6' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='7' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='8' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='9' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='10' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='11' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='12' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='13' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='14' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='15' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='16' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='17' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='18' maxLength={1} onChange={handleChangeName} name='inputName' />
        </div>
        <br />
        <label>
          <b >Nhập ngày/tháng/năm sinh</b>
        </label>
        <br />
        <div className="formBody">
          <div>
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='1' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='2' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
          <div className="formBody2">
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='3' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='4' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
          <div className="formBody2">
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='5' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='6' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='7' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='8' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
        </div>

        <br />
        {/* <label>
                  <b >Nhập ngày/tháng/năm sinh</b>
                  <div style={{margin:"20px 0"}}>
                    <select width="50" className="inputValue2" name="day">
                      <option value="01">Ngày 01</option><option value="02">Ngày 02</option><option value="03">Ngày 03</option><option value="04">Ngày 04</option><option value="05">Ngày 05</option><option value="06">Ngày 06</option><option value="07">Ngày 07</option><option value="08">Ngày 08</option><option value="09">Ngày 09</option><option value="10">Ngày 10</option><option value="11">Ngày 11</option><option value="12">Ngày 12</option><option value="13">Ngày 13</option><option value="14">Ngày 14</option><option value="15">Ngày 15</option><option value="16">Ngày 16</option><option value="17">Ngày 17</option><option value="18">Ngày 18</option><option value="19">Ngày 19</option><option value="20">Ngày 20</option><option value="21">Ngày 21</option><option value="22">Ngày 22</option><option value="23">Ngày 23</option><option value="24">Ngày 24</option><option value="25">Ngày 25</option><option value="26">Ngày 26</option><option value="27">Ngày 27</option><option value="28">Ngày 28</option><option value="29">Ngày 29</option><option value="30">Ngày 30</option><option value="31">Ngày 31</option></select>
                    <select className="inputValue2" className="custom-select" name="month">
                      <option value="01">Tháng 01</option><option value="02">Tháng 02</option><option value="03">Tháng 03</option><option value="04">Tháng 04</option><option value="05">Tháng 05</option><option value="06">Tháng 06</option><option value="07">Tháng 07</option><option value="08">Tháng 08</option><option value="09">Tháng 09</option><option value="10">Tháng 10</option><option value="11">Tháng 11</option><option value="12">Tháng 12</option></select>
                    <input className="inputValue2" placeholder="Năm sinh" type="text" name="name" maxLength="4" /> 
                  </div>
              </label>        */}
        <label>
          <b>Giới tính </b>
        </label>
        <br />
        <select className="inputValue2" name="cars">
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
        <div className="container-btn">
          <button onClick={hanleSubmit} className="btn" type="submit">
            <span className='img-search'>
              <img width='20' height='20' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
            </span> <b>Xem thần số của bạn</b></button>
        </div>
      </form>
    </div>
  )
}
export default Form