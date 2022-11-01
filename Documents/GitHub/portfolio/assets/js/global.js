// scrollGage
function scrollGage(){
	/* 
	innerHeight : 가로 스크롤 막대를 포함하는 브라우저 창 뷰포트의 높이.
	window.innerHeight : 브라우저 창의 높이
	document.body.offsetHeight :body 높이
	*/
	var bodyHeight = document.body.offsetHeight - window.innerHeight;
	var currentPosition = Math.round(window.pageYOffset);
	//console.log(bodyHeight + ' - ' + currentPosition);
	var percent = Math.round(currentPosition / bodyHeight * 100);

	document.querySelector('.scrollGage__position').innerText = currentPosition;
	document.querySelector('.scrollGage__percent').innerText = percent + '%';
	//document.querySelector('.scrollGage__bar').style.width = percent + '%';
}
scrollGage();
document.addEventListener('scroll', function() {
	scrollGage();
}, false);








function marquee(){

	let tg = '.js-marquee';
	let target = document.querySelector('.js-marquee');
	let count = 0;

	function gsapTo(tg, x){
		gsap.to(tg, {
			x: x,
			duration : 0
		});
	}

	function text(count, target, direction){
		if(count > target.scrollWidth / 4){
			gsapTo(tg,0);
			count = 0;
		}else{
			gsapTo(tg,count*direction);
		}
		return count;
	}

	function animate(){
		count++;
		count = text(count, target, -1);
		window.requestAnimationFrame(animate);
	}

	animate();
}
marquee();


function mainCateMove(){

	let $cate = document.querySelector('.js-mainCate'); 
	let $list = document.querySelector('.js-mainCateList');
	let $item = document.querySelector('.js-mainCateListItem');

	let winHeight = window.innerHeight; // 현재 윈도우창 높이값
	let currentPosition = Math.round(window.pageYOffset); // 현재 스크롤 위치


	/* 
	offsetHeight : 테두리, 패딩, 수평 스크롤바 포함하여 높이. margin 포함하지 않고 높이값 가져옴 -> CSS에 의해 정의된 요소의 높이
	scrollHeight : 화면상에 표시되지 않은 스크롤 콘텐츠를 포함한 높이.
	clientHeight : 패팅을 포함한 높이.
	*/
	let cateHeight = $cate.offsetHeight; // 카테 높이값
	let cateItemHeight = $item.offsetHeight; // 아이템 높이값
	let cateTitHeight = cateHeight - cateItemHeight; // 카테 타이틀 높이값
	
	let catePosition = $cate.offsetTop; // 카테 위치
	
	let startPosition = catePosition + cateTitHeight - winHeight; //시작 위치
	
	let finishPosition = winHeight + cateHeight + cateItemHeight; // 끝나는 위치
	let otherHeight = finishPosition - cateHeight;// 끝나는 위치 - 메인카테 높이값
	
	//console.log(startPosition)


	let moveDistance = Math.round((currentPosition - startPosition)/ (otherHeight)* 100)/2 ;

	if(currentPosition >= startPosition && currentPosition <= finishPosition){
		$list.style.cssText = "transform:translateX(" + - moveDistance + '%)';
	}
	
}

mainCateMove();
document.addEventListener('scroll', function(){
	mainCateMove();
}, false);
window.onresize = function(e){
	mainCateMove();
}



window.addEventListener("load", function () {

	
});


