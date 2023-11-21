import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    this.setState({ value: newValue });
  };
  

  componentDidMount() {
    this.diceElement.addEventListener('click', this.rollDice);
  }

  componentWillUnmount() {
    this.diceElement.removeEventListener('click', this.rollDice);
  }

  render() {
    const { value } = this.state;
    return (
      <div
        ref={(dice) => { this.diceElement = dice; }}
        className="dice"
      >
        {value === 1 && <span className="dot center" />}
        {value === 2 && (
          <div>
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
        {value === 3 && (
          <div>
            <span className="dot" />
            <span className="dot center" />
            <span className="dot" />
          </div>
        )}
        {value === 4 && (
          <div>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
        {value === 5 && (
          <div>
            <span className="dot" />
            <span className="dot" />
            <span className="dot center" />
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
        {value === 6 && (
          <div>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
      </div>
    );
  }
}

export default Dice;
