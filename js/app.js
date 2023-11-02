const API = "http://localhost:3000/news";
const img = document.querySelector("img");
const secTitle = document.getElementById("sec1-title");
const poragrof = document.getElementById("sec1-p");
const autHor = document.getElementById("author1");
const main = document.getElementById("main");

function updateUI(todos) {
  main.innerHTML = "";
  todos.forEach((todo) => {
    const { id, title, image, author, body } = todo;
    console.log(title);
    main.innerHTML += `
    <section class="news_section1_container container">
      <img
        id="sec1-img"
        src="${image}"
        alt=""
        class="section1_img"
        width="650"
      />
      <div class="section_news_titile" id="news_titile">
        <h3 class="sect1-title" id="sec1-title">${title}</h3>
        <p class="sect1-p" id="sec1-p">${body}</p>
        <a class="author-title" id="author1" href="#"><i class="fa-solid fa-user-pen"></i> ${author}</a>
        <span id="data-news"></span>
        <button class="leran_more_btn btn" id="more_btn">Read more...</button>
      </div>
    </section>`;
  });
}

const getData = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getData(API);
