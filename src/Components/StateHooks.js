import React, { useState, useEffect, useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { AddTodo } from "./AddTodo";
import first from "../assets/first.png";
import liveVideo from "../assets/Kota.Factory.S02E01.mkv";
export default function StateHooks() {
  // const [cnt, setCnt] = useState(0);
  // const [mFlag, setToggle] = useState(false);
  const [sObj, setCountState] = useState({
    cnt: 0,
    mFlag: false,
  });

  const [Id, setId] = useState(5);
  const [flag, setFlag] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleString());
  const [fruitList, setArrays] = useState([
    { pId: 1, pName: "Apple" },
    { pId: 2, pName: "Mango" },
    { pId: 3, pName: "Grappes" },
    { pId: 4, pName: "Kiwi" },
  ]);
  // const counterHandler = (symbol) => {
  //   if (symbol === "+") {
  //     setCnt(cnt + 1);
  //   } else {
  //     setCnt(cnt - 1);
  //   }
  // };
  useEffect(() => {
    // Update the document title using the browser API
    console.log();
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const itemHandler = () => {
    let random = makeid(5);
    console.log(random, "is ram");
    let arr = { pId: Id, pName: random };
    let finalArr = fruitList.concat(arr);
    setArrays(finalArr);
    setId(Id + 1);
  };
  const counterHandler = (symbol) => {
    let tC = sObj.cnt;
    if (symbol === "+") {
      tC++;
      setCountState({ ...sObj, cnt: tC });
    } else {
      tC--;

      setCountState({ ...sObj, cnt: tC });
    }
  };
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    if (flag === 1) {
      vidRef.current.play();
      setFlag(0);
    } else if (flag === 0) {
      vidRef.current.pause();
      setFlag(1);
    }
  };
  return (
    <div className="App">
      <h3>Counter:{sObj.cnt}</h3>
      <button
        onClick={() => {
          counterHandler("+");
        }}
        className="btnClass"
      >
        +
      </button>
      <button
        onClick={() => {
          counterHandler("-");
        }}
        className="btnClass"
      >
        -
      </button>

      <h3>{sObj.mFlag.toString()}</h3>

      <button
        onClick={() => {
          setCountState({ ...sObj, mFlag: !sObj.mFlag });
        }}
      >
        Toggle
      </button>
      <div style={{ margin: "2em" }} className="row">
        <ListGroup className="col-sm">
          {fruitList.map((elm) => (
            <ListGroup.Item className="listItem" key={elm.pId}>
              {elm.pName}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <ListGroup className="col-sm">
          {fruitList.map((elm) => (
            <ListGroup.Item className="listItem" key={elm.pId}>
              {elm.pName}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <ListGroup className="col-sm">
          {fruitList.map((elm) => (
            <ListGroup.Item className="listItem" key={elm.pId}>
              {elm.pName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="media">
        <img
          className="align-self-start mr-3 img-dimension"
          src={first}
          alt=""
        />
        <div className="media-body">
          <h5 className="mt-0">Top-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <video
        style={{ width: "50%" }}
        ref={vidRef}
        src={liveVideo}
        type="video/mkv"
      ></video>
      <div>
        <button className="btnClass" onClick={handlePlayVideo}>
          Play/Pause
        </button>
        {/* <button
          className="btnClass"
          onClick={() => {
            handlePlayVideo("pause");
          }}
        >
          Pause Video
        </button> */}
      </div>
      <br />
      <button className="btnClass" onClick={itemHandler}>
        Add items
      </button>
      <button className="btnClass" onClick={itemHandler}>
        Remove items
      </button>
      <h3>{time}</h3>
    </div>
  );
}
