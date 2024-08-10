"use client";
import '../styles/style.css'
// import '../styles/bootstrap.css'

import { useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=business&apiKey=22e63dc207ab4724a1ebe6a5857af966"
      );
      const articleData = await response.json();
      return articleData.articles;
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const loadArticles = async () => {
    const fetchedArticles = await fetchArticles();
    setArticles(fetchedArticles || []);
  };

  return (
    <div>
      <button onClick={loadArticles}>Load Articles</button>
      <div>
      <ul className="news-list">
            {articles.map((article, index) => (
                <li key={index} className="news-item">
                    <div className="news-card">
                        <img src={article.urlToImage} alt={article.title} className="news-image" />
                        <div className="news-content">
                            <h2 className="news-title">{article.title}</h2>
                            <p className="news-description">{article.description}</p>
                            <a href={article.url} className="read-more">Read more</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
</div>
    </div>
  );
}
