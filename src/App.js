import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import conf from './conf'
import fetch from 'isomorphic-fetch';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getData() {
    const response = await fetch(`${conf.API_URL}/posts`);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const data = await this.getData();
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React.. Hi!</h2>
        </div>
        <div className="App-intro">
          {this.state.data ? 
            (<table className="Posts-data">
              <thead>
                <tr>
                  <th>Post ID</th>
                  <th>Data</th>
                </tr>  
              </thead>
              <tbody>
                {this.state.data.map(data => 
                (<tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                </tr>)
                )}  
             </tbody> 
            </table>)  : 
            'Loading data...'
          }
        </div>
      </div>
    );
  }
}

export default App;
