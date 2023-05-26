import React from "react";

const ListArray = () => {
  const DataList = [
    {id: 1, imageName: "가", image: 'image1'},
    {id: 2, imageName: "나", image: "image2"},
    {id: 3, imageName: "다", image: "image3"},
    {id: 4, imageName: "라", image: "image4"}
  ];
  
  //배열 관리 방법1
  function GetData({id, imageName, image}) {
    return (
      <div>
        <h3>{id}, {imageName}, {image}</h3>
      </div>
    )
  }

  //배열 관리 방법2
  function GetDataComponent({imageData}) {
    return (
      <tr>
        <td>{imageData.id}</td>
        <td>{imageData.imageName}</td>
        <td>{imageData.image}</td>
      </tr>
    )
  }


  return (
    <div className="ListArray">
        <h1>배열 관리 방법</h1>
        {DataList.map((data) => (
          <GetData id={data.id} imageName={data.imageName} image={data.image}/>
        ))}

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이미지명</th>
              <th>이미지주소</th>
            </tr>
          </thead>
          <body>
            {DataList.map(imageData => <GetDataComponent imageData={imageData}/>)}
          </body>
        </table>
    </div>
  );
}

export default ListArray;
