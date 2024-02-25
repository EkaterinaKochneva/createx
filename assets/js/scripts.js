"use strict";

// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function () {
  // utils
  function debounce(callee, timeoutMs) {
    var timer;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timer);
      timer = setTimeout(function () {
        callee.apply(void 0, args);
      }, timeoutMs);
    };
  }
  var mobileMenu = function mobileMenu() {
    var body = document.querySelector('body');
    var header = document.querySelector('header');
    var mainMenu = document.querySelector('.top-menu');
    var burger = document.querySelector('.burger');
    if (!mainMenu || !burger || !close) {
      return false;
    }
    burger.addEventListener('click', function () {
      body.classList.toggle('is-hidden');
      mainMenu.classList.toggle('is-active');
      header.classList.toggle('is-open');
    });
  };
  mobileMenu();
  var heroSliderInit = function heroSliderInit(element) {
    if (!element) {
      return false;
    }
    var heroSwiper = new Swiper(element, {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.hero__button-next',
        prevEl: '.hero__button-prev'
      },
      pagination: {
        el: '.hero__pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function renderBullet(index, className) {
          var number;
          if (index < 11) {
            number = "0".concat(index + 1);
          } else {
            number = index + 1;
          }
          return '<span class="' + className + '">' + '<span class="swiper-pagination-numbered">' + number + '</span>' + '</span>';
        }
      }
    });
  };
  var heroSlider = document.querySelector('.hero__slider');
  heroSliderInit(heroSlider);
  function goToTop() {
    var button = document.querySelector('.go-to-top');
    var scrollVal = 100;
    if (!button) {
      return false;
    }
    var activateScrollBtn = function activateScrollBtn() {
      var scrollOffset = window.scrollY;
      if (scrollOffset > scrollVal && !button.classList.contains('is-active')) {
        button.classList.add('is-active');
      } else if (scrollOffset <= scrollVal && button.classList.contains('is-active')) {
        button.classList.remove('is-active');
      }
    };
    var onScroll = debounce(activateScrollBtn, 300);
    window.addEventListener('scroll', onScroll);
    button.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  goToTop();
  function videoCover(videos) {
    var deleteLength = 'https://youtu.be/'.length;
    var videoIframe = function videoIframe(id) {
      var query = '?&autoplay=1';
      return 'https://www.youtube.com/embed/' + id + query;
    };
    var createIframe = function createIframe(id) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('src', videoIframe(id));
      return iframe;
    };
    videos.forEach(function (element) {
      var videoHref = element.dataset.video;
      var videoId = videoHref.substring(deleteLength, videoHref.length);
      var button = element.querySelector('.video-cover__button');
      var videoCover = element.querySelector('.video-cover__img');
      button.addEventListener('click', function () {
        var iframe = createIframe(videoId);
        videoCover.remove();
        button.remove();
        element.appendChild(iframe);
      });
    });
  }
  var videos = document.querySelectorAll('.video-cover');
  videoCover(videos);
  function phoneMask(elements) {
    if (elements.length !== 0) {
      var maskOptions = {
        mask: '+{7} (000) 000-00-00'
      };
      elements.forEach(function (element) {
        var mask = IMask(element, maskOptions);
      });
    }
  }
  var inputPhoneList = document.querySelectorAll('input[type="tel"]');
  phoneMask(inputPhoneList);
  function formValidate(elements) {
    var constraints = {
      email: {
        presence: true,
        email: true
      },
      name: {
        presence: true,
        length: {
          minimum: 2,
          maximum: 20,
          message: "can contain 2-20 symbols"
        },
        format: {
          pattern: "[a-z]+",
          flags: "i",
          message: "can only contain a-z"
        }
      },
      phone: {
        presence: true,
        length: {
          minimum: 18,
          maximum: 18,
          message: "format +7 (000) 000-00-00"
        }
      },
      file: {
        presence: true
      }
    };
    if (elements.length !== 0) {
      var handleFormSubmit = function handleFormSubmit(form) {
        // validate the form against the constraints

        var errors = validate(form, constraints);

        // then we update the form to reflect the results

        showErrors(form, errors || {});
        if (!errors) {
          showSuccess();
        }
      }; // Updates the inputs with the validation errors
      var showErrors = function showErrors(form, errors) {
        // We loop through all the inputs and show the errors for that input

        _.each(form.querySelectorAll("input[name], select[name]"), function (input) {
          // Since the errors can be null if no errors were found we need to handle

          // that

          showErrorsForInput(input, errors && errors[input.name]);
        });
      }; // Shows the errors for a specific input
      var showErrorsForInput = function showErrorsForInput(input, errors) {
        // This is the root of the input

        var formGroup = closestParent(input.parentNode, "input");

        // First we remove any old messages and resets the classes

        resetFormGroup(formGroup);

        // If we have errors

        if (errors) {
          // we first mark the group has having errors

          formGroup.classList.add("input--error");

          // then we append all the errors

          var blockErr = document.createElement("p");
          blockErr.classList.add("input__status");
          formGroup.appendChild(blockErr);
          _.each(errors, function (error) {
            addError(blockErr, error);
          });
        } else {
          // otherwise we simply mark it as success

          formGroup.classList.add("input--success");
        }
      }; // Recusively finds the closest parent that has the specified class
      var closestParent = function closestParent(child, className) {
        if (!child || child == document) {
          return null;
        }
        if (child.classList.contains(className)) {
          return child;
        } else {
          return closestParent(child.parentNode, className);
        }
      };
      var resetFormGroup = function resetFormGroup(formGroup) {
        // Remove the success and error classes

        formGroup.classList.remove("input--error");
        formGroup.classList.remove("input--success");

        // and remove any old messages

        _.each(formGroup.querySelectorAll(".input__status"), function (el) {
          el.parentNode.removeChild(el);
        });
      }; // Adds the specified error with the following markup
      var addError = function addError(blockErr, error) {
        var block = document.createElement("span");
        block.innerText = error;
        blockErr.appendChild(block);
      };
      var showSuccess = function showSuccess() {
        // We made it \:D/

        alert("Success!");
      };
      elements.forEach(function (form) {
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          handleFormSubmit(form);
        });
        var inputs = form.querySelectorAll("input, textarea, select");
        for (var i = 0; i < inputs.length; ++i) {
          inputs.item(i).addEventListener("change", function (ev) {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(this, errors[this.name]);
          });
        }
      });
    }
  }
  var formsList = document.querySelectorAll('.validate-form');
  formValidate(formsList);
  MicroModal.init({
    onShow: function onShow(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('faded');
    },
    onClose: function onClose() {
      document.querySelector('body').classList.remove('faded');
    },
    openTrigger: 'data-modal',
    closeTrigger: 'data-modal-close',
    awaitCloseAnimation: true
  });
  function select(elements) {
    if (elements.length !== 0) {
      elements.forEach(function (element) {
        element.addEventListener('change', function () {
          element.classList.add('is-change');
        });
      });
    }
  }
  var selectList = document.querySelectorAll('.select');
  select(selectList);
  function addFileInput(elements) {
    if (elements.length !== 0) {
      elements.forEach(function (element) {
        var input = element.querySelector('.add-file__input');
        var label = element.querySelector('.add-file__text');
        var labelVal = label.innerText;
        input.addEventListener('change', function (el) {
          var fileName = '';
          element.classList.add('is-change');
          if (input.value) {
            fileName = input.value.split('\\').pop();
          }
          fileName ? label.innerText = fileName : label.innerText = labelVal;
        });
      });
    }
  }
  var addFileList = document.querySelectorAll('.add-file');
  addFileInput(addFileList);
  function sectionSlider(elements) {
    if (elements.length !== 0) {
      elements.forEach(function (n) {
        var slider = new Swiper(n.querySelector('.swiper'), {
          loop: true,
          slidesPerView: 1,
          breakpoints: {
            370: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          },
          navigation: {
            nextEl: n.querySelector('.section-slider__button-next'),
            prevEl: n.querySelector('.section-slider__button-prev')
          },
          pagination: {
            el: n.querySelector('.section-slider__pagination')
          }
        });
      });
    }
  }
  var slidersList = document.querySelectorAll('.section-slider');
  sectionSlider(slidersList);
  var sliderMobile = function sliderMobile(element, breakpoints, options) {
    var sliderInstance = null;
    var initSlider = function initSlider() {
      sliderInstance = new Swiper(element, options);
    };
    var destroySlider = function destroySlider() {
      var _sliderInstance;
      (_sliderInstance = sliderInstance) === null || _sliderInstance === void 0 || _sliderInstance.destroy();
      sliderInstance = null;
    };
    var makeSliderComponent = function makeSliderComponent() {
      var conditionInit = function conditionInit() {
        var isMobile = window.innerWidth <= breakpoints;
        return isMobile && !sliderInstance;
      };
      var conditionDestroy = function conditionDestroy() {
        var isDesktop = window.innerWidth > breakpoints;
        return isDesktop && sliderInstance;
      };
      if (conditionInit()) {
        initSlider();
      }
      if (conditionDestroy()) {
        destroySlider();
      }
    };
    var onResize = debounce(makeSliderComponent, 300);
    makeSliderComponent();
    window.addEventListener('resize', onResize);
  };
  function simpleSlider(elements) {
    if (elements.length !== 0) {
      elements.forEach(function (el) {
        var element = el;
        var breakpoints = 767;
        var options = {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          setWrapperSize: true,
          pagination: {
            el: el.querySelector('.simple-slider__pagination')
          }
        };
        sliderMobile(element, breakpoints, options);
      });
    }
  }
  var slidersMobileList = document.querySelectorAll('.jsSliderMobile');
  simpleSlider(slidersMobileList);
  function reviewsSlider(elements) {
    if (elements.length !== 0) {
      elements.forEach(function (element) {
        var slider = new Swiper(element, {
          loop: true,
          slidesPerView: 1,
          navigation: {
            nextEl: element.querySelector('.swiper-button-next'),
            prevEl: element.querySelector('.swiper-button-prev')
          }
        });
      });
    }
  }
  var slidersReviewList = document.querySelectorAll('.reviews-slider');
  reviewsSlider(slidersReviewList);
  var digitsProgress = function digitsProgress(elements) {
    if (elements.length !== 0) {
      var timing = 10;
      var strokeWidth = 6;
      var width = 148;
      elements.forEach(function (element) {
        var counter = 0;
        var progressCircle = +element.dataset.progress;
        var progressVal = +element.dataset.value;
        var progressRatio = (progressVal / progressCircle).toFixed(2);
        var elementVal = element.querySelector(".digits__value span");
        var circle = element.querySelector(".digits__progress circle");
        var radius = width / 2 - strokeWidth / 2;
        var circleLength = 2 * Math.PI * radius;
        circle.setAttribute("cx", width / 2);
        circle.setAttribute("cy", width / 2);
        circle.setAttribute("r", radius);
        circle.style.strokeDasharray = Math.round(circleLength);
        var progress = function progress() {
          if (counter == progressCircle) {
            clearInterval();
            return;
          }
          counter++;
          var valueCounter = Math.round(counter * progressRatio);
          circle.style.strokeDashoffset = Math.round(circleLength - counter / 100 * circleLength);
          elementVal.innerText = "".concat(valueCounter);
        };
        setInterval(progress, timing);
      });
    }
  };
  var digitsList = document.querySelectorAll('.digits__item');
  function checkScroll(element, cb, offsetY) {
    function getTopCoords(elem) {
      var box = elem.getBoundingClientRect();
      return box.top + window.pageYOffset;
    }
    var blockPosTop = getTopCoords(element);
    var ident = offsetY ? offsetY : 0;
    var activated = false;
    var activateScrollElement = function activateScrollElement() {
      var posTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (posTop + ident > blockPosTop && !activated) {
        activated = true;
        cb();
      }
    };
    var onScroll = debounce(activateScrollElement, 200);
    window.addEventListener('scroll', onScroll);
  }
  var digits = document.querySelector('.digits');
  checkScroll(digits, digitsProgress.bind(null, digitsList), 300);
});