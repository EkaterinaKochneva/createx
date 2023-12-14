"use strict";

// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function () {
  var mobileMenu = function mobileMenu() {
    var body = document.querySelector('body');
    var mainMenu = document.querySelector('.top-menu');
    var burger = document.querySelector('.burger');
    var close = document.querySelector('.top-menu__close');
    burger.addEventListener('click', function () {
      mainMenu.classList.add('is-active');
      body.classList.add('faded');
    });
    close.addEventListener('click', function () {
      mainMenu.classList.remove('is-active');
      body.classList.remove('faded');
    });
  };
  mobileMenu();
  var heroSlider = new Swiper('.hero__slider', {
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
  function goToTop() {
    var button = document.querySelector('.go-to-top');
    var scrollVal = 100;
    window.addEventListener('scroll', function () {
      var scrollOffset = window.scrollY;
      if (scrollOffset > scrollVal && !button.classList.contains('is-active')) {
        button.classList.add('is-active');
      } else if (scrollOffset <= scrollVal && button.classList.contains('is-active')) {
        button.classList.remove('is-active');
      }
    });
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
});