export default function Profile() {
   return (
      <div className=" text-center md:text-left mb-5 md:grid md:grid-cols-2 items-center md:p-10">
         <div className="">

            <p className="capitalize text-blue-700 font-semibold md:text-lg ">hello, my name is</p>
            <p className="md:text-4xl text-xl font-bold ">MUH. ALIFUPPEDUAI S</p>
            <p className="md:text-xl text-sm font-light mb-4">Web Developer & Front-End Developer</p>
         </div>
         <div className="justify-center items-center flex static">
            <div className="w-40 h-36 z-0 bg-blue-700 rounded-full absolute"></div>
            <img src="/profile.png" alt="" className="h-60 z-40" />
         </div>
      </div>
   )
}