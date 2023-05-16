apikey = 'cfe3b091b6a4ab54d404afc0c8f08810bfef6025fd9388b8747beb5a72deec16'
industriesEl = $('#industries')
selectedCompanies = []
// console.log(requestURL);
function searchSubmit(event) {
    event.preventDefault();
    industriesEl.html("")
    var selectedIndustry = $("#industriesList").val().replaceAll(" ", "%20")
    var requestURL = 'https://api.sec-api.io/mapping/industry/' + selectedIndustry + '?token=' + apikey
    console.log(requestURL);
    console.log(selectedIndustry);
    event.preventDefault();
    fetch(requestURL)
        .then(function (response1) {
            return response1.json();
        })
        .then(function (data1) {
            //addtional function creation stuff
            // console.log(data1)
            var companyName = "";
            
            
            for (let i = 0; i < 10; i++) {
                currentCard = data1[i];
                // console.log(currentCard);
                const curCompany = currentCard;
                selectedCompanies.push (curCompany);
                //push to local storage so script.js can access it
                localStorage.setItem("companyList", JSON.stringify(selectedCompanies))
                companyName = data1[i].name;
                compList = $("<ul>")
                companyTitle = $("<li>")
                companyTitle.addClass("indBtn").on("click", function(e){
                    // console.log(e.target.innerHTML)
                    industriesEl.html("");

                    createCard(currentCard)
                    profilePage(currentCard)
                
                })
                companyTitle.text(companyName);
                industriesEl.append(companyTitle);
            }
        })
}
function profilePage(){
    
}
function createCard(cur){
    // console.log(cur);
    
    cardContainer = $("<div>");
    industriesEl.append(cardContainer);
    companyName = $("<h4>")
    companyName.text(cur.name)
    companyLocation = $("<p>")
    companyLocation.text(cur.location);
    
    cardContainer.append(companyName);
   cardContainer.append(companyLocation)
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