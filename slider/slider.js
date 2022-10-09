const slides = [
    {
      source: "http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg",
      alt: 'Dog Photo 1',
      text: "My dog on a walk"
    },
    {
      source: "https://image.shutterstock.com/image-photo/furry-friends-red-cat-corgi-260nw-1992708143.jpg",
      alt: "Dog Photo 2",
      text: "My dog in my house"
    },
    {
      source: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
      alt: "Dog Photo 3",
      text: "My dog in my bathroom"
    }
  ]
  
  const list = document.querySelector('#slider');
  const btnNext = document.querySelector('#btnNext');
  const btnPrev = document.querySelector('#btnPrev');
  
  let activeSlide = 0;
  
  const generateSlide = () => {
    list.innerHTML = '';
  
    slides.forEach((slide, index) => {
      list.innerHTML += `
        <li class="d-none ${index === activeSlide ? 'active' : ''}">
          <img src=${slide.source} alt=${slide.alt} class="slider__photo"/>
          <p class="slider__slide-title">${slide.text}</p>
        </li>
      `
    })
  }
  
  btnNext.addEventListener('click', (event) => {
    event.preventDefault();
  
    activeSlide++;
  
    if(activeSlide === slides.length) {
      activeSlide = 0;
    }
  
    generateSlide();
  })
  
  btnPrev.addEventListener('click', (event) => {
    event.preventDefault();
  
    activeSlide--;
  
    if(activeSlide === -1) {
      activeSlide = slides.length - 1;
    }
  
    generateSlide();
  })
  
  
  generateSlide();
  
  // 1. Zrob obsluge powrotu do poprzedniegu zdjecia (prev)
  // 2. Zrob obsluge, ze jak jestemy na ostastnim slidzie i klikniemy next, to wracam do pierwszego
  // 3. Zrob obsluge, ze jak jestemy na pierwszym slidzie i klikniemy prev, to ide do ostatniego