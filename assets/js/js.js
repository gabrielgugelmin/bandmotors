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
    verticalSwiping: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          verticalSwiping: false,
        }
      }
    ]
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
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    dots: false, 
    infinite: true, 
    pauseOnHover: false,
    slidesToScroll: 4,
    slidesToShow: 4,
    speed: 0, 
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300
        }
      }
    ]
  });

  // this is for the first fadeout
  setTimeout(function(){
    $('.js-parceiroSlider .slick-slide').addClass('opacidown');
  },2700);
  // all the rest of the transitions after the initial
  $('.js-parceiroSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.js-parceiroSlider .slick-slide').removeClass('opacidown');
    setTimeout(function(){
      $('.js-parceiroSlider .slick-slide').addClass('opacidown');
    },2700);
  });

  // SCROLLBAR
  $('.u-scrollbar').perfectScrollbar();   

  // pesquisa
  $('.js-search').on('focus', function(e){
    $('.SearchResult').addClass('is-open');
  });

  var produtosArray = '';

  /*$.ajax({
    url: "/assets/json/busca.php",
    dataType: "json",
    async: false,
    success: function(data) {
      produtosArray = data;
    }
  });*/

  var produtosArray = [{"value":"Linde Werdelin","data":"linde-werdelin"},{"value":"Jaeger-Lecoutre","data":"jaegerlecoutre"},{"value":"Breitling","data":"breitling"},{"value":"Jaeger-Lecoutre","data":"jaegerlecoutre"},{"value":"Hublot","data":"hublot"},{"value":"Panerai","data":"panerai"},{"value":"IWC","data":"iwc"},{"value":"Rolex","data":"rolex"},{"value":"Breitling","data":"breitling"},{"value":"IWC","data":"iwc"},{"value":"Rolex","data":"rolex"}];
  
  // https://github.com/devbridge/jQuery-Autocomplete
  $('.js-search').autocomplete({
      lookup: produtosArray,
      onSelect: function (suggestion) {
            
          //alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
          window.location.href = "/produto/"+suggestion.data;
          
      },
      appendTo: '.SearchResult',
      onSearchComplete: function(){
        $('.SearchResult').addClass('is-visible');
      }
  });
  
  if( $('.js-grid').length ){
    getProducts();
  }
  

  // load more produtos
	$('body').on('#LoadProducts','click', function(){
		$(this).addClass('is-loading');

		getProducts();

		$(this).removeClass('is-loading');
	});

  // dropdown
  $('.Dropdown').on('click', function(){
    $(this).toggleClass('is-open');
  });

  $('.Dropdown a').on('click', function(){
    var textoCidade = $(this).text();
    var value = $(this).data('cidade');

    $('.Dropdown > span').text(textoCidade).addClass('is-selected');
  });
});

function initIsotope(){
  // GRID
  // init Isotope
  var $container = $('.js-grid').isotope({
    itemSelector: '.Grid__item',
    layoutMode: 'fitRows',
    getSortData: {
      marca: '[data-marca]',
      modelo: '[data-modelo]',
      valor: '[data-valor] parseInt'
    }
  });

  var initShow = 8; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  if($container.is('#Container')){
    //append load more button
    $('.Ver .container').append('<a href="#/" class="u-button" id="LoadProducts">carregar mais</a>');
  }

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
  	var elems = $container.isotope('getFilteredItemElements');

    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, elems.length).map(function(item) {
      return item.element;
    });

    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#LoadProducts").hide();
    } else {
      jQuery("#LoadProducts").show();
    };

    $('#LoadProducts').removeClass('is-loading');

  }


  

  //when load more button clicked
  $("#LoadProducts").click(function() {
  	$(this).addClass('is-loading');

    if ($('.js-filter li').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('.js-filter li').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  // bind sort button click
  $('.Busca__filtro').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });

  // change is-active class on buttons
  $('.Busca__filtro').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-active').removeClass('is-active');
      $( this ).addClass('is-active');
    });
  });
}

function getProducts(){
	
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
	    // If first entry with this name
	if (typeof query_string[pair[0]] === "undefined") {
		  query_string[pair[0]] = decodeURIComponent(pair[1]);
		    // If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
		  var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
		  query_string[pair[0]] = arr;
		    // If third or later entry with this name
		} else {
		  query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	} 
	
	//Veriavel com categoria
	var idCategoria = query_string.categoria; 
	
	$.getJSON( "assets/json/produtos.json", function(data) {
  	
	})
  .fail(function(data) {
    console.log( "error" );
  }).success(function(data) {
  	$elementos = [];
  	
  	var x = false;
  	$.each(data, function(index, element) {
		if(element.titulo!=''){
	  		
  			var $box = '<div class="Grid__item mix" style="background-image: url(assets/img/carros/'+ element[0].imagem +'.jpg);" data-marca="' + element[0].marca +'" data-modelo="' + element[0].modelo +'" data-valor="' + element[0].preco +'">' +
          '<div class="Grid__title">' +
            '<h4>' + element[0].nome + ' <small>' + element[0].modelo + '</small></h4>' +
          '</div>' +
          '<div class="Grid__buttons">' +
            '<a href="/carro/'+ element[0].alias +'">VER DETALHES</a>' +
            '<a href="#/" data-toggle="modal" data-target="#modalProposta">FAZER PROPOSTA</a>' +
          '</div>' +
        '</div>';
  		
  		}else{

	  		var $box = '<h3>Nada por aqui. <a href="./">Clique para voltar.</a></h3><br>';
		}
		
		$(".js-grid").append($box);
		
	});
	
	if(x==true){
	}else{				
		initIsotope();
	}	
		
  });
}

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
