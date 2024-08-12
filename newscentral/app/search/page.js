"use client"
import articles from "../api/newsapi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Search(){
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
  
    useEffect(() => {
      if (router.isReady) {
        setSearchValue(router.query.q);
        // You can use searchValue to trigger a search or API call here
        console.log("Search value extracted from URL:", router.query.q);
      }
    }, [router.isReady && router.query]);
  
    return (
      <div>
        <h1>Search Results for: {searchValue}</h1>
        {/* Implement your search results logic here */}
      </div>
    )
}
