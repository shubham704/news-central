"use client";
import { Main } from 'next/document';
import '../styles/style.css'
import Link from 'next/link';
// import '../styles/bootstrap.css'

import { useState, useEffect } from "react";

export default function Articles({query}) {
  const [articles, setArticles] = useState([]);
  const apiUrls = [
    '929064942e7a451f89b6cbb8c86f1ad1',
    'bc205442472a4a35afe50184f0e45751',
    '2947e985498b4dfaa67362cbae119282',
    '6be924e3a0a84415925f0d40380e8ecd',
    '8328ac1d24ce493bb3570aa8786118ee'
  ];
  const fetchArticles = async () => {
    for (let api of apiUrls) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=relevancy&apiKey=${api}`
      );
      if (!response.ok) {
        console.log("API failed, trying next API");
        continue;
      }
      const articleData = await response.json();
      return articleData.articles
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }
  console.log("All APIs failed");
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
