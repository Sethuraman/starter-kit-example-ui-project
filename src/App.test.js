import React from 'react';
import ReactDOM from 'react-dom';
import nock from 'nock';
import App from './App';
import conf from './conf'


describe("App Tests", () => {
  beforeEach(() => {
    nock(`${conf.API_URL}`)
      .get('/posts')
      .reply(200, [{id: 1, title: 'data'}]);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})
