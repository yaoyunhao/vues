import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props);
        props.watch.on('sendData', (res) => {
            console.log(res)
        })
    }
    
    render () {
        return (
            <div>
                Task页面
            </div>
        )
    }
}

export default Task
