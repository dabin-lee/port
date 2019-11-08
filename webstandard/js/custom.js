    
        //라이트박스
      $(".lightbox").lightGallery({
            thumbnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        }); 

        //윈도우팝업
        $(".window").click(function(e){
            e.preventDefault();
            //window.open("파일명", "팝업이름", "옵션설정");
            //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
            window.open('popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
        });
        
        //레이어 팝업
        $('.layer').click(function(e){
           e.preventDefault(); 
            //$('#layer').css('display','block');
            //$('#layer').show();
            //$('#layer').fadeToggle();
            $('#layer').slideDown();
        });
        $('#layer .close').click(function(e){
            e.preventDefault();
            $('#layer').slideUp();
        });
        
       //탭 메뉴
		var $tab_list = $('.tab_menu');
        
		$tab_list.find('ul ul').hide();
		$tab_list.find('li.active>ul').show();

        function tabMenu(e){
            e.preventDefault();
			var $this = $(this);
            $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
		}
		$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);
             
        //banner
        //html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> slick jquery호출
        $('.ban').slick({           
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed : 3000,
            dots: true
        });
        
        //gallery
        $('.gallery_img').slick({
            dots: true,
            fade: true,
            pauseOnHover: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1
        });
        $('.play').click(function(){
            $('.gallery_img').slick('slickPlay');          
        });
        $('.pause').click(function(){
            $('.gallery_img').slick('slickPause');          
        });
        $('.prev').click(function(){
            $('.gallery_img').slick('slickPrev');          
        });
         $('.next').click(function(){
            $('.gallery_img').slick('slickNext');          
        });
        
        //버튼을 클릭하면 전체메뉴가 슬라이드 토글 됩니다.
        $('.tit .btn').click(function(e){
            e.preventDefault(); /*#의 기능(이동하는 값)을 없애줌*/
//           $('#cont_nav').css("display", "block");
//            $('#cont_nav').fadeToggle();
                $('#cont_nav').slideToggle(200);
                $(this).toggleClass("on"); 
            /*addClass와 removeClass를 합한기능 -> toggleClass*/
                
        });