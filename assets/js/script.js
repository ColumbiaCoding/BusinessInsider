//This will JS for company profile
requestURL = ""
  "https://api.sec-api.io?token=c1484b557f33e9b69965330859cc4392e4c419f138b4cdf500e4d7155e8bd39b";
const apiKey =
  "c1484b557f33e9b69965330859cc4392e4c419f138b4cdf500e4d7155e8bd39b";

element = document.querySelector("#post-request .company_name");
requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: {
      query_string: {
        query:
          'ticker:AAPL AND formType:"10-K" AND documentFormatFiles.type:"EX-21"',
      },
    //   from: "0",
    //   size: "10",
    //   sort: [
    //     {
    //       filedAt: ['2022-01-01 TO 2022-12-31'],
    //     },
    //   ],
    },
  }),
};

fetch(requestURL, requestOptions)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data.filings[0].linkToHtml);
    var extractorUrl = data.filings[0].linkToHtml
    extractorFetch(extractorUrl)
  });

  function extractorFetch(url){
    // https://api.sec-api.io/extractor?
    // url=url
    // item=1A&
    // type=text&
    // token=YOUR_API_KEY


    fetch('https://api.sec-api.io/extractor?url='+url+'item=1A&type=text&token='+ apiKey)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
  }


//  POST request with a JSON body using fetch
var requestUrl = 'https://api.sec-api.io?token=c1484b557f33e9b69965330859cc4392e4c419f138b4cdf500e4d7155e8bd39b'
 element = document.querySelector('#post-request .company-');
 requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "query": { "query_string": { "query": "formType:\"10-K\" AND documentFormatFiles.type:\"EX-21\""} } })}

fetch(requestUrl, requestOptions)
.then(function (response) {
    return response.json();
})
.then(function (data) {
   //console.log(data)
   for (var i = 0; i < data.length; i++) {
    console.log(data.filings[0].documentFormatFiles[0].documentUrl);
   }
});