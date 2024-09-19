import { useState } from "react";
import './App.css';

export default function App() {
  const [level, setLevel] = useState(0);
  const displayedImage = level < 100 ? `/001.jpg` : `/005.jpg`;
  const imageSize = level <= 100 ? level : 100;
  const resetLevel = () => {setLevel(0);};
  
  const imageStyle = {
    width: '100px', 
    height: '100px', 
    cursor: 'pointer', 
    border: '5px solid black',
    borderRadius: '10px' 
  };

  return (
    <>
      <h1>Level {level}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <img
          src={displayedImage}
          alt="หมูเด้ง"
          style={{ width: `${imageSize * 3}px`, height: `${imageSize * 3}px`, border: '5px solid black', borderRadius: '10px' }} // กรอบรูปหลัก
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <img
            src="./002.jpg"
            alt="แตงโม"
            onClick={() => setLevel((prevLevel) => prevLevel + 5)}
            style={imageStyle} // กรอบแตงโม
          />
        </div>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <img
            src="./003.jpg"
            alt="ฟักทอง"
            onClick={() => setLevel((prevLevel) => prevLevel + 10)}
            style={imageStyle} // กรอบฟักทอง
          />
        </div>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <img
            src="./004.jpg"
            alt="หญ้า"
            onClick={() => setLevel((prevLevel) => prevLevel + 20)}
            style={imageStyle}
          />
        </div>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <img
            src="./006.png"
            alt="ล้างข้อมูล"
            onClick={resetLevel}
            style={imageStyle}
          />
        </div>
      </div>
    </>
  );
}