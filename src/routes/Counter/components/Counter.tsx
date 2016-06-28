import * as React from 'react';
import {Button, Tag} from 'antd';
import { increment, doubleAsync } from '../modules/counter'
interface CounterProps extends React.Props<any> {
    increment: typeof increment,
    doubleAsync: typeof doubleAsync,
    counter: number
}
class Counter extends React.Component<CounterProps, any> {
    render() {
        return (
            <div>

                <Tag> Counter {this.props.counter}</Tag>

                <Button type="primary" onClick={() => {
                    this.props.increment()
                } }>increment</Button>

                <Button type="primary"
                    onClick={this.props.doubleAsync}>doubleAsync</Button>
            </div>
        );
    }
}

export default Counter;
