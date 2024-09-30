$(document).ready(function () {
  popupControl('.utility', ".search>div>input[value='close']");
  popupControl('.utility', ".perm_identity>div>input[value='close']");
  popupControl('.utility', ".favorite_border>div>input[value='close']");
  popupControl('.utility', ".shopping_bag>div>input[value='close']");
  popupControl(".mui>div input[value='menu']", ".menu>div:first-of-type>input[value='close']");

  pagePopup(".detailContainer>div>div>aside button:last-of-type", '.sizeGuide', ".sizeGuide input[value='close']");
  pagePopup(".registerTimepieceContainer.step2>div:last-child input[type='button']", '.success.registerTP', ".success.registerTP input[value='close']");
  pagePopup(".registerTimepieceContainer.step1>div:last-child button", '.serialNumb', ".serialNumb input[value='close']");
  pagePopup(".myPageContainer.myAccount>div:nth-child(2) h3 button", '.deleteAccount', ".deleteAccount input[value='close']");
  pagePopup(".svContainer.calculator>div:last-child button", '.serialNumb', ".serialNumb input[value='close']");

  popupNext(".forgotPwContainer>div:first-child input[type='submit']", ".sendPW", ".sendPW input[value='close']");
  popupNext(".svContainer.calculator3>div:last-child input[type='submit']", ".sendPDF", ".sendPDF input[value='close']");
  popupNext(".experience2Container>div:last-child input[type='submit']", ".exp2", ".exp2 input[value='close']");

  mainTabSlider();
  optSlider();
  imgSlider();
  svSlider();
  museumSlider();
  alsoSlider();

  mCustomScrollbar();
  mCollectionScrollbar();
  mEditionScrollbar();
  // responsiveScrollbar();

  visiblePW();
  btnTop();
  toggleWish(".toggleWish");
  btnMore(".btnMore", ".productList li");
  btnMore(".btnMore", ".adviceList li");
  hoverSrc();
  addToWish(".detailContainer>div>div>aside button:first-of-type");
  addToBag(".detailContainer>div>div>aside button:nth-of-type(2)");
  detailAcc(".detailContainer>div:nth-of-type(3) ul li");
  detailAcc(".svContainer.types>div:last-child>ul>li ol li");
  detailAcc(".privacyPolicyContainer>div:last-child ol>li");
  detailAcc(".termsOfUseContainer>div:last-child ol>li");
  detailAcc(".conditionOfSaleContainer>div:last-child ol>li");
  detailAcc(".faqContainer>div:last-child ol>li");
  wishToBag(".favorite_border input[value='ADD TO BAG'");
  hoverEvent(".checkoutContainer>div>div ol li:nth-child(3) input[type='button']", ".checkoutContainer>div>div ol li:nth-child(3) p");
  paymentMethod(".checkoutContainer>div>div fieldset:last-of-type ul li", ".checkoutContainer>div>div fieldset:last-of-type ol");
  numberOnly();
  orderDetail(".myPageContainer.myOrders>div:last-child div:first-of-type input[type='button']", ".myPageContainer.myOrders>div:last-child div:nth-of-type(2)", ".myPageContainer.myOrders>div:last-child div:nth-of-type(2) input[value='close']");
  orderDetail(".myPageContainer.myOrders>div:last-child div:nth-of-type(3) input[type='button']", ".myPageContainer.myOrders>div:last-child div:last-of-type", ".myPageContainer.myOrders>div:last-child div:last-of-type input[value='close']");
  selectRadio('.calculator2>div:last-child ul:first-of-type li');
  selectRadio('.calculator2>div:last-child ul:last-of-type li');
  selectRadio('.experience2Container>div:last-child fieldset:first-of-type li');
  selectRadio('.storeAppointmentContainer>div:last-child fieldset:nth-of-type(2) ul li');
  goBack();
  storeNext();
  filterOnOff();
  changePW();
  footerAcc("footer>div:first-child div h2");
});

function popupControl(btn, closeBtn) {
  var popup = null;
  var currentMark = null;

  $(btn).click(function () {
    popup = '.' + $(this).val();
    currentMark = $(this).parent('li');
    $('.popup').removeClass('active');
    currentMark.siblings().removeClass('active');
    $(popup).addClass('active');
    currentMark.addClass('active');
    $('header').addClass('active');
  })
  $(closeBtn).click(function () {
    $(popup).removeClass('active');
    currentMark.removeClass('active');
    $('header').removeClass('active');
  })
}

function pagePopup(btn, popup, closeBtn) {
  $(btn).click(function () {
    $(popup).addClass('active');
    $(closeBtn).click(function () {
      $(popup).removeClass('active');
    })
  })
}

function popupNext(btn, popup, closeBtn) {
  var currentForm = null;
  var currentPopup = null;

  $(btn).click(function () {
    currentForm = '#' + $(this).closest('form').attr('id');
    currentPopup = '.' + $(this).closest('form').attr('id');
    console.log(currentForm);
    console.log(currentPopup);

    if (currentForm != null) {
      $(currentForm).submit(function (e) {
        e.preventDefault();
        $(popup).removeClass('active');
        $(currentPopup).addClass('active');
        $(closeBtn).click(function () {
          $(currentPopup).removeClass('active');
        })
      })
    }
  })
}

function mainTabSlider() {
  $('.amgslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 440,
    slideMargin: 40,
    infiniteLoop: false,
    controls: true,
    hideControlOnEnd: true,
    pager: true
  })

  $('.amg').siblings('div').hide();

  var currentSlider = null;
  var tabContent = null;

  $(".indexContainer>div:nth-child(6) ol li").click(function () {
    sliderName = "." + $(this).attr("data-sliderName") + "slider";
    tabContent = "." + $(this).attr('data-sliderName');

    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(tabContent).show();
    $(tabContent).siblings('div').hide();

    currentSlider = $(sliderName).bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 440,
      slideMargin: 40,
      infiniteLoop: false,
      controls: true,
      hideControlOnEnd: true,
      pager: true,
    });
    currentSlider.reloadSlider();
  });
}

function optSlider() {
  var slideCnt = $('.optslider li').length;

  if (slideCnt <= 5) {
    $('.optslider').bxSlider({
      minSlides: 1,
      maxSlides: 5,
      slideWidth: 61,
      slideMargin: 25,
      infiniteLoop: false,
      controls: false,
      pager: false,
      hideControlOnEnd: true,
      wrapperClass: 'optWrapper'
    })
    $('.detailContainer .optWrapper').css('padding', '0');
  } else {
    $('.optslider').bxSlider({
      minSlides: 1,
      maxSlides: 5,
      slideWidth: 61,
      slideMargin: 25,
      infiniteLoop: false,
      controls: true,
      pager: false,
      hideControlOnEnd: true,
      wrapperClass: 'optWrapper'
    })
  }
}

function imgSlider() {
  $('.imgslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    moveSlide: 1,
    // shrinkItems: true,
    slideWidth: 500,
    slideMargin: 10,
    infiniteLoop: false,
    controls: true,
    pager: true,
    hideControlOnEnd: true,
    wrapperClass: 'imgWrapper'
  })
}

function museumSlider() {
  $('.museumslider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 710,
    infiniteLoop: false,
    controls: true,
    pager: true,
    hideControlOnEnd: true,
    adaptiveHeight: true,
    responsive: true,
    wrapperClass: 'museumWrapper'
  })
}

function svSlider() {
  $('.svslider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 90,
    infiniteLoop: false,
    controls: true,
    pager: true,
    hideControlOnEnd: true,
    wrapperClass: 'svWrapper'
  })
}

function alsoSlider() {
  var currentViewport;
  
  $(window).resize(function(){
    currentViewport=$(window).width();
    var respSlider=$('.alsoslider').bxSlider({
      minSlides: 1,
      maxSlides: 3,
      //moveSlides: 1,
      //slideWidth: 300,
      //slideMargin: 10,
      infiniteLoop: false,
      controls: true,
      pager: true,
      hideControlOnEnd: true,
      wrapperClass: 'alsoWrapper'
    })

    if(currentViewport<768){
      respSlider.reloadSlider();
    }else{
      respSlider.destroySlider();
    }
  })
}

function mCustomScrollbar() {
  $('.mCustomScrollbar').mCustomScrollbar({
    axis: "x",
    theme: 'light',
    scrollbarPosition: 'inside',
    autoHideScrollbar: true,
    mouseWheel: { enable: false }
  });
}

function mMypageScrollbar() {
  var windowWidth = $(window).width();

  if (windowWidth >= 1280) {
    //$('.mCollectionScrollbar').mCustomScrollbar("disable");
    $('.mCollectionScrollbar').mCustomScrollbar({
      axis: "x",
      theme: 'light',
      scrollbarPosition: 'inside',
      mouseWheel: { enable: false },
      alwaysShowScrollbar: 0,
      updateOnContentResize: true
    });
  } else {
    $('.mCollectionScrollbar').mCustomScrollbar({
      axis: "x",
      theme: 'light',
      scrollbarPosition: 'inside',
      mouseWheel: { enable: false },
      alwaysShowScrollbar: 1,
      updateOnContentResize: true
    });
  }
  //$('.mCollectionScrollbar').mCustomScrollbar("update");
}

function mCollectionScrollbar() {
  if($(window).width()>=1280){
    $('.mCollectionScrollbar').mCustomScrollbar({
      axis: "x",
      theme: 'light',
      scrollbarPosition: 'inside',
      mouseWheel: { enable: false },
      alwaysShowScrollbar: 0,
      updateOnContentResize: true,
      updateOnSelectorChange: true
      })
  }else{
    $('.mCollectionScrollbar').mCustomScrollbar({
      axis: "x",
      theme: 'light',
      scrollbarPosition: 'inside',
      mouseWheel: { enable: false },
      alwaysShowScrollbar: 1,
      updateOnContentResize: true,
      updateOnSelectorChange: true
    });
  }
}

function mEditionScrollbar() {
  var currentViewport;
  var respScrollbar=$('.mEditionScrollbar').mCustomScrollbar({
    axis: "x",
    theme: 'light',
    scrollbarPosition: 'inside',
    mouseWheel: { enable: false },
    alwaysShowScrollbar: 1,
    updateOnContentResize: true,
    updateOnSelectorChange: true
  });

  $(window).resize(function(){
    currentViewport = $(window).width();
    if(currentViewport >= 768){
      $('.mEditionScrollbar').mCustomScrollbar('disable');
    }else{
      respScrollbar.mCustomScrollbar('update');
    }
  })
}

function visiblePW() {
  var $toggleTarget = $('.material-icons-outlined.toggleVisible');
  var toggleStatus = false;

  $toggleTarget.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == false) {
      $(this).text('visibility');
      $(this).siblings('input[type=password]').attr('type', 'text');
    } else {
      $(this).text('visibility_off');
      $(this).siblings('input[type=text]').attr('type', 'password');
    }
  })
}

function btnTop() {
  $('.btnTop').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.btnTop').fadeIn(500);
    } else {
      $('.btnTop').fadeOut(0);
    }
  })
}

function toggleWish(target) {
  $(target).click(function () {
    switch ($(this).attr('value')) {
      case 'favorite_border':
        $(this).attr('value', 'favorite');
        break;
      case 'favorite':
        $(this).attr('value', 'favorite_border');
      default:
        break;
    }
  });
}

function btnMore(btn, target) {
  $(btn).click(function () {
    $(target).removeClass('active');
    $(target).addClass('active');
    $(this).hide();
  })
}

function hoverSrc() {
  var windowWidth = $(window).width();
  var productlistImg = $('.productList li:not(:first-child) img');
  var indexBxsliderImg = $('.indexContainer>div:nth-child(6) ul li img');
  var alsoImg = $('.detailContainer>div:last-of-type ul li a img');

  if (windowWidth >= 1280) {
    $(productlistImg).mouseover(function () {
      $(this).attr('src', $(this).attr('src').replace('.png', '_hover.png'));
    })
    $(productlistImg).mouseleave(function () {
      $(this).attr('src', $(this).attr('src').replace('_hover.png', '.png'));
    })
    $(indexBxsliderImg).mouseover(function () {
      $(this).attr('src', $(this).attr('src').replace('.png', '_hover.png'));
    })
    $(indexBxsliderImg).mouseleave(function () {
      $(this).attr('src', $(this).attr('src').replace('_hover.png', '.png'));
    })
    $(alsoImg).mouseover(function () {
      $(this).attr('src', $(this).attr('src').replace('.png', '_hover.png'));
    })
    $(alsoImg).mouseleave(function () {
      $(this).attr('src', $(this).attr('src').replace('_hover.png', '.png'));
    })
  }
}

function addToWish(target) {
  var changeIcon = $(target).children('span');
  var toggleStatus = false;

  $(target).click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $(changeIcon).text('favorite');
      $(target).addClass('active');
    } else {
      $(changeIcon).text('favorite_border');
      $(target).removeClass('active');
    }
  })
}

function addToBag(target) {
  var changeIcon = $(target).children('span');
  var toggleStatus = false;

  $(target).click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $(changeIcon).removeClass('material-icons-outlined');
      $(changeIcon).addClass('material-icons');
      $(target).addClass('active');
    } else {
      $(changeIcon).removeClass('material-icons');
      $(changeIcon).addClass('material-icons-outlined');
      $(target).removeClass('active');
    }
  })
}

function detailAcc(target) {
  $(target).click(function () {
    $(target).removeClass('active');
    $(this).addClass('active');
  })
}

function wishToBag(target) {
  var toggleStatus = false;

  $(target).click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $(this).addClass('active');
      $(this).val('ADDED TO BAG');
    } else {
      $(this).removeClass('active');
      $(this).val('ADD TO BAG');
    }
  })
}

function hoverEvent(btn, target) {
  $(btn).mouseenter(function () {
    $(target).addClass('active');
  })
  $(btn).mouseleave(function () {
    $(target).removeClass('active');
  })
}

function paymentMethod(btn, target) {
  $(btn).click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('card')) {
      $(target).removeClass('active');
      $(target).addClass('active');
    } else if ($(this).hasClass('pay')) {
      $(target).removeClass('active');
      $('.checkoutContainer>div>div fieldset:last-of-type ol li *').attr("required", false);
    }
  })
}

function numberOnly() {
  $("input:text[numberOnly]").on("keyup", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ""));
  });
}

function orderDetail(btn, target, closeBtn) {
  $(btn).click(function () {
    $(btn).addClass('active');
    $(target).addClass('active');
  })
  $(closeBtn).click(function () {
    $(btn).removeClass('active');
    $(target).removeClass('active');
  })
}

function selectRadio(target) {
  $(target).click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })
}

function goBack() {
  $('.storeAppointmentContainer>div:first-child a').click(function () {
    window.history.back();
  })
}

function storeNext() {
  var nextPage = null;
  var indexNumb = null;
  var storeNumb = null;

  $('.findStoreContainer aside ol li').click(function () {
    indexNumb = $(this).index();
    storeNumb = parseInt(indexNumb) + 1;
    nextPage = 'storeDetail_' + storeNumb + '.html';

    location.href = nextPage;
  })
}

function filterOnOff() {
  var toggleTarget = $('.listContainer>div:nth-of-type(2) div:last-child');
  var toggleBtn = $('.filterOnOff');
  var toggleIcon = $('.filterOnOff b span');
  var toggleStatus = false;

  toggleBtn.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == false) {
      toggleTarget.removeClass('active');
      toggleBtn.removeClass('active');
      toggleIcon.text('expand_more');
    } else {
      toggleTarget.addClass('active');
      toggleBtn.addClass('active');
      toggleIcon.text('expand_less');
    }
  })
}

function changePW() {
  var toggleBtn = $('.myPageContainer.myAccount>div:nth-child(2) ul li:nth-child(5)');
  var changeIcon = $('.myPageContainer.myAccount>div:nth-child(2) ul li:nth-child(5) span');
  var toggleTarget = $('.myPageContainer.myAccount>div:nth-child(2) ul li:nth-child(5) ol')
  var toggleStatus = false;

  toggleBtn.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == false) {
      toggleTarget.addClass('active');
      changeIcon.text('expand_less');
    } else {
      toggleTarget.removeClass('active');
      changeIcon.text('expand_more');
    }
  })
}

function footerAcc(btn) {
  $(btn).click(function () {
    $(this).siblings('ul').toggleClass('active');
    if($(this).siblings('ul').hasClass('active')){
      $(this).removeClass('unfold');
      $(this).addClass('fold');
    }else{
      $(this).removeClass('fold');
      $(this).addClass('unfold');
    }
  })
}