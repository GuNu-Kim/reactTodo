import React, {useState} from "react";

const UseState = () => {
  //Counter 관리 방법
  const [num, setNumber] = useState(0); //let num = 0;과 같다
  const increase = () => {
    setNumber(num + 1); //num = num+1;과 같다
  }
  const decrease = () => {
    setNumber(num - 1); //num = num-1;과 같다
  }

  //input에서 관리 방법 1 (변수로 관리)
  const [txt, setTxt] = useState("");
  const onChange = (e) => {
    setTxt(e.target.value);
  }

  //input에서 관리 방법 2 - (객체로 관리)
  const [inputTxts, setInputTxt] = useState({
    name: "",
    email: "",
    tel: ""
  });
  const {name, email, tel} = inputTxts; //useState 깊은복사
  const onChangeInput = (e) => {
    setInputTxt({
      ...inputTxts,   //ES6에서 추가된 스프레시드 문법
      [e.target.id]: e.target.value
    });
  }


  return (
    <div className="UseState">
      <h1>State이란?</h1>
      <h3>
        state는 동적 데이터를 관리한다
        변하는 데이터, 변하지 않는 데이터, 생겨나는 데이터, 사라지는 데이터, 변경된 데이터, 하나인 데이터, 두개가 되는 데이터, 0이 되는 데이터 등등.
        처리는 useState함수를 제공해준다
      </h3>

      <div>
        <button onClick={increase}>1 증가</button>
        <button onClick={decrease}>1 감소</button>
        <p>숫자: {num}</p>

        <h1>input에서 관리 방법 1 - (변수로 관리)</h1>
        입력: <input type="text" value={txt} onChange={onChange} />
        <p>입력값: {txt}</p>

        <h1>input에서 관리 방법 2 - (객체로 관리)</h1>
        이름: <input type="text" id="name" value={name} onChange={onChangeInput} />
        이메일: <input type="text" id="email" value={inputTxts.email} onChange={onChangeInput} />
        핸드폰: <input type="text" id="tel" value={inputTxts.tel} onChange={onChangeInput} />

        <p>이름: {name}</p> {/* 깊은복사를 하면 이렇게 바로 사용이 가능하다*/}
        <p>이메일: {inputTxts.email}</p>
        <p>핸드폰: {inputTxts.tel}</p>
      </div>
    </div>
  );
}

export default UseState;
