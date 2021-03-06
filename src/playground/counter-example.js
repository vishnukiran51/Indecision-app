// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const subtractOne = () => {
//         count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');
// // const appRoot2 = document.getElementById('app2');

// // ReactDOM.render(template, appRoot);
// // ReactDOM.render(templateTwo, appRoot2);

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateThree, appRoot);
// };

// renderCounterApp();

//---------------------------------- Counter example using react component ------------------------------------------

//passing the default props value

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }
}

Counter.defaultProps = {
    count: 0
};


ReactDOM.render(<Counter count={2}/>, document.getElementById('app'));