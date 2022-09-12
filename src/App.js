
import './App.css';
import motoGp01 from "./assets/motoGp01.png";
import motoGp02 from "./assets/motoGp02.png";
import motoGp03 from "./assets/motoGp03.png";
import { useState, useEffect } from 'react';




function App() {
  const [index, setIndex] = useState(0);
 
 
  
  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };
  const cards = [
    {
      id: "1",
      image: motoGp01, 
      herf:"https://www.motogp.com/it/riders/profile/Marc+Marquez"
    },
    {
      id: "2",
      image: motoGp02,
      herf:"https://www.motogp.com/it/riders/profile/Valentino+Rossi"
    },
    {
      id: "3",
      image: motoGp03,
      herf:"https://www.motogp.com/it/riders/profile/Fabio+Quartararo"
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <a href={item.herf}>
              <img
              
               key={item.id}
               className={className}
               src={item.image}
               alt="Race"
               
              ></img>
            </a>
          
          );
        })}
         <div className='home'>
         <a href="https://google.com">
          <button>Home</button> 
        </a>
      </div>
      </div>
    </div>
    
  );
}
export default App;