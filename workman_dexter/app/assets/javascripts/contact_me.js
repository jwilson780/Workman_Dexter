/**
This is the Javascript that checks my inputs to the contat me form
For Web Developement I, I wrote a Ruby version with MVC framework that 
isnt so convoluted and is easy to port into my HTML. It is in notification mailer
*/

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();//get name
            var email = $("input#email").val();//email
            var phone = $("input#phone").val();//phone
            var message = $("textarea#message").val();//message
            var firstName = name; 
            //REGEX to cut up name and check it
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            //MUST HAVE AJAX RUNNING on server side and keep with rails stuff
            //Included a similar Rails setup with controllers etc, just need to port to php setup
            $.ajax({
                url: "././dexter_mail/contact.php",//relative file paths for all
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                    $('#success > .alert-success')
                    .append("<strong>THE MAIL SERVER IS WORKING!!!!!!. </strong>");
                    $('#success > .alert-success')
                    .append('</div>');

                    //clear
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", MAIL IS NOT SENDING TO SERVER!!!!!!!!");
                    $('#success > .alert-danger').append('</div>');
                    //clear
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function() {
    $('#success').html('');
});
