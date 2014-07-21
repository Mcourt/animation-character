$(document).ready(function(){
	var sprite = $('#character'), 
	key = {left: false, right: false},
	trans = {x: 0, y: 0},
    moving = {x: 0, y: 0},
    speed = 6;

	translate();
    window.setInterval(function () {  /* added */
    if (moving != 0) {
		var position = sprite.position();
		if(moving.x < 0 && position.left >=0 || moving.x > 0 && position.left <= ($(".world").width()-sprite.width()) ) {
	        trans.x += moving.x;
		}
		
		if(moving.y < 0 && position.top >=0 || moving.y > 0 && position.top <= ($(".world").height()-sprite.height()) ) {
	        trans.y += moving.y;
		}	

        translate();
        
    }}, 100);

	function translate() {
		sprite.css({"-webkit-transform":"translate("+trans.x+"px,"+trans.y+"px)"});
	}

	$(document).on('keydown',function(e){
		var position = sprite.position();

		sprite.removeClass();
		// Right
		if(e.which ==39){
			sprite.addClass('move right');
			moving.x = speed;

		} // Left
		else if(e.which == 37){
				sprite.addClass('move left');
				moving.x = -speed;
		} // Up
		else if(e.which == 38){
			sprite.addClass('move up');
			moving.y = -speed;
		}// Down
		else if(e.which == 40){
			sprite.addClass('move down');
			moving.y = speed;
		} else{
			
		} 
	});

	$(document).on('keyup',function(e){
		if(e.which ==39){
			sprite.removeClass('move');
		}
		else if(e.which == 37){
			sprite.removeClass('move');
		}
		else if(e.which == 38){
			sprite.removeClass('move');
		}
		else if(e.which == 40){
			sprite.removeClass('move');
		}
		moving.x = 0;
		moving.y = 0;

	});

});