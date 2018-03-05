import React, {Component} from 'react';
import NewSingle from './NewSingle';
require('dotenv').config();

class News extends Component {
    constructor (props) {
        super(props);
        this.state = {
            news: [],
    }
}

componentDidMount() {

    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/${this.props.news.type}?sources=${this.props.news.source}&apiKey=` + api_key;


        fetch(url)
            .then((response)=>{
                return response.json();
        })
            .then((data)=> {
                this.setState({
            news: data.articles
    }

    )
    })
    .catch((error)=> console.log(error));
}


    renderItems(){
        return this.state.news.map((item)=> (
            <NewSingle key={item.url} item={item}  />
        ));
    }



    render() {
        return (
            <div className="row">

            {this.renderItems()}
            </div>
        );
    }
}

export default News;
