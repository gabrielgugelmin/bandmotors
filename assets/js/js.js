$(function(){
  clickOutsideMenu();

  // MENU
  // click no hamburguer icon
  $('.MenuTrigger').on('click', function(e){
    e.preventDefault();   

    if( $('.Menu').hasClass('Menu--open') ){
      closeMenu();
    } else{
      openMenu();
    }
  });

  // abre um sub menu
  $('.Menu--hasSub > a').on('click', function(e){
    e.preventDefault();

    $(this).siblings('.Menu-sub').addClass('Menu-sub--subOpen');
    $(this).addClass('is-selected');
    $('.Menu').addClass('Menu--subOpen');
  });

  // volta ao menu principal
  $('.js-back').on('click', function(){
    $(this).parent().removeClass('Menu-sub--subOpen');
    $('.Menu--hasSub > a').removeClass('is-selected');
    $('.Menu').removeClass('Menu--subOpen');
  });

  // menu fixo ao scollar
  $(window).scroll(function(){
    
    if( $(this).scrollTop() >= 100 ){
      $('.Header').addClass('is-scrolling');
    } else{
    	$('.Header').removeClass('is-scrolling');
    }
  });


  // validar formulario
  $('.js-submitForm').on('click', function (e) {
    var form = $(this).attr('id');
    console.log(form);

    e.preventDefault();
    var qtdErro = 0;

    $(this).parents('.Form').find('[data-validate=true]').each(function () {
      var value = $.trim($(this).find('input, textarea').val());
      if (!value.length > 0) {
        $(this).addClass('error');
        qtdErro++;
      }
    });

    if (qtdErro == 0) {
      // financiamento
      if(form == 'formFinanciamento'){
        return $.ajax({
          type: "POST",
          url: "/ajax/financiamento.php",
          data: $(this).serialize(),
          success: function (data) {
            if (data === "success") {
              console.log('Mensagem enviada com sucesso.');
              // Limpa o form
              $('.Form').trigger("reset");
            } else {
              console.log('Erro ao tentar enviar mensagem: ' + data);
            }
          }
        });
      } else if(form == 'formContato'){
        return $.ajax({
          type: "POST",
          url: "/ajax/contato.php",
          data: $(this).serialize(),
          success: function (data) {
            if (data === "success") {
              console.log('Mensagem enviada com sucesso.');
              // Limpa o form
              $('.Form').trigger("reset");
            } else {
              console.log('Erro ao tentar enviar mensagem: ' + data);
            }
          }
        });
      } else if(form == 'formAvalie'){
        return $.ajax({
          type: "POST",
          url: "/ajax/avalie.php",
          data: $(this).serialize(),
          success: function (data) {
            if (data === "success") {
              console.log('Mensagem enviada com sucesso.');
              // Limpa o form
              $('.Form').trigger("reset");
            } else {
              console.log('Erro ao tentar enviar mensagem: ' + data);
            }
          }
        });
      }else if(form == 'formProposta'){
        return $.ajax({
          type: "POST",
          url: "/ajax/proposta.php",
          data: $(this).serialize(),
          success: function (data) {
            if (data === "success") {
              console.log('Mensagem enviada com sucesso.');
              // Limpa o form
              $('.Form').trigger("reset");
            } else {
              console.log('Erro ao tentar enviar mensagem: ' + data);
            }
          }
        });
      }
    } else {
      console.log('Erro ao tentar enviar mensagem. Tente novamente.');
    }
  });


  // MAPS

  function initialize() {

      var chicago = new google.maps.LatLng(-23.623433, -46.650460);
      var myOptions = {
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: chicago,
          mapTypeControl: false,
          scrollwheel: false,
          styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
      };
      map = new google.maps.Map(document.getElementById("map"), myOptions);

      markerMuseu = new google.maps.Marker({
        position: new google.maps.LatLng(-23.623433, -46.650460),
        map: map,
        title: 'Band Motors',
        icon: 'assets/img/icons/marker.png'
      });

      var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Band Motors</h1>'+
        '<div id="bodyContent">'+
        '<p>Av. dos Bandeirantes, 5364 - Planalto Paulista, São Paulo - SP, 04071-010</p>'+
        '<p>(11) 5594-7000</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

      markerMuseu.addListener('click', function() {
        infowindow.open(map, markerMuseu);
      });
  }

  if( $('#map').length ){
    initialize();
  }


  // SLIDER

  // banner

  var $status = $('.slick-count');

  $('.js-bannerSlider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('0' + i + '  <span>/  0' + slick.slideCount + '</span>');
  });

  $('.js-bannerSlider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    slide: '.Banner__item',
    speed: 800,
    vertical: true,
    verticalSwiping: true
  });

  // categoria

  $('.js-categoriaSlider').slick({
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '40px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="Arrow__button Arrow__button--prev"></button>',
    nextArrow: '<button type="button" class="Arrow__button Arrow__button--next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // produto

  $('.js-bannerSliderProduct').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('0' + i + '  <span>/  0' + slick.slideCount + '</span>');
  });

  $('.js-bannerSliderProduct').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slide: '.Banner__item',
    speed: 800,
    vertical: true,
    asNavFor: '.BannerNav',
    verticalSwiping: true
  });

  $('.js-bannerSliderNav').slick({
    arrows: true,
    asNavFor: '.js-bannerSliderProduct',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    mobileFirst: true,
    nextArrow: '<button type="button" class="Arrow__button Arrow__button--next"></button>',
    prevArrow: '<button type="button" class="Arrow__button Arrow__button--prev"></button>',
    slidesToScroll: 2,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          vertical: true,
          verticalSwiping: true
        }
      }
    ]
  });

  // parceiros

  $('.js-parceiroSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="Arrow__button Arrow__button--prev"></button>',
    nextArrow: '<button type="button" class="Arrow__button Arrow__button--next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // SCROLLBAR
  $('.u-scrollbar').perfectScrollbar(); 

  // GRID

  // init Isotope
  var $grid = $('.Grid').isotope({
    itemSelector: '.Grid__item',
    layoutMode: 'fitRows',
    getSortData: {
      marca: '[data-marca]',
      modelo: '[data-modelo]',
      valor: '[data-valor] parseInt'
    }
  });

  // bind sort button click
  $('.Busca__filtro').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-active class on buttons
  $('.Busca__filtro').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-active').removeClass('is-active');
      $( this ).addClass('is-active');
    });
  });

  $('#LoadProducts').on( 'click', function() {
    var elems = [];

    $.getJSON( "assets/json/produtos.json", function(data) {  	
    })
    .fail(function(data) {
      console.log( "error" );
    }).success(function(data) {
      $.each(data, function(index, element) {
        
        if(element[0].nome != ''){
          preco = parseFloat(element[0].preco);    

          var $elem = $('<div class="Grid__item mix" style="background-image: url(assets/img/carros/'+ element[0].imagem +'.jpg);" data-marca="' + element[0].marca +'" data-modelo="' + element[0].modelo +'" data-valor="' + preco +'">' +
          '<div class="Grid__title">' +
            '<h4>' + element[0].nome + ' <small>' + element[0].modelo + '</small></h4>' +
          '</div>' +
          '<div class="Grid__buttons">' +
            '<a href="/carro/'+ element[0].alias +'">VER DETALHES</a>' +
            '<a href="#/" data-toggle="modal" data-target="#modalProposta">FAZER PROPOSTA</a>' +
          '</div>' +
          '<p>'+preco+'</p>' +
        '</div>');
          
          elems.push( $elem[0] );          
        }
      });

      $grid.isotope( 'insert', elems );
    });    
  });
});



function closeMenu(){
  $('.Menu').removeClass('Menu--open');
  $('.Menu').removeClass('Menu--subOpen');

  $('.Menu-sub').removeClass('Menu-sub--subOpen');
  $('.MenuTrigger').removeClass('is-open');

  $('.Menu--hasSub > a').removeClass('is-selected');

  $('body').removeClass('overflowHidden');
}

function openMenu(){
  $('.MenuTrigger').addClass('is-open');
  $('.Menu').addClass('Menu--open');
  $('body').addClass('overflowHidden');
}

function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function checkWindowWidth(){
  var w = viewport().width;
  var size = '';
  if(w > 991){
    size = 'desktop';
  } else{
    size = 'mobile';
  }

  return size;
}

function clickOutsideMenu(){
  
  var x = checkWindowWidth();
  if(x == 'desktop'){
    $(document).on('mouseup', function (e){ 
      var elem = $('.Menu-sub');

      if (!elem.is(e.target) && elem.has(e.target).length === 0){
        closeMenu();
      }
    });
  } else{
    $(document).off('mouseup');
  }
}
