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
			type: 'sticky',
			heightNum: 4, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				//각 섹션을 담는 요소 
				container: document.querySelector('#scroll-section-0'),
				messageA: document.querySelector('#scroll-section-0 .main-message.a'),
				messageB: document.querySelector('#scroll-section-0 .main-message.b'),
				messageC: document.querySelector('#scroll-section-0 .main-message.c'),
				messageD: document.querySelector('#scroll-section-0 .main-message.d'),
				messageE: document.querySelector('#scroll-section-0 .main-message.e'),
				messageF: document.querySelector('#scroll-section-0 .main-message.f'),
				messageG: document.querySelector('#scroll-section-0 .main-message.g'),
			},
			values: {
				messageA_opacity: [0, 1, {start: 0.1, end: 0.2}],//start하는 비율과 시작점을 의미함. 
				messageB_opacity: [0, 1, {start: 0.2, end: 0.3}],
				messageC_opacity: [0, 1, {start: 0.3, end: 0.4}],
				messageD_opacity: [0, 1, {start: 0.5, end: 0.6}],
				messageE_opacity: [0, 1, {start: 0.6, end: 0.7}],
				messageF_opacity: [0, 1, {start: 0.7, end: 0.8}],
				messageG_opacity: [0, 1, {start: 0.6, end: 0.8}],
				messageA_transform: [40, 0, {start: 0.1, end: 0.2}],//start하는 비율과 시작점을 의미함. 
				messageB_transform: [40, 0, {start: 0.2, end: 0.3}],
				messageC_transform: [40, 0, {start: 0.3, end: 0.4}],
				messageD_transform: [40, 0, {start: 0.5, end: 0.6}],
				messageE_transform: [40, 0, {start: 0.6, end: 0.7}],
				messageF_transform: [40, 0, {start: 0.7, end: 0.8}],
				messageG_transform: [40, 0, {start: 0.6, end: 0.8}],
			}

		},
		{
			//1
			type: 'normal',
			heightNum: 5, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				container: document.querySelector('#scroll-section-1')
			},
		},
		{	
			//2
			type: 'sticky',
			heightNum: 5, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				container: document.querySelector('#scroll-section-2')
			},
		},
		{	
			//3
			type: 'sticky',
			heightNum: 5, //브라우저 높이의 5배로 scroll Height 세팅
			scrollHeight: 0,//각 구간의 스크롤 높이. 스마트폰, 테블릿 모든 사이즈 적용하기 위해서 
			objs: {
				container: document.querySelector('#scroll-section-3')
			},
		}

	];


	function setLayout() {
		//각 스크롤 섹션의 높이 세팅
		for (let i = 0; i < sceneInfo.length; i++){
			sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}.px`;//백틱 템플릿 문자열  ${변수}
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


		

		console.log(currentScene);

		switch (currentScene) {
			case 0:
				// console.log('0 play');


				let messageA_transform_in = calcValues(values.messageA_transform, currentYOffset);
				let messageB_transform_in = calcValues(values.messageB_transform, currentYOffset)
				let messageC_transform_in = calcValues(values.messageC_transform, currentYOffset)
				let messageD_transform_in = calcValues(values.messageD_transform, currentYOffset)
				let messageE_transform_in = calcValues(values.messageE_transform, currentYOffset)
				let messageF_transform_in = calcValues(values.messageF_transform, currentYOffset)
				let messageG_transform_in = calcValues(values.messageG_transform, currentYOffset)

				//스크롤할 때마다 비율인 값을 transform로 적용해서 넣음. 
				objs.messageA.style.transform = `translateY(${messageA_transform_in})`;
				objs.messageB.style.transform = `translateY(${messageB_transform_in})`;
				objs.messageC.style.transform = `translateY(${messageC_transform_in})`;
				objs.messageD.style.transform = `translateY(${messageD_transform_in})`;
				objs.messageE.style.transform = `translateY(${messageE_transform_in})`;
				objs.messageF.style.transform = `translateY(${messageF_transform_in})`;
				objs.messageG.style.transform = `translateY(${messageG_transform_in})`;




				let messageA_opacity_in = calcValues(values.messageA_opacity, currentYOffset);
				let messageB_opacity_in = calcValues(values.messageB_opacity, currentYOffset)
				let messageC_opacity_in = calcValues(values.messageC_opacity, currentYOffset)
				let messageD_opacity_in = calcValues(values.messageD_opacity, currentYOffset)
				let messageE_opacity_in = calcValues(values.messageE_opacity, currentYOffset)
				let messageF_opacity_in = calcValues(values.messageF_opacity, currentYOffset)
				let messageG_opacity_in = calcValues(values.messageG_opacity, currentYOffset)

				//스크롤할 때마다 비율인 값을 opacity로 적용해서 넣음. 
				objs.messageA.style.opacity = messageA_opacity_in;
				objs.messageB.style.opacity = messageB_opacity_in;
				objs.messageC.style.opacity = messageC_opacity_in;
				objs.messageD.style.opacity = messageD_opacity_in;
				objs.messageE.style.opacity = messageE_opacity_in;
				objs.messageF.style.opacity = messageF_opacity_in;
				objs.messageG.style.opacity = messageG_opacity_in;



				
				
				
				
				
				
				
				
				console.log(messageA_opacity_in);
				let messageA_opacity_1 = values.messageA_opacity[1];
				

				break;
			case 1:
				// console.log('1 play');
				break;
			case 2:
				// console.log('2 play');
				break;
			case 3:
				// console.log('3 play');
				break;
		}

	}


	// //스크롤값에 따라서 정하지 않고 스크롤 비율에 따라서 정하기 위해서 새로운 변수 설정
	// let yOffset = 0;	

	//눈 앞에 스크롤 중인 섹션이 몇번째 섹션인지 판별하고자 함.
	//document의 전체 높이값과, 각 섹션별 높이값을 알고 있고, 현재 몇 번재 섹션인지 알고 있다면, 가능
	function scrollLoop() {
		

		//새로운 씬이 시작되는 순간 false, true로 바뀌는 값을 적용하기 위해 변경하는 값. 

		enterNewScene = false;

		//스크롤될 때마다 값이 중복적으로 찍히는 것을 방지함.
		prevScrollHeight = 0;
		//전체 스크롤 씬을 결정하기 위해 지나쳐 온 모든 스크롤 하이트의 높이값을 더함.
		for (let i = 0; i < currentScene; i++) {
			prevScrollHeight += sceneInfo[i].scrollHeight; 
		}


		// 이전 높이를 더한 값과 현재 높이를 더한 값을 합쳐서 거꾸로도 구현 가능
		if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			enterNewScene = true;
			currentScene++;
			document.body.setAttribute('id', `show-scene-${currentScene}`);//백틱
		}	

		if (yOffset < prevScrollHeight) {
			enterNewScene = true;
			if (currentScene == 0) return; ////브라우져가 튕기는 것들도 - 가 되버림. 마이너스가 되는 것을 방지(모바일)
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);//백틱
		}

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