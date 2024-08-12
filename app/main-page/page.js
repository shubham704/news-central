import Header from "../header/header";
import Articles from "../api/newsapi";
import Footer from "../footer/footer";
export default function MainPage(){
  
    return (
        <div className="main-page">
            <Header></Header>
            <Articles query={'politics'}></Articles>
            <Footer></Footer>
        </div>
    );
}