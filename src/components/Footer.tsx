import gitIcon from "../../public/icons8-github.svg"
import INIcon from "../../public/icons8-linkedin.svg"
import { useStore } from '@nanostores/react';
import { LangMode } from "../store/LangStore"
import '../styles/styles.css';


export const Footer: React.FC = () => {

	const $LangMode = useStore(LangMode);


	return (
		<footer>
			<div className="bg-gradient-to-t from-zinc-900 to-zinc-900/90 min-h-[5rem] flex flex-1 flex-wrap w-screen bottom-0 items-center justify-center" id="contact">
				<div className="flex-row flex m-auto w-full h-full justify-evenly footer-text-gradient text-lg font-bold items-center max-md:flex-col max-md:gap-1 max-sm:mt-[5px]">
					<p>
						{$LangMode ?
							(<>
								Gracias por su tiempo !
							</>) :
							(<>
								Thanks for your time !
							</>)}

					</p>
					<div className="flex flex-row gap-8 items-center max-sm:flex-col max-sm:gap-1 max-sm:mb-[5px]">
						<span>
							{$LangMode ?
								(<>
									Mis datos:
								</>) :
								(<>
									Here you can contact me:
								</>)}
						</span>
						<ul className="flex flex-row gap-8 items-center max-phone:flex-col max-phone:mt-4 max-phone:gap-4">
							<div className="max-phone:flex max-phone:flex-row gap-6 flex">
								<li>
									<a href="https://www.linkedin.com/in/facundo-martinez-831775102/?locale=en_US" target="_blank" >
										<img src={INIcon.src} alt="Linkedin" className="hover:scale-105 hover:shadow-sm hover:shadow-cyan-300 transition-all duration-10000" />
									</a>
								</li>

								<li>
									<a href="https://github.com/faca1328" target="_blank" >
										<img src={gitIcon.src} alt="Git Hub" className="hover:scale-105 hover:shadow-sm hover:shadow-cyan-300 rounded-full transition-all duration-10000" />
									</a>
								</li>
							</div>

							<li>
								<p className="font-semibold max-phone:whitespace-normal max-phone:flex-wrap-reverse"> facundoivanmartinez@hotmail.com </p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}


