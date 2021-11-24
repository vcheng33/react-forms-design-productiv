import React, { useState } from 'react';
import { getInspirationalQuote } from "./quoteAPI";


function Quote() {
    const [quote, setQuote] = useState({
        text: "",
        author: "",
    });

    async function handleClick() {
        setQuote(await getInspirationalQuote())
    }

    return (
        <div className="">
            {quote.text &&
            <div className="">
                <span><i>{quote.text}</i></span>
                <p><i>- {quote.author}</i></p>
            </div>
            }
            <button className="btn-warning btn btn-sm mt-3 mb-4" 
                onClick={handleClick}>New Quote</button>
            </div>
    )

}

export default Quote;