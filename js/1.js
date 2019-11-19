$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-caret-left fa-2x" aria-hidden="true"></i>',
              '<i class="fas fa-caret-right fa-2x" aria-hidden="true"></i>'],
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        // breakpoint from 480 up
        480: {
            items: 1,
            nav: false,
        },
        // breakpoint from 768 up
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

//burger animation
$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });

});

//findWork varying content
$('#findWork').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Вакансия ' + recipient)
    modal.find('.modal-body #recipient-name').val(recipient)
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
