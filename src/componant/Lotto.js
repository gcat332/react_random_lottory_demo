import React , {useState } from "react";
import './Lotto.css';


function Lotto() {
    const [eventStart, setEventStart] = useState(true);
    function eventChange() {
        setEventStart(false);
    };


    const [numbers, setNumbers] = useState([0,0,0]);
    function randomNums() {
        setNumbers([ranDigi(0),ranDigi(1),ranDigi(2)]);
        return numbers
    };

    const [numbersBox, setNumbersBox] = useState([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]);
    function reRollLotto() {
        setNumbersBox([chkDupNums(randomNums(),0),chkDupNums(randomNums(),1),chkDupNums(randomNums(),2)]);
        return numbersBox
    };

    function chkDupNums(delNum,i) {
        let arrBox = numbersBox[i];
        if ( arrBox.length <= 1) {
            if ( i===1){
            alert("บุญธรรม : หวยเลขหมด เติมเลขหน่อย!");}
            console.log("digi = ",i,"lottoNums = ",delNum[i]," = ",numbersBox[i])
            return numbersBox[i];
        } else {
        if (eventStart === true)
        {
            eventChange();
        } else {
        arrBox.splice(arrBox.indexOf(delNum[i]), 1);
        console.log("digi = ",i,"lottoNums = ",delNum[i]," = ",numbersBox[i])
        }
        }
        return arrBox;
    };

    function ranDigi(i) {
        let curNums = Math.floor(Math.random() * 10);
        let criteria = numbersBox[i].includes(curNums);
        do
        { 
        curNums = Math.floor(Math.random() * 10);
        criteria = numbersBox[i].includes(curNums);
        } while (criteria === false)
        return curNums;
    };

    function resetLotto()
    {
        setNumbers([0 , 0 , 0])
        setNumbersBox([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]);
    };

    return (
        <>
            <img className="ourCat" src={require('./asset/boontham.jpg')} width='200px' alt='Boontham!' />
            <h1 className="lotto-nav">บุญธรรมใบ้หวย3ตัวท้าย V.1</h1>
            <div className="lotto-container">
                <p className="lotto-number" digi={0}>{numbers[0]}</p>
                <p className="lotto-number" digi={1}>{numbers[1]}</p>
                <p className="lotto-number" digi={2}>{numbers[2]}</p>
            </div>
            <div>
            <button className="lotto-button" onClick={reRollLotto}>ให้เปียกแลกหวย</button>
            <button className="lotto-button" onClick={resetLotto}>ให้แห้งเติมเลข</button>
            </div>
        </>
    );
}

export default Lotto;