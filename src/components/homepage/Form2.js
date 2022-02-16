import React, {useState} from 'react';

export default function NewForm() {
    const [fullName,setFullName] = useState([])
    const handleChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value !== '') {
            setFullName([...fullName,e.target.value])
            // console.log(Number(e.target.getAttribute("dataName"))+1);
            let countStep = Number(e.target.getAttribute("data-name"))+1
            // console.log(countStep);
            let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
            // console.log(inputFocus);
            inputFocus.focus()
        }
    }

    const changeName = (e) => {
        // console.log(e.key);
        let countStep = Number(e.target.getAttribute("data-name"))-1
        if(e.key === 'Backspace' && e.target.value === '' && countStep >=1){
            // console.log(countStep);
            let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
            // console.log(inputFocus);
            setTimeout(inputFocus.focus(), 300)
            
        }
    }
    console.log(fullName);
    return (
        <>
            <div className='formInput'>
                <form action="" >
                    <input onKeyDown={changeName} type="text" data-name='1' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='2' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='3' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='4' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='5' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='6' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='7' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='8' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='9' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='10' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='11' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='12' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='13' maxLength={1} onChange={handleChange} name='inputName' />
                    <input onKeyDown={changeName} type="text" data-name='14' maxLength={1} onChange={handleChange} name='inputName' />
                </form>
            </div>
        </>

    );
}