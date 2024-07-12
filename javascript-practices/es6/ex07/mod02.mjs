/*
unnamed export
- default keyword 사용 
*/

export default {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// export default {
//     add: add,
//     subtract: subtract
// };

export default {
    add, 
    subtract
};

export default {add, subtract};