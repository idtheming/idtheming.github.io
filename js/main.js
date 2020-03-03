
	$.get( "./package.html", function( data ) {
		$( "#package" ).html( data );
	});

//dark/light
  $(document).ready(function(){
      $('.toggle').click(function(){
          $('.toggle').toggleClass('active')
          $('body').toggleClass('dark')
		  var x = document.getElementById("abc");
			  if (x.innerHTML === "Dark Mode") {
				x.innerHTML = "Light Mode";
			  } else {
				x.innerHTML = "Dark Mode";
			  };
      });
	  
  });
//end toggle dark/light

//date
function getToday() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = " Chủ Nhật,";
    weekday[1] = " Thứ Hai,";
    weekday[2] = " Thứ Ba,";
    weekday[3] = " Thứ Tư,";
    weekday[4] = " Thứ Năm,";
    weekday[5] = " Thứ Sáu,";
    weekday[6] = " Thứ Bảy,";

		var month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";

    var n1 = weekday[d.getDay()];
	var n2 = d.getDate();
	var n3 = month[d.getMonth()];
	//var n4 = d.getFullYear();
    document.getElementById("demo").innerHTML = n1 + " " + n2 + " Tháng " + n3;
	//document.getElementById("year").innerHTML = n4;
}
window.addEventListener("load", getToday, true);

//scrollTop
jQuery(document).ready(function() {
	
  var btn = $('#top_');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 768) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
//End ScrollTop