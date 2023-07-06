
const Hero = () => {
    return ( 
        <div className="w-full flex justify-center items-center flex-col md:flex-row md:py-10">
         <div className="w-full py-5 gap-7 flex justify-center items-center flex-col md:pr-3">
            <div className="flex gap-2 flex-col">
                <h4 className="text-4xl md:text-3xl lg:text-5xl font-semibold capitalize text-center md:text-left">Welcome to my portfolio website</h4>
                <div className="w-full bg-blue-800 h-1"></div>
            </div>
            
            <p className="font-light text-base text-center md:text-left">I am a student specializing in solar energy with practical experience as an electrician. I am passionate about sustainable solutions and have a deep understanding of electrical systems.</p>
            <div className="flex w-full flex-row justify-center md:justify-start items-start gap-7">
                <button className="py-2 px-3 lg:px-5 border border-blue-800 bg-blue-800 text-white rounded-3xl hover:bg-white hover:text-black  hover:border-blue-800">Learn more</button>
                <button className="py-2 px-6 lg:px-8 border-blue-800 border text-black rounded-3xl hover:bg-blue-800 hover:text-white ">Resume</button>
            </div>
            
         </div>
         <div className="w-full py-5 px-7 lg:px-0 lg:pl-7 gap-7 flex justify-center items-center flex-col">
            <div className="w-full flex flex-coll justify-center items-center lg:justify-end lg:items-end border-b-4 border-r-4 border-blue-800 md:border-none">
                <svg className="w-3/5 md:w-full stroke-1 flex md:justify-end justify-center items-center lg:stroke-blue-800" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                </svg>
            </div>

         </div>
        </div>
     );
}
 
export default Hero;