"use strict";
// Get date of day before yesterday
var today = new Date();
var dayBeforeYesterday = new Date(
  today.setDate(today.getDate() - 2)
).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
// Set/append date to html element
document.querySelector(".js-date").innerHTML = dayBeforeYesterday;
document.querySelector(".js-date-mobile").innerHTML = dayBeforeYesterday;
