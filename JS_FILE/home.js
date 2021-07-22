window.addEventListener("scroll", navigationChanging);

// This function is to see how the navigation bar changes as we scroll down. The color of scroll bar changes.

function navigationChanging() {
    let navigationBar = document.getElementsByClassName("navigation_bar")[0];
    navigationBar.classList.toggle("scrollingNavigation", window.scrollY > 0);
    let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
    hamburgerMenu.classList.toggle("scrollHamburger", window.scrollY > 0);

    ////fleet and pricing overlay
    let fleetAndPricing = document.getElementsByClassName(
        "fleetAndPricingOverlay-cont"
    )[0];
    fleetAndPricing.classList.toggle("absolute", window.scrollY > 10);
}

function showMobileNavBar() {
    let navigationBar = document.getElementsByClassName("mobileNavBar")[0];
    navigationBar.classList.toggle("active");
}
// this is for collapsible content where we can select anything and that value  will appear on collapse_btn
function changeCollapsingBtnValue(collapsing_btn_type, value) {
    let collapse_btn = document.getElementsByClassName(collapsing_btn_type)[0];
    collapse_btn.innerHTML = value;
    let data = JSON.parse(localStorage.getItem("rideNowOtherInfo"));
    let rideNowOtherInfo = {
        ...data,
        planName: `${value}`,
    };
    console.log(rideNowOtherInfo);
    localStorage.setItem("rideNowOtherInfo", JSON.stringify(rideNowOtherInfo));
    collapse_btn.classList.remove("active");
    hideEndDate(value);
}

function hideEndDate(value) {
    if (value == "30 DAYS BOOKING") {
        document.getElementsByClassName("endDateSelector")[0].style.display =
            "none";
    } else {
        document.getElementsByClassName("endDateSelector")[0].style.display =
            "block";
    }
}
// this function is to change image of header dynamically
let imgNum = 2;

function changeImgAndTagLine() {
    let arrOfImg = [
        "url('https://www.onnbikes.com/img/Self-ride-bike-rentals-desktop@2x.jpg')",
        "url('https://www.onnbikes.com/img/long-term-desktopbanner@2x.jpg')",
        "url('https://www.onnbikes.com/img/R2o-desktopbanner.jpg')",
    ];
    let arrOfHeadings = [
        `RENT TODAY, OWN TOMORROW`,
        `LONG TERM RENTALS`,
        `SELF RIDE BIKE RENTALS`,
    ];
    let arrOfSubHeadings = [
        `ZERO-DOWN PAYMENT FLEXIBLE OWNERSHIP`,
        `CHOOSE FROM MONTHLY & QUADRATIC PLAN`,
        `NOW STARTS AT $8 /HOUR`,
    ];
    let homeHeader = document.querySelectorAll(".img_slideshow")[0];
    let heading = document.querySelector("#tagLineHeading");
    let subHeading = document.querySelector("#tagLineHeading + h3");
    homeHeader.style.backgroundImage = arrOfImg[imgNum % arrOfImg.length];
    heading.innerHTML = arrOfHeadings[imgNum % arrOfHeadings.length];
    subHeading.innerHTML = arrOfSubHeadings[imgNum % arrOfHeadings.length];

    imgNum++;
}
setInterval(() => {
    changeImgAndTagLine();
}, 3000);

function removePopUp(name) {
    let popUpCont = document.getElementsByClassName(name)[0];
    popUpCont.classList.add("hide");
    if (popUpCont.classList.contains("active"))
        popUpCont.classList.remove("active");
    document.body.style.overflow = "visible";
}

// ride now calendar popup
function calendarVisible(para) {
    let calendar = document.querySelector(`.${para} > .calendar`);
    let calendar_timing = document.querySelector(`.${para} > .calendar_timing`);
    if (!calendar_timing.classList.contains("hide")) {
        calendar_timing.classList.add("hide");
    }
    calendar.classList.toggle("hide");
    missionCalender(para);
}
// nav bar signup page
function showSignup() {
    let login = document.getElementById("login_form");
    let signup = document.getElementById("signup_form");
    let heading = document.getElementsByClassName("heading")[0];
    let loginHeading = heading.children[0];
    let signupHeading = heading.children[1];
    login.classList.toggle("hide");
    signup.classList.toggle("hide");
    loginHeading.classList.toggle("currForm");
    signupHeading.classList.toggle("currForm");
}

let collapse_btn = document.querySelectorAll(".hide_btn");

collapse_btn.forEach(function(btn, ind) {
    btn.addEventListener("click", function() {
        let grandFather = this.parentElement.parentElement;
        if (grandFather.classList.contains("accordian_container")) {
            collideOthers(ind, grandFather);
        }
        this.classList.toggle("active");
    });
});

function collideOthers(ind, elem) {
    let children = elem.children;
    for (let i = 0; i < children.length; i++) {
        if (elem.children[i].children[0].classList.contains("active") && i != ind) {
            elem.children[i].children[0].classList.remove("active");
        }
    }
}
// this function is for contact us form select city collapsible content
function showFormCity() {
    let btn = document.getElementsByClassName("hide_btn-form")[0];
    btn.classList.toggle("active");
}
// this is for ride now collase 30 days or etc wala
function showrideNowCollapse() {
    localStorage.removeItem("endDateObj");
    let btn = document.getElementsByClassName("hide_btn-rideNow")[0];
    btn.classList.toggle("active");
}

////for fleet and pricing slide
const allBikeList = document.querySelectorAll(".bike_cont_list > li");
let arrOfBikePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let i = 0;
let j = 2;

function slide(step) {
    if (j == arrOfBikePos.length - 1 && step > 0) return;
    else if (i == 0 && step < 0) return;
    let index;
    if (step > 0) {
        j++;
        i++;
        index = j;
    } else {
        j--;
        i--;
        index = i;
    }
    // index = Math.min(Math.max(index, 0), liEls.length - 1);
    allBikeList[index].scrollIntoView({ behavior: "smooth" });
    console.log(index);
}

// move_to_FleetAndPricing() and for remove also ;
function move_to_FleetAndPricing() {
    let fleetCont = document.getElementsByClassName(
        "fleetAndPricingOverlay-cont"
    )[0];
    fleetCont.classList.toggle("active");
}
// move_to_FleetAndPricingCity(); and city change logic
function move_to_FleetAndPricingCity() {
    let btn = document.getElementsByClassName("hide_btn-fleetNPricing")[0];
    btn.classList.toggle("active");
}

function addEventListenerFleetCities() {
    let cities = document.querySelectorAll(
        ".hide_content-fleetNPricing > ul > li"
    );
    cities.forEach((city) => {
        city.addEventListener("click", function() {
            changeFleetAndPricingCity(city.innerHTML);
            move_to_FleetAndPricingCity();
        });
    });
}
addEventListenerFleetCities();

function changeFleetAndPricingCity(city) {
    let btn = document.getElementsByClassName("hide_btn-fleetNPricing")[0];
    btn.innerHTML = city;
    let locations = document.querySelector(".locations > ul");
    let objOfLocations = {
        BENGALURU: `<li>KORAMANGALA</li>
    <li>ELECTRONIC CITY</li>
    <li>MS RAMAIAH COLLEGE</li>
    <li>KUNDALAHALLI</li>
    <li>YELAHANKA</li>
    <li>SILK BOARD SRCM</li>
    <li>ELECTRONIC CITY HUB</li>`,

        HYDERABAD: `<li>MADHAPUR</li>
    <li>GACHIBOWLI</li>
    <li>AMEERPET</li>
    <li>DILSUKHNAGAR</li>
    <li>SECUNDERABAD</li>
    <li>RAIDURGAM POLICE COMMISSIONARATE</li>
    <li>CHANDA NAGAR</li>`,

        JAIPUR: `<li>GT-GAURAV TOWER</li>
    <li>GOLD SOUK GRAND MALL-JAWAHAR CIRCLE</li>
    <li>C SCHEME</li>
    <li>NEW AATISH MARKET-METRO STATION</li>
    <li>JAGATPURA ROAD</li>
    <li>RAJA PARK</li>
    <li>MANSAROVAR-SHIPRA PATH</li>`,

        GURUGRAM: `<li>BIKE SURGEON</li>`,

        MYSURU: `<li>INFOSYS</li>
    <li>JAGANMOHAN PALACE</li>
    <li>GOKULAM</li>`,

        UDAIPUR: `<li>UDAIPOLE</li>`,

        AHMEDABAD: `<li>VIJAY CROSS ROAD</li>`,

        PUNE: ``,
    };
    locations.innerHTML = objOfLocations[city];
}

// This is the calendar logic build to find all the dates and time dynamically
let date1 = new Date();
let date2 = new Date();

function missionCalender(para) {
    let date;
    if (para === "selectStartDate") {
        date = date1;
    } else {
        date = date2;
    }
    date.setDate(1);
    let dayOfFirstDay = date.getDay();
    let month = document.querySelector(`.${para} .calendar .month p`);
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let prevMonthLastDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    let dates = document.querySelector(`.${para} .calendar .dates`);
    dates.innerHTML = "";

    month.innerHTML = `${date.getFullYear()}-${giveMonth(date.getMonth())}`;

    for (
        let i = prevMonthLastDate - dayOfFirstDay + 1; i <= prevMonthLastDate; i++
    ) {
        let dateCont = document.createElement("div");
        dateCont.innerHTML = i;
        dateCont.classList.add("prevMonthDate");
        dates.append(dateCont);
    }
    for (let i = 1; i <= lastDate; i++) {
        let dateCont = document.createElement("div");
        let currDate = new Date();
        if (
            (date.getMonth() == currDate.getMonth() && i < currDate.getDate()) ||
            (date.getMonth() < currDate.getMonth() &&
                date.getFullYear() <= currDate.getFullYear())
        ) {
            dateCont.classList.add("past");
        } else {
            dateCont.classList.add("presentNFuture");
            dateCont.onclick = function() {
                addDateToLocalStorage(para, i, date);
                showTimingTab(para, i, date);
            };
        }
        dateCont.innerHTML = i;

        dates.append(dateCont);
    }
    date.setDate(lastDate);
    let restOfTheDay = date.getDay();
    for (let i = 1; i <= 7 - restOfTheDay - 1; i++) {
        let dateCont = document.createElement("div");
        dateCont.innerHTML = i;
        dateCont.classList.add("nextMonthDate");

        dates.append(dateCont);
    }
}

function giveMonth(ind) {
    let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return month[ind];
}

function changeMonth(para, parentName) {
    if (parentName == "endDateSelector") {
        let currMonth = date2.getMonth();
        date2.setDate(1);
        if (para == "prev") {
            date2.setMonth(currMonth - 1);
        } else {
            date2.setMonth(currMonth + 1);
        }
    } else {
        let currMonth = date1.getMonth();
        date1.setDate(1);
        if (para == "prev") {
            date1.setMonth(currMonth - 1);
        } else {
            date1.setMonth(currMonth + 1);
        }
    }

    missionCalender(parentName);
}

function showTimingTab(para, i, date) {
    let calendar = document.querySelector(`.${para} .calendar`);
    let calendar_timing = document.querySelector(`.${para} .calendar_timing`);
    calendar.classList.add("hide");
    calendar_timing.classList.remove("hide");
    date.setDate(i);
    let wholeDate = document.querySelector(
        `.${para} .calendar_timing .wholeDate p`
    );
    wholeDate.innerHTML = `${giveMonth(
    date.getMonth()
  )} ${i}, ${date.getFullYear()}`;
    let arrOfTimings = [
        `09:00 AM`,
        `10:00 AM`,
        `11:00 AM`,
        `12:00 PM`,
        `01:00 PM`,
        `02:00 PM`,
        `03:00 PM`,
        `04:00 PM`,
        `05:00 PM`,
        `06:00 PM`,
        `07:00 PM`,
    ];
    let availableTimings = document.querySelector(
        `.${para} .calendar_timing .availableTimings`
    );
    availableTimings.innerHTML = "";
    let today = new Date();
    if (
        date.getDate() == today.getDate() &&
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear()
    ) {
        let lastTime = 19;
        let hour = date.getHours() + 1;

        while (hour <= lastTime) {
            let amORpm = "AM";
            if (hour > 12) amORpm = "PM";
            let div = document.createElement("div");
            div.innerHTML = `${
        hour % 12 < 10 ? "0" + (hour % 12) : hour % 12
      }:00 ${amORpm}`;
            div.onclick = function() {
                addTimeToLocalSto(para, div.innerHTML);
                showRideNowDateAndTime(para);
                calendar_timing.classList.add("hide");
            };
            availableTimings.append(div);
            hour++;
        }
    } else {
        for (let i = 0; i < arrOfTimings.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = arrOfTimings[i];
            div.onclick = function() {
                addTimeToLocalSto(para, div.innerHTML);
                showRideNowDateAndTime(para);
                calendar_timing.classList.add("hide");
            };
            availableTimings.append(div);
        }
    }
}

function addDateToLocalStorage(para, i, date) {
    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    date.setDate(i);
    let obj = {
        date: i,
        month: giveMonth(date.getMonth()),
        year: date.getFullYear() - 2000,
        weekDay: weekDays[date.getDay()],
    };
    if (para == "selectStartDate") {
        localStorage.setItem("startDateObj", JSON.stringify(obj));
    } else {
        localStorage.setItem("endDateObj", JSON.stringify(obj));
    }
}

function addTimeToLocalSto(para, time) {
    if (para == "selectStartDate") {
        let startDateObj = JSON.parse(localStorage.getItem("startDateObj"));
        startDateObj["time"] = time;
        localStorage.setItem("startDateObj", JSON.stringify(startDateObj));
    } else {
        let endDateObj = JSON.parse(localStorage.getItem("endDateObj"));
        endDateObj["time"] = time;
        localStorage.setItem("endDateObj", JSON.stringify(endDateObj));
    }
}
// this function is for get the obj and show on dom ride now sec
function showRideNowDateAndTime(para) {
    if (para == "selectStartDate") {
        let startDateObj = JSON.parse(localStorage.getItem("startDateObj"));
        let spanTag = document.querySelector(`.${para} .calendarStartingDate`);
        // console.log(spanTag);
        spanTag.innerHTML = `<strong class="calendarStartingDate-date">${startDateObj.date}</strong>
                            <span class="calendarStartingDate-weekDay">${startDateObj.weekDay}</span>
                            <span class="calendarStartingDate-month">${startDateObj.month} ${startDateObj.year}</span>
                            <span class="calendarStartingDate-time">${startDateObj.time}</span>`;
        let startDateSpan = document.querySelector(".selectStartColumn");
        startDateSpan.classList.add("hide");
        if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
    } else {
        let endDateObj = JSON.parse(localStorage.getItem("endDateObj"));
        let spanTag = document.querySelector(`.${para} .calendarEndDate`);
        spanTag.innerHTML = `<strong class="calendarEndDate-date">${endDateObj.date}</strong>
                            <span class="calendarEndDate-weekDay">${endDateObj.weekDay}</span>
                            <span class="calendarEndDate-month">${endDateObj.month} ${endDateObj.year}</span>
                            <span class="calendarEndDate-time">${endDateObj.time}</span>`;
        let endDateSpan = document.querySelector(".endDateSpan");
        endDateSpan.classList.add("hide");
        if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
    }
}

// The below built logic checks whether start and end date is entered and takes to the next page of ride now.

function checkStartAndEndDateCont() {
    let rideNow_city_name =
        document.getElementsByClassName("rideNow-city-name")[0];
    let choose_plan = document.querySelector(".choose_plan .hide_btn-rideNow");
    let startDate = document.querySelector(
        ".selectStartDate .calendarStartingDate"
    );
    let endDate = document.querySelector(".endDateSelector .calendarEndDate");

    choose_plan = choose_plan.innerHTML.trim();
    if (startDate.classList.contains("hide")) {
        alert("Please fill start date");
    } else if (
        endDate.classList.contains("hide") &&
        choose_plan == "HOURLY/DAILY"
    ) {
        alert("Please fill end date or choose 30 days plan");
    } else {
        let rideNowOtherInfo = {
            cityName: `${rideNow_city_name.innerHTML}`,
            planName: `${choose_plan}`,
        };
        localStorage.setItem("rideNowOtherInfo", JSON.stringify(rideNowOtherInfo));
        window.location.href = "#";
    }
}

//Working on the Sorting of Cities. Its incomplete

const arrOfCities = [{
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/bengaluru.png",
        name: "BENGALURU",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/hyderabad.png",
        name: "HYDERABAD",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/jaipur.png",
        name: "JAIPUR",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/gurugram.jpeg",
        name: "GURUGRAM",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/mysuru.png",
        name: "MYSURU",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/udaipur.png",
        name: "UDAIPUR",
    },
    {
        img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/ahmedabad.png",
        name: "AHMEDABAD",
    },
];
if (localStorage.getItem("rideNowOtherInfo") != null) {
    let { cityName, planName } = JSON.parse(
        localStorage.getItem("rideNowOtherInfo")
    );
    document.querySelector(".rideNow-city-name").innerHTML = cityName;
    if (planName != undefined) {
        document.querySelector(".hide_btn-rideNow").innerHTML = planName;
        hideEndDate(planName);
    }
}

if (localStorage.getItem("rideNowCities") == null) {
    localStorage.setItem("rideNowCities", JSON.stringify(arrOfCities));
}

function showRideNowCities() {
    const cityArea = document.querySelector(".selectCity .cityArea");
    cityArea.innerHTML = "";
    let arrOfCities = JSON.parse(localStorage.getItem("rideNowCities"));
    arrOfCities.forEach((city) => {
        let cityCont = document.createElement("div");
        cityCont.classList.add("cityCont");
        cityCont.innerHTML = `<div>
        <img src= ${city.img}
            alt="" srcset="">
         <p>${city.name}</p>
    </div>`;
        cityCont.onclick = function() {
            let data = JSON.parse(localStorage.getItem("rideNowOtherInfo"));
            let rideNowOtherInfo = {
                ...data,
                cityName: `${this.children[0].children[1].innerHTML}`,
            };
            localStorage.setItem(
                "rideNowOtherInfo",
                JSON.stringify(rideNowOtherInfo)
            );
            changeRideNowCityValue(this);
        };
        cityArea.append(cityCont);
    });
}
// When clicked on the select city A pop up opens which contains city image and search Bar.

function showSelectCity() {
    showRideNowCities();
    let selectCityCont = document.getElementsByClassName("selectCity-overlay")[0];
    selectCityCont.classList.toggle("hide");
    selectCityCont.classList.add("active");
    document.body.style.overflow = "hidden";
}

function changeRideNowCityValue(elem) {
    let city = elem.children[0].children[1].innerHTML;
    document.getElementsByClassName("rideNow-city-name")[0].innerHTML = city;
    removePopUp("selectCity-overlay");
}

function filterRideNowCities() {
    let input = document.getElementById("searchCity").value;
    let inputVal = input.toUpperCase();
    const cityArea = document.querySelector(".selectCity .cityArea");
    cityArea.innerHTML = "";
    let arrOfCities = JSON.parse(localStorage.getItem("rideNowCities"));
    arrOfCities.forEach((city) => {
        if (city.name.includes(inputVal)) {
            let cityCont = document.createElement("div");
            cityCont.classList.add("cityCont");
            cityCont.innerHTML = `<div>
        <img src= ${city.img}
            alt="" srcset="">
         <p>${city.name}</p>
    </div>`;
            cityCont.onclick = function() {
                changeRideNowCityValue(this);
            };
            cityArea.append(cityCont);
        }
    });
}

function aboutus() {
    window.location.href = "#";
}