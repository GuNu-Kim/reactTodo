import React from 'react';

const FunctionDataList = [
  {id: 1, name: "가", image: 'image1'},
  {id: 2, name: "나", image: "image2"},
  {id: 3, name: "다", image: "image3"},
  {id: 4, name: "라", image: "image4"},
  {id: 5, name: "마", image: "image5"},
  {id: 6, name: "바", image: "image6"}
];

function FunctionGetData({name, image}) {
  return (
    <div>
      <h3>{name}, {image}</h3>
    </div>
  )
}

function FunctionES5Grammar(props) {
  return (
    <h3>
      Es5Grammar {props.propsval}
    </h3>
  )
}

function FunctionES6Grammar({propsval}) {
  return (
    <h3>Es6Grammar {propsval}</h3>
  )
}

function FunctionComponent() {
  return (
    <div className="FunctionComponent">
        <h1>ClassComponent 입니다</h1>
        <h1>React에서 컴포넌트명은 대문자로 시작해야 한다</h1>
        <FunctionES5Grammar propsval="넘어온 값은 props라고 한다"
                    value="ES5 문법"/>
        <FunctionES6Grammar propsval="넘어온 값은 props라고 한다"
                    value="ES6 문법"/>
        {FunctionDataList.map((data) => (
          <FunctionGetData key={data.id} name={data.name} image={data.image}/>
        ))}
    </div>
  );
}

export default FunctionComponent;
