import React, { useRef, useEffect } from "react";
import "./carousel.css";
import { ReactComponent as LeftArrow } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as RightArrow } from "../../assets/iconmonstr-angel-right-thin.svg";

function Carousel() {
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
            <img src="" alt="imagen 1" />
          </a>
          <p className="textoSlide">
            JPMorgan Chase elige Tableau para ofrecer análisis de autoservicio y
            seguir el vertiginoso ritmo de los cambios en el sector
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src="" alt="imagen 2" />
          </a>
          <p className="textoSlide">
            Whole Foods Market democratiza el acceso a los datos en sus 460
            tiendas para 18 000 empleados gracias a Tableau
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src="" alt="imagen 3" />
          </a>
          <p className="textoSlide">
            Red Hat adopta el Blueprint de Tableau y Tableau Online, y
            profundiza en la cultura de datos con más de 4500 empleados en menos
            de un año
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src="" alt="imagen 4" />
          </a>
          <p className="textoSlide">
            Verizon usa Tableau para reducir las llamadas de soporte en un 43 %
            y así mejorar la experiencia del cliente
          </p>
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
