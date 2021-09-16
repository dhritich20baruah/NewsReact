import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    //componentDidMount runs at last after constructor and mount
     async componentDidMount(){
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=99f25f26016f46a188d21f22c4ec9267&page=1&pageSize=21";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); // This in itself is a promise to parse the incomeing data to JSON
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }
    handlePreviousClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=99f25f26016f46a188d21f22c4ec9267&page=${this.state.page - 1}&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); // This in itself is a promise to parse the incomeing data to JSON
       
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
        
    }
    handleNextClick = async () =>{
        console.log('next');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/21)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=99f25f26016f46a188d21f22c4ec9267&page=${this.state.page + 1}&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); // This in itself is a promise to parse the incomeing data to JSON
       
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }}
    render() {
        console.log('render')
        return (
            <div className="container my-3">
                <h2>NewsReact - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem title={element.title} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
