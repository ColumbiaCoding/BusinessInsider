apikey = '9f4e415110702bad95735ec3f107dff310c0246123f826d568b94d1ace6d976e'
industriesEl = $('#industries')

var selectedCompanies = JSON.parse(localStorage.getItem("storeCompanies")) || [];

// console.log(requestURL);
function searchSubmit(event) {
    event.preventDefault();
    industriesEl.html("")
    localStorage.clear();
    var selectedIndustry = $("#industriesList").val().replaceAll(" ", "%20")
    var requestURL = 'https://api.sec-api.io/mapping/industry/' + selectedIndustry + '?token=' + apikey
    console.log(requestURL);
    console.log(selectedIndustry);
    fetch(requestURL)
        .then(function (response1) {
            return response1.json();
        })
        .then(function (data1) {
            //addtional function creation stuff
            // console.log(data1)
            var companyName = "";
            selectedCompanies = []

            //use data attributes
            for (let i = 0; i < 10; i++) {
                currentCard = data1[i];
                // console.log(currentCard);
                selectedCompanies.push(currentCard);
                //push to local storage so script.js can access it
                localStorage.setItem("storedCompanies", JSON.stringify(selectedCompanies))
                companyName = currentCard.name;
                compList = $("<ul>")
                companyTitle = $("<li>").attr("data-compnum", i);

                companyTitle.addClass("indBtn").on("click", function (e) {
                    console.log(e.target)
                    industriesEl.html("");
                    var selComp = e.target.dataset.compnum
                    currentCard = selectedCompanies[selComp]
                    console.log(selComp)
                    console.log(currentCard)
                    createCard(currentCard)
                    profilePage(currentCard)
                    console.log(selectedCompanies)
                })
                companyTitle.text(companyName);
                industriesEl.append(companyTitle);
            }
        })
}
function profilePage(cC) {
    console.log("a profile page")
}
function createCard(cur) {
    // console.log(cur);

    cardContainer = $("<div>");
    industriesEl.append(cardContainer);
    cName = $("<h4>")
    cName.text(cur.name)
    cLocation = $("<p>")
    cLocation.text("Location: " + cur.location);

    cardContainer.append(cName);
    console.log(cLocation.text)
    console.log(cName.text)
    cardContainer.append(cLocation)
}
$("#searchBtn").on("click", searchSubmit);
$(function () {
    var availableIndustry = [
        "Advertising Agencies",
        "Aerospace & Defense",
        "Agricultural Inputs",
        "Airlines",
        "Airports & Air Services",
        "Aluminum",
        "Apparel Manufacturing",
        "Apparel Retail",
        "Apparel Stores",
        "Asset Management",
        "Auto & Truck Dealerships",
        "Auto Manufacturers",
        "Auto Parts",
        "Banks - Diversified",
        "Banks - Global",
        "Banks - Regional",
        "Banks - Regional - US",
        "Beverages - Brewers",
        "Beverages - Non - Alcoholic",
        "Beverages - Soft Drinks",
        "Beverages - Wineries & Distilleries",
        "Biotechnology",
        "Broadcasting",
        "Broadcasting - Radio",
        "Broadcasting - TV",
        "Building Materials",
        "Building Products & Equipment",
        "Business Equipment",
        "Business Equipment & Supplies",
        "Business Services",
        "Capital Markets",
        "Chemicals",
        "Coal",
        "Coking Coal",
        "Communication Equipment",
        "Computer Hardware",
        "Computer Systems",
        "Confectioners",
        "Conglomerates",
        "Consulting Services",
        "Consumer Electronics",
        "Copper",
        "Credit Services",
        "Data Storage",
        "Department Stores",
        "Diagnostics & Research",
        "Discount Stores",
        "Diversified Industrials",
        "Drug Manufacturers - General",
        "Drug Manufacturers - Major",
        "Drug Manufacturers - Specialty & Generic",
        "Education & Training Services",
        "Electrical Equipment & Parts",
        "Electronic Components",
        "Electronic Gaming & Multimedia",
        "Electronics & Computer Distribution",
        "Engineering & Construction",
        "Entertainment",
        "Farm & Construction Equipment",
        "Farm & Heavy Construction Machinery",
        "Farm Products",
        "Financial Conglomerates",
        "Financial Data & Stock Exchanges",
        "Financial Exchanges",
        "Food Distribution",
        "Footwear & Accessories",
        "Furnishings",
        "Furnishings Fixtures & Appliances",
        "Gambling",
        "Gold",
        "Grocery Stores",
        "Health Care Plans",
        "Health Information Services",
        "Healthcare Plans",
        "Home Furnishings & Fixtures",
        "Home Improvement Retail",
        "Home Improvement Stores",
        "Household & Personal Products",
        "Industrial Distribution",
        "Industrial Metals & Minerals",
        "Information Technology Services",
        "Infrastructure Operations",
        "Insurance - Diversified",
        "Insurance - Life",
        "Insurance - Property & Casualty",
        "Insurance - Reinsurance",
        "Insurance - Specialty",
        "Insurance Brokers",
        "Integrated Freight & Logistics",
        "Internet Content & Information",
        "Internet Retail",
        "Leisure",
        "Lodging",
        "Long - Term Care Facilities",
        "Lumber & Wood Production",
        "Luxury Goods",
        "Marine Shipping",
        "Media - Diversified",
        "Medical Care",
        "Medical Care Facilities",
        "Medical Devices",
        "Medical Distribution",
        "Medical Instruments & Supplies",
        "Metal Fabrication",
        "Mortgage Finance",
        "Oil & Gas Drilling",
        "Oil & Gas E & P",
        "Oil & Gas Equipment & Services",
        "Oil & Gas Integrated",
        "Oil & Gas Midstream",
        "Oil & Gas Refining & Marketing",
        "Other Industrial Metals & Mining",
        "Other Precious Metals & Mining",
        "Packaged Foods",
        "Packaging & Containers",
        "Paper & Paper Products",
        "Personal Services",
        "Pharmaceutical Retailers",
        "Pollution & Treatment Controls",
        "Publishing",
        "REIT - Diversified",
        "REIT - Healthcare Facilities",
        "REIT - Hotel & Motel",
        "REIT - Industrial",
        "REIT - Mortgage",
        "REIT - Office",
        "REIT - Residential",
        "REIT - Retail",
        "REIT - Specialty",
        "Railroads",
        "Real Estate - Development",
        "Real Estate - Diversified",
        "Real Estate - General",
        "Real Estate Services",
        "Recreational Vehicles",
        "Rental & Leasing Services",
        "Residential Construction",
        "Resorts & Casinos",
        "Restaurants",
        "Savings & Cooperative Banks",
        "Scientific & Technical Instruments",
        "Security & Protection Services",
        "Semiconductor Equipment & Materials",
        "Semiconductor Memory",
        "Semiconductors",
        "Shell Companies",
        "Shipping & Ports",
        "Silver",
        "Software - Application",
        "Software - Infrastructure",
        "Solar",
        "Specialty Business Services",
        "Specialty Chemicals",
        "Specialty Finance",
        "Specialty Industrial Machinery",
        "Specialty Retail",
        "Staffing & Employment Services",
        "Staffing & Outsourcing Services",
        "Steel",
        "Telecom Services",
        "Textile Manufacturing",
        "Thermal Coal",
        "Tobacco",
        "Tools & Accessories",
        "Travel Services",
        "Trucking",
        "Uranium",
        "Utilities - Diversified",
        "Utilities - Independent Power Producers",
        "Utilities - Regulated Electric",
        "Utilities - Regulated Gas",
        "Utilities - Regulated Water",
        "Utilities - Renewable",
        "Waste Management"
    ];
    $("#industriesList").autocomplete({
        source: availableIndustry
    });

})