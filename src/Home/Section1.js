import assets from "../assets/index";

export default function Section1() {
   return (
      <div className="flex justify-around items-center h-screen bg-yellow-100">
         <div className="">
            <h1 className="font-sans font-bold text-7xl leading-loose">
               Rocket Single <br /> Seater
            </h1>
            <br />
            <br />
            <br />
            <p className="text-[25px] font-medium">
               Shop Now <br />
               <hr className="w-32 border-black" />
            </p>
         </div>

         <img
            className="w-[600px] -rotate-8 scale-x-[-1] filter drop-shadow-[-20px_20px_10px_rgba(0,0,0,0.5)]"
            src={assets.chair}
            alt=""
         />
      </div>
   );
}
