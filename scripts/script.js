// var enBio = "Born in Tokyo in 2003, raised in California from the age of 7 to 13. Entered Tokyo Gakugei University International Secondary School after returning to Japan. After graduation, to experience a new environment, entered Kwansei Gakuin University and majored in architecture. Hobbies are PC gaming and going on drives."
// var jpBio = "2003年に東京で生まれ、7歳から13歳の間アメリカのカリフォルニア州にて育ち、帰国後に東京学芸大学附属国際中等教育学校に編入。大学は新たな環境を体験するために兵庫の関西学院大学に入学し、建築学を専攻。趣味はPCゲームとドライブ。"

// var enStudies = "At Kwansei Gakuin University, I am studying architecture."
// var jpStudies = "関西学院大学では、建築学を学んでいます。"

// var enProjects = "In the time I spent during my universitie years, I have taken part in a wide variety of projects."
// var jpProjects = "私は大学で過ごしてきた時間の中で、建築学に限らず、幅広い様々なプロジェクトを行ってきました。"

// var enSelfAnalysis = "My strength is the abiliy to adapt to new environments and tools efficiently and quickly."
// var jpSelfAnalysis = ""

// const bio = document.getElementById('bio')
// const studies = document.getElementById('studies')
// const projects = document.getElementById('projects')
// const selfAnalysis = document.getElementById('self-analysis')

// studies.innerHTML = jpStudies
// bio.innerHTML = jpBio
// projects.innerHTML = jpProjects
// selfAnalysis.innerHTML = jpSelfAnalysis

// function clickEn() {
//     bio.innerHTML = enBio
//     studies.innerHTML = enStudies
//     projects.innerHTML = enProjects
//     selfAnalysis.innerHTML = enSelfAnalysis
// }

// function clickJp() {
//     bio.innerHTML = jpBio
//     studies.innerHTML = jpStudies
//     projects.innerHTML = jpProjects
//     selfAnalysis.innerHTML = jpSelfAnalysis
// }


//1st slideshow

var slideIndex1 = 1;
showDivs1(slideIndex1);

function moveSlide1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("studies-img1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
}

//2nd slideshow

var slideIndex2 = 1;
showDivs2(slideIndex2);

function moveSlide2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("studies-img2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}
