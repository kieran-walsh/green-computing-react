import React from 'react';
import '../../css/Calculator.css';

export default class CalcFirst extends React.Component {

    constructor(props) {
        super(props);
        this.goToCoachMark = this.goToCoachMark.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleWizardClick = this.handleWizardClick.bind(this);
        this.state = {
            currentCoachMark: 1,
            currentPages: "",
            currentCopies: "",
            showingWizard: false
        };
    }

    //Set the state of currentCoachMark to keep track
    //Of which have already been seen and show the next
    //Via conditional rendering
    //next: int 1 through 5
    goToCoachMark(next) {
        if (this.state.currentCoachMark < next) {
            this.setState({currentCoachMark: next});
        }
    }

    //Update the currentPages and currentCopies state variables
    //e: event sent when input entered via textbox
    //type: which state variable to update (pages or copies)
    //value: explicit value to set (used by radio buttons)
    handleInputChange(e, type, value=null) {
        if (e == null && value != null) {
            switch (type) {
                case "pages": this.setState({currentPages: value}); break;
                case "copies": this.setState({currentCopies: value}); break;
                default: break;
            }
        }
        else {
            switch (type) {
                case "pages": this.setState({currentPages: e.target.value}); break;
                case "copies": this.setState({currentCopies: e.target.value}); break;
                default: break;
            }
        }
    }

    //Updates the state to track whether the wizard is being shown
    handleWizardClick() {
        this.setState({showingWizard: !this.state.showingWizard});
    }

    //Change element's visibility to visible
    //Used for input hints
    //id: id tag of the desired element
    showElement(id) {
        document.getElementById(id).className = '';
    }

    //Change element's visibility to hidden
    //Used for input hints
    //id: id tag of the desired element
    hideElement(id) {
        document.getElementById(id).className = 'hidden';
    }

    render() {
        return (
            <div id="calculator">
                {this.state.currentCoachMark === 1 && 
                    <>
                    <button id='exp-btn' type="button" onClick={() => this.goToCoachMark(2)}>Calculate</button>
                    <br/>
                    <span className="coach-mark" id="coach-1"> ^ CLICK TO SHOW CALCULATOR</span> 
                    </>
                }
                {this.state.currentCoachMark > 1 &&
                    <div id="exp-input">
                        {!this.state.showingWizard && 
                            <div id="normal-input">
                                <span>Enter the number of pages in the book:</span>
                                <input type="number" id="num-pages" value={this.state.currentPages} onMouseOver={() => this.showElement('pages-hint')} onMouseOut={() => this.hideElement('pages-hint')} onChange={(e) => {this.goToCoachMark(3); this.handleInputChange(e, 'pages');}}/>
                                {this.state.currentCoachMark === 2 && 
                                    <span className="coach-mark" id="coach-2"> &lt; ENTER A NUMBER OR CLICK 'SIMPLE INPUT' FOR A WIZARD</span> 
                                }
                                <p className="hidden" id="pages-hint">Please type a whole number greater than zero.</p>

                                
                                <span>Enter the number of copies produced: &nbsp;</span>
                                <input type="number" id="num-copies" value={this.state.currentCopies} onMouseOver={() => this.showElement('copies-hint')} onMouseOut={() => this.hideElement('copies-hint')} onChange={(e) => {this.goToCoachMark(4); this.handleInputChange(e, 'copies');}}/>
                                {this.state.currentCoachMark === 3 && 
                                    <span className="coach-mark" id="coach-3"> &lt; ENTER A NUMBER</span> 
                                }
                                <p className="hidden" id="copies-hint">Please type a whole number greater than zero.</p>
                            </div>
                        }

                        { this.state.showingWizard && 
                            <div id="wizard-input">
                                <p>Select the number of pages in the book:</p>
                                <input type="radio" name="pages-radio" onClick={() => this.handleInputChange(null, 'pages', 100)} />Small (100 pages)<br/>
                                <input type="radio" name="pages-radio" onClick={() => this.handleInputChange(null, 'pages', 300)}/>Medium (300 pages)<br/>
                                <input type="radio" name="pages-radio" onClick={() => this.handleInputChange(null, 'pages', 1000)}/>Large (1000 pages)<br/>
        
                                <p>Select the number of copies printed:</p>
                                <input type="radio" name="copies-radio" onClick={() => this.handleInputChange(null, 'copies', 1000)}/>Not Many (1,000 copies)<br/>
                                <input type="radio" name="copies-radio" onClick={() => this.handleInputChange(null, 'copies', 10000)}/>Some (10,000 copies)<br/>
                                <input type="radio" name="copies-radio" onClick={() => this.handleInputChange(null, 'copies', 1000000)}/>Best-seller (1,000,000 copies)<br/>
                                <br/>
                            </div>
                        }

                        <button type="button" onClick={() => {this.props.func(this.state.currentPages, this.state.currentCopies); this.goToCoachMark(5) }}>Submit</button>
                        <button type="button" onClick={this.handleWizardClick}>{this.state.showingWizard ? "Hide Simple Input" : "Show Simple Input"}</button>
                        {this.state.currentCoachMark === 4 && 
                            <span className="coach-mark" id="coach-4"> <br/><br/> ^ PRESS SUBMIT <br/> </span>
                        }
                        <p id="calc-result"></p>
                    </div>
                }
            </div>
        );
    }
}