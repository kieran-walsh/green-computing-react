import React from 'react';

export default class CalcTypical extends React.Component {

    constructor(props) {
        super(props);
        this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
        this.calculate = this.calculate.bind(this);
        this.state = {
            currentPages: "",
            currentCopies: "",
            showingMore: false,
            submitted: false
        };    
    }

    handleInputChange(e, type) {
        switch (type) {
            case "pages": this.setState({currentPages: e.target.value}); break;
            case "copies": this.setState({currentCopies: e.target.value}); break;
            default: break;
        }
    }

    toggleMoreInfo() {
        this.setState({showingMore: !this.state.showingMore});
    }

    popover() {
        alert("Please enter a whole number in each input box and click Submit.");
    }

    calculate() {
        this.props.func(this.state.currentPages, this.state.currentCopies);
        this.setState({submitted: true});
    }

    render() {
        return (
            <div id="calculator">
            <button type="button" onClick={this.toggleMoreInfo}>{this.state.showingMore ? "Less Info..." : "More Info..."}</button> 
            {this.state.showingMore &&
                <div id="more-info">
                    <p>Depending on the source you consult, the number of sheets of paper that you can harvest from one tree
                        can vary a lot. As mentioned above, the Sierra Club statistic explains that you can harvest between
                        10 thousand to 20 thousand sheets (with an average of 15 thousand sheets). However, this article by
                        HowStuffWorks, <a href="https://science.howstuffworks.com/environmental/green-science/question16.htm" target="_blank" rel='noreferrer'>How many sheets of paper can be produced from a single tree?</a>,
                        deduces that one can actually harvest about 80 thousand sheets per tree.
                    </p>
                </div>
            }
            <br/>

            <div id="exp-input">
                <hr/><br/>
                <span>Enter the number of pages in the book:</span>
                <input type="number" id="num-pages" value={this.state.currentPages} onChange={(e) => {this.handleInputChange(e, 'pages');}}/>
                <br/><br/>
                <span>Enter the number of copies produced: &nbsp;</span>
                <input type="number" id="num-copies" value={this.state.currentCopies} onChange={(e) => {this.handleInputChange(e, 'copies');}}/>
                <br/><br/>
                <button type="button" onClick={this.calculate} >Submit</button>
                <button type="button" onClick={this.popover}>Input Help</button>

                <p id="calc-result"></p>
                {this.state.submitted && 
                    <div id="next-steps">
                        <hr className='hr-border'/>
                        <h4>Next Steps</h4>
                        <p>Thank you for trying our trees-saved calculator! Other things you can do:</p>
                        <ul>
                            <li>Use the calculator again with different data values.</li>
                            <li>Continue below to read about the advantages of eBooks.</li>
                            <li>Use the sitemap to choose a new article to read.</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
        );
    }
}