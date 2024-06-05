console.log("hello");
const menuItems = [
  {
    id: "1",
    itemName: " Butter Paneer  ",
    image:
      "https://t4.ftcdn.net/jpg/05/82/28/65/360_F_582286506_Kji3X5NrZBHMTFSqwG9gADXWMsjrtEjL.jpg",
    price: "₹250",
    category: "Veg",
  },
  {
    id: "2",
    itemName: "Chicken Biryani",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    price: "₹350",
    category: "Non-Veg",
  },
  {
    id: "3",
    itemName: "Masala Dosa",
    image:
      "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.jpg",
    price: "₹150",
    category: "Veg",
  },
  {
    id: "4",
    itemName: "Mutton Rogan Josh",
    image:
      "https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800",
    price: "₹400",
    category: "Non-Veg",
  },
  {
    id: "5",
    itemName: "Vegetable Pulao",
    image:
      "https://t4.ftcdn.net/jpg/04/18/22/71/360_F_418227121_mGoGy7ZE2jAkq07OnN599QU7PVuhVT57.jpg",
    price: "₹200",
    category: "Veg",
  },
  {
    id: "6",
    itemName: "Butter Naan",
    image:
      "https://www.shutterstock.com/image-photo/indian-naan-bread-herbs-garlic-600nw-2255100041.jpg",
    price: "₹50",
    category: "Veg",
  },
  {
    id: "7",
    itemName: "Gulab Jamun",
    image:
      "https://t3.ftcdn.net/jpg/04/40/62/60/360_F_440626064_ghxwEM9hM70aVObUUYObrNS4g8qor3yX.jpg",
    price: "₹100",
    category: "Veg",
  },
  {
    id: "8",
    itemName: "Lassi",
    image:
      "https://t3.ftcdn.net/jpg/04/81/51/96/360_F_481519662_1Vqr3aA1SvOPFa4YbGsOCTpYXcpCZYk5.jpg",
    price: "₹60",
    category: "Veg",
  },
  {
    id: "9",
    itemName: "Aloo Paratha",
    image: "https://t3.ftcdn.net/jpg/01/15/62/02/360_F_115620221_5XL4MzVoXrHGJdhHXrVVNL0WUHdJLCPH.jpg",
    price: "₹120",
    category: "Veg",
  },
  {
    id: "10",
    itemName: "Fish Curry",
    image: "https://t4.ftcdn.net/jpg/02/96/12/15/360_F_296121509_0Wapf8gyoLCOxk9KjtTVqgASjEXsBDn1.jpg",
    price: "₹300",
    category: "Non-Veg",
  },
  {
    id: "11",
    itemName: "Dal Makhani",
    image: "https://t4.ftcdn.net/jpg/01/84/58/83/360_F_184588398_RczrKKQfy5GZWSd1rvCYu6GEPlsCd9rv.jpg",
    price: "₹180",
    category: "Veg",
  },
  {
    id: "12",
    itemName: "Prawn Masala",
    image: "https://t4.ftcdn.net/jpg/04/29/57/71/360_F_429577181_C6LC59Bvrwn0WJPR6GNFDpecwIDjVTWX.jpg",
    price: "₹400",
    category: "Non-Veg",
  },
  {
    id: "13",
    itemName: "Chole Bhature",
    image: "https://t4.ftcdn.net/jpg/05/97/41/05/360_F_597410510_aVWxjkToHzErUYm3Ammrvm4od2Fjxl1w.jpg",
    price: "₹180",
    category: "Veg",
  },
  {
    id: "14",
    itemName: "Keema Naan",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/17/98/97/1b/keema-naan.jpg",
    price: "₹250",
    category: "Non-Veg",
  },
  {
    id: "15",
    itemName: "Palak Paneer",
    image: "https://t4.ftcdn.net/jpg/04/12/57/33/360_F_412573389_1Jp8J0hA4fc1VjxR8D2SPQbdQpTfYkJP.jpg",
    price: "₹220",
    category: "Veg",
  },
  {
    id: "16",
    itemName: "Egg Curry",
    image: "https://t4.ftcdn.net/jpg/05/45/04/09/360_F_545040926_Fd7TY5kXcLuBHyJRAXaajrv949qVB3GC.jpg",
    price: "₹150",
    category: "Non-Veg",
  },
  {
    id: "17",
    itemName: "Rajma Chawal",
    image: "https://t3.ftcdn.net/jpg/07/28/71/10/360_F_728711034_H1fTB6GI74c1icXZY1NBODNqXAky5IO8.jpg",
    price: "₹200",
    category: "Veg",
  },
  {
    id: "18",
    itemName: "Chicken Tikka",
    image: "https://t3.ftcdn.net/jpg/05/85/17/02/360_F_585170258_aBJpRchNLmMrJaj7vnm3sCd2XPF7jCi0.jpg",
    price: "₹300",
    category: "Non-Veg",
  },
  {
    id: "19",
    itemName: "Veg Hakka Noodles",
    image: "https://as1.ftcdn.net/v2/jpg/03/86/85/64/1000_F_386856433_UTNRrviaDxUsLJfEpVp24bdr3xqgQXjl.jpg",
    price: "₹180",
    category: "Veg",
  },
  {
    id: "20",
    itemName: "Mango Lassi",
    image: "https://t4.ftcdn.net/jpg/03/26/17/71/360_F_326177134_sPYEaYBMKsScGsOGbV45FAjaTZueL093.jpg",
    price: "₹80",
    category: "Veg",
  },
  {
    id: "21",
    itemName: "Special Thali",
    image: "https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg=",
    price: "₹140",
    category: "Veg",
  },
];

const divs = document.querySelector(".swiper-wrapper");

for (let i = 1; i <= 5; i++) {
  let div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.style.backgroundImage = `url(images/${i}.png)`;
  div.innerHTML = `<a href="#menu"class='order-btn'>Order Now </a>`;
  divs.appendChild(div);
}

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
let itemsDiv = document.querySelector(".items");
function addItem() {
  menuItems.map((item) => {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <img src=${item.image} alt="image" class="items-image"/>
    <p class="item-img">${item.itemName}<img src=${
      item.category === "Veg" ? "/images/veg.png" : "/images/non-veg.png"
    } class="veg-nonveg"/></p>
    <p>${item.price}</p>
    <button class="cart-btn">Add to cart</button>
    `;
    itemsDiv.appendChild(div);
  });
}

addItem();
