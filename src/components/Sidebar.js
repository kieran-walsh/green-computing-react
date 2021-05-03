import React from 'react';
import '../css/Sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //Change the state in <App/> by using a setState function
    //Sent down through props
    //@param viewType -> either "First-Time" or "Typical"
    handleClick(viewType) {
        this.props.onViewChange(viewType);
    }

    render() {
        return (
            <div id="sitemap">
                <h3>Sitemap</h3>
                <p className='detail-text'><i>Click on a link below to navigate to an article about that topic.</i></p>
                <p><b>A. eBooks</b></p>
                <ol id="paperless-list">
                    <li id='naive'><a href='#' onClick={ () => this.handleClick('First-Time')}>eBooks (First-Time User)</a></li>
                    <li id='typical'><a href='#' onClick={ () => this.handleClick('Typical')}>eBooks (Typical User)</a></li>
                </ol>
                <div id='more'>
                    <p><b>B. Reduce</b></p>
                    <ol id="reduce-list">
                        <li> <a>Just in Time Inventory</a> </li>
                        <li> <a>Online Meetings</a> </li>
                        <li> <a>E-gifts</a> </li>
                    </ol>
                    <p><b>C. Reuse and Recycle</b></p>
                    <ol id="reuse-list">
                        <li> <a>E-waste &amp; Electronic Recycling</a> </li>
                        <li> <a>Cycle of Purchasing</a> </li>
                        <li> <a>Reusing Old Computers</a> </li>
                    </ol>
                    <p><b>D. Energy</b></p>
                    <ol id="energy-list">
                        <li> <a>Wasted Energy</a> </li>
                        <li> <a>Smart Buildings</a> </li>
                        <li> <a>Computer Inefficiencies</a> </li>
                    </ol>
                    <br/>
                    <p><i>(NOTE: Only the 'eBooks' section has content. The rest of the links are blank and purely for display.)</i></p>
                    <br/>
                </div>
                <br/>
            </div>
        );
    }

}