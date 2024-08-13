"use client"
import Header from "../header/header";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Articles from "../api/newsapi";
import Footer from "../footer/footer";

const Search = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState(
         () => searchParams.get('q') || ""
        
        );

    useEffect(() => {
        if (router.isReady) {
          setSearchQuery(searchParams.get('q') || '');
          // setSearchQuery((router.query && router.query.q) ?? "");
        }
      }, [router.isReady, useSearchParams]);

    return (
        <div className="Search-Page">
            <Header></Header>
            <Articles query={searchQuery}></Articles>
            <Footer></Footer>
        </div>
    );
};

export default Search;

