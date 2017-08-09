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

    }



    render(){

        return (
            <div>
                <QuoteDetail 
                quote = {this.state.quote}
                getQuote = {()=> this.getQuotes()} 
                />
                <button onClick={this.getQuotes}>Get Quotes</button>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));