$(document).ready(function () {
  const currentHour = dayjs().hour();
  //add event listener
  $("#saveBtn").on("click", function () {
    console.log("Added to plate");
  });

  // Loop through each time block
  $(".time-block").each(function () {
    // Get the hour from the id attribute of the time block
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the block hour with the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $(document).ready(function () {
    $(".time-block").each(function () {
      const blockId = $(this).attr("id");

      const userInput = $(`#${blockId} textarea`).val();
      localStorage.setItem(blockId, userInput);
      $(`#${blockId} textarea`).val(userInput);
    });
  });

  // TODO: Add code to display the current date in the header of the page.

  $(document).ready(function () {
    const currentDate = dayjs().format("MMMM DD, YYYY");

    $("#currentDate").text(currentDate);
  });

  // const now = new Date();
  // const hourNow = now.getHours();
  // const minutes = now.getMinutes();

  // const currentTime = ${hourNow}:${minutes}
});
