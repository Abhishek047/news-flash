import {useState} from 'react'
import Svg from '../../img/2687659.jpg'
import {AnimatePresence, motion} from 'framer-motion'

function NewsCard({news, row}) {
    const [view, setView] = useState(false);
    // console.log(row,col);
    // ALL MOTHS NAME ARRAY
    const MONTHS = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    //EXTRACT DATE
    const cardStyle={
        backgroundImage: news.image !== null ? `url(${news.image})` : `url(${Svg})`,
        gridColumn: news.title.length > 50 ? 'span 2' : 'span 1'
    }
    function displayDate(date)
    {
        const dateArray = date[0].split("-");
        const newDate = `${dateArray[2]} ${MONTHS[parseInt(dateArray[1])-1]}, ${dateArray[0]}`
        return newDate;
    }

    return (
        <div className='news-card' 
        style={cardStyle} 
        onMouseEnter={() => setView(true)} onMouseLeave={() => setView(false)}>
            {/* <div className='news-card-image'></div> */}
            <div className='news-card-source'>
                <div className='source-name'>
                    {news.source}
                </div>
                <div className='publish-date'>
                   {displayDate(news.published_at.split("T", 1))}
                </div>
            </div>
            <div className='news-card-title'>
                {news.title}
            </div>
            <div className='news-card-desc'>
                {
                    (news.description.length > 50) ? <>{news.description.substring(0,50)}<>...</></> : news.description    
                }
            </div>
            {
                view && 
                <AnimatePresence>
                    <motion.button
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.5}}
                    className='btn-view'>
                    View Story
                    </motion.button>
                </AnimatePresence>
            }
            <div className='news-catagory'>
                Tags: {news.category}
            </div>
        </div>
    )
}

export default NewsCard
