import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/HeaderFile";
import AvailablePlayers from './components/Available';
import allPlayers from './components/main/all-Players';
import AllPlayers from './components/main/all-Players';
import NewsLatter from './components/NewsLatter/newsLatter';
import Footer from './components/footer/Footer';

function App() {
  
  function SelectedBTN(){
    const Selected=document.querySelector('#selected');
    Selected.classList.add('active');
    const nonSelected=document.querySelector('#available');
    nonSelected.classList.remove('active');
    document.querySelector('.selectedTitle').classList.remove('hidden');
    document.querySelector('.availTitle').classList.add('hidden');
    let selectedPlayers = (document.querySelector(".SelectedPlayers").innerText);
    console.log("Selected")
  }
  function Available(){
      const NonSelected=document.querySelector('#selected');
      NonSelected.classList.remove('active');
      const Selected=document.querySelector('#available');
      Selected.classList.add('active');
      document.querySelector('.availTitle').classList.remove('hidden');
      document.querySelector('.selectedTitle').classList.add('hidden');
      console.log("Available")
  }
  window.onload=function(){
    Available()
  }
  return (
    <>
      <Header></Header>
      <AvailablePlayers available={Available} selected={SelectedBTN}></AvailablePlayers>
      <AllPlayers></AllPlayers>
      <NewsLatter></NewsLatter>
      <Footer></Footer>
    </>
  )
}

export default App
