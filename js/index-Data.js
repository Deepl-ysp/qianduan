var box = {};
function createButton(id, imgSrc, text) {
    return `<button id="${id}"><img src="${imgSrc}" class="index-box-img"><span class="index-box-span">${text}</span></button>`;
}
function createList(items, className) {
    return `<ul class="index-box-ul">` + items.map(item => `<li class="index-box-items ${className}">${createButton(item.id, item.imgSrc, item.text)}</li>`).join('') + `</ul>`;
}
const data = {
    jcyy: [
        { id: 'html', imgSrc: 'img/JCYY/html.png', text: 'HTML' },
        { id: 'css', imgSrc: 'img/JCYY/css.png', text: 'CSS' },
        { id: 'javascript', imgSrc: 'img/JCYY/javascript.png', text: 'javaScript' }
    ],
    qdkj: [
        { id: 'react', imgSrc: 'img/QDKJ/react.png', text: 'React' },
        { id: 'vue', imgSrc: 'img/QDKJ/vue.png', text: 'Vue' },
        { id: 'jquery', imgSrc: 'img/QDKJ/jquery.png', text: 'jQuery' },
        { id: 'angular', imgSrc: 'img/QDKJ/angular.png', text: 'Angular' },
    ],
    szlx: [
        { id: 'typescript', imgSrc: 'img/JJYY/typescript.png', text: 'TypeScript' },
        { id: 'go', imgSrc: 'img/JJYY/go.png', text: 'Go' },
        { id: 'rust', imgSrc: 'img/JJYY/rust.png', text: 'Rust' },
        { id: 'sass', imgSrc: 'img/JJYY/sass.png', text: 'Sass' },
        { id: 'less', imgSrc: 'img/JJYY/less.png', text: 'Less' },
        { id: 'stylus', imgSrc: 'img/JJYY/stylus.png', text: 'Stylus' },
        { id: 'postcss', imgSrc: 'img/JJYY/postcss.png', text: 'PostCSS' },
        { id: 'webpack', imgSrc: 'img/JJYY/webpack.png', text: 'Webpack' },
        { id: 'babel', imgSrc: 'img/JJYY/babel.png', text: 'Babel' },
        { id: 'es6', imgSrc: 'img/JJYY/es6.png', text: 'ES6' },
        { id: 'nodejs', imgSrc: 'img/JJYY/nodejs.png', text: 'Node.js' },
        { id: 'npm', imgSrc: 'img/JJYY/npm.png', text: 'NPM' },
        { id: 'yarn', imgSrc: 'img/JJYY/yarn.png', text: 'Yarn' }
    ],
    szxm: [
        { id: 'todoapp', imgSrc: 'img/SZXiangmu/todoapp.png', text: 'Todo App' },
        { id: 'weatherapp', imgSrc: 'img/SZXiangmu/weatherapp.png', text: 'Weather App' },
        { id: 'blogapp', imgSrc: 'img/SZXiangmu/blogapp.png', text: 'Blog App' }
    ]
};
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        box[key] = createList(data[key], key.toUpperCase());
    }
};