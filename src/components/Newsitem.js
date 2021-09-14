import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div class="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 class ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href="/" className ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
// let apiKey = '99f25f26016f46a188d21f22c4ec9267';