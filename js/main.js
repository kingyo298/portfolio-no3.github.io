$(function(){
  // 変数の指定
  let dis = 520;
  let h1 = $(".header-bg").height();
  let h2 = $("header").height();

  // ハンバーガーメニューまたは、header-navのリンクをクリックするとheader-navが開閉する
  // header-navが開かれているときはスクロールできなくなる
  // header-navは右から表示される
  $(".background-layer").hide();
  $(".hamburger-menu, .nav-list a").click(function(){
    // ハンバーガーメニューがheaderより上にあるとき
    if($(window).scrollTop() > h2){
      $(".background-layer").fadeToggle(300);
      $(".hamburger-menu, .burger-line").toggleClass("black-version");
      $(".hamburger-menu, .burger-line").toggleClass('open');
      $(".header-nav").animate({"margin-right" : "+=" + dis + "px"}, 300);
      dis *= -1;
      $("body").toggleClass("noscroll");
    }else{
    // ハンバーガーメニューがheaderより下にあるとき
      $(".background-layer").fadeToggle(300);
      $(".hamburger-menu, .burger-line").toggleClass('open');
      $(".header-nav").animate({"margin-right" : "+=" + dis + "px"}, 300);
      dis *= -1;
      $("body").toggleClass("noscroll");
    }
  });
  // site-logoがheader-bgより上にあるかどうかで色を変える
  $(window).scroll(function(){
    if($(window).scrollTop() > h1 - 30){
      $(".site-logo").addClass("black");
    }else{
      $(".site-logo").removeClass("black");
    }
  });
  // ハンバーガーメニューがheaderより上にあるかどうかで色を変える
  $(window).scroll(function(){
    if($(window).scrollTop() > h2 - 35){
      $(".hamburger-menu, .burger-line").addClass("black-version");
    }else{
      $(".hamburger-menu, .burger-line").removeClass("black-version");
    }
  });

  // スムーススクロールの実装
  var windowWidth = $(window).width();
  var headerHeight = 0;
  $("a[href^='#']").click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href=="#" || href==""?"html":href);
    var position = target.offset().top - headerHeight;
    $("body,html").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // contactページの、必須項目及びプライバシーポリシーのチェックがないと送信ボタンが押せない
  const $submitBtn = $("#js-submit");
  $("#form input, #form textarea").on("change", function(){
    if(
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #confirmation').prop('checked') === true
    ){
      $submitBtn.prop('disabled', false);
    }else{
      $submitBtn.prop('disabled', true);
    }
  });
});