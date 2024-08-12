"use client"
import "../styles/header.css"
import { useUserAuth } from "../login-page/_utils/auth-context.js";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();
    const { firebaseSignOut } = useUserAuth();

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
            <header className="bg-gray-800 text-white">
                <div className="flex justify-between items-center p-4 bg-gray-900">
                    <div className="text-2xl font-bold">NewsCentral</div>
                    <div className="flex-grow mx-4">
                        <form 
                            onSubmit={handleSubmit} 
                            className="flex justify-center items-center space-x-2"
                        >
                            <input 
                                type="text" 
                                required
                                placeholder="Search..."  
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-full px-4 py-2 rounded-md text-gray-900"
                            />
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline" onClick={SignOut}>Sign Out</a>
                        <a href="../profile-page" className="hover:underline">My Profile</a>
                    </div>
                </div>
                <nav className="bg-gray-800">
                    <div className="flex justify-center space-x-6 p-4">
                        <a href="./main-page" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">World</a>
                        <a href="#" className="hover:text-gray-400">Politics</a>
                        <a href="#" className="hover:text-gray-400">Business</a>
                        <a href="#" className="hover:text-gray-400">Technology</a>
                        <a href="#" className="hover:text-gray-400">Sports</a>
                        <a href="#" className="hover:text-gray-400">Entertainment</a>
                        <a href="#" className="hover:text-gray-400">Opinion</a>
                    </div>
                </nav>
                <div className="bg-red-600 text-white text-center py-2 font-bold">
                    Breaking News: Major Event Happening Now!
                </div>
            </header>
        </main>
    );
}

export default Header;