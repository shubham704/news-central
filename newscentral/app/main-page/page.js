import Header from "../header/header";
import Articles from "../api/newsapi";
 
export default function MainPage(){
  
    return (
        <div className="main-page">
            <Header></Header>
            <Articles query={'politics'}></Articles>
        </div>
    );
}