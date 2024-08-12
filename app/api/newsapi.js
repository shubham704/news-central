"use client";
import { Main } from 'next/document';
import '../styles/style.css'
import Link from 'next/link';
// import '../styles/bootstrap.css'

import { useState, useEffect } from "react";

export default function Articles({query}) {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (url) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=relevancy&apiKey=bc205442472a4a35afe50184f0e45751`
      );
      const articleData = await response.json();
      return articleData.articles
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

 
  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles || []);
    };

    loadArticles();
  }, [query]);


  return (
    <main>
      
      <ul className="news-list">
            {articles.map((article, index) => (
              <li key={index} className="news-item">
                    <div className="news-card">
                        <img src={article.urlToImage} alt={article.title} className="news-image" />
                        <div className="news-content">
                            <h2 className="news-title">{article.title}</h2>
                            <p className="news-description">{article.description}</p>
                            <Link className="read-more" href={`../article-page?url=${article.url}`}>
                            Read more
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    
  </main>
  );
}
