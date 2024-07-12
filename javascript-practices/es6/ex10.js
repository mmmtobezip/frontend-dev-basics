// Parenthesis-less Function & Template Literal

div = function(s, ...v) { // div는 파라미터를 배열로 받음 
    //console.log(v);  v는 빈 배열 
    console.log(s, v); 
    return function() {
        return <div style={{}}></div>
    }
}

 //Parenthesis less function + ``(Literal) 
div`
    color: $fff
    font-size: 20px;
    font-weight: 20px;
`;