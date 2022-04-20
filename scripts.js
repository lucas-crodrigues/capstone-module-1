const body = document.querySelector('.body');
const hamburguer = document.querySelector('.hamburguerIcon');
const mobilemenu = document.querySelector('.mobilemenu');
const closeMenu = document.querySelector('.closeMenu');

hamburguer.addEventListener('click', () => {
  body.classList.add('lockScroll');
  mobilemenu.classList.remove('hide');
})

closeMenu.addEventListener('click', () => {
  body.classList.remove('lockScroll');
  mobilemenu.classList.add('hide');
})

const speakersDetails = [
  {
    id: 1,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  },
  {
    id: 2,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler2',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  },
  {
    id: 3,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler3',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  },
  {
    id: 4,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler4',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  },
  {
    id: 5,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler5',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  },
  {
    id: 6,
    picture: 'Art/speaker_01.png',
    name: 'Yochai Benkler6',
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book "The Wealth of Networks" in 2006'
  }
]

const featuredSpeakers = document.querySelector('.featuredSpeakers');

function loadSpeakers() {
  featuredSpeakers.innerHTML = `
        <div>
          <h2>Featured Speakers</h2>
          <div class="divline"></div>
        </div>
        <div class="speakers-container">
          <div class="speakers" id="1">
            <img src="${speakersDetails[0].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[0].name}</h3>
              <h4>${speakersDetails[0].occupation}</h4>
              <div></div>
              <p>${speakersDetails[0].description}</p>
            </div>
          </div>
          <div class="speakers" id="2">
            <img src="${speakersDetails[1].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[1].name}</h3>
              <h4>${speakersDetails[1].occupation}</h4>
              <div></div>
              <p>${speakersDetails[1].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="3">
            <img src="${speakersDetails[2].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[2].name}</h3>
              <h4>${speakersDetails[2].occupation}</h4>
              <div></div>
              <p>${speakersDetails[2].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="4">
            <img src="${speakersDetails[3].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[3].name}</h3>
              <h4>${speakersDetails[3].occupation}</h4>
              <div></div>
              <p>${speakersDetails[3].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="5">
            <img src="${speakersDetails[4].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[4].name}</h3>
              <h4>${speakersDetails[4].occupation}</h4>
              <div></div>
              <p>${speakersDetails[4].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="6">
            <img src="${speakersDetails[5].picture}" alt="">
            <div class="speakersInfo">
              <h3>${speakersDetails[5].name}</h3>
              <h4>${speakersDetails[5].occupation}</h4>
              <div></div>
              <p>${speakersDetails[5].description}</p>
            </div>
          </div>
        </div>
        <button class="showMore" onclick="showSpeakers();">MORE ▼</button>`;
}

function showSpeakers() {
  const showMore = document.querySelector('.showMore');
  const speakers = document.querySelectorAll('.speakers');
  speakers.forEach((speaker) => {
    speaker.classList.remove('hideSpeakers');
  });
  showMore.classList.add('hide');
}
