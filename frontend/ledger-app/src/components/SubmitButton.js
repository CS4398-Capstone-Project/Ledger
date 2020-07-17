import React from 'react';

/*add a simple html button component*/
/*pass some props to button properties*/

class SubmitButton extends React.Component {
  render() {
  return (
    <div className="submitButton">
        <button
            className = 'btn'
            disabled = {this.props.disabled}
            onClick = {() => this.props.onClick() }
        >
            {this.props.text}

        </button>

    </div>
  );
}

}
export default SubmitButton;
