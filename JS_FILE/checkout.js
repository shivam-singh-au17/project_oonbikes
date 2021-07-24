window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

// main files to be appended start

var final_data = JSON.parse(localStorage.getItem("finale"));

var companyName = document.getElementById("comapny-name");
companyName.innerHTML = final_data[0].manufacturer; //manufacturer

var modelName = document.getElementById("model-name");
modelName.innerHTML = final_data[0].model; //modelName

var bikePic = document.getElementById("bike-pic");
var bikePic1 = document.createElement("img");
bikePic1.src = `${final_data[0].imgLink}`;
bikePic.appendChild(bikePic1); //bikePic
console.log(final_data[0].imgLink);

var adresslName = document.getElementById("abc2");
adresslName.innerHTML = final_data[0].address; //excess

var excess = document.getElementById("excess");
excess.innerHTML = `Excess ₹ ${final_data[0].excess}/km`;

var freelKM = document.getElementById("freeKm");
freelKM.innerHTML = `${final_data[0].free}Kms free`; //free-km

var total_amount_phir_se = document.getElementById("total_amount_phir_se"); ///karna h

var price_without_discount = document.getElementById("price_without_discount");
price_without_discount.innerHTML = `₹${final_data[0].price}`; //without discounted price

var start = JSON.parse(localStorage.getItem("startDateObj"));
var end = JSON.parse(localStorage.getItem("endDateObj"));
if (end == null) {
    end = JSON.parse(localStorage.getItem("30daysdate"));
}

console.log(start);
console.log(end);

var month_day = document.getElementById("month_day");
month_day.innerHTML = start.date;

var monthYear = document.getElementById("monthYear");
monthYear.innerHTML = start.month;

var day = document.getElementById("day");
day.innerHTML = start.weekDay;

var timehrs = document.getElementById("timehrs");
timehrs.innerHTML = start.time;

// var year = document.getElementById("year");
// year.innerHTML = 2000-Number(start.year);

var monthday1 = document.getElementById("month_day1");
monthday1.innerHTML = end.date;

var monthYear1 = document.getElementById("monthYear1");
monthYear1.innerHTML = end.month;

var day1 = document.getElementById("day1");
day1.innerHTML = end.weekDay;

var timehrs1 = document.getElementById("timehrs1");
timehrs1.innerHTML = end.time;

// var year1 = document.getElementById("year1");
// year1.innerHTML = 2000-Number(end.year);
// main files to be appended end

//promo code to be verified start

var promo_code = document.getElementById("inp");
var promo_code_discounted_amount = document.getElementById("promo-code-price1");
var promo_code_btn = document.getElementById("promocodetick");

let net_money = Number(final_data[0].price);

promo_code_btn.addEventListener("click", promo);
var promo_code_flag = false;

function promo() {
    if (promo_code.value == "MASAI30") {
        promo_code_discounted_amount.style.fontSize = "14.5px";
        promo_code_btn.src = "./img/checked.png";
        promo_code_discounted_amount.style.color = "red";
        promo_code_discounted_amount.innerHTML = `-₹${net_money * 0.3}`;
        promo_code_flag = true;
    } else {
        promo_code_btn.src = "./img/remove.png";
        promo_code_discounted_amount.innerHTML = ``;
    }
}

//promo code to be verified end

// FOR INSURE the RIDE BUTTON START

var discount_inner_image = document.createElement("img");
discount_inner_image.src = "./img/insurance.svg";

var discount_image = document.getElementById("insureTheRide-btn");
var discount_price = document.getElementById("insureTheRide_price");

discount_image.addEventListener("click", adder);
var add = 0;
var promo_code_flag1 = false;

function adder() {
    add++;
    if (add % 2 != 0) {
        discount_inner_image.style.display = "block";
        discount_image.style.border = "transparent";
        discount_image.appendChild(discount_inner_image);
        discount_price.style.fontSize = "15px";
        discount_price.style.color = "green";
        discount_price.innerHTML = `+₹${29}`;
        promo_code_flag1 = true;
    } else {
        discount_inner_image.style.display = "none";
        discount_image.style.border = "0.3px solid grey";
        discount_price.innerHTML = `₹${0}`;
    }
}

// FOR INSURE_the_RIDE BUTTON END

// FOR PAYMENT COLOR CHANGE (START)

var payment_color = document.getElementById("checkbox");
var total_amount_phir_se = document.getElementById("total_amount_phir_se");
total_amount_phir_se.innerHTML = `₹${final_data[0].price}`;
var payment_total_color = document.getElementById("payment-total");
payment_color.addEventListener("click", test);
var add2 = 0;

function test() {
    add2++;
    if (add2 % 2 != 0) {
        if (promo_code_flag == true) {
            promo_code_flag = false;
            net_money = net_money - net_money * 0.3;
            if (promo_code_flag1 == true) {
                promo_code_flag1 = false;
                net_money = net_money + 29;
            } else {
                net_money = net_money;
            }
        } else {
            net_money = net_money;
            if (promo_code_flag1 == true) {
                promo_code_flag1 = false;
                net_money = net_money + 29;
            } else {
                net_money = net_money;
            }
        }

        payment_total_color.style.background = "rgb(29,45,81)";
        payment_total_color.style.opacity = "100";
        payment_total_color.innerHTML = `PAYMENT ${net_money}`;
        total_amount_phir_se.innerHTML = `₹${net_money}`;
        payment_total_color.addEventListener("click", paymentPage);
        localStorage.setItem("onnbike_price", net_money);

        function paymentPage() {
            window.open("../HTML_FILE/payment.html", "_parent");
        }
    } else if (add2 == 0) {
        payment_total_color.style.background = "rgb(210,211,212)";
        payment_total_color.style.opacity = "0.6";
        /////////////////////////////////////////////////
        //////////////////////////claculation////////////////////////////////

        ///////////calculationend////////////
        ////////////////////////////////////////////////////
        //payment_total_color.addEventListener("click", paymentPage);
    } else {
        payment_total_color.style.background = "rgb(210,211,212)";
        payment_total_color.style.opacity = "0.6";
        payment_total_color.style.cursor = "not-allowed";
        //payment_total_color.addEventListener("click", paymentPage);
    }

    console.log(add2);
}