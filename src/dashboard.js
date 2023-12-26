import React from "react";

function MyComponent() {
    return (
        <div>
            <h1>Hello from React!</h1>
        </div>
    );
}

ReactDOM.render(React.createElement(MyComponent), document.getElementById('main_content'));
