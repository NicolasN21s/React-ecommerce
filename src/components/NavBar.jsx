import React from "react";
import StyleNavBar from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoPantheon from "../img/logo.svg";
import CelularesTitle from "../img/celulares.svg";
import ComputadorTitle from "../img/computadores.svg";
import VideojuegoTitle from "../img/videojuegos.svg";
import AudioTitle from "../img/audio.svg";
import { BsFillPersonFill, BsCart2 } from "react-icons/bs";
import Buscador from "./Buscador";

const NavBar = () => {
  return (
    <nav className={StyleNavBar.header}>
      <Link to="/">
        <img src={LogoPantheon} alt="" />
      </Link>
      <Link className={StyleNavBar.celulares} to="/celulares">
        <img src={CelularesTitle} alt="celulares" />
      </Link>
      <Link className={StyleNavBar.computadores} to="/computadores">
        <img src={ComputadorTitle} alt="computadores" />
      </Link>
      <Link className={StyleNavBar.consolas} to="/consolas">
        <img src={VideojuegoTitle} alt="videojuegos" />
      </Link>
      <Link className={StyleNavBar.audio} to="/audio">
        <img src={AudioTitle} alt="audio" />
      </Link>
      <Buscador className={StyleNavBar.buscar}/>
      <Link className={StyleNavBar.logo} to="/login">
        <BsFillPersonFill />
      </Link>
      <Link className={StyleNavBar.carrito} to="/carro">
        <BsCart2 />
      </Link>
    </nav>
  );
};

export default NavBar;
