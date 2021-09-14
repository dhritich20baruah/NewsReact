import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
            <h2>NewsReact - Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                    <Newsitem title="myTitle" description="mydesc"/>
                </div>
                <div className="col-md-4">
                    <Newsitem title="myTitle" description="mydesc"/>
                </div>
                <div className="col-md-4">
                    <Newsitem title="myTitle" description="mydesc"/>
                </div>
            </div>   
            </div>
        )
    }
}

export default News
