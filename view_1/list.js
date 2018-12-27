import React, { Component } from 'react'

class List extends Component {
    getValue = () => {
        // let {
        //     getValue
        // } = this.props;
        // getValue('tom')
        this.props.watch.emit('sendData', '发送数据')
    }
    render () {
        return (
            <div onClick={this.getValue}>
                list页面
            </div>
        )
    }
}

export default List