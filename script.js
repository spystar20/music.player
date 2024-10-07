const pic = document.querySelector(".pic");
const song = document.querySelector(".song");
const artist = document.querySelector(".artist");
const lyric = document.querySelector(".lyric");
const range = document.getElementById("range");
const leftTime = document.querySelector(".left");
const shufflebtn = document.querySelector(".shuffle");
const next = document.querySelector(".next");
const play = document.querySelector(".play");
const back = document.querySelector(".back");
const audio = document.querySelector(".music");
const duration = document.querySelector(".duration");
const cover = document.querySelector(".cover");
const rotate = document.querySelector(".play");
const menu = document.querySelector(".menu");

let musicList = [
  {
    audio: "Dynamite(PagalNew.Com.Se).mp3",
    artist: "BTS",
    songName: "dynamite",
    Image: "dynamite.jpg",
    lyrics:
   "'Cause, ah-ah, I'm in the stars tonight So watch me bring the fire and set the night alight Shoes on, get up in the morn Cup of milk, let's rock and roll King Kong, kick the drum, rolling on like a rolling stone Sing song when I'm walking home Jump up to the top, LeBron Ding dong, call me on my phone Ice tea and a game of ping pong This is getting heavy Can you hear the bass boom? I'm ready Life is sweet as honey Yeah, this beat cha ching like money Disco overload, I'm into that, I'm good to gp I'm diamond, you know I glow up Hey, so let's go 'Cause, ah-ah, I'm in the stars tonight So watch me bring the fire and set the night alight hining through the city with a little funk and soul So I'ma light it up like dynamite, whoa Bring a friend, join the crowd Whoever wanna come along Word up, talk the talk, just move like we off the wall Day or night the sky's alight So we dance to the break of dawn Ladies and gentlemen, I got the medicine, so you should keep ya eyes on the ball, huh This is getting heavyCan you hear the bass boom? I'm ready Life is sweet as honey Yeah, this beat cha ching like money disco overload, I'm into that, I'm good to go I'm diamond, you know I glow up Let's go 'Cause, ah-ah, I'm in the stars tonight So watch me bring the fire and set the night alight Shining through the city with a little funk and soul So I'ma light it up like dynamite, whoa Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite Shining through the city with a little funk and soul So I'ma light it up like dynamite, whoa Dy-na-na-na, na-na, na-na, eh Dy-na-na-na, na-na, na-na, eh Dy-na-na-na, na-na, na-na, eh Light it up, dynamite Dy-na-na-na, na-na, na-na, eh Dy-na-na-na, na-na, na-na, eh Dy-na-na-na, na-na, na-na, eh Light it up, dynamite 'Cause, ah-ah, I'm in the stars tonight So watch me bring the fire and set the night alight Shining through the city with a little funk and soul So I'ma light it up like dynamite (This is ah) Cause, ah-ah, I'm in the stars tonight So watch me bring the fire and set the night alight Shining through the city with a little funk and soul So I'ma light it up like dynamite, whoa Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite Shining through the city with a little funk and soul I'ma light it up like dynamite, whoa"
  },
  {
    audio: "Me-Too(PagalWorld).mp3",
    artist: "Meghan Trainor",
    songName: "Me Too",
    Image: "500x500.jpg",
    lyrics:
      "Ow! Who's that sexy thing I see over there? That's me, standin' in the mirror What's that icy thing hanging 'round my neck? Um, that's gold, show me some respect, oh I thank God every day (uh, ha) That I woke up feelin' this way (uh, ha) And I can't help loving myself And I don't need nobody else, no, uh If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too I walk in like a dime piece I go straight to V.I.P. I never pay for my drinks My entourage behind me My life's a movie, Tom Cruise So bless me, baby, achoo And even if they tried to They can't do it like I do I thank God every day (uh, ha) That I woke up feelin' this way (uh, ha) And I can't help lovin' myself (wooh!) And I don't need nobody else, no, uh (baby) If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too (oh, ayy) If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too Ow! (Turn the bass up) (Hahaha!) Turn the bass up Ow! (Turn the bass up) Let's go I thank God every day (say to thank God) That I woke up feelin' this way (uh, ha) And I can't help loving myself (ow!) And I don't need nobody else, no, uh, baby If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too (oh) If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too If I was you, I'd wanna be me too I'd wanna be me too I'd wanna be me too",
  },
  {
    audio: "Precious.mp3",
    artist: "nagii",
    songName: "precious",
    Image: "500x500-000000-80-0-0 (1).jpg",
    lyrics:
      " O sade walo kadhe tainu na na miluKahegi je tare tainu tare miluge Kahegi je tare tainu tare miluge Dasdi je per kadhe sune lage ni Ghar mude khade sunyare miluge  Ghar mude khade sunyare miluge Mumtaj nu jo pehli vari taj utte aya hona Aina sanu aunda ni moh tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te Pariyan toh sohne tere hath sohniye Utte likhe khuda de paigam hoye aa Aj tayi rakhi si luko ke zindagi Par asi tere sare am hoye aa Chan di vi channi nu mat paunda ae Ni sachi muke utte noor ae ni jo tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te Na hi asi kise nal vande dil ni Na hi asi kise nal vataiya mundiya Tere nal khada nagii nal hi rahu Dasuga mohabbtan hai kiwein hundiyan Bas mera chale sab lekhe lada tere Ik jan shad var dewa sau tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te Keemti khazane vangu sambh rakhunga Ni kadhe dhup di vi pain na dau loh tere te Jine sare duniya te precious heere Mera dil kare dava main paro tere te",
  },
  {
    audio: "Tiramisu Cake(MpThree.in).mp3",
    artist: "We Are The Night",
    songName: "Tiramisu Cake",
    Image: "download (3).jpg",
    lyrics:
      "소년 소녀 백서 그런 그녀 있어 Ooh, you know 소리 없이 다가온 소문처럼 다가온 사람 yeah 별처럼 빛났던 너를 보게 됐고 Fall in love 찬란했던 그 미소 두 눈에 가득했던 파도 난 너를 보면 Tiramisu cake, tiramisu cake 마치 넌 tiramisu cake 달콤한 tiramisu cake Tiramisu cake 그대의 tiramisu cake 입술과 tiramisu cake 눈동자 tiramisu cake Tiramisu cake, tiramisu cake 마치 넌 tiramisu cake 달콤한 tiramisu cake 점점 tiramisu cake 너를 꿈꾸네 tiramisu cake Tiramisu cake, tiramisu cake 감정들은 faster 장면들은 return Ooh, hello 가득 차네 네 얼굴 잠깐의 착각인 줄 했네 yeah 용기를 내 봐도 반응 없는데도 Going heart 자꾸 난 너를 향해 자꾸 넌 달아나는데도 널 떠올리고 Tiramisu cake, tiramisu cake 마치 넌 tiramisu cake 달콤한 tiramisu cake Tiramisu cake 그대의 tiramisu cake 입술과 tiramisu cake 눈동자 tiramisu cake Tiramisu cake, tiramisu cake 마치 넌 tiramisu cake 달콤한 tiramisu cake 점점 tiramisu cake 너를 노래해 tiramisu cake Tiramisu cake, tiramisu cake Tiramisu cake, tiramisu cake Tiramisu cake, tiramisu cake Tiramisu cake, tiramisu cake Tiramisu cake, tiramisu cake Tiramisu cake, tiramisu cake 마치 넌 tiramisu cake 달콤한 tiramisu cake 넌, 넌 tiramisu cake 나를 웃게 해 tiramisu cake Tiramisu cake, tiramisu cake",
  },
  {
    audio: "Way-Back-Home.mp3 ",
    artist: "shaun",
    songName: "way back home",
    Image: "500x500-000000-80-0-0.jpg",
    lyrics:
      "멈춘 시간 속 잠든 너를 찾아가 아무리 막아도 결국 너의 곁인 걸 길고 긴 여행을 끝내 이젠 돌아가 너라는 집으로 지금 다시 way back home 아무리 힘껏 닫아도 다시 열린 서랍 같아 하늘로 높이 날린 넌 자꾸 내게 되돌아와 힘들게 삼킨 이별도 다 그대로인 걸, 걸, 걸, 걸 (걸, 걸, 걸, 걸) 수없이 떠난 길 위에서 난 너를 발견하고 비우려 했던 맘은 또 이렇게 너로 차올라 발걸음의 끝에 늘 네가 부딪혀 그만, 그만 멈춘 시간 속 잠든 너를 찾아가 아무리 막아도 결국 너의 곁인 걸 길고 긴 여행을 끝내 이젠 돌아가 너라는 집으로 지금 다시 way back home 조용히 잠든 방을 열어 기억을 꺼내 들어 부서진 시간 위에서 선명히 너는 떠올라 길 잃은 맘 속에 널 가둔 채 살아 그만, 그만 멈춘 시간 속 잠든 너를 찾아가 아무리 막아도 결국 너의 곁인 걸 길고 긴 여행을 끝내 이젠 돌아가 너라는 집으로 지금 다시 way back home 세상을 뒤집어 찾으려 해 오직 너로 완결된 이야기를 모든 걸 잃어도 난 너 하나면 돼 빛이 다 꺼진 여기 나를 안아줘 눈을 감으면 소리 없이 밀려와 이 마음 그 위로 넌 또 한 겹 쌓여가 내겐 그 누구도 아닌 네가 필요해 돌아와 내 곁에 그날까지 I'm not done",
  },
  {
    audio: "Co2(Pagal-World.Com.In).mp3 ",
    artist: "prateek khuad",
    songName: "Co-2",
    Image: "600x600bf-60.jpg",
    lyrics:
      " Maybe I was wrong and you were right But I don't really wanna have this fight I just wanna feel like I belong And every time my heart swings back to you You are my morning and my truth And all that I can do is sing this song It ain't that long, mm And nothing says I love you like your eyes Fill my lips with carbon dioxide I just wanna feel like I deserve you Cause you deserve me Baby, it's the way that you can see What I miss and what I can never be I just wanna feel like I deserve you Cause you deserve me Maybe you were wrong and I was right I don't care, won't you stay another night? I just need some time to be myself I couldn't say I need you on that night When you left and I lost all track of time I just want you close so I can feel you Can you feel me? Mmm And nothing says I love you like the words That were never said, but could be heard If only there was peace around us, baby You would hear me And maybe it's the way that lovers do I just want for me what I want for you Only with the sun above us maybe You would see meAnd even if you leave, I may be fine'Cause my heart, it has its own design And even if you never see it, baby You're all that I need Maybe it's the silence in your eyes Maybe it's the lilac when you're shy Maybe it's the mystery of your love All I need is a sign from the stars above Maybe it's the way that you breathe in me Maybe it's the man that you see in me Maybe it's the fragrance of your hair Yeah, I just wanna kiss you when you're there I just want you all around me, baby Can we make that happen, please?",
  },
  {
    audio: " 5_Taara_1.mp3",
    artist: "diljit dosanjh",
    songName: "5 taara",
    Image: "download.jpg",
    lyrics:
      "Peg peg karde ne botal main chaadi Tu ki saanu chhaddna ni asi chhaddi yari Raati peeke daaru naare Yaaran paaye ni khalaare Tenu dil vichon kadd main seena thaareya Ni tera saara gussa 5 taara (panj taara) theke utte behke taareya Main tera saara gussa 5 taara (panj taara) theke utte behke taareya Main tera saara gussa 5 taara (panj taara) theke utte behke taareya Main tera saara gussa Feeling aan ch sunn le romantic song ni Tere naal yaari sochi baitha live long ni Pyaar da bukhar tainu ohna chir chadheya Jina chir jatt di si jeb strong Haye ni jeb strong ni Tere naal si khichaiyaFacebook te main paiya Tere naal khichvaiya Facebook te main paiya Teri kali kali photo te delete maareya Ni tera saara gussa 5 taara (panj tara) theke utte behke taareya Main tera saara gussa 5 taara (panj tara) theke utte behke taareya Main tera saara gussa 5 taara (panj tara) theke utte behke taareya Main tera saara gussa Chakve brand jehde paundi kaint kaint ni Giftaan ch de ke vajja yaaran da hi band ni Sanu refuse kitta choose tu vilaitiya Khufiyaan report aan ni tu jaana England  Haye ni jaana England ni Jhoote kar kar hug chali jatt nu tu thug  Jhoote kar kar hug Ranbir nu gayi thug Mera karke hawai paariyan hi saareya Ni tera sara gussa 5 taara theke utte behke taareya Main tera saara gussa 5 taara theke utte behke taareya Main tera saara gussa 5 taara theke utte behke taare Main tera saara gussa ",
  },
];

let index = 0;
window.addEventListener("load", () => {
  loadMusic(index);
});
function loadMusic(index) {
  audio.src = musicList[index].audio;
  song.innerHTML = musicList[index].songName;
  artist.innerHTML = musicList[index].artist;
  pic.src = musicList[index].Image;
  cover.src = musicList[index].Image;
  lyric.innerHTML = musicList[index].lyrics;
}
back.addEventListener("click", () => {
  index = (index - 1 + musicList.length) % musicList.length;
  audio.src = musicList[index].audio;
  song.innerHTML = musicList[index].songName;
  artist.innerHTML = musicList[index].artist;
  pic.src = musicList[index].Image;
  cover.src = musicList[index].Image;
  lyric.innerHTML = musicList[index].lyrics;
  audio.play();
  loadMusic(index);
});

audio.onloadedmetadata = function () {
  range.max = audio.duration;
  range.value = audio.currentTime;
};

function playPause() {
  if (audio.paused) {
    audio.play();
    document.querySelector(".pause").style.visibility = "visible";
    document.querySelector(".play").style.visibility = "hidden";
    document.querySelector(".rotate").classList.toggle("pl");
    document.querySelector(".covercd").classList.toggle("ps");
  } else {
    audio.pause();
    document.querySelector(".pause").style.visibility = "hidden";
    document.querySelector(".play").style.visibility = "visible";
  }
}
audio.ontimeupdate = function () {
  range.value = audio.currentTime;
};
range.oninput = function () {
  audio.currentTime = range.value;
  if (audio.paused) {
    audio.play();
    document.querySelector(".play").style.visibility = "hidden";
    document.querySelector(".pause").style.visibility = "visible";

    document.querySelector(".rotate").classList.toggle("pl");
    document.querySelector(".covercd").classList.toggle("ps");
  }
};

next.addEventListener("click", () => {
  index = (index + 1) % musicList.length;
  audio.src = musicList[index].audio;
  song.innerHTML = musicList[index].songName;
  artist.innerHTML = musicList[index].artist;
  pic.src = musicList[index].Image;
  cover.src = musicList[index].Image;
  lyric.innerHTML = musicList[index].lyrics;
  audio.play();
  document.querySelector(".play").style.visibility = "hidden";
  document.querySelector(".pause").style.visibility = "visible";
});

shufflebtn.addEventListener("click", () => {
  let randIndex = Math.floor(Math.random() * musicList.length + 1);
  do {
    randIndex = Math.floor(Math.random() * musicList.length + 1);
  } while (musicList == randIndex);
  index = randIndex;
  loadMusic(index);
  audio.play();
});

menu.addEventListener("click", () => {
  document.querySelector(".list").classList.toggle("show");
});

const ulTag = document.querySelector("ul");

for (let i = 0; i < musicList.length; i++) {
  let li = `<li li-index="${i}">
            <div class="row">${musicList[i].songName}</div>
            <p>${musicList[i].artist}</p>
            </li>`;

  ulTag.insertAdjacentHTML("beforeend", li);
}

const allLItags = ulTag.querySelectorAll("li");
for (let j = 0; j < musicList.length; j++) {
  if (allLItags[j].getAttribute("li-index") == index) {
    allLItags[j].classList.add("playing");
  }
  allLItags[j].setAttribute("onclick", "clicked(this)");
}

function clicked(element) {
  let getLi = element.getAttribute("li-index");
  index = getLi;
  document.querySelector(".play").style.visibility = "hidden";
  document.querySelector(".pause").style.visibility = "visible";

  document.querySelector(".rotate").classList.toggle("pl");
  document.querySelector(".covercd").classList.toggle("ps");
  loadMusic(index);
  audio.play();
}
