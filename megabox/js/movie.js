(function($){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    
    (function handleTrailer(){
       //셀렉터 캐시
        var $selector ={
            body: $('body'),
            overlay: $('#blackout'),
            modal: $('#trailerModal'),
            showBotton: $('#showTrailer'),
            hideBotton: $('#hideTrailer'),
        }; // 변수를 객체를 이용해 사용
        
        // 플레이어
        var player = {
            obj: null, // 플레이어 오브젝트
            query : {
                theme: "dark",
                color: "white",
                controls: 1, 
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };
        
        //보이기, 숨기기 버튼 활성화
        $selector.showBotton.on('click', showPlayer);
        $selector.hideBotton.on('click', hidePlayer);
        
        //youtube api를 이용해 iframe 을 생성
        function setPlayer( id ) {
            player.obj = new YT.Player( "trailer", {
                width: 480,
                height: 282,
                videoId: id,    
                playerVars: player.query
        });
        }
        
        //iframe 보이기
        function showPlayer(){
            
        }; //showBotton 누르면 활성화
        
        //iframe 감추기
        function hidePlayer(){
            
        }; //hideBotton 누르면 활성화
    });
    
    
})(jQuery);     