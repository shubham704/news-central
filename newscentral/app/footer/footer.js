"use client"
import "../styles/footer.css"
import { useUserAuth } from "../login-page/_utils/auth-context.js";
import MainPage from "../main-page/page";
import Search from "../search/page";
import { useState } from "react";
import { useRouter } from 'next/navigation';
const Footer = () => {
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
        <footer class="bg-gray-800 text-white mt-auto">
        <div class="container mx-auto py-8 px-4">
            <div class="flex flex-wrap justify-between">
                
                <div class="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 class="text-xl font-bold mb-4">About Us</h5>
                    <p class="text-sm">NewsCentral is your source for the latest news and updates from around the world. Stay informed with our comprehensive coverage and in-depth analysis.</p>
                </div>

               
                <div class="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 class="text-xl font-bold mb-4">Contact Us</h5>
                    <p class="text-sm">123 14 Street, Calgary, AB T2H4R5</p>
                    <p class="text-sm">Email: contact@newscentral.com</p>
                    <p class="text-sm">Phone: (123) 456-7890</p>
                    </div>
               
                <div class="w-full md:w-1/4">
                    <h5 class="text-xl font-bold mb-4">Follow Us</h5>
                    <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Facebook">
                     <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
                        <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11.5"/><path d="M15.84 9.5H13.5V8.48c0-.53.35-.65.6-.65h1.4v-2.3h-2.35c-2.3 0-2.65 1.7-2.65 2.8V9.5h-2v2h2v7h3v-7h2.1l.24-2z"/></svg>
                        </div>Facebook</div>
                   </a>
                    <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="Twitter">
                    <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium">
                        <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M18.5 7.4l-2 .2c-.4-.5-1-.8-2-.8C13.3 6.8 12 8 12 9.4v.6c-2 0-4-1-5.4-2.7-.2.4-.3.8-.3 1.3 0 1 .4 1.7 1.2 2.2-.5 0-1 0-1.2-.3 0 1.3 1 2.3 2 2.6-.3.4-.7.4-1 0 .2 1.4 1.2 2 2.3 2-1 1-2.5 1.4-4 1 1.3 1 2.7 1.4 4.2 1.4 4.8 0 7.5-4 7.5-7.5v-.4c.5-.4.8-1.5 1.2-2z"/>
                            <circle cx="12" cy="12" r="11.5"/></svg></div>Twitter</div>
                    </a>
                    <a class="resp-sharing-button__link" href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;caption=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;content=http%3A%2F%2Fsharingbuttons.io&amp;canonicalUrl=http%3A%2F%2Fsharingbuttons.io&amp;shareSource=tumblr_share_button" target="_blank" rel="noopener" aria-label="Tumblr">
                    <div class="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--medium">
                        <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11.5"/>
                        <path d="M12.5 4.5v3h2v2h-2v3.72c0 2.47 1.48 2.7 3 1.7v2.7c-4.1 1.92-6-.62-6-3.6V9.5h-2V8.14c.55-.18 1.24-.43 1.63-.77.4-.33.7-.73.94-1.2.24-.46.4-.95.5-1.67h1.93z"/>
                        </svg>
                        </div>Tumblr</div>
                    </a>
                </div>
            </div>
            <div class="text-center mt-8">
                <p class="text-sm">&copy; 2024 NewsCentral. All rights reserved.</p>
            </div>
        </div>
    </footer>
 
      
 
     </main>
        );
}
export default Footer;