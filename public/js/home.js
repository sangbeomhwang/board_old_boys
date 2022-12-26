// slide
window.onload = function () {
  const slideWrap = document.querySelector("#slidePart");
  const slider = slideWrap.querySelector(".slides");
  const slideImgs = slider.querySelectorAll("li");
  const moveButton = slideWrap.querySelector(".controller");

  // image clone
  const clone1 = slideImgs[0].cloneNode(true);
  const cloneLast = slideImgs[slideImgs.length - 1].cloneNode(true);
  slider.insertBefore(cloneLast, slideImgs[0]);
  slider.appendChild(clone1);

  // 주요 변수 초기화
  let currentIdx = 0;
  let translate = 0;
  const speedTime = 100;

  // 셋업
  const sliderCloneImgs = slider.querySelectorAll("li");
  // element.clientWidth는 margin과 border가 제외된 상태에서 padding까지만 적용된 내부의 실제 크기를 가져옴
  // 여기서 border(테두리)는 외부에 속함
  const liWidth = slideImgs[0].clientWidth;
  const sliderWidth = liWidth * sliderCloneImgs.length;
  slider.style.width = `${sliderWidth}px`;
  currentIdx = 1;
  translate = -liWidth;
  slider.style.transform = `translateX(${translate}px)`;

  // slide 실행
  function move(D) {
    currentIdx += -1 * D;
    translate += liWidth * D;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = `all ${speedTime}ms ease`;
  }

  // click button
  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === "next") {
      move(-1);
      if (currentIdx === sliderCloneImgs.length - 1)
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = 1;
          translate = -liWidth;
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
    } else {
      move(1);
      if (currentIdx === 0) {
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = sliderCloneImgs.length - 2;
          translate = -(liWidth * currentIdx);
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
      }
    }
  }
  moveButton.addEventListener("click", moveSlide);

  // 자동 sliding 기능
  function sliding() {
    move(-1);
    if (currentIdx === sliderCloneImgs.length - 1)
      setTimeout(() => {
        slider.style.transition = "none";
        currentIdx = 1;
        translate = -liWidth;
        slider.style.transform = `translateX(${translate}px)`;
      }, speedTime);
  }

  function showSliding() {
    setInterval(sliding, 3000);
  }

  showSliding();
};
