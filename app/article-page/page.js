"use client"
import { Suspense } from 'react';
import "../styles/article-page.css"
import Header from "../header/header";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Footer from "../footer/footer";
import Articles from "../api/newsapi";

function ArticlePageSuspense() {
  const router = useRouter();
  const [matchedArticle, setMatchedArticle] = useState(null);
  const searchParams = useSearchParams();

  const [articleURL, setArticlesURL] = useState(
       () => searchParams.get('url') || ""
      
      );

  useEffect(() => {
      if (router.isReady) {
        setArticlesURL(searchParams.get('url') || '');
        // setSearchQuery((router.query && router.query.q) ?? "");
      }
    }, [router.isReady, useSearchParams]);

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
      `https://newsapi.org/v2/everything?q=politics&language=en&sortBy=relevancy&apiKey=${api}`
    );
    if (!response.ok) {
      console.log("API failed, trying next API");
      continue;
    }
    const articleData = await response.json();
    const matchedArticle = articleData.articles.find(article => article.url === articleURL);
    return matchedArticle;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}
console.log("All APIs failed");
};


  const loadArticles = async () => {
    const fetchedArticles = await fetchArticles(articleURL);
    setMatchedArticle(fetchedArticles || []);
  };

  loadArticles();

console.log(matchedArticle)
  return (
    <main>
    {matchedArticle && (
      <>
      <Header></Header>
      
<div class="container">
  <div class="header">
<h1>{matchedArticle.title}</h1>
  </div>

  <div class="author-info">
      <div>
          <strong>By {matchedArticle.author}</strong><br />
      {matchedArticle.publishedAt}
      </div>
      <img src="https://via.placeholder.com/50" alt="Author Image" />
  </div>

  <img src={matchedArticle.urlToImage} alt="Article Image" class="article-image" />

  <div class="article-content">
      <p>{matchedArticle.content}</p>
  </div>
  <div class="share-container">
      <button class="share-btn">Share</button>
      <div class="share-menu">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/article" target="_blank">Share on Facebook</a>
          <a href="https://twitter.com/intent/tweet?text=Check out this article!&url=https://yourwebsite.com/article" target="_blank">Share on Twitter</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com/article" target="_blank">Share on LinkedIn</a>
      </div>
  </div>
  <div class="related-articles">
      <h3>Related Articles</h3>
      <ul>
          <li><a href="#">How Artificial Intelligence is Changing the World</a></li>
          <li><a href="#">The Future of Renewable Energy</a></li>
          <li><a href="#">Advancements in Healthcare Technology</a></li>
          <li><a href="#">The Role of Social Media in Modern Society</a></li>
      </ul>
  </div>
  <div class="footer">
      &copy; 2024 News Website. All rights reserved.
  </div>
</div>
<Footer></Footer>

  </>
  )};
  </main>
  );
}
const ArticlePage = () => {
<Suspense fallback={<div>Loading...</div>}>
  <ArticlePageSuspense />
</Suspense>
}
export default ArticlePage;
