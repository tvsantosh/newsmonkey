import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    this.observer = React.createRef();
    document.title="NewsMonkey-"+this.props.category;
  }

  async fetchNews(page = 1) {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d70272543a41539e025429e6c7ab23&page=${page}&pageSize=${this.props.pageSize}`;

    try {
      let data = await fetch(url);
      let original = await data.json();
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...original.articles],
        loading: false,
        totalResults: original.totalResults,
        page: page,
        
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
   
}

  componentDidMount() {
    this.fetchNews();
    this.setupObserver();
    
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country ||
      prevProps.pageSize !== this.props.pageSize
    ) {
      this.setState({ articles: [], page: 1 }, () => this.fetchNews(1));
    }
  }

  setupObserver = () => {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.state.loading && this.state.articles.length < this.state.totalResults) {
        this.fetchNews(this.state.page + 1);
      }
    });
    if (this.loaderRef) {
      this.observer.observe(this.loaderRef);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines
        </h2>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItems
                title={element.title ? element.title : "The title is not detected"}
                description={element.description ? element.description.slice(0, 100) : "No description found"}
                imgurl={element.urlToImage ? element.urlToImage : "no-image found"}
                newsUrl={element.url ? element.url : "#"}
                author={element.author? element.author : "No author found"}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        {this.state.loading && <h4 className="text-center">Loading...</h4>}
        <div ref={(el) => (this.loaderRef = el)}></div>
      </div>
    );
  }
}

export default News;
