$(document).ready(function() {
    $("#applicationForm").on("submit", function(event) {
        event.preventDefault();

        // Show the loading indicator
        $("#loading").show();

        // Get form data
        var formData = $(this).serialize();

        // Send data to PHP script via AJAX
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: formData,
            success: function(response) {
                // Hide loading and show result
                $("#loading").hide();
                $("#result").html(response);
            },
            error: function() {
                // Hide loading and show error message
                $("#loading").hide();
                $("#result").html("<p>Error processing the form. Please try again.</p>");
            }
        });
    });
});
