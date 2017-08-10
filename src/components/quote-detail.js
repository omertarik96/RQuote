import React from 'react';

const QuoteDetail = ({quote}) => {
    if(!quote){
        return <div>Loading..</div>
    }



    return (
        <div className="quote-detail"> 
            <div className="box">
                <h1> {quote.quote} </h1>
                <p> -{quote.author} </p>
            </div>
        </div>
    )
}

export default QuoteDetail;