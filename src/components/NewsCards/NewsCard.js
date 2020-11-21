function NewsCard({news}) {
    return (
        <div className='news-card'>
            <div className='news-card-image'></div>
            <div className='news-card-title'>
                {news.title}
            </div>
        </div>
    )
}

export default NewsCard
