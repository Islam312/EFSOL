import Post from '@/js/Post';

import json from '@/assets/json.json';
import './async';

import '@/css/style.css';
import '@/sass/sass.sass';
import '@/sass/scss.scss';

const post = new Post('Webpack title post');

console.log('Post to string', post.toString());
console.log('json: =>>', json);

async();
