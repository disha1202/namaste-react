const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, "This is heading"), 
        React.createElement('h2', {}, "This is heading2")
    ]),
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, "This is heading"), 
        React.createElement('h2', {}, "This is heading2")
    ])
]);

const heading = React.createElement('h1', {id: 'heading'}, "Hello World from React!");
console.log(parent);
console.log(document.getElementById("heading"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);