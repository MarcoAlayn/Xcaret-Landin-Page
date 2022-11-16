/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import "./carousel.css";
import { ReactComponent as LeftArrow } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as RightArrow } from "../../assets/iconmonstr-angel-right-thin.svg";
import { useSelector } from "react-redux";

function Carousel({ img }) {
  const currentLang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const images = () => {
    return currentLang[0] === "es"
      ? allData[0].es.carousel.desktop
      : allData[0].en.carousel.desktop;
  };

  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      // Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = "1000ms ease-out all";

      const slideTamaño = slideshow.current.children[0].offsetWidth;
      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${slideTamaño}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow a 0px.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0px)";

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    console.log("anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const slideTamaño = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideTamaño}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `1000ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);
    return () => {
      clearInterval(intervaloSlideshow.current);
    };
  }, [siguiente]);

  return (
    <div className="ContenedorPrincipal">
      <div className="contenedorSlideshow" ref={slideshow}>
        <div className="slide">
          <a href="#">
            <img src={images()?.[0].src} alt={images()?.[0].alt} />
          </a>
          <p className="textoSlide">image one</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={images()?.[1].src} alt={images()?.[1].alt} />
          </a>
          <p className="textoSlide">image two</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={images()?.[2].src} alt={images()?.[2].alt} />
          </a>
          <p className="textoSlide">image three</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={images()?.[3].src} alt={images()?.[3].alt} />
          </a>
          <p className="textoSlide">image four</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={images()?.[4].src} alt={images()?.[4].alt} />
          </a>
          <p className="textoSlide">image five</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={images()?.[5].src} alt={images()?.[5].alt} />
          </a>
          <p className="textoSlide">image six</p>
        </div>
      </div>
      <div className="controles">
        <button className="leftArrow" onClick={anterior}>
          <LeftArrow />
        </button>
        <button className="rightArrow" onClick={siguiente}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
