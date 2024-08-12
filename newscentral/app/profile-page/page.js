"use client"
import "../styles/profile.css"
import "../styles/bootstrap.css"
import Header from "../header/header"
import { useUserAuth } from "../login-page/_utils/auth-context"
export default function ProfilePage(){

    const {user} = useUserAuth();
    console.log(user)
    return(
        <>
        <Header></Header>
<div class="container p-11">
  <div class="row justify-content-center">
          
        {user ? (
        <div class="col-6 uxa-form-group mt-5">
            <div class="uxa-user-avatar">
            <img src={user.photoURL} alt="User avatar" />
            </div>
            <h1 class="text-center mt-5 mb-2">{user.displayName}</h1>
            <p class="lead text-center">{user.email}</p>
            </div>
        ): (
            <p>Error loading details</p>
        )}
  </div>
</div>
        </>
    );
}