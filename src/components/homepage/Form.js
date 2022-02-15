import React, { useState, useRef,} from 'react'

const Form = ({ setShow,setFullInfo}) => {

  let nameSuccess = '';
  let birthDaySuccess = '';
  let birthDaySuccess2 = '';
  const [dayBirthDay,setDayBirthDay] = useState({
    '1':'',
    '2':'',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
  })
  const [fullName, setFullName] = useState({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
    '18': '',
  });
  Object.values(fullName).forEach( (str) =>{
      return nameSuccess+=str;
  });
  Object.values(dayBirthDay).forEach( (str) =>{
     birthDaySuccess+=str;
    });
  for(let i=0;i<birthDaySuccess.length;i++)
  {
    // console.log(birthDaySuccess[i]);
    birthDaySuccess2 = birthDaySuccess2+ birthDaySuccess[i];
    if(i==1 || i==3)
    {

      birthDaySuccess2+='/'  
    }
   
  }
  const focus1 = useRef();
  const focus2 = useRef();
  const focus3 = useRef();
  const focus4 = useRef();
  const focus5 = useRef();
  const focus6 = useRef();
  const focus7 = useRef();
  const focus8 = useRef();
  const focus9 = useRef();
  const focus10 = useRef();
  const focus11 = useRef();
  const focus12 = useRef();
  const focus13 = useRef();
  const focus14 = useRef();
  const focus15 = useRef();
  const focus16 = useRef();
  const focus17 = useRef();
  const focus18 = useRef();
  //
  const allFocus = [focus1, focus2, focus3, focus4, focus5, focus6,
    focus7, focus8, focus9, focus10, focus11, focus12, focus13, focus14, focus15, focus16, focus17, focus18]
  const focusD1 = useRef();
  const focusD2 = useRef();
  const focusD3 = useRef();
  const focusD4 = useRef();
  const focusD5 = useRef();
  const focusD6 = useRef();
  const focusD7 = useRef();
  const focusD8 = useRef();
  const allFocusD = [focusD1, focusD2, focusD3, focusD4, focusD5, focusD6,focusD7, focusD8]

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fullName);
    setFullInfo({
      nameSuccess,
      birthDaySuccess2,
    })
    setShow(true);
    // console.log(nameSuccess);
    // console.log(birthDaySuccess2);

  }
  const handChange = (e) => {
    const index = parseInt(e.target.name) - 1;
    setFullName({
      ...fullName,
      [e.target.name]: e.target.value,
    })
    const keyCode = e.keyCode;
    if (keyCode === 8) {
      if (index < 18 && index >=0) {
        if(index===0)
        {
          allFocus[index].current.focus();

        }
        else
        {
          allFocus[index - 1].current.focus();

        }
      }
    } else {
      if (index < 18 && index >=0) {
        if(index === 17){
          allFocus[index].current.focus();

        }
        else
        {
          allFocus[index+1].current.focus();

        }

      }
    }
  }
  const handKeyDown = (e) => {
    // console.log(e.keyCode);
    const index = parseInt(e.target.name) - 1;
    const keyCode = e.keyCode;
    if (keyCode === 8) {
      if (index < 18 && index >=0) {
        if(index===0)
        {
          allFocus[index].current.focus();

        }
        else
        {
          allFocus[index - 1].current.focus();

        }
      }
    }
    // } else {
    //   if (index < 18 && index >=0) {
    //     if(index === 17){
    //       allFocus[index].current.focus();

    //     }
    //     else
    //     {
    //       allFocus[index+1].current.focus();

    //     }

    //   }
    // }
  }
  const handChangeDay = (e)=>{
    setDayBirthDay({
      ...dayBirthDay,
      [e.target.name]: e.target.value,
    })  
  }
  const handKeyDownD = (e) => {
    // console.log(e.keyCode);
    const index = parseInt(e.target.name) - 1;
    const keyCode = e.keyCode;
    if (keyCode === 8) {
      if (index < 8 && index >=0) {
        if(index===0)
        {
          allFocusD[index].current.focus();

        }
        else
        {
          allFocusD[index - 1].current.focus();

        }
      }
    } else {
      if (index < 8 && index >=0) {
        if(index === 7){
          allFocusD[index].current.focus();

        }
        else
        {
          allFocusD[index+1].current.focus();

        }

      }
    }
  }
  return (
    <div>
      <form className="formInput">

        <label>
          <b>Nhập đầy đủ họ tên khai sinh</b>
        </label>
        <br />
        <div>
          <input ref={focus1} className="inputValue"
            onChange={handChange}
            onKeyUp={handKeyDown}
            type="text"
            name="1"
            maxLength={1} />
          <input ref={focus2} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="2" maxLength={1} />
          <input ref={focus3} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="3" maxLength={1} />
          <input ref={focus4} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="4" maxLength={1} />
          <input ref={focus5} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="5" maxLength={1} />
          <input ref={focus6} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="6" maxLength={1} />
          <input ref={focus7} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="7" maxLength={1} />
          <input ref={focus8} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="8" maxLength={1} />
          <input ref={focus9} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="9" maxLength={1} />
          <input ref={focus10} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="10" maxLength={1} />
          <input ref={focus11} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="11" maxLength={1} />
          <input ref={focus12} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="12" maxLength={1} />
          <input ref={focus13} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="13" maxLength={1} />
          <input ref={focus14} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="14" maxLength={1} />
          <input ref={focus15} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="15" maxLength={1} />
          <input ref={focus16} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="16" maxLength={1} />
          <input ref={focus17} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="17" maxLength={1} />
          <input ref={focus18} onKeyUp={handKeyDown} onChange={handChange} className="inputValue" type="text" name="18" maxLength={1} />
        </div>
        <br />
        <label>
          <b >Nhập ngày/tháng/năm sinh</b>
        </label>
        <br />
        <div style={{ display: "flex" }}>
          <div>
            <input ref={focusD1} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="1" maxLength={1}/>
            <input ref={focusD2} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="2" maxLength={1} />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <input ref={focusD3} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="3" maxLength={1} />
            <input ref={focusD4} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="4" maxLength={1} />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <input ref={focusD5} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="5" maxLength={1} />
            <input ref={focusD6} onKeyUp={handKeyDownD} onChange={handChangeDay}  className="inputValue" type="text" name="6" maxLength={1} />
            <input ref={focusD7} onKeyUp={handKeyDownD} onChange={handChangeDay} className="inputValue" type="text" name="7" maxLength={1} />
            <input ref={focusD8} onKeyUp={handKeyDownD} onChange={handChangeDay} className="inputValue" type="text" name="8" maxLength={1} />
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
          <button onClick={handleSubmit} className="btn" type="submit">
            <span className='img-search'>
              <img width='20' height='20' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
            </span> <b>Xem thần số của bạn</b></button>
        </div>
      </form>
    </div>
  )
}
export default Form