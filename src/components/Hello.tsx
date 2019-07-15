import { Component } from 'react';
import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
    currentEnthusiasm: number;
}

class Hello extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 0
        }

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    public render() {
        const { name, enthusiasmLevel } = this.props;
        const { currentEnthusiasm } = this.state;

        if (!enthusiasmLevel || currentEnthusiasm === 0 || enthusiasmLevel <= 0) {
            return (<p>You could be a little more enthusiastic.</p>);
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(currentEnthusiasm)}
                </div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

    private getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    private handleIncrease() {
        const { currentEnthusiasm } = this.state;

        this.setState({currentEnthusiasm: currentEnthusiasm + 1});
    }

    private handleDecrease() {
        const { currentEnthusiasm } = this.state;

        this.setState({currentEnthusiasm: currentEnthusiasm - 1});
    }
}

export default Hello;
