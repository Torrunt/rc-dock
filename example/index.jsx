import React from 'react';
import ReactDOM from 'react-dom';
import {Divider} from '../lib';

let demos = ['basic', 'panel-style', 'tab-cache', 'tab-update', 'save-layout'];
let advance = ['standalone-divider'];

let defaultPage = window.location.hash.substr(1);
if (!(demos.includes(defaultPage) || advance.includes(defaultPage))) {
  defaultPage = 'basic';
}

class App extends React.Component {
  state = {current: defaultPage};

  render() {
    let {current} = this.state;
    let demoPages = [];
    for (let page of demos) {
      let cls = '';
      if (page === current) {
        cls = 'current';
      }
      demoPages.push(
        <a href={`#${page}`} key={page} className={cls} onClick={(e) => this.setState({current: page})}>
          {page}
        </a>
      )
    }
    let advancePages = [];
    for (let page of advance) {
      let cls = '';
      if (page === current) {
        cls = 'current';
      }
      advancePages.push(
        <a href={`#${page}`} key={page} className={cls} onClick={(e) => this.setState({current: page})}>
          {page}
        </a>
      )
    }
    return (
      <div>
        <h2>rc-dock <small> - dock layout for react component</small></h2>
        <div className='link-bar'>
          Examples:
          {demoPages}
        </div>
        <div className='link-bar'>
          Advanced:
          {advancePages}
        </div>
        <hr/>
        <iframe src={`./${current}.html`}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));