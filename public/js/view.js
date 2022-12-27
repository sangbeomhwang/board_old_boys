const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const prevIdx = document.getElementById("prevIdx").value;
const nextIdx = document.getElementById("nextIdx").value;
const searchParams = new URLSearchParams(window.location.search);
const index = searchParams.get("index");
const listBtn = document.querySelector(".list");


const prevHandler = () => {
  if (prevIdx) {
    window.location.href = `/board/view?index=${prevIdx}`;
  } else {
    alert("마지막 글입니다");
  }
};
const nextHandler = () => {
  if (nextIdx) {
    window.location.href = `/board/view?index=${nextIdx}`;
  } else {
    alert("최신 글입니다");
  }
};
prev.addEventListener("click", prevHandler);
next.addEventListener("click", nextHandler);



prev.addEventListener("click", function () {
  const idx = document.getElementById("index").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/board/view/prev?index=" + idx);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // handle the response data here
      const data = JSON.parse(xhr.responseText);
    }
  };
  xhr.send();
});

next.addEventListener("click", function () {
  const idx = document.getElementById("index").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/board/view/next?index=" + idx);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // handle the response data here
      const data = JSON.parse(xhr.responseText);
      console.log(idx);
    }
  };
  xhr.send();
});

const dltBtn = document.querySelector(".delete");

dltBtn.addEventListener("click", (e) => {
  if (confirm("정말 삭제하시습니까 ?") == true) {
  } else return e.preventDefault();
});




//글 시간
const postTimeStamp = document.querySelector(".article_date");
const v = postTimeStamp.textContent;
const date = new Date(v);
let mm = date.getMonth() + 1;
mm = (mm > 9 ? "" : "0") + mm;
let dd = date.getDate();
dd = (dd > 9 ? "" : "0") + dd;
let yy = date.getFullYear();



postTimeStamp.innerHTML = [yy, mm, dd].join("-");


// 댓글 시간
const commentTimeStamp =  document.querySelectorAll(".comment_date");
const timeStrings = Array.from(commentTimeStamp).map(v => v.textContent)
const parsedTime = timeStrings.map(v => {
  const date = new Date(v);
  let mm = date.getMonth() + 1;
  mm = (mm > 9 ? "" : "0") + mm;
  let dd = date.getDate();
  dd = (dd > 9 ? "" : "0") + dd;
  let yy = date.getFullYear();

  let hr = date.getHours();
  let mn = date.getMinutes();
  let sc = date.getSeconds();
  return [yy, mm, dd].join("-") + "." + [hr, mn, sc].join(".");
});

console.log(parsedTime);

const getTimeNow = (date) => {
  let mm = date.getMonth() + 1;
  mm = (mm > 9 ? "" : "0") + mm;
  let dd = date.getDate();
  dd = (dd > 9 ? "" : "0") + dd;
  let yy = date.getFullYear();

  let hr = date.getHours();
  let mn = date.getMinutes();
  let sc = date.getSeconds();
  return [yy, mm, dd].join("-") + "." + [hr, mn, sc].join(".");
};
const thisTime = getTimeNow(new Date());
console.log(thisTime)

parsedTime.forEach((timeLine, index) => {
  const splitTimeLine = timeLine.split(".");
  const splitThisTime = thisTime.split(".");

  if (
    splitThisTime[0] === splitTimeLine[0] &&
    splitThisTime[1] === splitTimeLine[1] &&
    splitThisTime[2] === splitTimeLine[2]
  ) {
    commentTimeStamp[index].innerHTML = "방금전";
  } else if (
    splitThisTime[0] === splitTimeLine[0] &&
    splitThisTime[1] === splitTimeLine[1] &&
    splitThisTime[2] !== splitTimeLine[2]
  ) {
    commentTimeStamp[index].innerHTML = `${splitThisTime[2] - splitTimeLine[2]}분전`;
  } else if (
    splitThisTime[0] === splitTimeLine[0] &&
    splitThisTime[1] - splitTimeLine[1] < 13
  ) {
    commentTimeStamp[index].innerHTML = `${splitThisTime[1] - splitTimeLine[1]}시간전`;
  } else {
    commentTimeStamp[index].innerHTML = splitTimeLine[0];
  }
});

