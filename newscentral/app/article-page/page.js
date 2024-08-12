"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
 
export default function ArticlePage(){
    const router = useRouter();
    const { url } = router.query;
    const [article, setArticle] = useState(null);
 
   
        if (url) {
            // Fetch the article details using the url
            fetch(url)
                .then(response => response.json())
                .then(data => setArticle(data));
        }
 
    return(
        <h1>
        {article.url}
        </h1>
    )
}
 
