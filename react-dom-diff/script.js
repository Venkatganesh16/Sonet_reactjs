const jsdiv = document.getElementById('dateJS');
const reactDiv = document.getElementById('dateReact');

const render = () => {
    jsdiv.innerHTML = `
    <div class='split'> JSTemplate
    <input />
    <p> ${new Date()} </p>
    </div>
    `;



var divToRender = React.createElement(
    'div', {className:'split'}, 'React Template', React.createElement('input'),
    React.createElement('p',null,new Date().toString())
);
ReactDOM.render(divToRender, reactDiv);
}
setInterval(render,1000);