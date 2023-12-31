import photo from '../../public/Photo.jpeg';
import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"
import '../styles/styles.css';


export const Body: React.FC = () => {
    
    const $LangMode = useStore(LangMode);
    


    return (
        <>
            <div className="flex w-screen relative h-[35rem] min-h-fit">
                <div className="flex-1 bg-zinc-800 relative max-phone:h-full">
                    <div
                        className="w-[50%] h-full absolute top-[15%] ml-16 max-md:w-[85%] max-sm:top-[10%] max-phone:top-4 max-phone:-left-6 max-phone:text-center"
                    >
                        <h1 className="text-orange-100/80 text-4xl max-phone:text-2xl">
                            {
                                $LangMode ? (
                                    <>
                                        Hola! mi nombre es{" "} <br />
                                        <span className="font-serif text-5xl font-semibold text-orange-400/70 max-phone:text-4xl">
                                            Facundo Martinez
                                        </span>
                                        <>
                                            <br />
                                        </>{" "}
                                        y soy{" "}
                                        <span className="logo-gradient-dark font-medium text-[2.5rem]">
                                            Front-End
                                        </span>{" "}
                                        Web Developer
                                    </>
                                ) : (
                                    <>
                                        Hi , my name is{" "} <br />
                                        <span className="font-serif text-5xl font-semibold text-orange-400/70 max-phone:text-2xl">
                                            Facundo Martinez
                                        </span>
                                        <>
                                            
                                            <br />
                                        </>{" "}
                                        and I am a{" "}
                                        <span className="logo-gradient-dark font-medium text-[2.5rem] max-phone:text-2xl ">
                                            Front-End
                                        </span>{" "}
                                        Web Developer
                                    </>
                                )
                            }
                        </h1>
                        <p className="text-orange-100/80 text-xl mt-6">
                            {
                                $LangMode ? (
                                    <>
                                        Mi principal objetivo es crecer y desarrollarme
                                        en un campo que ofrezca continuos desafíos y
                                        aprendizaje constante.{" "}
                                        <>
                                            <br />
                                            <span className="text-orange-300/75 underline">
                                                Soy una persona creativa, apasionada por
                                                el desarrollo web, a la que le encanta
                                                innovar y resolver problemas.
                                            </span>
                                        </>{" "}
                                        <br />
                                        Además, soy confiable, trabajador, y busco
                                        mostrar mis ideas y capacidades de manera
                                        eficiente y útil.
                                    </>
                                ) : (
                                    <>
                                        My main objective is to grow and develop in a
                                        field that offers continuous challenges and
                                        constant learning.{" "}
                                        <span className="text-orange-300/75 underline">
                                            I am a creative person passionate about web
                                            development who loves to create new things
                                            and solve problems.
                                        </span>{" "}
                                        Additionally, I am trustworthy and hardworking,
                                        and I aim to show my ideas and capabilities in
                                        an efficient and useful manner.
                                    </>
                                )
                            }
                        </p>
                    </div>
                </div>
                <div className="absolute -right-1/4 top-[20%] justify-items-center max-md:hidden">
                    <img
                        src={photo.src}
                        alt="Facundo Martinez"
                        className="object-cover max-w-[40%] h-[50%] rounded-full"
                    />
                </div>
            </div>
        </>
    )
}


