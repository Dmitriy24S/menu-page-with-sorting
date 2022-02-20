// data
const fullMenuData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil numquam quae, impedit rerum`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Impedit rerum delectus rem omnis harum, id similique enim, atque reiciendis deserunt`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Obcaecati, fugiat a modestias officiis debitis, omnis laborum at velit similique ratione sapiente quia repudiandae cupiditate`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Eveniet nihil aut cumque recusandae deserunt nostrum reprehenderit fugiat, dolores asperiores, officia, dicta a dolor consequatur natus`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Maiores nihil numquam quae, doloremque laboriosam ab quibusdam totam veniam sed quasi sit tempora`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Magni, laboriosam. Excepturi maxime quidem eligendi tempora blanditiis at. Architecto, qui voluptates`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Voluptate voluptates corporis veniam ea sit obcaecati veritatis saepe similique minus aliquid ex, perferendis laboriosam tempora neque et harum`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Inventore fugiat amet, necessitatibus eaque harum tempore reprehenderit cumque quos eos eius tempora. Voluptates deleniti optio corporis tempore quae`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veniam alias molestias voluptatibus quidem dolore`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `Impedit, veritatis voluptatem. Eum debitis unde quidem voluptas vitae quaerat quia minima quos repellat`,
  },
];

// select elements
const sectionCenter = document.querySelector(".section-center");
const fiterBtn = document.querySelectorAll(".filter-btn");

let pageMenu;

// load data on page load
window.addEventListener("DOMContentLoaded", () => {
  pageMenu = fullMenuData.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
        ${item.desc}
          </p>
        </div>
      </article>`;
  });
  sectionCenter.innerHTML = pageMenu.join("");
});

// btn filter action
fiterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "all") {
      showSelectedMenuItems(fullMenuData);
    } else {
      sortAndUpdateMenu(btn.textContent);
    }
  });
});

const showSelectedMenuItems = (selectedMenu) => {
  pageMenu = selectedMenu.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
        ${item.desc}
          </p>
        </div>
      </article>`;
  });
  sectionCenter.innerHTML = pageMenu.join("");
};

const sortAndUpdateMenu = (type) => {
  let filteredMenu = fullMenuData.filter((item) => {
    return item.category === type;
  });
  showSelectedMenuItems(filteredMenu);
};
