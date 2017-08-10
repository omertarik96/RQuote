import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import QuoteDetail from "./components/quote-detail"

class App extends Component {
    constructor(props){
        super(props);

        this.getQuotes = this.getQuotes.bind(this);

        this.state = {
            quote: {}
        };
        
        this.getQuotes();
    }

    getQuotes() {
        axios.get('http://quotes.stormconsultancy.co.uk/random.json')
        .then((response) => {
            this.setState({
                quote: response.data
            })
        })
        .catch((error)=> console.log(error));
        
        let colors = ["#F44336", "#E91E63", "#3F51B5", "#2196F3", "#009688", "#FF5722"];

        let random = Math.floor(Math.random() * 5);

        console.log(random);

        document.body.style.transition = "all 2s";
        document.body.style.background = colors[random];
    }

    render(){
        const tweetURL = `https://twitter.com/intent/tweet?text=${this.state.quote.quote}`
        return (
            <div>
                <QuoteDetail 
                quote = {this.state.quote}
                getQuote = {()=> this.getQuotes()} />
                <button className="btn-quote" onClick={this.getQuotes} >New One!</button>
                <a href={tweetURL} target="_blank">
                    <button className="btn-twitter"> <i className="fa fa-twitter fa-2x"></i> </button> 
                </a>
                <div className="footer"> Developed with &#9829; by <a href="https://github.com/omertarik96">Omer Tarik Koc </a> </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));