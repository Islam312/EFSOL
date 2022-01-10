import React from 'react';
import { render } from 'react-dom';

import Post from './Post.ts';

import json from '@/assets/json.json';
import './async';

import '@/css/style.css';
import '@/sass/sass.sass';
import '@/sass/scss.scss';

const post = new Post('Webpack title post');

console.log('Post to string', post.toString());
console.log('json: =>>', json);

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <div className="box">
      SASS <span></span>
    </div>
    <div className="box-scss">
      SCSS <span></span>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
