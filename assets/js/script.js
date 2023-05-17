//This will JS for company profile
const requestURL =
  "https://api.sec-api.io?token=13a4cfd3f79944ca4ba9fceeda405b0f94cebb2bb888deaa5a93e3d7c5b808cb";
const apiKey =
  "13a4cfd3f79944ca4ba9fceeda405b0f94cebb2bb888deaa5a93e3d7c5b808cb";
  var cardEl = document.getElementById("industries")
  industriesEl = $('#industries')
  var selectedCompanies = JSON.parse(localStorage.getItem("storeCompanies")) || [];

//this function is to grab the URL for the company
  function userSearch() {
    const element = document.querySelector("h4");
    const inputText = $("#industriesList").val()
    console.log(element)
    console.log(inputText)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: {
          query_string: {
            query:
            //we need to put the user input below. Instead of ticker AAPL, pass in the 
              // `ticker: ${inputText} AND formType:"10-K"  AND filedAt:[2022-01-01T14:00:00.000 TO 2024-01-01T19:00:00.000]`,
              `companyName: ${inputText} AND formType:"10-K"  AND filedAt:[2022-01-01T14:00:00.000 TO 2024-01-01T19:00:00.000]`,
          },
        //   from: "0",
        //   size: "10",
          
        },
        sort: [
          {
            filedAt: {
              order: "desc"
            }
          },
        ],
      }),
    };
    
    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data)
        console.log(data.filings[0].companyName);
        console.log(data.filings[0].companyName);
        console.log(data.filings[0].linkToHtml);
        var extractorUrl = data.filings[0].linkToHtml
        var companyUrl = document.createElement("p")
        companyUrl.innerText = extractorUrl
        cardEl.append(companyUrl)
       secondAPICall(extractorUrl)
      });
  }

  // function secondAPICall(url) {
  //   fetch(`https://api.sec-api.io/xbrl-to-json?htm-url=${url}&token=13a4cfd3f79944ca4ba9fceeda405b0f94cebb2bb888deaa5a93e3d7c5b808cb`)
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //     console.log(data.BalanceSheets)
  //   })

  // }

  // document.getElementById("searchBtn").addEventListener("click", userSearch)