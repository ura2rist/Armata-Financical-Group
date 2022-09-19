document.addEventListener('DOMContentLoaded', function () {
  // Меню
  const menuButton = document.querySelector('.mob-menu');
  const body = document.querySelector('.body');
  const menuMob = document.querySelector('.header__menu-nav-mob');

  menuButton.addEventListener('click', function (event) {
    menuButton.classList.toggle('mob-menu_active');
    body.classList.toggle('lock');
    menuMob.classList.toggle('header__menu-nav-mob_active');
  });

  // Секция как мы работаем
  const how = document.querySelector('.how');
  const howOffset = how.offsetTop;
  const howElement = how.querySelectorAll('.how__element');
  let animHow = false;

  // Секция оценка имущества
  const grade = document.querySelector('.grade');
  const gradeOffset = grade.offsetTop;
  const gradeElement = grade.querySelectorAll('.grade__item');
  const gradeTitle = grade.querySelector('.title');
  const gradeDescription = grade.querySelector('.description');
  let animGrade = false;

  // Секция сделки
  const deals = document.querySelector('.deals');
  const dealsOffset = deals.offsetTop;
  const dealsElement = deals.querySelectorAll('.deals__element');
  const dealsTitle = deals.querySelector('.title');
  const dealsDescription = deals.querySelector('.description');
  const dealsPretitle = deals.querySelector('.pretitle');
  let animDeals = false;

  // Секция бухгалтерские услуги
  const accountant = document.querySelector('.accountant');
  const accountantOffset = accountant.offsetTop;
  const accountantElement = accountant.querySelectorAll('.accountant__element');
  const accountantTitle = accountant.querySelector('.title');
  const accountantDescription = accountant.querySelector('.description');
  let animAccountant = false;

  // Секция преимущества
  const benefits = document.querySelector('.benefits');
  const benefitsOffset = benefits.offsetTop;
  const benefitsElement = benefits.querySelectorAll('.benefits__element');
  const benefitsTitle = benefits.querySelector('.title');
  const benefitsDescription = benefits.querySelector('.description');
  const benefitsPretitle = benefits.querySelector('.pretitle');
  let animBenefits = false;

  // Секция контактов
  const contacts = document.querySelector('.contacts');
  const contactsOffset = contacts.offsetTop;
  const contactsElement = contacts.querySelectorAll('.benefits__element');
  const contactsTitle = contacts.querySelector('.title');
  const contactsDescription = contacts.querySelector('.description');
  let animContacts = false;

  // Секция отзывы
  const reviews = document.querySelector('.reviews');
  const reviewsOffset = reviews.offsetTop;
  const reviewsTitle = reviews.querySelector('.title');
  const reviewsDescription = reviews.querySelector('.description');
  let animReviews = false;

  // Секция профессионалы
  const pro = document.querySelector('.request-bottom');
  const proOffset = pro.offsetTop;
  const proElement = pro.querySelectorAll('.request-bottom__element');
  const proForm = pro.querySelector('.bottom__form');
  const proTitle = pro.querySelector('.title');
  const proDescription = pro.querySelector('.description');
  let animPro = false;

  // Событие скролла
  document.addEventListener('scroll', function (event) {
    if (window.pageYOffset > howOffset - 550 && !animHow) {
      howElement.forEach(function (item, index) {
        setTimeout(function () {
          let howSvg = new DrawFillSVG({
            elementId: `how__svg-${index}`,
          });

          item.querySelector('.how__description').classList.add('how__description_on');
        }, 1000 * index);
      });

      animHow = true;
    }

    if (window.pageYOffset > gradeOffset - 450 && !animGrade) {
      gradeElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('grade__item_off');
        }, 250 * index);
      });

      gradeTitle.classList.remove('title_off');
      gradeDescription.classList.remove('description_off');

      animGrade = true;
    }

    if (window.pageYOffset > dealsOffset - 450 && !animDeals) {
      dealsElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('deals__element_off');
        }, 250 * index);
      });

      dealsTitle.classList.remove('title_off');
      dealsDescription.classList.remove('description_off');
      dealsPretitle.classList.remove('pretitle_off');

      animDeals = true;
    }

    if (window.pageYOffset > accountantOffset - 450 && !animAccountant) {
      accountantElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('accountant__element_off');
        }, 250 * index);
      });

      accountantTitle.classList.remove('title_off');
      accountantDescription.classList.remove('description_off');

      animAccountant = true;
    }

    if (window.pageYOffset > benefitsOffset - 500 && !animBenefits) {
      benefitsElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('benefits__element_off');
        }, 250 * index);
      });

      benefitsTitle.classList.remove('title_off');
      benefitsDescription.classList.remove('description_off');
      benefitsPretitle.classList.remove('pretitle_off');

      animBenefits = true;
    }

    if (window.pageYOffset > contactsOffset - 500 && !animContacts) {
      contactsElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('benefits__element_off');
        }, 250 * index);
      });

      contactsTitle.classList.remove('title_off');
      contactsDescription.classList.remove('description_off');

      animContacts = true;
    }

    if (window.pageYOffset > reviewsOffset - 500 && !animReviews) {
      reviews.classList.remove('reviews_off');
      reviewsTitle.classList.remove('title_off');
      reviewsDescription.classList.remove('description_off');

      animContacts = true;
    }

    if (window.pageYOffset > proOffset - 600 && !animPro) {
      proElement.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.remove('request-bottom__element_off');
        }, 250 * index);
      });

      proForm.classList.remove('bottom__form_off');
      proTitle.classList.remove('title_off');
      proDescription.classList.remove('description_off');

      animPro = true;
    }
  });

  // Модалка
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelectorAll('.modal-button');
  const modalClose = document.querySelector('.modal__close');
  const modalTitle = document.querySelector('.modal__title');

  modalButton.forEach(function (item) {
    item.addEventListener('click', function (event) {
      modal.classList.add('modal_active');
      body.classList.add('lock');

      modalTitle.innerHTML = event.currentTarget.innerText;

      modalClose.addEventListener('click', function (event) {
        modal.classList.remove('modal_active');
        body.classList.remove('lock');
      });
    });
  });

  // Слайдер отзывы
  const swiper = new Swiper('.reviews-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
  });

  // Плавный скроллинг
  const anchors = document.querySelectorAll('a.scroll-to');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  const evt = new Event('scroll');
  document.dispatchEvent(evt);
});
