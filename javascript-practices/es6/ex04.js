/*
default parameter
*/

const print = function(str, end='\n') { // end의 default value is '\n'
    console.log(str.join(':'));
    console.log(str.join(end));
}

print(['Always', 'with', 'me']);
print(['Always', 'with', 'me'], ' ');