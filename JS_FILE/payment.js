let obj = JSON.parse(localStorage.getItem("finale"));
let startdate = JSON.parse(localStorage.getItem("startDateObj"));
let finalprice = JSON.parse(localStorage.getItem("onnbike_price"));
console.log("finalprice:", finalprice);

let enddate = JSON.parse(localStorage.getItem("endDateObj"));
if (enddate == null) {
    enddate = JSON.parse(localStorage.getItem("30daysdate"));
}

// manufacturer
let bikemanufacturer = document.getElementById("bikemanufacturer");
bikemanufacturer.innerHTML = obj[0].manufacturer;

// model
let bikemodel = document.getElementById("bikemodel");
bikemodel.innerHTML = obj[0].model;

// price + 19
let changeprice = document.querySelectorAll("#changeprice");
let n = changeprice.length;
for (let i = 0; i < n; i++) {
    changeprice[i].innerHTML = `${finalprice + 19}`;
}

// start date
let date1 = document.getElementById("startdate");
date1.innerHTML = startdate.date;
let month1 = document.getElementById("startmonth");
var y = "" + startdate.year;
var x = y.slice(2);
month1.innerHTML = `${startdate.month} ${x}`;
let weekday1 = document.getElementById("startweekday");
weekday1.innerHTML = startdate.weekDay;
let time1 = document.getElementById("starttime");
time1.innerHTML = startdate.time;

// end date
let date2 = document.getElementById("enddate");
date2.innerHTML = enddate.date;
let month2 = document.getElementById("endmonth");
var y = "" + enddate.year;
var x = y.slice(2);
month2.innerHTML = `${enddate.month} ${x}`;
let weekday2 = document.getElementById("endweekday");
weekday1.innerHTML = enddate.weekDay;
let time2 = document.getElementById("endtime");
time2.innerHTML = enddate.time;

// Tariff
let tariff = document.getElementById("tariff");
tariff.innerHTML = `${finalprice}`;

// kilometers
let kilometers = document.getElementById("kilometer");
kilometers.innerHTML = `${obj[0].free}`;

// excess
let excess = document.getElementById("excess");
excess.innerHTML = `${obj[0].excess}`;

function paymentAccept(para) {
    let upi_address = document.getElementById(para).value;
    if (validateMail(upi_address)) {
        localStorage.setItem("paymentDone", "DONE");
        window.location.href = "../index.html";
    } else {
        alert("Please give correct upi address");
    }
}

function validateMail(str) {
    let regex =
        /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[A-Za-z]{2,10})$/;
    return regex.test(str);
}