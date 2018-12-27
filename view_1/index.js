import React, { Component } from 'react'
import List from './list'
import Task from './task'


class Watch{
    constructor() {
        this.eventType = {}
    }
    on(type, cbk) {
        if (this.eventType[type] instanceof Array) {
            this.eventType[type].push(cbk)
        } else {
            this.eventType[type] = [cbk]
        }
    }
    emit(type, data) {
        this.eventType[type].forEach((v, i) => {
            v(data)
        })
    }
}

let watch = new Watch()





class Index extends Component {
    getValue = (name) => {
        console.log(name)
    }
    render () {
        return (
            <div>
                首页
                <List getValue={this.getValue} watch={watch} />
                <Task watch={watch} />
            </div>
        )
    }
}

















export default Index









// connect(
//     (state) => {
//         return {...state.oneState, ...state.twoState}
//     },
//     (dispatch) => {
//         return {
//             getName() {
//                 dispatch({
//                     type: 'ADD_DATA'
//                 })
//             }
//         }
//     }
// )(Index)

//  const connect = (cbk_1, cbk_2) => {
//      const state = {
//          oneState: {data: [1, 2], name: 'tom'},
//          twoState: {list: 'cas'}
//      }
//      let newData = cbk_1(state)
//      let newData_2 = cbk_2(dispatch);
//      return (Index) => {
//         return class extends React.Component{
//             let {
//                 age
//             } = this.props;
//             render() {
//                 return <Index {...newData} {...newData_2} {...this.props} />
//             }
//         } 
//     }
// }






// function getName(cbk) {
//     let name = 'tom'
//     cbk(name)
// }


// getName((name)=> {
//     console.log(name)
// })


