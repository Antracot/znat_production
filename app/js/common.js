$(function() {

	if (screen.width <= 480) {
		window.location = "http://www.znat-company.ru/mobile/";
		}


	//Top Callback
	$('#callback_open, #callback_open_menu, #callback_top_close').click(function () {
    	$('.callback_top').slideToggle("slow")({
      		direction: "up"
    		}, 300);
    	$(this).toggleClass('');
  	});


	// $("#zak_zvon").click(function(){
	//     $(".my_popup").show();
	// });

	$(".close_button").click(function(){
	    $(".my_popup").fadeOut(500);
	});    


	// var prev = 1;
	// var $window = $(window);
	// var nav = $('#menu_hid');

	// $window.on('scroll', function(){
	//   var scrollTop = $window.scrollTop();
	//   nav.toggleClass('hidden', scrollTop = prev);
	//   prev = scrollTop;
	// });

	// $("#menu_hid").scroll(function(e){
	//     $(".menu").fadeOut(500);
	//     console.log('FUCK!!!!');
	// });

  	// $(window).scroll(function() {
   //      if ($(window).scrollTop() > 150) {
   //          $(".menu").show();
   //      } else {
   //          $(".menu_open").hide();
   //      }
   //  });


  	 // var scrollTop = $(this).scrollTop();
		  // if (scrollTop > 100) {
		  //   $("#menu_hid").fadeOut("slow"); 
		  // } else {
		  //   $("#menu_hid").fadeIn("slow"); 
		  // }


  	// $(window).scroll(function() {
   //      if ($(window).scrollTop() > $('#page_one')) {
   //          $("#menu_hid").show();
   //      } else {
   //          $("#menu_hid").hide();
   //      }
   //  });

		// $(window).scroll(function(){
		// 	var distanceTop = $('#show').offset().top - $(window).height();
		// 	if  ($(window).scrollTop() > distanceTop)
		// 		$('#menu_hid').animate({'bottom':'0px'},300);
		// 	else
		// 		$('#menu_hid').stop(true).animate({'bottom':'-105px'},200);
		// });
		// $('#menu_hid .close').bind('click',function(){
		// 	$(this).parent().remove();
		// });





	//Menu func
	$(".headline .open_menu ul li a").on('click', function(event) {
    event.preventDefault();
    	$('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

	//Open/Close menu func
	$("#menu_open, #menu_open_hid").click(function(e){
	    $(".open_menu").show();
	});
		    $(".close").click(function(e){
		    $(".open_menu").slideUp('slow');
		});
		  $('.open_menu a').click(function(){
			  $('.open_menu').hide(400);
		})


	//SEC 3 Anketa_mini
	var step3_1 = "";
    var step3_2 = "";
    var step3_3 = "";

    $(".sec3_centr .step3_1 a").on("click", function() {
        step3_1 = $(this).text();
        $(".step3_1").fadeOut(300);
        $(".step3_2").fadeIn(300);
    });
    $(".sec3_centr .step3_2 a").on("click", function() {
        step3_2 = $(this).text();
        $(".step3_2").fadeOut(300);
        $(".step3_3").fadeIn(300);
    });
    $(".sec3_centr .step3_3 a").on("click", function() {
        step3_3 = $(this).text();
        $(".step3_3").fadeOut(300);
        $(".step3_4").fadeIn(300);
    });

    //SEC 6 Anketa
	var step6_1 = "";
    var step6_2 = "";
    var step6_3 = "";
    var step6_4 = "";

    $("#sec6 .sec6_cont .step6_1 a").on("click", function() {
        step6_1 = $(this).text();
        $(".step6_1").fadeOut(300);
        $(".step6_2").fadeIn(300);
    });
    //back to step 1
    $("#to_step1").on("click", function() {
        $(".step2").fadeOut(300);
        $(".step1").fadeIn(300);
    });

    $("#sec6 .sec6_cont .step6_2 a").on("click", function() {
        step6_2 = $(this).text();
        $(".step6_2").fadeOut(300);
        $(".step6_3").fadeIn(300);
    });
    //back to step 2
    $("#sec6 .sec6_cont .beck_to_step #to_step2").on("click", function() {
        $(".step6_3").fadeOut(300);
        $(".step6_2").fadeIn(300);
    });
    $("#sec6 .sec6_cont .step6_3 a").on("click", function() {
        step6_3 = $(this).text();
        $(".step6_3").fadeOut(300);
        $(".step6_4").fadeIn(300);
    });
    //back to step 3
    $("#sec6 .sec6_cont .beck_to_step #to_step3").on("click", function() {
        $(".step6_4").fadeOut(300);
        $(".step6_3").fadeIn(300);
    });
    $("#sec6 .sec6_cont .step6_4 a").on("click", function() {
        step6_4 = $(this).text();
        $(".step6_4").fadeOut(300);
        $(".step6_5").fadeIn(300);
    });

    


























		// var data_arr = [];
		// var counter = 1;
		// $(".button").click(function (obj){
		// 	$("#sec3_anketa"+counter).fadeOut(500);
		// 	var data_ank = obj.currentTarget.value;
		// 	data_arr.push(data_ank);
		// 	var myVar = data_arr.toString();
		// 	//console.log(data_arr);
		// 	counter++;
		// 	$("#sec3_anketa"+counter).fadeIn(500);
		// });

		// $("#sec3_btn_ank3").click(function (e){
		// 	$("#sec3_ank_form").fadeIn(500);
		// 	var myVar = data_arr.toString();
		// 	console.log(myVar);
		// 	$.ajax({
		//          url: '../mail.php',
		//          type: 'POST',
		//          data: 'myVar',
		//          success: function(data) {
		//             $('.display_div').html(data);
		//          }
		//       });
		// });
		

		//SEC 2 local navigation	
		$(".cont_sec2 .centr_block a").on("click", function() {
	        var $this = $(this);

	        $(".cont_sec2 .left_block u").removeClass("active");
	        var id1 = $this.attr("data-id");
	        console.log(id1);
	        $(".cont_sec2 #left_" + id1).addClass("active");

	        $(".cont_sec2 .centr_block a").removeClass("active");
	        $this.addClass("active");
	        var id = $this.attr("data-id");
	        $(".cont_sec2 .tab_content > div").hide();
	        $(".cont_sec2 #tab_" + id).fadeIn(500);
	    });
		
		//Input of phone with value and validation
		$('input[name="Телефон"]').mask('+7 (999) 999-99-99');
	    $('input[name="Телефон"]').blur(function() {
	        if ($(this).val().length != 18) {
	            $(this).addClass('error-input');
	        }
	    });

	    $('textarea').blur(function() {
        if ($(this).val().length < 3) {
            $(this).addClass('error-input');
        	}
    	});
    	$('textarea').focus(function() {
        $(this).removeClass('error-input');
    	});

   
		

		// var data_ank = obj.currentTarget.value;
		// data_array.push(data_ank);
		// $(".sec3_anketa1").fadeOut(500);
		// $(".sec3_anketa2").fadeIn(500);
		
		// $("#sec3_btn_ank2").click();
		// $("#sec3_anketa2").fadeOut(500);
		// $("#sec3_anketa3").fadeIn(500);
		





	
		// $(".button").click(function sec6_anketaFunc1(obj){
		// 	var data_ank2 = obj.currentTarget.value;
		// 	var data_array_min = [];	
		// 	data_array_min.push(data_ank2);
		// 		// var counter = 0;
		// 	$("#sec3_anketa2").fadeOut(500);
		// 	$("#sec3_anketa3").fadeIn(500);
		// 	})
		








	//SEC 6 Anketa
	// $(".button").click(function sec6_anketaFunc(obj){
	// 	// var value1 = $("#sec6_first_btn1, #sec6_first_btn2").data("key");
	// 	var data_array = [];	
	// 	var data_ank1 = obj.currentTarget.value;
	// 	data_array.push(data_ank1);
	// 	console.log(data_array);
	// 		// var counter = 0;
	// 	$("#sec6_anketa1").fadeOut(500);
	// 	$("#sec6_anketa2").fadeIn(500);
	// 	});


		//alert(value); //This will show you "abcd"




 // 	$("#sec6_first_btn_1, #sec6_first_btn_2").click(function(e){
	//     $("#sec6_anketa1").fadeOut(500);
	//     var button1 = document.getElementById('#sec6_first_btn_1').value;
	//     var button2 = document.getElementById('#sec6_first_btn_2').value;
	//     alert(button1.value)
	//     alert(button2.value)
	//     $("#sec6_anketa2").fadeIn(500);
	// }),

	// $("#sec6_second_btn").click(function(e){
	//     $("#sec6_anketa2").fadeOut(500);
	//     $("#sec6_anketa3").fadeIn(500);
	// }),

	// $("#sec6_third_btn").click(function(e){
	//     $("#sec6_anketa3").fadeOut(500);
	//     $("#sec6_anketa4").fadeIn(500);
	// }),

	// $("#sec6_four_btn").click(function(e){
	//     $("#sec6_anketa4").fadeOut(500);
	//     $("#sec6_anketa5").fadeIn(500);
	// }),
	// $("#sec6_five_btn").click(function(e){
	//     $("#sec6_anketa4").fadeOut(500);
	//     $("#sec6_anketa5").fadeIn(500);
	// });

	

	// TOP Callback
	/*$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"))
	});*/

	// Anketa1 Callback
	// $("a[href=#callback_ank1]").click(function(){
	// 	$("#callbeck_ank1 .formname").val($(this).data("form"))
	// });	

	
	// MIDDLE Callback
	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"))
	});

	//LOW Callback with question textarea
	$("a[href=#callback3]").click(function(){
		$("#callback3 .formname").val($(this).data("form"))
	});

	//bxSlider4
	$('.sec8_slider').bxSlider({
	  mode: 'fade',
	  pager: false, 
	  captions: true,
	  conrols: true,
	  infiniteLoop: false,
	  hideControlOnEnd: true
	});

	//Fullpage.js
	
	// variables
	var $header_top = $('.header-top');
	var $nav = $('nav');


	// toggle menu 
	// $header_top.find('a').on('click', function() {
	// $(this).parent().toggleClass('open-menu');
	// });

	//fullpage customization
	$('#fullpage').fullpage({
		  sectionSelector: '.vertical-scrolling',
		  navigation: true,
		  slidesNavigation: true,
		  controlArrows: true,
		  anchors: ['page_one', 'page_two', 'page_three', 'page_four', 'page_five', 'page_six', 
		  'page_seven', 'page_eight', 'page_nine', 'page_ten', 'page_eleven'],
		  menu: '#menu_hid',
		  afterRender: function(){
           $('#menu_hid').hide();
      	},

		afterLoad: function(anchor, index){
			if(index == 1){
				$('#menu_hid').fadeOut(300);
			}else{
				$('#menu_hid').fadeIn(500);   
        	}
      	}

	});

	

	
	$('nav').on('click', function(){
		//$('nav').hide();
		$('.header-top').removeClass('open-menu');
	}); 
	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//TEAM sec10 First position on
	$("#first_memb_open").click(function(e){
	    $(".sec10_all_members").fadeOut(500);
	    console.log('my_id');
	    $("#first_memb").fadeIn(500);
	});

	// //TEAM sec10 Second position on
	$("#second_memb_open").click(function(e){
	    $(".sec10_all_members").fadeOut(500);
	    console.log('my_id');
	    $("#second_memb").fadeIn(500);
	});

	//TEAM sec10 Third position on
	$("#third_memb_open").click(function(e){
	    $(".sec10_all_members").fadeOut(500);
	    console.log('my_id');
	    $("#third_memb").fadeIn(500);
	});

	//TEAM sec10 First position off
	$("#first_memb_close").click(function(e){
	    $("#first_memb").fadeOut();
	    console.log('my_id_close');
	    $(".sec10_all_members").fadeIn();
	});

	//TEAM sec10 Second position off
	$("#second_memb_close").click(function(e){
	    $("#second_memb").fadeOut(500);
	    console.log('my_id_close');
	    $(".sec10_all_members").fadeIn(1000);
	});

	//TEAM sec10 Third position off
	$("#third_memb_close").click(function(e){
	    $("#third_memb").fadeOut(500);
	    console.log('my_id_close');
	    $(".sec10_all_members").fadeIn(1000);
	});

	$('<figure><object data="../ajax/map.html"></object></figure>').appendTo('#map');
    console.log('map.append');
 	
 	// $("#map").load("/ajax/map.html");
 	// console.log('FUCK!');

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			//alert("Спасибо! Ваше Сообщение Отправлено.");
			$(".my_popup").show();
			//$("#form_popup").magnificPopup();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


