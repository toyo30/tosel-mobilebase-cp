//전역 변수 사용을 피하기 위해서 함수 안에서 설정함. 

( () => {


	

	let currentClick = 0;
	let currentBtns = document.querySelectorAll('.btn-more');
	let breakPoint = $(window).width();
	window.swiper = null;
	
	const popInfo = [

		{
			//0 test-contents
			type: 'mobile',
			target: 'con-test',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),


				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `TOSEL Lab 자체 개발`,

				title_Contents:`TOSEL TEST`,
				title_width: [153],
				text_Contents: `TOSEL Lab에서 자체 개발한
				PLACEMENT TEST를 제공하여
				<strong>신규원생 상담 및 체계적 관리 가능</strong>`,
				text_width: [197],
				text_height: [109],
				text_width_pc: [4.52],
				text_height_pc: [1.86],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-test1.png" class="swiper-slide" alt="컨텐츠테스트이미지1">`,
				`<img src="./images/m-contents-pop-test2.png" class="swiper-slide" alt="컨텐츠테스트이미지2">`,
				`<img src="./images/m-contents-pop-test3.png" class="swiper-slide" alt="컨텐츠테스트이미지3">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		{
			//1 test-contents
			type: 'mobile',
			target: 'con-book',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `Book Contents`,

				title_Contents:`오프라인 학습`,
				title_width: [150],
				text_Contents: `TOSEL의 세분화된 레벨을 토대로,
				각 연령에 맞는 어휘와 교과 과정과의
				연계가 가능하도록 설계된 교재<br><br>
				
				READING / VOCA / GRAMMAR`,
				text_width: [209],
				text_height: [100],
				text_width_pc: [5.09],
				text_height_pc: [2.32],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-book1.png" class="swiper-slide" alt="컨텐츠책이미지1">`,
				`<img src="./images/m-contents-pop-book2.png" class="swiper-slide" alt="컨텐츠책이미지2">`,
				`<img src="./images/m-contents-pop-book3.png" class="swiper-slide" alt="컨텐츠책이미지3">`,
			],
			
		},
		{
			//2 test-contents
			type: 'mobile',
			target: 'con-digital',
			urlLength: 4,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `Digital Contents`,

				title_Contents:`온라인 학습`,
				title_width: [126],
				text_Contents: `영어성적을 분석한 빅데이터에
				AI(인공지능)를 활용하여 세분화된
				레벨로 설계한 디지털학습과정이
				곧 출시될 예정입니다.<br><br>
				VOCA / ENGLISEA`,
				text_width: [224],
				text_height: [109],
				text_width_pc: [5.05],
				text_height_pc: [2.86],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-digital1.png" class="swiper-slide" alt="컨텐츠디지털이미지1">`,
				`<img src="./images/m-contents-pop-digital2.png" class="swiper-slide" alt="컨텐츠디지털이미지2">`,
				`<img src="./images/m-contents-pop-digital3.png" class="swiper-slide" alt="컨텐츠디지털이미지3">`,
				`<img src="./images/m-contents-pop-digital4.png" class="swiper-slide" alt="컨텐츠디지털이미지4">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		{
			//3 test-contents
			type: 'mobile',
			target: 'con-lms',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `한 눈에 볼 수 있는 학습 현황`,

				title_Contents:`LMS`,
				title_width: [54],
				text_Contents: `<strong>학생의 학습현황을 쉽고 빠르게 파악.</strong>
				학생이 얼마나 열심히 했으며, 어떤
				학습 상황에 있는지 바로바로 체크할
				수 있고, 학생관리를 더 효율적으로
				진행할 수 있습니다.`,
				text_width: [211],
				text_height: [109],
				text_width_pc: [4.84],
				text_height_pc: [2.79],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-lms1.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지1">`,
				`<img src="./images/m-contents-pop-lms2.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지2">`,
				`<img src="./images/m-contents-pop-lms3.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지3">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},


		{
			//4 test-contents
			type: 'mobile',
			target: 'good-hyunpan',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `브랜드와 공신력 UPGRADE`,

				title_Contents:`배너&현판`,
				title_width: [115],
				text_Contents: `TOSEL Lab에 가입된 학원들에게는
				지정학원 간판과 현판 시안이 제공되어
				<strong>학원의 브랜드와 공신력 업그레이드</strong>`,
				text_width: [211],
				text_height: [109],
				text_width_pc: [5.09],
				text_height_pc: [2.32],
			},
			urlPoint: [
				`<img src="./images/m-good-pop-hyunpan1.png" class="swiper-slide" alt="컨텐츠현판이미지1">`,
				`<img src="./images/m-good-pop-hyunpan2.png" class="swiper-slide" alt="컨텐츠현판이미지2">`,
				`<img src="./images/m-good-pop-hyunpan3.png" class="swiper-slide" alt="컨텐츠현판이미지3">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		{
			//5 test-contents
			type: 'mobile',
			target: 'good-ai',
			urlLength: 4,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `TOSEL Lab`,

				title_Contents:`AI 컨설팅 자료`,
				title_width: [159],
				text_Contents: `응시지역과 전국에서의 동일학년 학생들의 분포를 한 번에 파악할 수 있습니다. 이러한 통계자료를 통해 레벨별 수업 난이도 및 학습 방향을 수정 및 보완할 수 있습니다.`,
				text_width: [224],
				text_height: [109],
				text_width_pc: [5.05],
				text_height_pc: [2.79],
			},
			urlPoint: [
				`<img src="./images/m-good-pop-ai1.png" class="swiper-slide" alt="컨텐츠에이아이이미지1">`,
				`<img src="./images/m-good-pop-ai2.png" class="swiper-slide" alt="컨텐츠에이아이이미지2">`,
				`<img src="./images/m-good-pop-ai3.png" class="swiper-slide" alt="컨텐츠에이아이이미지3">`,
				`<img src="./images/m-good-pop-ai4.png" class="swiper-slide" alt="컨텐츠에이아이이미지4">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		{
			//6 test-contents
			type: 'mobile',
			target: 'con-test',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),


				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `TOSEL Lab 자체 개발`,

				title_Contents:`TOSEL TEST`,
				title_width: [153],
				text_Contents: `TOSEL Lab에서 자체 개발한
				PLACEMENT TEST를 제공하여
				<strong>신규원생 상담 및 체계적 관리 가능</strong>`,
				text_width: [197],
				text_height: [109],
				text_width_pc: [4.52],
				text_height_pc: [1.86],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-test1.png" class="swiper-slide" alt="컨텐츠테스트이미지1">`,
				`<img src="./images/m-contents-pop-test2.png" class="swiper-slide" alt="컨텐츠테스트이미지2">`,
				`<img src="./images/m-contents-pop-test3.png" class="swiper-slide" alt="컨텐츠테스트이미지3">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		{
			//7 test-contents
			type: 'mobile',
			target: 'con-lms',
			urlLength: 3,
			objs: {
				//각 섹션을 담는 요소 
				subText: document.querySelector('.text_area .sub-text'),
				title: document.querySelector('.text_area .title'),
				text: document.querySelector('.text_area .text'),

				subTextA: $('.text-area .sub-text'),
				titleA: $('.text-area .title'),
				textA: $('.text-area .text'),
			},
			values: {

				subText_contents: `한 눈에 볼 수 있는 학습 현황`,

				title_Contents:`LMS`,
				title_width: [54],
				text_Contents: `<strong>학생의 학습현황을 쉽고 빠르게 파악.</strong>
				학생이 얼마나 열심히 했으며, 어떤
				학습 상황에 있는지 바로바로 체크할
				수 있고, 학생관리를 더 효율적으로
				진행할 수 있습니다.`,
				text_width: [211],
				text_height: [109],
				text_width_pc: [4.84],
				text_height_pc: [2.79],
			},
			urlPoint: [
				`<img src="./images/m-contents-pop-lms1.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지1">`,
				`<img src="./images/m-contents-pop-lms2.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지2">`,
				`<img src="./images/m-contents-pop-lms3.png" class="swiper-slide" alt="컨텐츠엘엠에스이미지3">`,
			],
			// urlPoint: {
			// 	fir: "m-contents-pop-lms1.png",
			// 	sec: "m-contents-pop-lms2.png",
			// 	thi: "m-contents-pop-lms3.png",
			// },
		},

		
	];

	

	function changeValue() {

		


		let objs = popInfo[currentClick].objs;
		let values = popInfo[currentClick].values;

		objs.subTextA.text(values.subText_contents);
		objs.titleA.text(values.title_Contents);
		objs.textA.html(values.text_Contents);

		
		if(breakPoint < 768) {
			objs.textA.css('width', `${values.text_width}`);
			objs.textA.css('height', `${values.text_height}`);
		} else if(breakPoint >=768) {
			console.log('786rem')
			objs.textA.css('width', `${values.text_width_pc}rem`);
			objs.textA.css('height', `${values.text_height_pc}rem`);
		}

		// objs.val();

		// var swiper = new Swiper(".mySwiper", {
		// 	pagination: {
		// 	el: ".swiper-pagination"
		// 	}
		// });
	}


	function startSwiper() {
		if(window.swiper != null){
			window.swiper.destroy();
		}

		



		if(breakPoint < 768) {
			console.log('768이하');
			window.swiper = new Swiper(".mySwiper", {
				pagination: {
				loop: true,
				el: ".swiper-pagination",
				clickable: true,
				}
			});
		}else if(breakPoint >= 768)	{
			console.log('768이상');
			window.swiper = new Swiper(".mySwiper", {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				keyboard: {
				enabled: true,
				},
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				},
			});
		}

	}








	// urLPoint를 하나하나 popup-layer의 pop


	function urlInput() {
		//버튼을 처음으로 초기화 
		$('.popup .swiper-wrapper').children().remove();
		for(let i = 0; i < popInfo[currentClick].urlPoint.length; i++){
			// alert();
			console.log(popInfo[currentClick].urlPoint[i], 'urlPoint');
			let imgAdd = popInfo[currentClick].urlPoint[i];

			$('.popup .swiper-wrapper').append(imgAdd);
		}
	}



	//popup 열기 
	function openPopup() {
		$('.popup').fadeIn();
	}

	//popup 닫기 

	function closePopup(){
		$('.popup').fadeOut();
	}
	$(document).on('click', '.close-btn', closePopup);



//currentClick을 지정하기 
	$(document).on('click', '.btn-more', function() {
		let target = $(this).parent().data('target');

		if(target == "con-test"){ currentClick = 0}
		else if(target == "con-book"){ currentClick = 1}
		else if(target == "con-digital"){ currentClick = 2}
		else if(target == "con-lms"){ currentClick = 3}
		else if(target == "good-hyunpan"){ currentClick = 4}
		else if(target == "good-ai"){ currentClick = 5}
		else if(target == "good-test"){ currentClick = 6}
		else if(target == "good-lms"){ currentClick = 7}

		console.log(currentClick);

		openPopup();
		urlInput();
		changeValue();
		startSwiper();
		

	})


	

	$(window).resize(function() {
		breakPoint = $(window).width();
		changeValue();
		startSwiper();
	})

	$(window).resize(startSwiper);


	
})();
