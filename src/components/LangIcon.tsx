import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"

export const LanguajeIcon = () => {

  const $LangMode = useStore(LangMode);

  const languageModeEs = $LangMode === true?  'bg-white/20' : '';
  const languageModeEn = $LangMode === false?  'bg-white/20' : '';


  return (
    <div className="rounded-full items-center p-[2px] justify-between w-fit flex ml-auto mr-36 bg-white bg-opacity-10 gap-1 max-md:ml-2 max-phone:ml-5 max-md:mr-8 ">
        <button className={`p-1 px-2 font-semibold text-amber-100 rounded-full ${languageModeEs} transition-all duration-500`} onClick={()=> LangMode.set(true)}>
            es
        </button>
        <button className={`p-1 px-2 font-semibold text-cyan-100 rounded-full ${languageModeEn} transition-all duration-500`} onClick={()=> LangMode.set(false)} >
            en
        </button>
    </div>
  )
}