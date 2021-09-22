import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `NewsReact - ${this.props.category}`;
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99f25f26016f46a188d21f22c4ec9267&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); // This in itself is a promise to parse the incomeing data to JSON
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    //componentDidMount runs at last after constructor and mount
    async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99f25f26016f46a188d21f22c4ec9267&page=1&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData); // This in itself is a promise to parse the incomeing data to JSON
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     })
        this.updateNews();
     }
    handlePreviousClick = async () => {
     
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
    handleNextClick = async () => {
       
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsReact - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem title={element.title} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
