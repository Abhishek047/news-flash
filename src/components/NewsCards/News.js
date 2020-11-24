import NewsCard from './NewsCard'
import {GlobalContext} from '../../GlobalState/GlobalState'
import {useEffect, useState, useContext} from 'react'

function News() {
    // const news = [
    //     {
    //         author: "CNN Staff",
    //         title: "This may be the big winner of the market crash",
    //         description: "This may be the big winner of the market crash",
    //         url: "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
    //         source: "CNN",
    //         image: "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/Trevor-Lawrence4.jpg",
    //         category: "general",
    //         language: "en",
    //         country: "us",
    //         published_at: "2020-07-17T23:35:06+00:00"
    //     },
    //     {
    //         author: "CNN Staff",
    //         title: "This may be the big winner of the market crash",
    //         description: "This may be the big winner of the market crash",
    //         url: "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
    //         source: "CNN",
    //         image: "https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-169.jpg",
    //         category: "general",
    //         language: "en",
    //         country: "us",
    //         published_at: "2020-07-17T23:35:06+00:00"
    //     },
    //     {
    //         author: "CNN Staff",
    //         title: "This may be the big winner of the market crash",
    //         description: "This may be the big winner of the market crash",
    //         url: "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
    //         source: "CNN",
    //         image: "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/Trevor-Lawrence4.jpg",
    //         category: "general",
    //         language: "en",
    //         country: "us",
    //         published_at: "2020-12-17T23:35:06+00:00"
    //     },
    //     {
    //         author: "CNN Staff",
    //         title: "This may be the big winner of the market crash",
    //         description: "This may be the big winner of the market crash",
    //         url: "http://rss.cnn.com/~r/rss/cnn_topstories/~3/KwE80_jkKo8/a-sa-dd-3",
    //         source: "CNN",
    //         image: "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/Trevor-Lawrence4.jpg",
    //         category: "general",
    //         language: "en",
    //         country: "us",
    //         published_at: "2020-12-17T23:35:06+00:00"
    //     },
    // ];
    
    const {news, getNews, loadingNews, filters} = useContext(GlobalContext);
    useEffect(()=>{
        if(news !== null){
            // getNews('general');  
        }
    // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        // if(loadingNews === false)
        // {
            let selectedFilters=[];
            filters.forEach(item => {
                if(item.value === true)
                {
                    selectedFilters = [item.name,...selectedFilters];
                }
            }
            )
            if(selectedFilters){
                selectedFilters = selectedFilters.join();
                console.log(selectedFilters);
                getNews(selectedFilters);
            }
            else{
                // SET_EVERYTHING TO EMPTY
                console.log("EMPTY");    
            }
        // }
    },[filters])

    return (
        <div className='news-container'>
            {loadingNews}
            {
                !loadingNews ? 
                news.map((news, index) => {
                return (<NewsCard 
                    key={index} 
                    news={news} 
                    />)
                }
                ) 
                :
                <div>Loading...</div>
            }
        </div>
    )
}

export default News
