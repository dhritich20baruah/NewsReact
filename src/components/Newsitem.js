import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://www.neophotonics.com/wp-content/uploads/2020/03/news-events.jpg"} className="card-img-top" alt="..." style={{height: '10rem'}}/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className ="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
// let apiKey = '99f25f26016f46a188d21f22c4ec9267';