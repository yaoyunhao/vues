import React, { Component } from 'react'
import Detail from './detail'
import Context from './context'

class Index extends Component {
    consoValue = (value) => {
        console.log(value)
    }
    render () {
        return (
            <div>
                {/* <Context.Provider value={{dataList: [1, 2, 3], func: this.consoValue}}> */}
                    <Detail />
                {/* </Context.Provider> */}
            </div>
        )
    }
}

export default Index