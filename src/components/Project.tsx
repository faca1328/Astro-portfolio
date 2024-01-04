import spotyVideo from "../videos/SpotifyProyect.webm"
import netflixVideo from "../videos/NetflixProyect.webm"
import todoVideo from "../videos/ToDoProyect.webm"
import shopVideo from "../videos/ShopingCartPractice.webm"
import dataVideo from "../videos/DataTablePractice.webm"
import userVideo from "../videos/NewUserPractice.webm"
import cssIcon from "../../public/icons8-css.svg"
import tailwindIcon from "../../public/icons8-viento-de-cola-css.svg"
import astroIcon from "../../public/icons8-astro.svg"
import fireBaseIcon from "../../public/icons8-firebase.svg"
import sassIcon from "../../public/icons8-hablar-con-descaro-a.svg"
import tsIcon from "../../public/icons8-mecanografiado.svg"
import nodeIcon from "../../public/icons8-nodo-js.svg"
import viteIcon from "../../public/icons8-rapidamente.svg"
import reactIcon from "../../public/icons8-reaccionar.svg"
import reduxIcon from "../../public/icons8-redux.svg"
import { Icons } from "./Icons"
import { useRef, useState } from "react"
import '../styles/animations.css'
import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"

export const Project = () => {
  const [portfolio, setPortfolio] = useState(true)
  const pTrue = portfolio ? 'bg-black/30' : '';
  const pFalse = portfolio ? '' : 'bg-black/30';

  const $LangMode = useStore(LangMode);
  //const langMode = true


  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const video3 = useRef<HTMLVideoElement>(null);
  const video4 = useRef<HTMLVideoElement>(null);
  const video5 = useRef<HTMLVideoElement>(null);
  const video6 = useRef<HTMLVideoElement>(null);

 
  
  return (
    <div className="flex w-screen bg-zinc-800 text-white flex-col h-full items-center pt-10" id="projects">
      <div className="rounded-full bg-gray-500 bg-opacity-20 items-center p-[2px] justify-between w-fit flex m-auto">
        <button className={`p-1 px-2 font-semibold text-amber-100 rounded-full cursor-pointer z-20 ${pTrue} transition-all duration-700 `} onClick={() => setPortfolio(true)}>
          {$LangMode ?
            (<>
              Proyectos
            </>) :
            (<>
              Projects
            </>)
          }
        </button>
        <button className={`p-1 px-2 font-semibold  text-cyan-100 rounded-full ml-2 cursor-pointer z-20 ${pFalse} transition-all duration-700`} onClick={() => setPortfolio(false)}>
          {$LangMode ?
            (<>
              Practicas
            </>) :
            (<>
              Practice
            </>)
          }
        </button>
      </div>
          
      <div className={`${portfolio ? 'transition-left-enter' : 'transition-right-enter'} inline-flex justify-center`}>
        {portfolio ? (

          <div className="inline-flex bg-zinc-700/30 px-5 rounded-xl my-10 gap-10 flex-wrap max-w-[85%] items-center pb-5 justify-evenly ">
            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit transition-all duration-150"
              onMouseEnter={() => video1.current?.play()}
              onMouseLeave={() => video1.current?.pause()}
            >
              <video className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" playsInline muted ref={video1} loop>
                <source src={spotyVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {$LangMode ?
                    (<>
                      Este es un clon básico de Spotify. El objetivo principal es la <span className="underline text-orange-200">modificación de la etiqueta 'audio' desde cualquier parte de la web. </span>Además, me concentro en un diseño simple, con transiciones suaves y la armonía entre los elementos con colores básicos.
                    </>) :
                    (<>
                      This is a basic clone of Spotify Web. Here, the main objective is the <span className="underline text-orange-200">modification of the 'audio' tag from any part of the web. </span>Also, I concentrate on a simple design with soft transitions and the harmony between the elements with basic colours.
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={tsIcon} name={'TS'} />
                  <Icons icon={tailwindIcon} name={'Tailwind'} />
                  <Icons icon={astroIcon} name={'Astro'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer warp" href="https://github.com/faca1328/Spoty-proyect-4" target="_blank" >
                    {$LangMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit transition-all duration-150"
              onMouseEnter={() => video2.current?.play()}
              onMouseLeave={() => video2.current?.pause()}
            >
              <video className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" playsInline muted ref={video2} loop>
              <source src="src/videos/NetflixProyect.webm" type="video/webm" />
              </video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {$LangMode ?
                    (<>
                      Este es un clon de la web de Netflix. En este proyecto me concentro principalmente en la combinación de todos los elementos que ofrece el sitio web original de Netflix, <span className="underline text-orange-200">como el registro de usuario, el inicio de sesión, el reproductor de películas y las solicitudes a una API</span>, entre otros.
                    </>) :
                    (<>
                      This is a clone of the Netflix Web. Here, I concentrate mostly on the combination of all the elements that the original website of Netflix offers, <span className="underline text-orange-200">such as user registration, log-in, the movie player, and requests to an API, </span>among others.
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={tsIcon} name={'TS'} />
                  <Icons icon={tailwindIcon} name={'Tailwind'} />
                  <Icons icon={fireBaseIcon} name={'FireBase'} />
                  <Icons icon={viteIcon} name={'Vite'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Ntf-clon-proyect3">
                    {$LangMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit transition-all duration-150"
              onMouseEnter={() => video3.current?.play()}
              onMouseLeave={() => video3.current?.pause()}
            >
              <video src={todoVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" playsInline muted ref={video3} loop ></video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {$LangMode ?
                    (<>
                      En esta lista de tareas pendientes, integro un estilo CSS y animaciones básico de forma precisa con todo el conocimiento adquirido en mis prácticas de React, JS y TS como <span className="underline text-orange-200">el uso de constantes, .filter, .map, arrays y gestión de objetos.</span>
                    </>) :
                    (<>
                      In this to-do list, I integrate a basic but correct CSS style and animations with all the knowledge that I've acquired from my practices in React, JS, and TS like the <span className="underline text-orange-200">use of constants, .filter, .map and arrays and object management.</span>
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={viteIcon} name={'Vite'} />
                  <Icons icon={cssIcon} name={'CSS'} />
                  <Icons icon={tsIcon} name={'TS'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/To-Do-List-ReactTS" >
                    {$LangMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

          </div>
        ) :
          (

            <div className="inline-flex bg-zinc-700/30 px-5 rounded-xl my-10 gap-10 flex-wrap max-w-[85%] items-center pb-5 justify-evenly">
              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit transition-all duration-150"
                onMouseEnter={() => video4.current?.play()}
                onMouseLeave={() => video4.current?.pause()}
              >
                <video src={shopVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted ref={video4} loop></video>
                <div className="text-center text-cyan-50 font-medium ">
                  <p>
                    {$LangMode ?
                      (<>
                        En esta práctica de un Carrito de Compras, utilizando el diseño del sitio web de Amazon, aprendí a usar <span className="underline text-cyan-200">'React Router Dom', el uso de un 'Proveedor de contexto' para conservar información en todas las páginas, y practiqué mis estilos CSS y el hook useEffect.</span>
                      </>) :
                      (<>
                        In this cart practice, using the design of the Amazon website, I learned to use <span className="underline text-cyan-200">'React Router Dom', the use of a 'Context Provider' to persist information along all the pages, and practice my CSS styles and the useEffect hook.</span>
                      </>)
                    }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={sassIcon} name={'Sass'} />
                    <Icons icon={viteIcon} name={'Vite'} />
                    <Icons icon={nodeIcon} name={'NodeJs'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Nuevo-Proyecto-React-Cart">
                      {$LangMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit transition-all duration-150"
                onMouseEnter={() => video5.current?.play()}
                onMouseLeave={() => video5.current?.pause()}
              >
                <video src={dataVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted ref={video5} loop></video>
                <div className="text-center text-cyan-50 font-medium">
                  <p>
                  {$LangMode ?
                        (<>
                          En esta tabla de datos, me concentro en aprender el uso de dos de las habilidades más importantes para mí en los próximos proyectos: <span className="underline text-cyan-200">el uso de Redux Toolkit y las bibliotecas.</span> Aquí los datos se pueden filtrar y ordenar de diversas formas.
                        </>) :
                        (<>
                         In this data table, I concentrate on learning the use of two of the most important skills for me in the projects to come: <span className="underline text-cyan-200">the use of the Redux Toolkit and libraries.</span> The data can be filtered and ordered in a variety of ways here.
                        </>)
                      }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={viteIcon} name={'Vite'} />
                    <Icons icon={tsIcon} name={'TS'} />
                    <Icons icon={tailwindIcon} name={'Tailwind'} />
                    <Icons icon={reduxIcon} name={'Redux'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/dataTable-Proyect-2">
                      {$LangMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit transition-all duration-150"
                onMouseEnter={() => video6.current?.play()}
                onMouseLeave={() => video6.current?.pause()}
              >
                <video src={userVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted ref={video6} loop></video>
                <div className="text-center text-cyan-50 font-medium">
                  <p>
                  {$LangMode ?
                        (<>
                          Esta es una de mis primeras prácticas, donde me concentro en <span className="underline text-cyan-200">integrar todos mis conocimientos de Js con React y Ts,</span> con las famosas funciones CRUD para listar nuevos usuarios. Además, aprendí a crear hooks personalizados.
                        </>) :
                        (<>
                          This is one of my first practices, where I concentrate heavily on <span className="underline text-cyan-200">integrating all my knowledge of Js in React and Ts,</span> all together with the famous CRUD functions for listing new users. Additionally, I learned how to create a custom hooks.
                        </>)
                      }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={tsIcon} name={'TS'} />
                    <Icons icon={reduxIcon} name={'Redux'} />
                    <Icons icon={viteIcon} name={'Vite'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Crud-Redux-practica4">
                      {$LangMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}
      </div>
    </div>
  )
}