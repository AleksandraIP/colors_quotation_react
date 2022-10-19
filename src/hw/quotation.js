import React, {useState} from "react";

function SetQuote(){
    const [quote, setQuote] = useState('0_0')
    let quotes=[
        'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.',
        'We know what we are, but know not what we may be',
        'Our doubts are traitors and make us lose the good we oft might win by fearing to attempt.',
        'Give every man thy ear, but few thy voice.',
        'Boldness be my friend.'
    ];


    function quotClick(){
          setQuote(quotes[Math.floor(Math.random()*(quotes.length-1))]);
        }
        return(
            <div>
                <button onClick={quotClick} style={{height:'30px'}}>Click</button>
                <p>{quote}</p>
            </div>
        )

}


export default SetQuote;


