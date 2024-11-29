import assets from "../assets/index";

export default function Navbar() {
   return (
      <nav className="bg-yellow-100 text-black flex justify-between px-10 py-4 ">
         <div className="w-48"></div>

         <ul className="flex align-middle justify-center gap-10 font-bold">
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  Home
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  Shop
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  About
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  Contact
               </a>
            </li>
         </ul>

         <ul className="flex align-middle justify-center gap-10 font-bold w-52 ">
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  <img src={assets.user} alt="user" />
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  <img src={assets.search} alt="search" />
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  <img src={assets.heart} alt="heart" />
               </a>
            </li>
            <li>
               <a href="#" className="hover:text-blue-500 transition-colors">
                  <img src={assets.cart} alt="cart" />
               </a>
            </li>
         </ul>
      </nav>
   );
}
