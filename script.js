// Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // Listener for click events on the save button.
  $(".saveBtn").each(function (i) {
    $(this).on("click", function () {
      var value = $(this).siblings(".description").val();
      var name = $(this).parent().attr("id");
      console.log(this);

      // User input saved in local storage using the id in the containing time-block
      localStorage.setItem(name, value);

      //Temporary notification to show that text was saved to local storage.
      $(".notification").addClass("show");

      //Timer removes notification after 8 seconds
      setTimeout(function () {
        $(".notification").removeClass("show");
      }, 8000);
    });
  });

  // Looping through each time block to apply past, present, and future classes by comparing to the current hour, which in turn also applies the colors indicating past, present, and future.
  function updateTime() {
    // Current hour from day.js
    var presentTime = dayjs().hour();

    $(".time-block").each(function () {
      var hourSlot = parseInt($(this).attr("id").split("-")[1]);

      // Conditional statements
      if (hourSlot < presentTime) {
        $(this).addClass("past");
      } else if (hourSlot === presentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        //$(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  updateTime();

  // Code to get any user input that was saved in localStorage
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

  // Code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
