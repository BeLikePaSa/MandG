(() => {
  const mainNav = document.querySelector('.site-header .main-nav');
  const navWrap = mainNav?.parentElement;

  if (mainNav && navWrap) {
    mainNav.id = 'main-navigation';
    navWrap.classList.add('has-mobile-menu');

    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.type = 'button';
    menuToggle.setAttribute('aria-controls', mainNav.id);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');

    const menuIcon = document.createElement('span');
    menuIcon.className = 'menu-toggle-icon';
    menuIcon.setAttribute('aria-hidden', 'true');
    menuIcon.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));
    menuToggle.append(menuIcon);
    mainNav.before(menuToggle);

    const closeMenu = () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      mainNav.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    });

    mainNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!navWrap.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.matchMedia('(min-width: 861px)').addEventListener('change', closeMenu);
  }

  const gallerySets = {
    'interior-painting.html': [
      'Images/Interior Painting/Interior (1).jpeg',
      'Images/Interior Painting/Interior (1).jpg',
      'Images/Interior Painting/Interior (2).jpeg',
      'Images/Interior Painting/Interior (2).jpg',
      'Images/Interior Painting/Interior (3).jpeg',
      'Images/Interior Painting/Interior (3).jpg',
      'Images/Interior Painting/Interior (4).jpeg',
      'Images/Interior Painting/Interior (4).jpg',
      'Images/Interior Painting/Interior (5).jpeg',
      'Images/Interior Painting/Interior (5).jpg',
      'Images/Interior Painting/Interior (6).jpeg',
      'Images/Interior Painting/Interior (6).jpg',
      'Images/Interior Painting/Interior (7).jpeg',
      'Images/Interior Painting/Interior (7).jpg',
      'Images/Interior Painting/Interior (8).jpeg',
      'Images/Interior Painting/Interior (8).jpg',
      'Images/Interior Painting/Interior (9).jpeg',
      'Images/Interior Painting/Interior (9).jpg',
      'Images/Interior Painting/Interior (10).jpeg',
      'Images/Interior Painting/Interior (10).jpg',
      'Images/Interior Painting/Interior (11).jpeg',
      'Images/Interior Painting/Interior (11).jpg',
      'Images/Interior Painting/Interior (12).jpeg',
      'Images/Interior Painting/Interior (12).jpg',
      'Images/Interior Painting/Interior (13).jpeg',
      'Images/Interior Painting/Interior (13).jpg',
      'Images/Interior Painting/Interior (14).jpeg',
      'Images/Interior Painting/Interior (14).jpg',
      'Images/Interior Painting/Interior (15).jpeg',
      'Images/Interior Painting/Interior (15).jpg',
      'Images/Interior Painting/Interior (17).jpg',
      'Images/Interior Painting/Interior (18).jpg'
    ],
    'exterior-painting.html': [
      'Images/Exterior Painting/Exterior Painting (1).jpeg',
      'Images/Exterior Painting/Exterior Painting (1).jpg',
      'Images/Exterior Painting/Exterior Painting (1).png',
      'Images/Exterior Painting/Exterior Painting (2).jpeg',
      'Images/Exterior Painting/Exterior Painting (2).jpg',
      'Images/Exterior Painting/Exterior Painting (3).jpeg',
      'Images/Exterior Painting/Exterior Painting (3).jpg',
      'Images/Exterior Painting/Exterior Painting (4).jpeg',
      'Images/Exterior Painting/Exterior Painting (4).jpg',
      'Images/Exterior Painting/Exterior Painting (5).jpeg',
      'Images/Exterior Painting/Exterior Painting (5).jpg',
      'Images/Exterior Painting/Exterior Painting (6).jpg',
      'Images/Exterior Painting/Exterior Painting (7).jpg',
      'Images/Exterior Painting/Exterior Painting (8).jpg',
      'Images/Exterior Painting/Exterior Painting (9).jpg',
      'Images/Exterior Painting/Exterior Painting (10).jpg',
      'Images/Exterior Painting/Exterior Painting (11).jpg',
      'Images/Exterior Painting/Exterior Painting (12).jpg',
      'Images/Exterior Painting/Exterior Painting (13).jpg',
      'Images/Exterior Painting/Exterior Painting (14).jpg',
      'Images/Exterior Painting/Exterior Painting (15).jpg',
      'Images/Exterior Painting/Exterior Painting (16).jpg',
      'Images/Exterior Painting/Exterior Painting (17).jpg',
      'Images/Exterior Painting/Exterior Painting (18).jpg',
      'Images/Exterior Painting/Exterior Painting (19).jpg',
      'Images/Exterior Painting/Exterior Painting (20).jpg',
      'Images/Exterior Painting/Exterior Painting (21).jpg',
      'Images/Exterior Painting/Exterior Painting (22).jpg',
      'Images/Exterior Painting/Exterior Painting (23).jpg',
      'Images/Exterior Painting/Exterior Painting (24).jpg',
      'Images/Exterior Painting/Exterior Painting (25).jpg',
      'Images/Exterior Painting/Exterior Painting (26).jpg',
      'Images/Exterior Painting/Exterior Painting (27).jpg',
      'Images/Exterior Painting/Exterior Painting (28).jpg',
      'Images/Exterior Painting/Exterior Painting (29).jpg',
      'Images/Exterior Painting/Exterior Painting (30).jpg',
      'Images/Exterior Painting/Exterior Painting (31).jpg'
    ],
    'prep-repairs.html': [
      'Images/Prep & Repair/Prep & Repair (1).jpeg',
      'Images/Prep & Repair/Prep & Repair (1).jpg',
      'Images/Prep & Repair/Prep & Repair (1).png',
      'Images/Prep & Repair/Prep & Repair (2).jpeg',
      'Images/Prep & Repair/Prep & Repair (2).png',
      'Images/Prep & Repair/Prep & Repair (3).png',
      'Images/Prep & Repair/Prep & Repair (4).png',
      'Images/Prep & Repair/Prep & Repair (5).png'
    ],
    'commercial-painting.html': [
      'Images/Commercial Painting/Commercial Painting (1).jpeg'
    ],
    'decorative-finishes.html': [
      'Images/Decorative Finishes/Decorative Finishes (1).jpeg',
      'Images/Decorative Finishes/Decorative Finishes (2).jpeg'
    ],
    'rental-refreshes.html': [
      'Images/Rental Refreshes/Rental Refreshes (1).jpg',
      'Images/Rental Refreshes/Rental Refreshes (2).jpg',
      'Images/Rental Refreshes/Rental Refreshes (3).jpg'
    ]
  };

  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  const images = gallerySets[pageName];
  const serviceDetailImage = document.querySelector('.service-detail-image');

  if (pageName === 'index.html') {
    const servicePhotos = [
      { thumb: '.interior-thumb', images: gallerySets['interior-painting.html'] },
      { thumb: '.exterior-thumb', images: gallerySets['exterior-painting.html'] },
      { thumb: '.prep-thumb', images: gallerySets['prep-repairs.html'] },
      { thumb: '.rental-thumb', images: gallerySets['rental-refreshes.html'] },
      { thumb: '.commercial-thumb', images: gallerySets['commercial-painting.html'] },
      { thumb: '.decorative-thumb', images: gallerySets['decorative-finishes.html'] }
    ];
    const chooseRandom = (items) => items[Math.floor(Math.random() * items.length)];

    servicePhotos.forEach((service) => {
      const thumb = document.querySelector(service.thumb);
      if (thumb && service.images.length) {
        thumb.style.backgroundImage = `linear-gradient(rgba(17, 17, 17, 0.08), rgba(17, 17, 17, 0.18)), url("${chooseRandom(service.images)}")`;
      }
    });

    const projectPhotos = servicePhotos.flatMap(({ images }) => images);

    const workViewer = document.querySelector('.home-work-viewer');

    if (workViewer && projectPhotos.length) {
      const workImage = workViewer.querySelector('.home-work-image');
      let currentIndex = Math.floor(Math.random() * projectPhotos.length);
      let timer;

      const showProject = (index) => {
        currentIndex = (index + projectPhotos.length) % projectPhotos.length;
        workImage.src = projectPhotos[currentIndex];
        workImage.alt = `Recent work project photo ${currentIndex + 1}`;
      };
      const stopTimer = () => window.clearInterval(timer);
      const startTimer = () => {
        stopTimer();
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          timer = window.setInterval(() => showProject(currentIndex + 1), 5000);
        }
      };

      workViewer.addEventListener('mouseenter', stopTimer);
      workViewer.addEventListener('mouseleave', startTimer);

      showProject(currentIndex);
      startTimer();
    }
  }

  if (images && serviceDetailImage) {
    const recentWorkSection = [...document.querySelectorAll('section')].find((section) => (
      section.querySelector('.eyebrow')?.textContent.trim().toLowerCase() === 'recent work'
    ));
    recentWorkSection?.remove();
    serviceDetailImage.classList.remove('service-detail-image');
    [...serviceDetailImage.classList]
      .filter((className) => className.startsWith('detail-'))
      .forEach((className) => serviceDetailImage.classList.remove(className));
    serviceDetailImage.classList.add('service-gallery');
  }

  const gallery = document.querySelector('.service-gallery');

  if (!images || !gallery) return;

  gallery.innerHTML = '';

  if (!images.length) {
    gallery.innerHTML = '<p class="gallery-empty">Project images will appear here soon.</p>';
    return;
  }

  const slideshow = document.createElement('div');
  slideshow.className = 'service-slideshow gallery-trigger';
  slideshow.tabIndex = 0;
  slideshow.setAttribute('role', 'button');
  slideshow.setAttribute('aria-label', 'Open the full service project gallery');

  const image = document.createElement('img');
  image.className = 'service-slideshow-image';
  image.alt = 'Service project photo 1';
  image.src = images[0];
  slideshow.append(image);

  const previousButton = document.createElement('button');
  previousButton.className = 'service-slideshow-arrow service-slideshow-prev';
  previousButton.type = 'button';
  previousButton.setAttribute('aria-label', 'Previous project photo');
  previousButton.textContent = '<';

  const nextButton = document.createElement('button');
  nextButton.className = 'service-slideshow-arrow service-slideshow-next';
  nextButton.type = 'button';
  nextButton.setAttribute('aria-label', 'Next project photo');
  nextButton.textContent = '>';

  const counter = document.createElement('span');
  counter.className = 'service-slideshow-counter';
  slideshow.append(previousButton, nextButton, counter);
  gallery.append(slideshow);

  let currentIndex = 0;
  let timer;

  const showImage = (index) => {
    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex];
    image.alt = `Service project photo ${currentIndex + 1}`;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  };

  const openGallery = () => {
    const modal = document.createElement('div');
    modal.className = 'service-gallery-modal';
    modal.innerHTML = `
      <div class="service-gallery-backdrop"></div>
      <div class="service-gallery-dialog" role="dialog" aria-modal="true" aria-label="Full service project gallery">
        <button class="service-gallery-close" type="button" aria-label="Close gallery">&times;</button>
        <img class="service-gallery-modal-image" src="${images[currentIndex]}" alt="Service project photo ${currentIndex + 1}" />
        <button class="service-gallery-modal-arrow service-gallery-modal-prev" type="button" aria-label="Previous project photo">&lt;</button>
        <button class="service-gallery-modal-arrow service-gallery-modal-next" type="button" aria-label="Next project photo">&gt;</button>
        <span class="service-gallery-modal-counter">${currentIndex + 1} / ${images.length}</span>
      </div>`;
    document.body.append(modal);
    document.body.classList.add('gallery-is-open');

    const modalImage = modal.querySelector('.service-gallery-modal-image');
    const modalCounter = modal.querySelector('.service-gallery-modal-counter');
    const close = () => {
      modal.remove();
      document.body.classList.remove('gallery-is-open');
    };
    const showModalImage = (index) => {
      showImage(index);
      modalImage.src = images[currentIndex];
      modalImage.alt = `Service project photo ${currentIndex + 1}`;
      modalCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    };

    modal.querySelector('.service-gallery-close').addEventListener('click', close);
    modal.querySelector('.service-gallery-backdrop').addEventListener('click', close);
    modal.querySelector('.service-gallery-modal-prev').addEventListener('click', () => showModalImage(currentIndex - 1));
    modal.querySelector('.service-gallery-modal-next').addEventListener('click', () => showModalImage(currentIndex + 1));
    modal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showModalImage(currentIndex - 1);
      if (event.key === 'ArrowRight') showModalImage(currentIndex + 1);
    });
    modal.tabIndex = 0;
    modal.focus();
  };

  previousButton.addEventListener('click', (event) => {
    event.stopPropagation();
    showImage(currentIndex - 1);
  });
  nextButton.addEventListener('click', (event) => {
    event.stopPropagation();
    showImage(currentIndex + 1);
  });
  slideshow.addEventListener('click', openGallery);
  slideshow.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openGallery();
    }
  });

  showImage(0);
  timer = window.setInterval(() => showImage(currentIndex + 1), 4500);
  slideshow.addEventListener('mouseenter', () => window.clearInterval(timer));
  slideshow.addEventListener('mouseleave', () => {
    timer = window.setInterval(() => showImage(currentIndex + 1), 4500);
  });
})();
