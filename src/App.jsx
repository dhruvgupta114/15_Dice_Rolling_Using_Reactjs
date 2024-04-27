import { useState } from "react";
import "./App.css";
import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

function App() {


  // var diceImages = [
  //   DiceImage1,
  //   DiceImage2,
  //   DiceImage3,
  //   DiceImage4,
  //   DiceImage5,
  //   DiceImage6,
  // ]

  var diceImages = [
    {
      image: DiceImage1,
      value: 1
    },
    {
      image: DiceImage2,
      value: 2
    },
    {
      image: DiceImage3,
      value: 3
    },
    {
      image: DiceImage4,
      value: 4
    },
    {
      image: DiceImage5,
      value: 5
    },
    {
      image: DiceImage6,
      value: 6
    },
  ]

  const [image1, setImage1] = useState(diceImages[0])
  const [image2, setImage2] = useState(diceImages[1])
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [sum, setSum] = useState(0)

  const rollDice = () =>{
    var randomNum1 = Math.floor(Math.random() * 6)
    var randomNum2 = Math.floor(Math.random() * 6)
    setNum1(diceImages[randomNum1].value)
    setNum2(diceImages[randomNum2].value)
    setImage1(diceImages[randomNum1])
    setImage2(diceImages[randomNum2])
    setSum(diceImages[randomNum1].value + diceImages[randomNum2].value)
  }

  return (
    <>
      <div className="App">
        <center className="flex items-center justify-center flex-col">
          <h1>Welcome to dice Roll</h1>
          <div className="container">
            <img className="square" src={image1.image}/>
            <div style={{ width: "5px", display: "inline-block" }}></div>
            <img className="square" src={image2.image}/>
          </div>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={rollDice}>Roll</button>
          <div className="py-5 px-8 me-2 mt-2 mb-2 text-5xl font-bold text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
            {sum}
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
