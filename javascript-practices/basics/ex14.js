/*
URL 다루기
*/


// e.g.1) 리다이렉트 
// location.href = url;


// e.g.2) ajax 통신
// $.ajax(url)
// fetch(url)
// axios(url)

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

//1. escape: URL 전부를 encoding, 사용(x), deprecated 
var url2 = escape(url);
console.log(url2);

//2. encodeURI: URL 전부 중 파라미터만 encoding, url 전체를 encoding해야 하는 경우 사용 
var url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent: 값만 encoding해야 하는 경우 사용(o), url 전체를 encoding해야 하는 경우 사용(x)
var url4 = encodeURIComponent(url);
console.log(url4); //오용의 예시 

//4. encodeURIComponent 사용 예
//만들어야 할 URL: http://www.mysite.com/user?name=둘리&email=dooly@gmail.com

var url = "http://www.mysite.com/user";
var formData = {
    name: '둘리',
    email: 'dooly@gmail.com'
};

var toQueryString = function(o) {
    
}
