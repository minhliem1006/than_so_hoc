import React from 'react'
import List from './List'
import imgIcom from '../../dinh.PNG'
import ChiSo from './ChiSo'
import { countDate, countMonth, countSMDD, countNTTT, countIndexTop, countTop,
     countYear, countMature, countMission, countAttitude, countInner, 
    countInteraction, countIntrospective,
     countDay, countLife} from '../count/count';
import {arrayNoiTam,arrayNgaySinh,arrayDinhMenh,arrayThaiDo,arrayDuongDoi,arrayNoiCam,arrayNamCaNhan,arrayNgayCaNhan,arrayThangCaNhan,arrayTruongThanh,arrayTuongTac} from '../data/text';
const Result = ({info}) => {
    let dayNow = new Date();
    let dateNow = dayNow.getDate();
    let monthNow = dayNow.getMonth() + 1;
    let yearNow = dayNow.getFullYear();
    // console.log("thang hien tai la: ",monthNow);
    let name = info.nameSuccess;
    let birthDay = info.birthDaySuccess2;
    let day = birthDay.split('/');
    let dayBirthDay = parseInt(day[0]);
    let monthBirthDay = parseInt(day[1]);
    let yearBirthDay = parseInt(day[2]);
    const obj1 = {
        soNoiCam: countIntrospective(name),
        soNoiTam: countInner(name),
        tuongTac : countInteraction(name),
        thaiDo : countAttitude(dayBirthDay,monthBirthDay),
        noiTamVaTuongTac : countNTTT(name),
        // soLap : 99,
        soTruongThanh:countMature(name,dayBirthDay,monthBirthDay,yearBirthDay),
    }
    const obj2 = {
        suMenh:countMission(name),
        duongDoi:countLife(dayBirthDay,monthBirthDay,yearBirthDay),
        suMenhVaDuongDoi:countSMDD(name,dayBirthDay,monthBirthDay,yearBirthDay),
        soNgaySinh:countDay(dayBirthDay),
    }
    const obj3 = {
        namCaNhan:countYear(dayBirthDay,monthBirthDay,yearNow),
        thangCaNhan:countMonth(dayBirthDay,monthBirthDay,yearNow,monthNow),
        ngayCaNhan:countDate(dayBirthDay,monthBirthDay,yearNow,monthNow,dateNow),
    }
    const top = countTop(dayBirthDay,monthBirthDay,yearBirthDay);
    const indexTop = countIndexTop(dayBirthDay,monthBirthDay,yearBirthDay);
    return (
        <div className='result'>
            <div style={{marginBottom:"20px",fontSize:"12px"}}>
                <p style={{fontSize:"16px"}}>H??? v?? t??n : <span style={{marginLeft:"10px",fontWeight:"500",}}>{name.toUpperCase()}</span></p>
                <p style={{fontSize:"16px"}}>Ng??y sinh : <span style={{marginLeft:"10px",fontWeight:"500"}}>{birthDay}</span></p>
            </div>
            <div className='list'>
                <List title ="Th???u hi???u v?? ph??t tri???n b???n th??n" obj={obj1}/>
                <List title ="Nhi???m v??? x?? h???i v?? h??nh tr??nh ho??n th??nh s??? m???nh" obj={obj2}/>
                <List title ="Ch??? s??? m??? r???ng v?? d??? ??o??n" obj={obj3}/>
            </div>
            <div className='pyramid'>
                <h1 className='title_list'>S??? ch???ng ???????ng ?????i</h1>
                <div className='imgTopTower'>
                    <img src={imgIcom} />
                    <span className='chiso infoChiso1'><span style={{color:"#f00"}}>{top.dinh1}</span> tu???i - <span style={{color:"#cc0000"}}><b>S??? {indexTop.dinh1}</b></span></span>
                    <span className='chiso infoChiso2'><span style={{color:"#f00"}}>{top.dinh2}</span> tu???i - <span style={{color:"#cc0000"}}><b>S??? {indexTop.dinh2}</b></span></span>
                    <span className='chiso infoChiso3'><span style={{color:"#f00"}}>{top.dinh3}</span> tu???i - <span style={{color:"#cc0000"}}><b>S??? {indexTop.dinh3}</b></span></span>
                    <span className='chiso infoChiso4'><span style={{color:"#f00"}}>{top.dinh4}</span> tu???i - <span style={{color:"#cc0000"}}><b>S??? {indexTop.dinh4}</b></span></span>
                </div>
            </div>
            <ChiSo name="Ch??? s??? n???i c???m" data = {arrayNoiCam} value={obj1.soNoiCam} />
            <ChiSo name="Ch??? s??? n???i t??m" data = {arrayNoiTam} value={obj1.soNoiTam}/>
            <ChiSo name="Ch??? s??? th??i ?????" data = {arrayThaiDo} value={obj1.thaiDo}/>
            <ChiSo name="Ch??? s??? t????ng t??c" data = {arrayTuongTac} value={obj1.tuongTac}/>
            <ChiSo name="Ch??? s??? tr?????ng th??nh" data = {arrayTruongThanh} value={obj1.soTruongThanh}/>
            <ChiSo name="Ch??? s??? s??? m???nh" data = {arrayDinhMenh} value={obj2.suMenh}/>
            <ChiSo name="Ch??? s??? ???????ng ?????i" data = {arrayDuongDoi} value={obj2.duongDoi}/>
            <ChiSo name="Ch??? s??? ng??y sinh" data = {arrayNgaySinh} value={obj2.soNgaySinh}/>
            <ChiSo name="Ch??? s??? ng??y c?? nh??n" data = {arrayNgayCaNhan} value={obj3.ngayCaNhan}/>
            <ChiSo name="Ch??? s??? th??ng c?? nh??n" data = {arrayThangCaNhan} value={obj3.thangCaNhan}/>
            <ChiSo name="Ch??? s??? n??m c?? nh??n" data = {arrayNamCaNhan} value={obj3.namCaNhan}/>

            {/* <ChiSo name="Ch??? s??? t????ng t??c"value={obj1.tuongTac}/> */}
        </div>
    )
}

export default Result