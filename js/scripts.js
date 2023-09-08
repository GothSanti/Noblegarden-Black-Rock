$(function () {
  $('.dealer__btn').click(function () {
    $('.dealer').addClass('dealer_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function () {
    $('.dealer').removeClass('dealer_active');
    $('body').removeClass('hidden');
  });

  $('.dealer').mouseup(function (e) {
    let modalContent = $(".dealer__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('dealer_active');
      $('body').removeClass('hidden');
    }
  });
});

$(function () {
  $('.favorite__btn').click(function () {
    $('.favorite').addClass('favorite_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function () {
    $('.favorite').removeClass('favorite_active');
    $('body').removeClass('hidden');
  });

  $('.favorite').mouseup(function (e) {
    let modalContent = $(".favorite__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('favorite_active');
      $('body').removeClass('hidden');
    }
  });
});

$(function () {
  $('.priest__btn').click(function () {
    $('.priest').addClass('priest_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function () {
    $('.priest').removeClass('priest_active');
    $('body').removeClass('hidden');
  });

  $('.priest').mouseup(function (e) {
    let modalContent = $(".priest__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('priest_active');
      $('body').removeClass('hidden');
    }
  });
});

$(function () {
  $('.farmer__btn').click(function () {
    $('.farmer').addClass('farmer_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function () {
    $('.farmer').removeClass('farmer_active');
    $('body').removeClass('hidden');
  });

  $('.farmer').mouseup(function (e) {
    let modalContent = $(".farmer__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('farmer_active');
      $('body').removeClass('hidden');
    }
  });
});

$(function () {
  $('.guard__btn').click(function () {
    $('.guard').addClass('guard_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function () {
    $('.guard').removeClass('guard_active');
    $('body').removeClass('hidden');
  });

  $('.guard').mouseup(function (e) {
    let modalContent = $(".guard__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('guard_active');
      $('body').removeClass('hidden');
    }
  });
});
