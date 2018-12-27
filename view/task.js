import React, { Component } from 'react'
import Context from './context'

class Task extends Component {
    render () {
        return (
            <div>
                <Context.Consumer>
                    {
                        (contextValue) => {
                            return contextValue.dataList.map((v, i) => {
                                return <div key={i} onClick={() => {
                                    contextValue.func(v)
                                }}>{v}</div>
                            })
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}

export default Task