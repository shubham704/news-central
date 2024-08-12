"use client"
import "../styles/header.css"
import { useUserAuth } from "../login-page/_utils/auth-context.js";
import MainPage from "../main-page/page";
import Search from "../search/page";
import { useState } from "react";
import { useRouter } from 'next/navigation';
const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();


    const {firebaseSignOut} = useUserAuth();

    
      // Function to handle the form submission
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
            router.push(`../search?q=${encodeURIComponent(searchValue)}`);
          
      };

      
    async function SignOut() {
        try {
          await firebaseSignOut();
          window.location.href = "./";
        } catch (error) {
          console.log(error);
        }
      }
    return (
      <main>
 
      <header class="bg-gray-800 text-white">
             
             <div class="flex justify-between items-center p-4 bg-gray-900">
                 <div class="text-2xl font-bold">NewsCentral</div>
                 <div class="flex-grow mx-4">
                    <form 
                    onSubmit={handleSubmit} >
                     <input type="text" placeholder="Search..."  value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        class="w-full px-4 py-2 rounded-md text-gray-900" />
                        <button type="submit">Submit</button>
                        </form>
                 </div>
                        
                 <div class="flex space-x-4">
                     <a href="#" class="hover:underline" onClick={SignOut}>Sign Out</a>
                     <a href="../profile-page" class="hover:underline">My Profile</a>
                 </div>
             </div>
             
             <nav class="bg-gray-800">
                 <div class="flex justify-center space-x-6 p-4">
                     <a href="./main-page" class="hover:text-gray-400">Home</a>
                     <a href="#" class="hover:text-gray-400">World</a>
                     <a href="#" class="hover:text-gray-400">Politics</a>
                     <a href="#" class="hover:text-gray-400">Business</a>
                     <a href="#" class="hover:text-gray-400">Technology</a>
                     <a href="#" class="hover:text-gray-400">Sports</a>
                     <a href="#" class="hover:text-gray-400">Entertainment</a>
                     <a href="#" class="hover:text-gray-400">Opinion</a>
                 </div>
             </nav>
             <div class="bg-red-600 text-white text-center py-2 font-bold">
                 Breaking News: Major Event Happening Now!
             </div>
             </header>
              </main>
          );
}
export default Header;
