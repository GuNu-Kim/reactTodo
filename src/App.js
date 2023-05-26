import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import ReactRouteDom from './ReactRouteDom';
import UseState from './UseState';
import ListArray from './ListArray';

function App() { 
  return (
    <div className="App">
      <nav>
        <p>----Home----</p>
        <Link to="/">Home</Link>
        <p>----React-Route-Dom----</p>
        <Link to="/ReactRouteDom">ReactRouteDom</Link>
        <p>----function component----</p>
        <Link to="/FunctionComponent">FunctionComponent</Link>
        <p>----class component----</p>
        <Link to="/ClassComponent">ClassComponent</Link>
        <p>----UseState----</p>
        <Link to="/UseState">UseState</Link>
        <p>----Array----</p>
        <Link to="/ListArray">ListArray</Link>
      </nav>

      {/* react-router-dom을 이용해 라우팅을 해준다 */}
      <Routes>
        <Route path="/" element={""} />
        <Route path="/ReactRouteDom" element={<ReactRouteDom />} />
        <Route path="/FunctionComponent" element={<FunctionComponent />} />
        <Route path="/ClassComponent" element={<ClassComponent />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/ListArray" element={<ListArray />} />
      </Routes>
    </div>
  );
}

export default App;
