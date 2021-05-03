import React from 'react';
import '../css/Calculator.css';

import CalcFirst from './calc-types/CalcFirst';
import CalcTypical from './calc-types/CalcTypical';

export default function Calculator(props) {

    return (
        <>
        <h3>Trees-Saved Calculator ({props.currentView})</h3>
        <div id="directions">
            <p>Everyone knows that reading eBooks saves trees, but exactly how many trees does it save?
                Use this tool to calculate how many trees can be saved if a book is digitized instead of printed.
                The formula is as follows:
            </p>
            <p id="formula">Trees saved = (number of sheets * number of copies) / 15,000</p>
            <p>where "number of sheets" is the number of pages divided by 2 (because there are two pages per sheet),
                and the number of "sheets per tree" is roughly 15,000. I retrieved this statistic from the article 
                <a target="_blank" href="https://www.sierraclub.org/sierra/2014-4-july-august/ask-mr-green/how-much-paper-does-one-tree-produce" rel='noreferrer'> How Much Paper Does One Tree Produce?</a> from Sierra Club. 
                Please use this link to learn more.
            </p>
        </div>
        <br/>
        { props.currentView === 'First-Time' && <CalcFirst func={calculate}/> }
        { props.currentView === 'Typical' && <CalcTypical func={calculate}/> }
        </>
    );

    //Calculate result and display on page
    //@params -> number of pages and number of copies
    function calculate(pages, copies) {
        var sheets = 15000;            
        var result = ((pages/2) * copies) / sheets;
        document.getElementById("calc-result").innerHTML = ("Trees saved: " + result + " trees");
    }
}