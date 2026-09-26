(() => {
  const gallerySets = {
    'interior-painting.html': [
      'Images/Interior Painting/Messenger_creation_E16FE678-86ED-4F99-8DFF-221BAC8B15E4.jpeg',
      'Images/Interior Painting/Messenger_creation_E05FB612-174C-4FFB-A856-4C6CAF57925B.jpeg',
      'Images/Interior Painting/Messenger_creation_C2330E25-EC29-4F8C-943C-4200232567F7.jpeg',
      'Images/Interior Painting/Messenger_creation_B2367527-78FA-423B-951E-6A8A780B0A79.jpeg',
      'Images/Interior Painting/Messenger_creation_8A0E5F68-86FA-4450-B29F-F002A134D309.jpeg',
      'Images/Interior Painting/Messenger_creation_6EC113BB-5D15-41DC-9AF0-894964D9DB33.jpeg',
      'Images/Interior Painting/Messenger_creation_69C11EA5-1CD3-4C4F-865F-68BAF5165F26.jpeg',
      'Images/Interior Painting/Messenger_creation_55CFAD57-74EB-4911-B13C-E950890B7934.jpeg',
      'Images/Interior Painting/Messenger_creation_3D95749F-8920-4683-8615-1F3CB83440D8.jpeg',
      'Images/Interior Painting/Messenger_creation_3962CB96-A372-4720-961F-A8296FA0C553.jpeg',
      'Images/Interior Painting/Messenger_creation_34BC25AD-D197-4A0B-BF89-8D1005FD57C4.jpeg',
      'Images/Interior Painting/Messenger_creation_2B43CDAE-1B17-4384-BD47-C3CB6E3D38A5.jpeg',
      'Images/Interior Painting/Messenger_creation_26BA7356-B38B-4772-9BAA-F3F2B9A77281.jpeg',
      'Images/Interior Painting/Messenger_creation_115A77B7-0FC8-453A-97F5-FCBD2947ACF6.jpeg',
      'Images/Interior Painting/Messenger_creation_11130835-AFAF-4E12-A620-6BE59B1CDA18.jpeg'
    ],
    'exterior-painting.html': [
      'Images/Exterior Painting/Messenger_creation_BAF8D96E-E752-487E-80CF-1B9C407FA786.jpeg',
      'Images/Exterior Painting/Messenger_creation_9B9DB453-5ABF-41E4-B806-6D875C7BDD70.jpeg',
      'Images/Exterior Painting/Messenger_creation_652FC3F6-B68A-4F7C-9CC8-83B847FB6782.jpeg',
      'Images/Exterior Painting/Messenger_creation_5FAAE04C-BE3C-414A-9AB8-D51DBDFBAE10.jpeg',
      'Images/Exterior Painting/Messenger_creation_3ADCEA4D-53D2-4E75-B5B8-5FD72129D88E.jpeg',
      'Images/Exterior Painting/Messenger_creation_36C75EE4-F006-42D3-B8A5-6AB32654F8F2.jpeg',
      'Images/Exterior Painting/Messenger_creation_35A5BBB2-41B3-489F-AC4B-66B0488E8D94.jpeg'
    ],
    'prep-repairs.html': [
      'Images/Prep & Repair/Messenger_creation_A8F10D13-64EB-45CA-9496-B93CD248A57F.jpeg',
      'Images/Prep & Repair/Messenger_creation_2F77774C-C626-452C-B1C0-472977C23D9D.jpeg'
    ],
    'commercial-painting.html': [
      'Images/Commercial Painting/Messenger_creation_2CC27B48-1B3B-4C01-B3AA-F7AE70F6D40B.jpeg'
    ],
    'decorative-finishes.html': [
      'Images/Decorative Finishes/Messenger_creation_E76E72F5-5178-41EE-828C-393FDDDA0DCD.jpeg',
      'Images/Decorative Finishes/Messenger_creation_8B1FB797-2607-4792-8BC8-67CC0C656606.jpeg'
    ],
    'rental-refreshes.html': []
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
