"use client"

import { useState } from "react";

export default function Articles(){
  const [article, setArticle] = useState([]); 

  const fetchArticles = async () => {
    try{
      const response = await fetch("https://newsapi.org/v2/everything?q=Apple&apiKey=22e63dc207ab4724a1ebe6a5857af966"

      );
      const articleData = await response.json();
      return articleData.article;

    }catch(err){
      console.error("error fetching articles:",error);
    }
  };
 
  
  const loadArticles = async () =>{
    const articles = await fetchArticles();
    setArticle(articles || []);
  }

  return (
    <div>
      <button onClick={loadArticles}>Load Articles</button>
      <ul>
        {article.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
          ))}
          </ul>
          </div>
          );
}