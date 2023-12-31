import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"
import '../styles/styles.css';
import { LanguajeIcon } from './LangIcon';





export const Header: React.FC = () => {

    const $LangMode = useStore(LangMode);


    return (

        <nav className="flex p-4 w-screen items-center justify-between bg-gradient-to-t from-zinc-900 to-zinc-900/95 select-none max-phone:flex-col" id="home">

            <div className="flex ml-2 items-center max-sm:ml-1 max-phone:mb-2">

                <span className='ml-2 text-4xl font-bold cursor-default max-sm:ml-0 logo-gradient-dark'> fM </span>

                <div className="ml-10 flex max-sm:ml-0">
                    <div className='navbar-items  duration-200 font-bold rounded-full logo-gradient-dark'>
                        <a href="#technologies" className="ml-10 ">
                            {$LangMode ? 'Tecnologías' : 'Technologies'}
                        </a>
                    </div>
                    <div className='navbar-items  duration-200 font-bold rounded-full logo-gradient-dark'>
                        <a href="#projects" className="ml-10">
                            {$LangMode ? 'Proyectos' : 'Projects'}
                        </a>
                    </div>
                    <div className='navbar-items  duration-200 font-bold rounded-full logo-gradient-dark'>
                        <a href="#contact" className="ml-10">
                            {$LangMode ? 'Contacto' : 'Contact'}
                        </a>
                    </div>
                </div>
            </div>

                <LanguajeIcon/>
        </nav>
    )
}
