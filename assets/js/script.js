$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();


    $('.level-slider').slick({
       dots:true,
       slidesToShow:2,
       slidesToScroll:1,
       arrows:false,
      });


      function VideoToggle(){
        video = $('.ouchen-video').get(0)

        if(video.paused){
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();

        }else{
            video.pause();
            $('.video-control-play').show();
            $('.video-control-pause').hide();
        }
      }

      $('.video-control-play').click(function(){
        VideoToggle();
      })

      $('.video-control-pause').click(function(){
        VideoToggle();
      })

  } );