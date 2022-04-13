/*Slider dos certificados*/
$('.pessoas-certificadas').slick({
    arrows:false,
    dots:true,
    centerMode: false,
    infinite:true,
    slidesToShow:3,
    slidesToScroll: 1,
    speed:1000,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]

});

/*Slider dos depoimentos*/
$('.lista-depoimentos').slick({
    arrows:false,
    dots:true,
    centerMode: true,
    infinite:true,
    slidesToShow:3,
    slidesToScroll: 1,
    speed:5000,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }, {
  
        breakpoint: 437,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay: true,
          centerMode: true,
          infinite: true
        }
  
      }]
});

var pergunta = document.querySelectorAll('.pergunta');
var resposta = document.querySelectorAll('.resposta');

resposta.forEach((index,i)=>{

  pergunta[i].addEventListener('click', ()=>{
  
    if(resposta[i].classList.contains('mostrar-resposta')){
      resposta[i].classList.remove('mostrar-resposta');
    }else{
      resposta[i].classList.add('mostrar-resposta');
    }
  
  });
  
})

