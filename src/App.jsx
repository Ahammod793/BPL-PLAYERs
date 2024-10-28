
import { useState } from 'react';
import './App.css';
import Header from "./components/Header/HeaderFile";
import AvailableAndSelect from './components/AvailableAndSelect';
import AllPlayers from './components/main/all-Players';
import NewsLatter from './components/NewsLatter/newsLatter';
import Footer from './components/footer/Footer';
import AvailSelectPlayers from './components/main/SeletedPlayersCont';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { split } from 'postcss/lib/list';


// the player.json file used in the all-Players.jsx file

function App() {
  const [isAvailable, setIsAvailable] = useState(true); 
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const HundleCoin = () =>{
    const AvailableCoin = document.getElementById('coin').innerText
    const NewCoin = parseInt(AvailableCoin) + 1000000
    document.getElementById('coin').innerText = NewCoin.toString(),
    toast.info(('Coin successfully added!'),{position:"top-left"},{autoClose: 2000})
  }
  const choseHandler = player => {
    if(selectedPlayers.length >= 6){
      toast.error(('Maximum 6 players can be selected!'),{position:"top-left"},{autoClose: 2000});  
      return;
    }
    let strCoin = document.getElementById('coin');
    const AvailableCoin = parseInt(strCoin.innerText);
    const playerPrice =parseInt(player.price.split('$')[0])
    

    if(AvailableCoin >= playerPrice){
      let isDuplicate = selectedPlayers.find(oldPlayer => oldPlayer.id === player.id);   
      if(!isDuplicate) {
        (
          setSelectedPlayers([...selectedPlayers, player]),
          strCoin.innerText = (AvailableCoin - playerPrice),
          toast.success(('Player added successfully!'),{position:"top-left"},{autoClose: 2000})
          
        )
      }
      else{
        setSelectedPlayers([...selectedPlayers]),toast.error(('Player already selected!'),{position:"top-left"},{autoClose: 2000})
      }
    }
    else{
      toast.error(('Insufficient balance!'),{position:"top-left"},{autoClose: 2000})
    }
  }

  const deleteHandler = id => {
    const newPlayers = selectedPlayers.filter(newPlayer => newPlayer.id !== id);
    setSelectedPlayers(newPlayers);
    toast.info(('Player removed successfully!'),{position:"top-left"},{autoClose: 2000})
  };

  const handleAvailableClick = () =>{
    setIsAvailable(true); 
  };

  const handleSelectedClick = () => {
    setIsAvailable(false);
  };

 

  return (
    <>
      <Header coinHandler={HundleCoin}></Header>
      <AvailableAndSelect  isAvailable={isAvailable} AvailableClick={handleAvailableClick} SelectedClick={handleSelectedClick} totalSelected={selectedPlayers.length} ></AvailableAndSelect> 
      <AllPlayers chosePlayer={choseHandler}  isActive={isAvailable} ></AllPlayers>
      <AvailSelectPlayers players={selectedPlayers} deleteHandler={deleteHandler} isActive={isAvailable} AvailableClick={handleAvailableClick} ></AvailSelectPlayers>
      <NewsLatter></NewsLatter> 
      <Footer></Footer> 
      
    
    </>
  );
}

export default App;

