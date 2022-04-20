const body = document.querySelector('.body');
const hamburguer = document.querySelector('.hamburguerIcon');
const mobilemenu = document.querySelector('.mobilemenu');
const closeMenu = document.querySelector('.closeMenu');

hamburguer.addEventListener('click', () => {
  body.classList.add('lockScroll');
  mobilemenu.classList.remove('hide');
});

closeMenu.addEventListener('click', () => {
  body.classList.remove('lockScroll');
  mobilemenu.classList.add('hide');
});

const speakersDetails = [
  {
    id: 1,
    picture: 'Art/speaker_01.png',
    name: 'Dra. Jane Goodall',
    occupation: 'World-renowned ethologist and conservationist',
    description: 'World-renowned ethologist and conservationist, famous for her study of wild chimpanzees in Gombe, Tanzania.',
  },
  {
    id: 2,
    picture: 'Art/speaker_02.png',
    name: 'Sarah Bouchie',
    occupation: "Lego Foundation's Director of Impact",
    description: "Sarah leads the development and implementation of the Foundation's initiatives, which aim to inspire and equip the world to embrace learning through games",
  },
  {
    id: 3,
    picture: 'Art/speaker_03.png',
    name: 'Kevin McGrew',
    occupation: 'Director of the Institute of Applied Psychometrics',
    description: 'PhD in educational psychology from the University of Minnesota and visiting professor at the same university',
  },
  {
    id: 4,
    picture: 'Art/speaker_04.png',
    name: 'Roberto Lent',
    occupation: 'Post-doctorate in Biophysics at the Massachusetts Institute of Technology',
    description: 'He is a member of the Brazilian Academy of Sciences and Coordinator of the National Network of Science for Education',
  },
  {
    id: 5,
    picture: 'Art/speaker_05.png',
    name: 'Ricardo Primi',
    occupation: 'Doctor in School Psychology and Human Development from USP/Yale',
    description: 'Associate professor at the Universidade São Francisco and part of the scientific council of the Ayrton Senna Institute',
  },
  {
    id: 6,
    picture: 'Art/speaker_06.png',
    name: 'William Kamkwamba',
    occupation: 'Inventor and bestselling author',
    description: 'William recounts his story in his memoir The Boy Who Harnessed the Wind: Creating Currents of Electricity and Hope',
  },
];

const featuredSpeakers = document.querySelector('.featuredSpeakers');

function loadSpeakers() { // eslint-disable-line no-unused-vars
  featuredSpeakers.innerHTML = `
        <div>
          <h2>Featured Speakers</h2>
          <div class="divline"></div>
        </div>
        <div class="speakers-container">
          <div class="speakers" id="1">
          <div class="speakerImg"><img src="${speakersDetails[0].picture}" alt=""></div>
            <div class="speakersInfo">
              <h3>${speakersDetails[0].name}</h3>
              <h4>${speakersDetails[0].occupation}</h4>
              <div></div>
              <p>${speakersDetails[0].description}</p>
            </div>
          </div>
          <div class="speakers" id="2">
            <div class="speakerImg"><img src="${speakersDetails[1].picture}" alt=""></div>
            <div class="speakersInfo">
              <h3>${speakersDetails[1].name}</h3>
              <h4>${speakersDetails[1].occupation}</h4>
              <div></div>
              <p>${speakersDetails[1].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="3">
            <div class="speakerImg"><img src="${speakersDetails[2].picture}" alt=""></div>
            <div class="speakersInfo">
              <h3>${speakersDetails[2].name}</h3>
              <h4>${speakersDetails[2].occupation}</h4>
              <div></div>
              <p>${speakersDetails[2].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="4">
            <div class="speakerImg"><img src="${speakersDetails[3].picture}" alt=""></div>
            <div class="speakersInfo">
              <h3>${speakersDetails[3].name}</h3>
              <h4>${speakersDetails[3].occupation}</h4>
              <div></div>
              <p>${speakersDetails[3].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="5">
            <div class="speakerImg"><img src="${speakersDetails[4].picture}" alt=""></div>
            <div class="speakersInfo">
              <h3>${speakersDetails[4].name}</h3>
              <h4>${speakersDetails[4].occupation}</h4>
              <div></div>
              <p>${speakersDetails[4].description}</p>
            </div>
          </div>
          <div class="speakers hideSpeakers" id="6">
            <div class="speakerImg"><img src="${speakersDetails[5].picture}" alt=""></div>
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

function showSpeakers() { // eslint-disable-line no-unused-vars
  const showMore = document.querySelector('.showMore');
  const speakers = document.querySelectorAll('.speakers');
  speakers.forEach((speaker) => {
    speaker.classList.remove('hideSpeakers');
  });
  showMore.classList.add('hide');
}
