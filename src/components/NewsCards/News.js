import NewsCard from './NewsCard'
import {GlobalContext} from '../../GlobalState/GlobalState'
import {useEffect, useContext, useState} from 'react'
import Loading from '../Loading/Loading';
import NoResul from '../NoResult/NoResul';

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
    const [noResult, setNoResult] = useState(false);
    const {news, getNews, loadingNews, filters, noParams} = useContext(GlobalContext);
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
            if(selectedFilters.length !== 0){
                setNoResult(false);
                selectedFilters = selectedFilters.join();
                getNews(selectedFilters);
            }
            else{
                // SET_EVERYTHING TO EMPTY
                noParams();
                setNoResult(true);
                console.log("EMPTY");    
            }
        // }
        // eslint-disable-next-line
    },[filters])

    return (
        <div>
            {
                noResult ? <><NoResul /> </>
                :
                    !loadingNews ? 
                    <div className='news-container'>
                    {
                        news.map((news, index) => {
                        return (<NewsCard 
                            key={index} 
                            news={news} 
                            />)
                        }
                        )
                    } 
                    </div>
                    :
                    <><Loading /></>
            }
        </div>
    )
}

export default News
