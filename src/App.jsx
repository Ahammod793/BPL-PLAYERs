import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/HeaderFile";
import AvailableAndSelect from './components/AvailableAndSelect';
import AllPlayers from './components/main/all-Players';
import NewsLatter from './components/NewsLatter/newsLatter';
import Footer from './components/footer/Footer';
import AvailSelectPlayers from './components/main/SeletedPlayersCont';

function App() {
  
  function SelectedBTN(){
    const Selected=document.querySelector('#selected');
    Selected.classList.add('active');
    const nonSelected=document.querySelector('#available');
    nonSelected.classList.remove('active');
    document.querySelector('.selectedTitle').classList.remove('hidden');
    document.querySelector('.availTitle').classList.add('hidden');
  }
  function Available(){
      const NonSelected=document.querySelector('#selected');
      NonSelected.classList.remove('active');
      const Selected=document.querySelector('#available');
      Selected.classList.add('active');
      document.querySelector('.availTitle').classList.remove('hidden');
      document.querySelector('.selectedTitle').classList.add('hidden');
  }
  window.onload=function(){
    Available()
  }
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const choseHandler = players => {
    const newPlayer = [...selectedPlayers, players];
    setSelectedPlayers(newPlayer);

  }
  return (
    <>
      <Header></Header>
      <AvailableAndSelect available={Available} selected={SelectedBTN}></AvailableAndSelect>
      <AllPlayers chosePlayer={choseHandler}></AllPlayers>
      <AvailSelectPlayers players={selectedPlayers}></AvailSelectPlayers>
      <NewsLatter></NewsLatter>
      <Footer></Footer>
    </>
  )
}

export default App
