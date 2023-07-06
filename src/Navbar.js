import logo from "./assets/adriaan.svg"
import resume from "./assets/resume.pdf"

const Nav = () => {
    return ( 
        <div className="w-full flex justify-center items-center py-5 flex-col gap-5 md:flex-row lg:justify-between">
            <div className="md:w-1/3 w-full flex justify-center items-center">
                <div className="w-full flex items-center flex-row justify-center md:justify-start">
                    <svg className="w-7 md:w-5 lg:w-8 text-blue-800" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                    </svg>
                    <img className="w-25 md:w-20 lg:w-28" src={logo} alt="Logo" />
                </div>
            </div>
            <div className="md:w-1/3 w-full flex items-center justify-center gap-5">
                <a className="text-xl md:text-base lg:text-lg" href="/">Home</a>
                <a className="text-xl md:text-base lg:text-lg" href="/#about">About</a>
                <a className="text-xl md:text-base lg:text-lg" href="/#contact">Contact</a>
            </div>

            <div className="md:w-1/3 w-full flex justify-center items-center md:justify-end">
                <a href={resume} download>
                    <button className="lg:px-7 lg:py-2 font-normal text-base md:text-xs lg:text-base py-2 px-7 text-white md:py-1 md:px-4 rounded-3xl flex justify-center items-center  bg-blue-800 gap-2">
                        <svg className="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                        </svg>
                        <p>Resume</p>

                    </button>
                </a>
                
                
            </div>

        </div>
     );
}
 
export default Nav;