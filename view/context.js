import React from 'react';

export default React.createContext({
    dataList: [4, 5, 6],
    func: function(value) {
        console.log(value)
    }
})