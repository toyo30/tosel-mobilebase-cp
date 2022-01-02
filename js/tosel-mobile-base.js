//전역 변수 사용을 피하기 위해서 함수 안에서 설정함. 

( () => {



	//스크롤값에 따라서 정하지 않고 스크롤 비율에 따라서 정하기 위해서 새로운 변수 설정
	let yOffset = 0;	//window.pageYoffset대신 쓸 변수 
	let prevScrollHeight = 0; //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합.
	let currentScene = 0; //현재 활성화된(눈 앞에 보고 있는) 씬
	let enterNewScene = false; //새로운 씬이 시작되는 순간 true

	const sceneInfo = [
		//객체 4개 스크롤 섹션 구간이 4개이기 때문에 
		//스크롤 높이가 필요
		{
			//0
			type: 'normal',
			//heightNum: 1, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				//각 섹션을 담는 요소 
				container: document.querySelector('#scroll-section-0'),
			},
			values: {
				
			},

		},
		{
			//1
			type: 'normal',
			//heightNum: 1, //브라우저 높이의 5배로 scroll Height 세팅 노멀에서는 필요가 없음
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				container: document.querySelector('#scroll-section-1'),
			},
			values: {
				
			}
		},
		{	
			//2
			type: 'normal',
			//heightNum: 6, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				container: document.querySelector('#scroll-section-2'),
			},
			values: {
			}
		},
		{
			//3
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-3')
			},
			values: {

			}
		},
		{
			//4
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-4')
			},
			values: {

			},
		},
		{
			//5
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-5')
			},
			values: {

			},
		},
		{
			//6
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-6')
			},
			values: {

			},
		},
		{
			//7
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-7')
			},
			values: {

			},
		},
		{
			//8
			type: 'normal',
			//heightNum: 1,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-8')
			},
			values: {

			},
		}

	];


	function setLayout() {
		//각 스크롤 섹션의 높이 세팅
		for (let i = 0; i < sceneInfo.length; i++) {

			if (sceneInfo[i].type === 'sticky') {
				sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
				sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;//백틱 템플릿 문자열  ${변수}
			} else if(sceneInfo[i].type === 'normal') {
				sceneInfo[i].objs.container.style.height = `${sceneInfo[i].objs.container.offsetHeight}px`

			}



			
		}


		yOffset = window.pageYOffset;
		//web이 로드되었을 때마다 current씬의 값을 정해줌. 
		let totalScrollHeight = 0;
		for (let i = 0; i < sceneInfo.length; i++) {
			totalScrollHeight += sceneInfo[i].scrollHeight;

			//계속 돌다가 현재 시점이 지금 pageYOffset 값보다 커질 때 바로 그것이 현재씬이다. 
			if (totalScrollHeight >= yOffset) {
				currentScene = i;
				break;
			}
		}

		//다시 번호 세팅 
		document.body.setAttribute('id', `show-scene-${currentScene}`);

	}






	function calcValues(values, currentYOffset) {
		//각 섹션마다 얼만큼의 비율로 나타나는지가 필요하다. 
		//매게변수 변하는 값 + currentYOffset 현재 scene에서 얼마만큼 비율료 스크롤이 이루어졌는지를 나타내기 위함
		
		//현재씬에서 얼만큼 스크롤 했는지를 비율로 정하기 비율을 정의하기 
		let rv;

		//현재 씬에서 스크롤된 범위를 비율로 구하기 
		const scrollHeight  = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;

		//범위를 설정해서 잘 맙춰서 

		//start end 시점이 정해진 애들은 처리해주기 
		if (values.length === 3) {
			//start ~ end 사이에 애니메이션 실행
			//values 2는 Start end를 담은 객체를 의미함.
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			// 재생되는 씬의 높이
			const partScrollHeight = partScrollEnd - partScrollStart;

			if (currentYOffset >= partScrollStart &&  currentYOffset <= partScrollEnd) {
			//등장하는 씬에서 얼마만큼 이동했는지에 대한 비율 
				rv = (currentYOffset - partScrollStart)/ partScrollHeight * (values[1] - values[0]) + values[0];
			} else if (currentYOffset < partScrollStart) {
				rv = values[0];

			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			} 
		} else {
			//현재 씬에서 얼마만큼 이동했는지에 대한 비율
			rv = scrollRatio * (values[1] - values[0]) + values[0];
		}
		

		return rv;
	}



	//스크롤할 때마다 애니메이션을 실행하는 함수 
	function playAnimation() {

		//아래의 속성값을 간단하게 적용하기 위해서 변수사용

		//html dom 요소들 
		const objs = sceneInfo[currentScene].objs;

		//css 변화값
		const values = sceneInfo[currentScene].values;

		//currentYOFFset 현재씬에서 얼마나 이동했는지를 계산하는 값
		//현재 이동한 Y값에서 지나온 value 값을 뺌
		const currentYOffset = yOffset - prevScrollHeight;
		// console.log(currentScene, currentYOffset);

		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		// 변하는 스크롤된 비율에 따라서 
		const scrollRatio = (currentYOffset) / scrollHeight;
		
		// console.log('----', currentScene);
		

		switch (currentScene) {
			case 0:
			
				break;
			case 1:
				break;
			case 2:
				
				break;
			case 3:
				break;
		}

	}


	// //스크롤값에 따라서 정하지 않고 스크롤 비율에 따라서 정하기 위해서 새로운 변수 설정
	// let yOffset = 0;	

	//눈 앞에 스크롤 중인 섹션이 몇번째 섹션인지 판별하고자 함.
	//document의 전체 높이값과, 각 섹션별 높이값을 알고 있고, 현재 몇 번재 섹션인지 알고 있다면, 가능
	function scrollLoop() {
		

		//새로운 씬이 시작되는 순간 false, true로 바뀌는 값을 적용하기 위해 변경하는 값. 
		console.log(yOffset);
		enterNewScene = false;
		console.log(enterNewScene);
		//스크롤될 때마다 값이 중복적으로 찍히는 것을 방지함.
		prevScrollHeight = 0;
		//전체 스크롤 씬을 결정하기 위해 지나쳐 온 모든 스크롤 하이트의 높이값을 더함.
		
		for (let i = 0; i < currentScene; i++) {
			prevScrollHeight += sceneInfo[i].scrollHeight; 
		}

		console.log('prevScrollHeight' + prevScrollHeight);
		console.log(sceneInfo.length);
		// console.log(yOffset);
		
		// 이전 높이를 더한 값과 현재 높이를 더한 값을 합쳐서 거꾸로도 구현 가능
		// if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
		// 	enterNewScene = true;
		// 	// currentScene++;
		// 	document.body.setAttribute('id', `show-scene-${currentScene}`);//백틱
		// }	

		// if (yOffset < prevScrollHeight) {
		// 	enterNewScene = true;
		// 	if (currentScene == 0) return; ////브라우져가 튕기는 것들도 - 가 되버림. 마이너스가 되는 것을 방지(모바일)
		// 	currentScene--;
		// 	document.body.setAttribute('id', `show-scene-${currentScene}`);//백틱
		// }

		// currentScene을 뽑으면 header 값에 따라서 변하게 됨. 
		//console.log(currentScene);

		//header {position: absolute; top: 0; left: 0; width: 100%; height;}
		//header 차지 안하게 하기 위해서 absolute를 씀.
		//이런 걸 세세하게 안 하면, 나중에 의외의 버그들이 생김



		//바디에 current씬을 계속부여함. 
		//if문 안에다 넣으면 처음에는 반응하지 않음.

		// document.body.setAttribute('id', `show-scene-${currentScene}`);//백틱
		

		//스크롤될 때마다 애니메이션을 실행하는 함수


		if (enterNewScene) return;
		playAnimation();
	}

	

	//현재 몇 번째 씬을 보고 있는지 결정함. 
	window.addEventListener('scroll', () => {
		// console.log(pageYOffset);
		//스크롤이 일어날 때마다 스크롤이 일어난 총량을 저장함
		yOffset = window.pageYOffset;
		//스크롤할 때마다 실행되는 루프를 이야기함. 
		scrollLoop();
	});


	//window가 로드될 때마다 창 크기 변경 
	// window.addEventListener('DOMContentLoaded', setLayout);//dom구조가 로드되면 실행 
	window.addEventListener('load', setLayout);
	//window.innerHeight가 변할 때 마다 resize를 해줌. 
	window.addEventListener('resize', setLayout);

	//레이아웃 초기화 

	


})();