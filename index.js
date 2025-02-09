//navbar

//btn search
const searchInput = document.querySelector(".search-input");  
const searchIcon = document.querySelector(".icon__search");
const closeBtnInput = document.querySelector(".close-btn-input");

let isExpanded = false;

function toggleSearch() {
  if(isExpanded){
    shrinkSearch()
  } else {
    expandSearch()
  }
}

function expandSearch() {
  searchInput.style.left = `0`;   
  searchInput.style.width = `200px`;
  searchInput.style.paddingLeft = "40px"
  searchIcon.style.right = " 390px";
  closeBtnInput.style.display = "block";
  isExpanded = true;
}

function shrinkSearch(){
  searchInput.style.left = `200px`;   
  searchInput.style.width = `40px`;
  searchInput.style.paddingLeft = "0"
  searchIcon.style.right = " 186px";
  closeBtnInput.style.display = "none";
  isExpanded = false;
}

searchInput.addEventListener('click', expandSearch);
searchIcon.addEventListener('click', toggleSearch);

closeBtnInput.addEventListener('click', shrinkSearch);

//riot-logo
const header_riot_logo = document.querySelector(".navbar__logo__first__riotlogo")

header_riot_logo.addEventListener('click', function(){
  let riotDiv = document.createElement("div")
  riotDiv.className = "riot-div"
  riotDiv.innerHTML= `
    <div class="riot-div-header">
      <div class="riot-div-header-logo" bis_skin_checked="1">
        <svg
          width="85"
          height="27"
          class="_4QbmucHkCfNI1ob1rB2Twg== riotlogo"
          viewBox="0 0 587.93 165"
        >
          <title>mainLogoRiotFist21</title>
          <path
            d="M98.77.33 0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05 1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 37.91 37.91 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0 0 12.69 13.27 39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42Zm-28.43-29.7 8.22-27.65h3.1l8.26 27.65Zm278.58-37.76a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84 2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15V90.6h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55v2.93Zm2.39-1.68.82 1.68h-1.11l-.75-1.68ZM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0 1 12.75-13.14 38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3H212v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14Z"
          ></path>
        </svg>
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="riot-div-header-btn">
        X
      </div>
    </div>
    <div class="riot-div-content">
      <div class="riot-div-content-left">
        <div class="col1">
          <ul class="left-games">
            <div class="left-header">GAMES</div>
            <li class="riot-list" data-image="./assets/image/left-games-img-1.png">LEAGUE OF LEGENDS</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-2.png">VALORANT</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-3.png">TEAMFIGHT TACTICS</li> 
            <li class="riot-list" data-image="./assets/image/left-games-img-4.png">LEGENDS OF RUNETERRA</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-5.png">LOL: WILD RIFT</li>
          </ul>
        </div>
        <div class="col2">
          <ul class="left-force">
            <div class="left-header">FORCE</div>
            <li class="riot-list" data-image="./assets/image/left-games-img-6.png">CONV/RGENCE</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-7.png">HEXTECH MAYTHEM</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-8.png">THE MAGESEEKER</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-9.png">RUINED KING</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-10.png">SONG OF NUNU</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-11.png">RIOT FORCE GAMES</li>
          </ul>
          <ul class="left-esports">
            <div class="left-header">ESPORTS</div>
            <li class="riot-list" data-image="./assets/image/left-games-img-12.png">LOL ESPORTS</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-13.png">VALORANT ESPORTS</li>
          </ul>
        </div>
        <div class="col3">
          <ul class="left-entertainment">
            <div class="left-header">ENTERTAINMENT</div>
            <li class="riot-list" data-image="./assets/image/left-games-img-14.png">ARCANE</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-15.png">UNIVERSE</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-16.png">RIOT GAMES MUSIC</li>
          </ul>
          <ul class="left-business">
            <div class="left-header">BUSINESS</div>
            <li class="riot-list" data-image="./assets/image/left-games-img-17.png">RIOT GAMES</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-18.png">RIOT MERCH</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-19.png">RIOT MOBILE</li>
            <li class="riot-list" data-image="./assets/image/left-games-img-20.png">RIOT SUPPORT</li>
          </ul>
        </div>
      </div>
      <div class="riot-div-content-right">
        <div class="content-right-layout">
          <div class="img1">
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47bb9b281d270d8335092a72cb1dd09493bc8216-660x428.jpg??&format=pjpg&quality=85">
            <p class="img1-content">Colombian ballistics expert Tejo blasts into the VALORANT roster in Season 2025 // Act 1</p>
          </div>
          <div class="img2">
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/f0a248142d70dac6324a9e16c423bf3ab83ae549-660x428.jpg??&format=pjpg&quality=85">
            <p class="img2-content">Replay your favorite Arcane battles in TFT's latest set.</p>
          </div>
        </div>
      </div>
    </div>

  `;
  navbar.appendChild(riotDiv)

  const logo = document.querySelector(".riot-div-header-logo")
  const btnClose = document.querySelector(".riot-div-header-btn")

  btnClose.addEventListener('click', function(){
    riotDiv.remove();
  })
  logo.addEventListener('click', function(){
    riotDiv.remove();
  })

  const items = document.querySelectorAll(".riot-list")
  const imgArea = document.querySelector(".riot-div-content-right")
  let imgDiv = document.createElement("div")
  imgDiv.className = "riot-list-item-img"
  imgDiv.innerHTML = `
    <img class="img-item" src="./assets/image/left-games-img-1.png  " >
  `;
  imgDiv.style.display = " none"
  imgArea.appendChild(imgDiv)

  const imgElement = document.querySelector(".img-item")

  items.forEach(item => {
    item.addEventListener("mouseover", function () {
      const srcImg = item.getAttribute("data-image");
      imgElement.src = srcImg;
      imgElement.style.display = "block";
      imgDiv.style.display = "block";
    });

    item.addEventListener('mouseout', function(){
      imgDiv.style.display = "none";
      imgElement.style.display = "none";
    })
  })
})

//language
const header_language = document.querySelector(".navbar__end__language")
const box_language = document.querySelector(".box-language")

header_language.addEventListener('click', function(){
  box_language.style.display = "block" 
})

document.addEventListener('click', function(event){
  if(!box_language.contains(event.target) ){
    box_language.style.display = "none" 
  }
})

header_language.addEventListener("click", function (event) {
  event.stopPropagation(); 
});

//btn play now
const btnPlayNow = document.querySelector(".navbar__end__play")
const navbar =   document.querySelector(".navbar")

btnPlayNow.addEventListener('click', function(){
  let backgroundNew = document.createElement("div")
  backgroundNew.className = "background-new"

  let newDiv = document.createElement("div")
  newDiv.className = "playNowBox"
  newDiv.innerHTML = `
    <button class="close-btn" > <i class="fa-solid fa-x"></i> </button>
    <p class="header-newDiv"> GET SET UP TO PLAY </p>
    <div class="content-newDiv">
      <div class="content">
        <a href="https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=DY1DnsHkOeHbg9KSS-I8PIgLHI1oIUcid2t1qjvJTgE&locale=en_GB&method=riot_identity_signup&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3DDY1DnsHkOeHbg9KSS-I8PIgLHI1oIUcid2t1qjvJTgE%26code_challenge_method%3DS256%26locale%3Den_GB%26prompt%3Dsignup%26redirect_uri%3Dhttps%3A%2F%2Fxsso.leagueoflegends.com%2Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26show_region%3Dtrue%26state%3D5abfe206d814154b916fe98645%26uri%3Dhttps%3A%2F%2Fsignup.leagueoflegends.com%2Fen-gb%2Fsignup%2Fredownload%3Fpage_referrer%253Dindex&show_region=true" >
          <p class="content-1" > I don't have Riot Account </p>
          <div class="content-btn-1 content-2" > CREATE ONE </div>
        </a>
      </div>
      <div class="content">
        <a href="https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=8rZqbBcvPaStGCJD17O8j4SFmNjRaF50-HYUPYDay58&locale=en_GB&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3D8rZqbBcvPaStGCJD17O8j4SFmNjRaF50-HYUPYDay58%26code_challenge_method%3DS256%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fxsso.leagueoflegends.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3D383345fcc4e67c3a40902e5c54%26uri%3Dhttps%253A%252F%252Fleagueoflegends.com%252Fen-gb&security_profile=low">
          <p class="content-1" > I have Riot Account </p>
          <div class="content-btn-2 content-2" > SIGN IN </div>
        </a>
      </div>
  `;

    navbar.appendChild(newDiv);
    navbar.appendChild(backgroundNew);

    const closeBtn = document.querySelector(".close-btn")

    closeBtn.addEventListener('click', function(){
      newDiv.remove();
      backgroundNew.remove();
    })

    document.addEventListener('click', function(event){
      if(!newDiv.contains(event.target)){
        newDiv.remove();
        backgroundNew.remove();
      }
    })

    btnPlayNow.addEventListener("click", function (event) {
      event.stopPropagation(); 
  });
})



// page3
let obj = [
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&amp;fit=fill&amp;q=80&amp;w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=1128", 
    content1: "AKALI",
    content2: "The Rogue Assassin"
  },
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=865.", 
    content1: "YASUO",
    content2: "The Unforgiven"
  },
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=865", 
    content1: "LUX",
    content2: "The Lady of Luminosity"
  },
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg?auto=format&fit=fill&q=80&w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=865", 
    content1: "JINX",
    content2: "The Loose Cannon"
  },
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=865", 
    content1: "THRESH",
    content2: "The Chain Warden"
  },
  {
    background: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=865", 
    content1: "LEONA",
    content2: "The Radiant Dawn"
  },
]

const page3Background = document.querySelector(".page3-background-img")
const listItemSystem = document.querySelectorAll(".list-item-system")
const listItemImg = document.querySelector(".list-item-img")
const listItemDetail1 = document.querySelector(".page3__name")
const listItemDetail2 = document.querySelector(".page3__details")

listItemSystem.forEach( (item, index) => {
  item.addEventListener('click', function(){
    const data = obj[index]
    page3Background.src = data.background
    listItemImg.src = data.img
    listItemDetail1.innerText = data.content1
    listItemDetail2.innerText = data.content2

    listItemSystem.forEach(list => {
      if (list == item) {
        list.classList.remove("hover-item", "change-color");
      }
      if (list !== item) {
        list.classList.add("hover-item", "change-color");
      }
    });
  })
})

//page5
let obj5 = [
  {
    video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
    content1 : "THE MOST POPULAR GAME MODE",
    content2 : "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours."
  },
  {
    video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
    content1 : "ALL RANDOM, ALL MID",
    content2 : "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode."
  },
  {
    video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",
    content1 : "A FREE-FOR-ALL WAR FOR SUPREMACY",
    content2 : "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing."
  }
]

const page5ListItem = document.querySelectorAll(".page5-list-item")
const page5Video = document.querySelector(".page5-video")
const page5Content1 = document.querySelector(".page5-right-text-header")
const page5Content2 = document.querySelector(".page5-right-text-content")

page5ListItem.forEach( (item, index) => {
  item.addEventListener('click', function(){
    const data = obj5[index]
    page5Video.src = data.video
    page5Content1.innerText = data.content1
    page5Content2.innerText = data.content2
    page5ListItem.forEach(el => {
      if (el == item) {
        el.classList.remove("hover-item", "opacity-item");
      }
      if (el !== item) {
        el.classList.add("hover-item", "opacity-item");
      }
    });
  })
})

