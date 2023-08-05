// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button.
  $(".saveBtn").each(function (i) {
    $(this).on("click", function () {
      var value = $(this).siblings(".description").val();
      var name = $(this).parent().attr("id");
      console.log(this);
      //This code should use the id in the containing time-block as a key to save the user input in local storage.
      // save in local storage
      localStorage.setItem(name, value);
    });
  });

  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // Current hour from day.js
  dayjs().hour();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var storage9 = localStorage.getItem("hour-9");
  $("#hour-9 .description").val(storage9);

  var storage10 = localStorage.getItem("hour-10");
  $("#hour-10 .description").val(storage10);


  var storage11 = localStorage.getItem("hour-11");
  $("#hour-10 .description").val(storage11);


  var storage12 = localStorage.getItem("hour-12");
  $("#hour-12 .description").val(storage12);


  var storage13 = localStorage.getItem("hour-13");
  $("#hour-13 .description").val(storage13);


  var storage14 = localStorage.getItem("hour-14");
  $("#hour-14 .description").val(storage14);


  var storage15 = localStorage.getItem("hour-15");
  $("#hour-15 .description").val(storage15);


  var storage16 = localStorage.getItem("hour-16");
  $("#hour-16 .description").val(storage16);


  var storage17 = localStorage.getItem("hour-17");
  $("#hour-17 .description").val(storage17);
 
 // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
