import Post from '@/js/Post';

import json from '@/assets/json.json';

import '@/css/style.css';

const post = new Post('Webpack title post');

console.log('Post to string', post.toString());
console.log('json: =>>', json);
