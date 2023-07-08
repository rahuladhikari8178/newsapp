import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category.trim()}&apiKey=${
      props.apiKey
    }&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    //eslint disable next line
  }, []);

  // handlePrevClick = async()=>{
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category.trim()}&apiKey=53ea0ffa82d149de9969bf442573ccb7&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  // let data = await fetch(url)
  //  this.setState({ loading: true });
  // let parsedData = await data.json()
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading:false
  // });
  //    setPage(page - 1);
  //    updateNews();

  // }

  // handleNextClick = async()=>{
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category.trim()}&apiKey=53ea0ffa82d149de9969bf442573ccb7&page=${ this.state.page + 1}&pageSize=${props.pageSize}`;
  //    this.setState({ loading: true });
  //     let data = await fetch(url)
  //     let parsedData = await data.json()
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading : false
  //     });
  //   }
  //    setPage(page + 1);
  //    updateNews();

  // }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category.trim()}&apiKey=${
      props.apiKey
    }&page=${page + 1}&pageSize=${props.pageSize}`;
     setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
  };
  return (
      <>
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinner/>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ?element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
       </>
    
  );
  
}

   News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "gernel",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News