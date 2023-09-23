import React from "react";
import imagen01 from "../assets/01.jpg";
import imagen02 from "../assets/2.jpg";
import "../css/Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner container-carousel">
        <div className="carousel-item active">
          <img src={imagen01} className="d-block w-100" alt="chatgpt" />
        </div>
        <div className="carousel-item">
          <img src={imagen02} className="d-block w-100" alt="chatgpt" />
        </div>
        <div className="overlay">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
            <h3 className="text-center">
              Conoce a ChatGPT - La Inteligencia Artificial
            </h3>
            <button className="btn btn-outline-light btn-md">
              Probar ChatGPT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
