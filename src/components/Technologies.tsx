import { Icons } from "./Icons";
import cssIcon from "../../public/icons8-css.svg";
import tailwindIcon from "../../public/icons8-viento-de-cola-css.svg";
import astroIcon from "../../public/icons8-astro.svg";
import fireBaseIcon from "../../public/icons8-firebase.svg";
import sassIcon from "../../public/icons8-hablar-con-descaro-a.svg";
import mySqlIcon from "../../public/icons8-logo-de-mysql.svg";
import tsIcon from "../../public/icons8-mecanografiado.svg";
import nodeIcon from "../../public/icons8-nodo-js.svg";
import viteIcon from "../../public/icons8-rapidamente.svg";
import reactIcon from "../../public/icons8-reaccionar.svg";
import bgImg from "../../public/bgimg.jfif";
import reduxImg from "../../public/icons8-redux.svg";
import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"
import '../styles/styles.css';




export const Technologies: React.FC = () => {

  const $LangMode = useStore(LangMode);

  return (


    <div id="technologies" className="flex w-screen relative h-[35rem] min-h-fit">
      <div className="flex-1 bg-zinc-700 relative max-phone:h-full">
        <div
          className="rounded-r-[30%] absolute w-[40%] z-50 -left-6 h-full items-center font-serif max-md:hidden bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
        </div>

        <div
          className="w-[50%] h-fit absolute top-[12%] right-12 max-md:w-[85%] max-sm:top-[10%] max-phone:top-4 max-phone:left-6 max-phone:text-center text-center bg-zinc-900/50 rounded-lg p-8"
        >
          <div>
            <h1 className="text-4xl py-1 font-bold gradient-dark">
              {
                $LangMode ? (
                  <>Mis tecnologías con más experiencia:</>
                ) : (
                  <>My main skills are:</>
                )
              }
            </h1>
            <div className="flex justify-between w-[75%] mx-auto mt-9 flex-wrap">
              <Icons icon={reactIcon} name={"React"} />
              <Icons icon={viteIcon} name={"Vite"} />
              <Icons icon={tsIcon} name={"TS"} />
              <Icons icon={tailwindIcon} name={"Tailwind"} />
              <Icons icon={reduxImg} name={"Redux Toolkit"} />
            </div>
          </div>
          <div className="mt-10 items-center">
            <p className="text-2xl mt-14 py-1 font-bold gradient-ligth">
              {
                $LangMode ? (
                  <>También soy competente con:</>
                ) : (
                  <>Additionally, I am proficient with:</>
                )
              }
            </p>
            <div className="flex items-center mt-9 justify-between flex-wrap">
              <Icons icon={cssIcon} name={"CSS"} />
              <Icons icon={sassIcon} name={"Sass"} />

              <Icons icon={fireBaseIcon} name={"FireBase"} />
              <Icons icon={mySqlIcon} name={"MySql"} />

              <Icons icon={astroIcon} name={"Astro"} />
              <Icons icon={nodeIcon} name={"NodeJs"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


