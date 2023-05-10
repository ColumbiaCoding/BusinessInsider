apikey ='c1484b557f33e9b69965330859cc4392e4c419f138b4cdf500e4d7155e8bd39b'
var requestURL ='https://api.sec-api.io/mapping/industry/Information Technology Services';

fetch(RequestURL)
    .then(function (response1) {
        return response1.json();
    })
    .then(function (data1) {
        //addtional function creation stuff
        console.log(data1)

    })
