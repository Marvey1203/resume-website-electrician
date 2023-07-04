import logo from "./images/adriaan.svg"

const Nav = () => {
    return ( 
        <div className="w-full flex justify-center items-center py-5 px-5 flex-col md:flex-row gap-3">
            <div className="md:w-1/3 w-full flex justify-center items-center">
                <div className="w-full flex items-center flex-row justify-center">
                    <svg className="w-5 text-blue-800" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                    </svg>
                    <img className="w-20" src={logo} alt="Logo" />
                </div>
            </div>
            <div className="md:w-1/3 w-full flex items-center justify-center gap-5">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>

            <div className="md:w-1/3 w-full flex justify-center items-center">
                <button className="font-normal text-xs text-white py-1 px-4 rounded-3xl flex justify-center items-center uppercase bg-blue-800 ">sign up</button>
            </div>

        </div>
     );
}
 
export default Nav;