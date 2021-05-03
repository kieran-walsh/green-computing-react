import React from 'react';
import '../css/App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.state = { currentView: 'First-Time' };
  }

  //Change the current view (first-time, typical) 
  //When the sidebar links are clicked
  //viewType: either "First-Time" or "Typical"
  handleViewChange(viewType) {
    this.setState({currentView: viewType});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div id='content'>
          <Sidebar onViewChange={this.handleViewChange}/>
          <Content currentView={this.state.currentView}/>
          <p id='clearfix'></p>
        </div>
        <Footer/>
      </div>
    );
  }
}