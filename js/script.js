//  POST request with a JSON body using fetch
var requestUrl = 'https://api.sec-api.io?token=c1484b557f33e9b69965330859cc4392e4c419f138b4cdf500e4d7155e8bd39b'
const element = document.querySelector('#post-request .company-');
const requestOptions = {
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


// linkToHtml

    //Start with the Full-Text Search API 
    // https://sec-api.io/docs/full-text-search-api
// Search by company name, keyword, ticker, CIK number, and/or reporter's last name—individually or in combination.
//we will need the filingUrl (string) - URL of the filing or attachement. Example: https://www.sec.gov/Archives/edgar/data/65011/000006501121000020/fy21q2exh99earnings.htm
// Boolean operators allow for searches where all words entered are required to be in the resulting documents, exact phrases matching, exclude terms, OR logic clauses, and wildcards. Any of these can be combined in a single search.


//Next move onto Extractor API
// https://sec-api.io/docs/sec-filings-item-extraction-api
// Once we have the filingUrl (string) - URL of the filing or attachement. Example: https://www.sec.gov/Archives/edgar/data/65011/000006501121000020/fy21q2exh99earnings.htm
// we could use that filingUrl (string) to pull the desired company data from the foll




