$(function(){
	var screen = $(window).width(); //获取屏幕宽度
	var fragmentConfig = {
	container : '.img-flex',//显示容器
	line :4,//多少行
	column : 4,//多少列
	width:Number($(window).width()),//显示容器的宽度
	animeTime : 10000,//最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值 
	img : 'images/03.jpg'//图片路径
	};
	fragmentImg(fragmentConfig);
	$('#ado').attr('src','./audio/333.mp3');
	setTimeout(function(){
		$('.popup-container').remove();
	},10000);
	function show(){
		$('sho').show();
		for(var i=1;i<5;i++){
		$('.d'+i+'').css({'width':''+($(window).width())*0.5+'','height':''+$(window).height()*0.5+''}).on('click','.dd'+i+'',function(){
			dian();
			setTimeout(function(){
				showPoke();
			},1000);
		});

	 };
	 if(screen > 1386){
	 	for(var i=1;i<3;i++){
		$('.d2_'+i+'').css('background-position','-'+$('.d2_'+i+'').width()+'px -68px');
		$('.d3_'+i+'').css('background-position','0px -'+($('.d3_'+i+'').height()+68)+'px');
		$('.d4_'+i+'').css('background-position','-'+$('.d4_1').width()+'px -'+($('.d4_'+i+'').height()+68)+'px');
		};
	 }else{
	 	for(var i=1;i<3;i++){
		$('.d2_'+i+'').css('background-position','-'+$('.d2_'+i+'').width()+'px -48px');
		$('.d3_'+i+'').css('background-position','0px -'+($('.d3_'+i+'').height()+48)+'px');
		$('.d4_'+i+'').css('background-position','-'+$('.d4_1').width()+'px -'+($('.d4_'+i+'').height()+48)+'px');
		};

	 }
	
		function dian(){
			$('.dd1').animate({top:'0%'},1000);
			$('.dd2').animate({left:'-100%'},1000);
			$('.dd3').animate({left:'0%'},1000);
			$('.dd4').animate({top:'-100%'},1000);
		}
	}
	show();
	// 纸牌动画--------------------------
		//旋转开始---------------------------------
function showPoke(){
	$('.poker').animate({opacity:'1'},1000);
	$('.sho').remove();
}
	var cl=0;
		for(var i=0; i<60; i++){
		$('.quan').append('<li class="first"></li>');
		}
var n=60;//开扇元素
var m=-1;//闭扇元素
//运行代码
$('.quan').click(function(){
 	cl++;
 	shan(n);
 	if(cl==2){
 	move(); 
 	 fan(m);
 	setTimeout(function(){
 		 fen();
 	   bianhua();
 	},2000)
	};
});

$('.q5').click(function(){
	var n=60;
	var m=-1;
	var t=-1;
	fan(m);
	setTimeout(function(){
		$('.poker').animate({opacity:'0'},1000,function(){
			$('.poker').remove();
		});
		$('.ceng').animate({opacity:'0'},1000,function(){
			$('.ceng').remove();
			$('#ado').attr('src','./audio/01.mp3');
		})


	},2000)
 });
	//开扇
function shan(t){
//逆时针转法
	if(t<1||cl>1){
		return false ;
	}else{
		$('.first').eq(t).animate({a:''+(360-t*6)+''},{
		step:function(now,fx){
		$(".first").eq(t).css({"transform":"rotate("+now+"deg)"})}
		,duration:500})
		t--;
		shan(t);
		 
	}
}
	//======================================
	//闭扇
function fan(e){
//逆时针转法
	if(e>60){
		return false ;
	}else{
		$('.first').eq(e).animate({a:'0'},{
		step:function(now,fx){
			fx.start=354-e*6;//你可以尝试修改start,end值，来看rotate的变化
              fx.end=0;		  
		$(".first").eq(e).css({"transform":"rotate("+now+"deg)"})}
		,duration:1000})
		e++;
		fan(e);	 
	}
}
			
//_______________________________________
//-----旋转结束----------------------------
	function move() {
//-----自转---------------------------------
		if (screen > 1386) {
			$('.q1').animate({left: '-690px', top: '-540px'}, 500);
			for (var i = 0; i < 15; i++) {
				$('.first').eq(i).animate({top: ['350px'], left: ['12px']}, 500)
			}
			for (var i = 15; i < 30; i++) {
				$('.first').eq(i).animate({left: '400px', top: '345px'}, 500)
			}
			for (var i = 30; i < 45; i++) {

				$('.first').eq(i).animate({left: '400px', top: '-5px'}, 500)
			}
			for (var i = 45; i < 60; i++) {
				$('.first').eq(i).animate({top: '0px', left: '0px'}, 500)
			}
		}else{
			$('.q1').animate({left: '-690px', top: '-400px'}, 500);
			for (var i = 0; i < 15; i++) {
				$('.first').eq(i).animate({top: ['280px'], left: ['10px']}, 500)
			}
			for (var i = 15; i < 30; i++) {
				$('.first').eq(i).animate({left: '400px', top: '280px'}, 500)
			}
			for (var i = 30; i < 45; i++) {

				$('.first').eq(i).animate({left: '400px', top: '0px'}, 500)
			}
			for (var i = 45; i < 60; i++) {
				$('.first').eq(i).animate({top: '0px', left: '0px'}, 500)
			}
		}
	}
///---------------------------------
function fen(){
	$('.first').remove();
	for(var i=0; i<15; i++){
		$('.q1').append('<li class="first"></li>');
		$('.q2').append('<li class="first"></li>');
		$('.q3').append('<li class="first"></li>');
		$('.q4').append('<li class="first"></li>');
		}
	 	// $('.quan').remove();

}//fen结尾
//----------------------------------
function bianhua(){
	var t=0;//变化元素
	if (screen > 1386) {
		$('.q1').animate({left:'-280%',top:'-100%'},1000);
		$('.q2').animate({left:'-100%',top:'24%'},1000);
		$('.q3').animate({left:'-100%',top:'60%'},1000);
		$('.q4').animate({left:'-100%',top:'100%'},1000);		
	function ping(i){
		if(t>15){
			return false;
		}else{
			$('.q1 .first').eq(i).animate({left:''+105*i+'%'},1000);
			$('.q2 .first').eq(i).animate({left:''+106*i+'%'},1000);
			$('.q3 .first').eq(i).animate({left:''+107*i+'%'},1000);
			$('.q4 .first').eq(i).animate({left:''+108*i+'%'},1000);
			t++;
			ping(t);
		}	
	}//ping结尾
		function luo(){
			var t=0;
			$('.q1').animate({left:'-300%',top:'170%'},1000);
			$('.q2').animate({left:'-102%',top:'120%'},1000);
			$('.q3').animate({left:'-98%',top:'120%'},1000);
			$('.q4').animate({left:'-94%',top:'120%'},1000);

				function yun(i){
					if(t>15){
						return false;
					}else{
					$('.q1 .first').eq(i).animate({left:''+28*i+'%'},1000);
					$('.q2 .first').eq(i).animate({left:''+(300+28*i)+'%'},1000);
					$('.q3 .first').eq(i).animate({left:''+(700+28*i)+'%'},1000);
					$('.q4 .first').eq(i).animate({left:''+(1100+28*i)+'%'},1000);
					t++;
					yun(t);
					}
				}
				yun(t);	
			}//luo结尾
			var r=1;
	function xin(){
		if(r>60){
			return false;
		}else{
			// $('.back:first').animate({left:'680px',top:'-400px'},30);
			$('.first:last').animate({left:'680px',top:'-400px'},30);

		setTimeout(function(){
			// $('.back:first').remove();
			$('.first:last').remove();
			jia(r);
			r++;
			xin();

			
		},40);
		
		};
		function jia(r){
			$('.q5').append('<li class="first" style="transform:rotate('+(360-6*r)+'deg)"></li>')
		}
		
	}

setTimeout(function(){
	ping(t);
	setTimeout(function(){
		luo();
		setTimeout(function(){
			xin();

		},1000);

	},1000);
},1000);


		}else{
		$('.q1').animate({left:'-350%',top:'-110%'},1000);
		$('.q2').animate({left:'-138%',top:'24%'},1000);
		$('.q3').animate({left:'-138%',top:'75%'},1000);
		$('.q4').animate({left:'-138%',top:'125%'},1000);
		function ping(i){
			if(t>15){
				return false;
			}else{
				$('.q1 .first').eq(i).animate({left:''+85*i+'%'},1000);
				$('.q2 .first').eq(i).animate({left:''+86*i+'%'},1000);
				$('.q3 .first').eq(i).animate({left:''+87*i+'%'},1000);
				$('.q4 .first').eq(i).animate({left:''+88*i+'%'},1000);
				t++;
				ping(t);
			}
		}//ping结尾
		function luo(){
			var t=0;
			$('.q1').animate({left:'-300%',top:'180%'},1000);
			$('.q2').animate({left:'-102%',top:'120%'},1000);
			$('.q3').animate({left:'-98%',top:'120%'},1000);
			$('.q4').animate({left:'-94%',top:'120%'},1000);

			function yun(i){
				if(t>15){
					return false;
				}else{
					$('.q1 .first').eq(i).animate({left:''+18*i+'%'},1000);
					$('.q2 .first').eq(i).animate({left:''+(228+18*i)+'%'},1000);
					$('.q3 .first').eq(i).animate({left:''+(486+18*i)+'%'},1000);
					$('.q4 .first').eq(i).animate({left:''+(719+18*i)+'%'},1000);
					t++;
					yun(t);
				}
			}
			yun(t);
		}//luo结尾
		var r=1;
		function xin(){
			if(r>60){
				return false;
			}else{
				$('.first:last').animate({left:'460px',top:'-300px'},30);
				setTimeout(function(){
					$('.first:last').remove();
					jia(r);
					r++;
					xin();
				},40);

			};
			function jia(r){
				$('.q5').append('<li class="first" style="transform:rotate('+(360-6*r)+'deg)"></li>')
			}

		}

setTimeout(function(){
	ping(t);
	setTimeout(function(){
		luo();
		setTimeout(function(){
			xin();

		},1000);

	},1000);
},1000);
	}
}//变化结尾
// 纸牌结尾------------------
})