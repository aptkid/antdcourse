import React from 'react';

class MyInput extends React.Component {


    state = {
        text: '',
    }

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    onTextReset = () => {
        this.setState({ text: '' });
    }

    render() {
       
        return(
            <div>  
              <input value={this.state.text} onChange={ this.onTextChange }/>
              <button onClick = { this.onTextReset }>Reset</button>
            </div>
        );
    }

}

export default MyInput;