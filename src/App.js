import React from 'react';

const dataList = [
  {id: 1, name: 'a', image: 'image1'},
  {id: 2, name: "b", image: "image2"},
  {id: 3, name: "c", image: "image3"},
  {id: 4, name: "d", image: "image4"},
  {id: 5, name: "e", image: "image5"},
  {id: 6, name: "f", image: "image6"}
];

function GetData({name, image}) {
  return (
    <div>
      <h2>{name}, {image}</h2>
    </div>
  )
}

function Es5Grammar(props) {
  return (
    <h2>
      Es5Grammar {props.propsval}
    </h2>
  )
}

function Es6Grammar({propsval}) {
  return (
    <h2>Es6Grammar {propsval}</h2>
  )
}

function App() {
  return (
    <div className="App">
        <h1>React에서 컴포넌트는 대문자로 시작해야 한다</h1>
        <Es5Grammar propsval="넘어온 값은 props라고 한다"
                    value="ES5 문법"/>

        <Es6Grammar propsval="넘어온 값은 props라고 한다"
                    value="ES6 문법"/>

        {dataList.map((data) => (
          <GetData key={data.id} name={data.name} image={data.image}/>
        ))}
    </div>
  );
}

export default App;
