import Header from "./header";
import Articles from "../api/newsapi";

export default function MainPage(){
    return (
        <div className="main-page">
            <Header></Header>
            <Articles></Articles>
        </div>
    );
}