$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Menu func
	$(".headline .open_menu ul li a").on('click', function(event) {
    event.preventDefault();
    	$('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

	//Input of phone with value and validation
	$('input[name="Телефон"]').mask('+7 (999) 999-99-99');
    $('input[name="Телефон"]').blur(function() {
        if ($(this).val().length != 18) {
            $(this).addClass('error-input');
        }
    });

	//Open/Close menu func
	$("#menu_open").click(function(e){
	    $(".open_menu").show();
	});
		    $(".close").click(function(e){
		    $(".open_menu").hide();
		});
		  $('.open_menu a').click(function(){
			  $('.open_menu').slideUp(400);
		})  
	

	// Top Callbeck func
	$("#callback_open").click(function() {
 		$("#sec_callbeck").show();
	});
	$("#callback_top_close").click(function() {
 		$("#sec_callbeck").hide();
	});

	//POPUP close func	
	$(".btn_close").click(function(){
	    $(".my_popup").fadeOut(500);
	}); 


	//SEC 2 local navigation	
	$(".sec2_wrap a").on("click", function(){
		var $this = $(this);
	    $(".sec2_wrap").fadeOut(500);
	    var id = $this.attr("data-id");
	    $("#tab_" + id).fadeIn(500);
	});

	$("#sec2_close1").click(function(e){
	    $("#tab_1").fadeOut(500);
	    $(".sec2_wrap").fadeIn(500);
	});
	$("#sec2_close2").click(function(e){
	    $("#tab_2").fadeOut(500);
	    $(".sec2_wrap").fadeIn(500);
	});
	$("#sec2_close3").click(function(e){
	    $("#tab_3").fadeOut(500);
	    $(".sec2_wrap").fadeIn(500);
	});
	$("#sec2_close4").click(function(e){
	    $("#tab_4").fadeOut(500);
	    $(".sec2_wrap").fadeIn(500);
	});

	//Page 3 anketa_min 
	//Firt section buttons
	$(".sec3_one_buttons_wrap a").on('click', function(){
		$(this).toggleClass('button_active').siblings().removeClass('button_active');
	 });

	//Second section buttons
	$(".sec3_two_button_wrap a").on('click', function(){
		$(this).toggleClass('button_active').siblings().removeClass('button_active');
	 });

	//Page 6 anketa_min 
	$('#sec6_btn1, #sec6_btn2, #sec6_btn3, #sec6_btn4, #sec6_btn5, #sec6_btn6, #sec6_btn7, #sec6_btn8').click(function(){
		$(this).toggleClass('btn_active');
		});

	// $("#sec6_item1").click(function(e){
	//     $(".step1").fadeOut(700);
	//     $(".step2").fadeIn(700);
	// });

	//Page 6 Anketa
	var step1 = "";
    var step2 = "";
    var step3 = "";
    var step4 = "";
    var step5 = "";

    $(".step1 a").on("click", function() {
        step1 = $(this).text();
        $(".step1").fadeOut(700);
        $(".step2").fadeIn(700);
    });


    $(".step2 a").on("click", function() {
        step2 = $(this).text();
        $(".step2").fadeOut(700);
        $(".step3").fadeIn(700);
    });

    $(".step3 a").on("click", function() {
        step3 = $(this).text();
        $(".step3").fadeOut(700);
        $(".step4").fadeIn(700);
    });

    $(".step4 a").on("click", function() {
        step4 = $(this).text();
        $(".step4").fadeOut(700);
        $(".step5").fadeIn(700);
    });

    $(".step5 a").on("click", function() {
        step5 = $(this).text();
        $(".step5").fadeOut(700);
        $(".step6").fadeIn(700);
    });


	//bxSlider4
	$('.sec7_slider, .sec8_sider, .sec10_slider').bxSlider({
	  mode: 'fade',
	  pager: false, 
	  captions: true,
	  conrols: true,
	  infiniteLoop: false,
	  hideControlOnEnd: true,
	});


	//TEAM sec10 First position on
	$("#first_memb_open").click(function(e){
	    $("#first_team_short").fadeOut(300);
	    $("#first_memb_details").fadeIn(300);
	});
	//TEAM sec10 First position off
	$("#first_memb_close").click(function(e){
	    $("#first_memb_details").fadeOut(300);
	    $("#first_team_short").fadeIn(300);
	});

	//TEAM sec10 Second position on
	$("#second_memb_open").click(function(e){
	    $("#second_team_short").fadeOut(500);
	    $("#second_memb_details").fadeIn(500);
	});
	//TEAM sec10 Second position off
	$("#second_memb_close").click(function(e){
	    $("#second_memb_details").fadeOut();
	    $("#second_team_short").fadeIn();
	});

	//TEAM sec10 Third position on
	$("#third_memb_open").click(function(e){
	    $("#third_team_short").fadeOut(500);
	    $("#third_memb_details").fadeIn(500);
	});
	//TEAM sec10 Third position off
	$("#third_memb_close").click(function(e){
	    $("#third_memb_details").fadeOut();
	    $("#third_team_short").fadeIn();
	});

	$('<figure><object data="../ajax/map.html"></object></figure>').appendTo('#map');
    console.log('map.append');




		// $("#sec2 .cont_sec2 a").on("click", function() {
	 //        var $this = $(this);

	 //        $(".cont_sec2 ").removeClass("active");
	 //        $this.addClass("active");
	 //        var id = $this.attr("data-id");
	 //        $(".cont_sec2 .tab_content > div").hide();
	 //        $(".cont_sec2 .tab_content #tab_" + id).fadeIn(500);
	 //    });


	// $('#callback_open, #callback_top_close').click(function () {
 //    	$('#sec_callbeck').slideToggle("slow")({
 //      		direction: "down"
 //    		}, 300);
 //    	$(this).toggleClass('');
 //  	});

	


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".my_popup").show();
			//alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
