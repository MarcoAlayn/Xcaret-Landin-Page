/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import "./carousel.css";
import { ReactComponent as LeftArrow } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as RightArrow } from "../../assets/iconmonstr-angel-right-thin.svg";
import { useSelector } from "react-redux";

function Carousel({ img }) {
  const lang = useSelector((state) => state.lang);
  const allData = useSelector((state) => state.allData);

  const espCarousel = allData?.es?.carousel?.desktop;
  const engCarousel = allData?.en?.carousel?.desktop;

  const image0ne = lang === "es" ? espCarousel?.[0] : engCarousel?.[0];
  const imageTwo = lang === "es" ? espCarousel?.[1] : engCarousel?.[1];
  const imageThree = lang === "es" ? espCarousel?.[2] : engCarousel?.[2];
  const imageFour = lang === "es" ? espCarousel?.[3] : engCarousel?.[3];
  const imageFive = lang === "es" ? espCarousel?.[4] : engCarousel?.[4];
  const imageSix = lang === "es" ? espCarousel?.[5] : engCarousel?.[5];

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
  }, []);

  return (
    <div className="ContenedorPrincipal">
      <div className="contenedorSlideshow" ref={slideshow}>
        <div className="slide">
          <a href="#">
            <img src={image0ne?.src} alt={image0ne?.alt} />
          </a>
          <p className="textoSlide">{image0ne?.alt}</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imageTwo?.src} alt={imageTwo?.alt} />
          </a>
          <p className="textoSlide">{imageTwo?.alt}</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imageThree?.src} alt={imageThree?.alt} />
          </a>
          <p className="textoSlide">{imageThree?.alt}</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imageFour?.src} alt={imageFour?.alt} />
          </a>
          <p className="textoSlide">{imageFour?.alt}</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imageFive?.src} alt={imageFive?.alt} />
          </a>
          <p className="textoSlide">{imageFive?.alt}</p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imageSix?.src} alt={imageSix?.alt} />
          </a>
          <p className="textoSlide">{imageSix?.alt}</p>
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
