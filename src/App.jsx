import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import { useState } from "react";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import "../src/assets/images/dice-empty.png";
import "../src/assets/images/dice1.png";
import "../src/assets/images/dice2.png";
import "../src/assets/images/dice3.png";
import "../src/assets/images/dice4.png";
import "../src/assets/images/dice5.png";
import "../src/assets/images/dice6.png";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import Facebook from "./components/Facebook";
import profiles from "../src/data/berlin.json"

function App() {
  const [likes, setLikes] = useState(0);
  const addLikes = () => {
    setLikes((likes) => likes + 1);
  };
  const bgColorOpt = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [bgColor, setBgColor] = useState(bgColorOpt[0]);
  const changeBgColor = () => {
    setBgColor((prevColor) => {
      const nextIndex = bgColorOpt.indexOf(prevColor) + 1;
      return bgColorOpt[nextIndex];
    });
  };
  const imgOpt = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9479d19288123.562d7db2dce3d.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b6da619288123.562d7db32882e.jpg",
  ];
  const [imgSwitch, setImgSwitch] = useState(true);
  const changeImg = () => {
    setImgSwitch((imgSwitch) => !imgSwitch);
  };

  const [diceImg, setDiceImg] = useState("../src/assets/images/dice-empty.png");
  const changeImgDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceImg(`../src/assets/images/dice${randomNumber}.png`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <div className="cardContainer">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div className="drivers">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>
      <div>
        <LikeButton
          likes={likes}
          bgColor={bgColor}
          addLikes={addLikes}
          changeBgColor={changeBgColor}
        />
      </div>
      <div>
        <ClickablePicture
          img={imgSwitch ? imgOpt[0] : imgOpt[1]}
          changeImg={changeImg}
        />
      </div>
      <div>
        <Dice diceImg={diceImg} changeImgDice={changeImgDice} />
      </div>
      <div>
      <h1>Image Carousel</h1>
      <Carousel
        images={images}
        currentIndex={currentIndex}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
    <div>
      <NumbersTable limit={8}/>
    </div>
    <div>
      <Facebook profiles={profiles}/>
    </div>

    </div>
  );
}

export default App;
