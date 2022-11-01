// customCursor
function customizeCursor(){
	var customCursor = document.querySelector('_customCursor');
	window.addEventListener('scroll' , cursor);
	window.addEventListener('mouseover', cursor);

	function cursor(e){
		//customCursor.style.cssText = "left:" + e.pageX + "px";
		//customCursor.style.cssText = "top:" + e.pateY - scrollY + "px";
	}

}

customizeCursor();



// goTop
function goTop(){
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
}
document.querySelector('.goTop').addEventListener('click' , function(){
	goTop();
})

// goDown
function goDown(){
	window.scroll({
		top: document.body.offsetHeight,
		left: 0, 
		behavior: 'smooth'
	})
}
document.querySelector('.goDown').addEventListener('click' , function(){
	goDown();
})


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



// _visSbjMove
function visSbjMove() {

	let target = document.querySelector('._visSbjMove');
	let targetIn = target.getElementsByTagName("span");
	let data = target.getAttribute("data-text").split(" ");
	let count = 0;

	/*
	function innerText(target, data){
		data.push(...data);
		console.log(data.length);
		let text;
		
		for (let i = 0; i < data.length; i++) {
			
			text += data[i];
			//console.log(text)
		}
		targetIn.innerHtml  +=  text ;
		console.log(targetIn)
	}
	innerText(target, data);
	*/
	

	function marqueeText(count, target, direction){
		if(count > target.scrollWidth /4){
			target.style.cssText = "transform: translate3d(0, 0, 0);";
			count = 0;
		}else{
			target.style.cssText = "transform : translate3d(" + direction*count + "px, 0, 0);";
		}
		return count;
	}

	function animate () {
		count++;
		count = marqueeText(count, target, -1);
		window.requestAnimationFrame(animate);
	}

	function scrollHandler () {
		count += 15
	}
	
	window.addEventListener('scroll', scrollHandler);
	animate();
}

visSbjMove();



//mainCate
function mainCateMove (){
	var $cate = document.querySelector('.mainCate'); 
	var $list = document.querySelector('.mainCate .list');
	var $item = document.querySelector('.mainCate .list__item');

	var winHeight = window.innerHeight; // 현재 윈도우창 높이값
	var currentPosition = Math.round(window.pageYOffset); // 현재 스크롤 위치

	/* 
	offsetHeight : 테두리, 패딩, 수평 스크롤바 포함하여 높이. margin 포함하지 않고 높이값 가져옴 -> CSS에 의해 정의된 요소의 높이
	scrollHeight : 화면상에 표시되지 않은 스크롤 콘텐츠를 포함한 높이.
	clientHeight : 패팅을 포함한 높이.
	*/
	var cateHeight = $cate.offsetHeight; // 카테 높이값
	var cateItemHeight = $item.offsetHeight; // 아이템 높이값
	var cateTitHeight = cateHeight - cateItemHeight; // 카테 타이틀 높이값
	
	var catePosition = $cate.offsetTop; // 카테 위치
	
	var startPosition = catePosition + cateTitHeight - winHeight; //시작 위치
	
	var finishPosition = winHeight + cateHeight + cateItemHeight; // 끝나는 위치
	var otherHeight = finishPosition - cateHeight;// 끝나는 위치 - 메인카테 높이값
	
	
	var moveDistance = Math.round((currentPosition - startPosition)/ (otherHeight)* 100)/2 ;

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



// mainWork
function mainWorkMove(){
	var $work = document.querySelector('.mainWork');
	var $list = document.querySelector('.mainWork .list');
	var $item = document.querySelector('.mainWork .list__item'); 
	var $itemEa = $list.childElementCount;
	var $itemTit = document.querySelector('.mainWork .list__tit');
	
	var winHeight = window.innerHeight; // 현재 윈도우창 높이값
	var currentPosition = Math.round(window.pageYOffset); // 현재 스크롤 위치
	var listHeight = $list.offsetHeight;	// list 높이값

	var listPosition = $list.offsetTop - winHeight;		// 처음 시작 - list 위치
	var finishPosition = listHeight + listPosition + winHeight ; //끝 -  list 위치 + list 높이값

	function fixdTit () {
		for(var i=0; i< $itemEa ; i++){

			// 1. 각각의 item 위치값 , itemTit 높이값 가져오기

			var ele = document.querySelectorAll('.mainWork .list__item');
			var elePosition = new Array(i+1);
			elePosition[i] = ele[i].offsetTop;
			console.log(elePosition)
			
			//name.className.add(i)
			// 2. currentPosition과 item[i] 위치가 같으면 class 추가, 아니면 class 삭제
			// 3. 쌓여야 하는 itemTit 높이값을 더해준다 => var hei += itemTit[i].offsetHeight
			// 4. 최종 fixed 위치값 = item[i].offsetTop + hei	
		}
	}

	
	
	if( currentPosition >= listPosition && currentPosition <= finishPosition){
		// console.log($itemEa);
		// fixdTit();
		// console.log($item.offsetTop)
	}

	//console.log(listPosition);

	document.addEventListener('scroll' , function(){
		//mainWorkMove();
	}, false);
	window.onresize = function(e){
		//mainWorkMove();
	}

}

mainWorkMove();

document.addEventListener("scroll" , function(){
	
}, false);

window.addEventListener("load", function () {

	
});