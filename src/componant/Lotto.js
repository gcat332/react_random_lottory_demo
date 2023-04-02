import React , {useState } from "react";
import './Lotto.css';




function Lotto() {
    const [evStart, setEvStart] = useState(true);
    const [numbers, setNumbers] = useState([0,0,0]);
    const [numbersBox, setNumbersBox] = useState([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]);
    function randomNums() {
        setNumbers([ranNums(0),ranNums(1),ranNums(2)]);
        return numbers
    };

    function evChange() {
        setEvStart(false);
    };

    function exRandomNums() {
        setNumbersBox([delNums(randomNums(0),0),delNums(randomNums(1),1),delNums(randomNums(2),2)]);
        return numbersBox
    };

    function delNums(delNum,i) {
        let arrBox = numbersBox[i];
        if ( arrBox.length <= 1) {
            if ( i===1){
            alert("out of number, please reset number");}
            console.log("i = ",i,"curNums = ",delNum[i]," = ",numbersBox[i])
            return numbersBox[i];
        } else {
        if (evStart === true)
        {
            evChange();
        } else {
        arrBox.splice(arrBox.indexOf(delNum[i]), 1);
        console.log("i = ",i,"curNums = ",delNum[i]," = ",numbersBox[i])
        }
        }
        return arrBox;
    };

    function ranNums(i) {
        let curNums = Math.floor(Math.random() * 10);
        let criteria = numbersBox[i].includes(curNums);
        do
        { 
        curNums = Math.floor(Math.random() * 10);
        criteria = numbersBox[i].includes(curNums);
        } while (criteria === false)
        return curNums;
    };

    function resetNums()
    {
        setNumbers([0 , 0 , 0])
        setNumbersBox([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]);
    };

    return (
        <>
            <img className="ourCat" src={require('./boontham.jpg')} width='200px' alt='Boontham!' />
            <h1 className="lotto-nav">บุญธรรมใบ้หวย3ตัวท้าย V.1</h1>
            <div className="lotto-container">
                <p className="lotto-number" digi={0}>{numbers[0]}</p>
                <p className="lotto-number" digi={1}>{numbers[1]}</p>
                <p className="lotto-number" digi={2}>{numbers[2]}</p>
            </div>
            <div>
            <button className="lotto-button" onClick={exRandomNums}>ให้เปียกแลกหวย</button>
            <button className="lotto-button" onClick={resetNums}>เลขหมดเติมหน่อย</button>
            </div>
        </>
    );
}

export default Lotto;