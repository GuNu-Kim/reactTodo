import React from "react";

function ReactRouteDom() {
  return (
    <div className="ReactRouteDom">
        <h1>ReactRouteDom이란?</h1>
        <h3>
          페이지를 api방식으로 라우팅 해준다
          {"npm install react-router-dom"} 명령어로 설치한다
          package.json의 dependencies에서 설치여부, 버전 확인 가능 함
          특정 버전을 설치하려면 {"npm install react-router-dom@6"} 처럼 "@버전"을 입력한다
        </h3>
        
        <h1>사용</h1>
        <h3>
          index.js에서 {"import { BrowserRouter } from \"react-router-dom\";"} 임포트하고
          {"render()"}에 {"<App />"}를 {"<BrowserRouter>"}로 감싸준다
          App.js에서 {"import {Routes, Route, Link} from \"react-router-dom\";"}
        </h3>
    </div>
  );
}

export default ReactRouteDom;
