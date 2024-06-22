const customers = [
  {
    name: "Arjun Mehta",
    image: "./image2.jpg",
    location: "Mumbai, Maharashtra",
    testimonial:
      "The biryani here is out of this world! The spices and flavors are just perfect. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    image: "./image1.jpg",
    location: "Delhi, Delhi",
    testimonial:
      "I love the vegetarian options at this restaurant. The paneer tikka is a must-try. Wonderful experience overall!",
  },
  {
    name: "Ravi Patel",
    image: "./image3.jpg",
    location: "Ahmedabad, Gujarat",
    testimonial:
      "A fantastic place for authentic Indian food. The service is excellent, and the atmosphere is very welcoming.",
  },
  {
    name: "Anjali Verma",
    image: "./image4.jpg",
    location: "Bengaluru, Karnataka",
    testimonial:
      "The dessert selection here is amazing. I can't get enough of the gulab jamun and the kulfi. A great place for a sweet treat!",
  },
  {
    name: "Vikram Singh",
    image: "./image5.jpg",
    location: "Jaipur, Rajasthan",
    testimonial:
      "The tandoori chicken is cooked to perfection. The flavors are rich and the meat is so tender. I'll definitely be coming back.",
  },
  {
    name: "Kavita Rao",
    image: "./image1.jpg",
    location: "Hyderabad, Telangana",
    testimonial:
      "This restaurant has the best dosa I've ever had. Crispy, delicious, and served with perfect chutneys. Highly recommended!",
  },
  {
    name: "Amit Gupta",
    image: "./image2.jpg",
    location: "Chandigarh, Punjab",
    testimonial:
      "A wonderful place for family dinners. The menu is extensive and there's something for everyone. Great service too.",
  },
  {
    name: "Sanjay Kumar",
    image: "./image3.jpg",
    location: "Lucknow, Uttar Pradesh",
    testimonial:
      "The kebabs here are the best I've ever had. Juicy, flavorful, and perfectly cooked. A must-visit for kebab lovers.",
  },
  {
    name: "Rekha Desai",
    image: "./image4.jpg",
    location: "Pune, Maharashtra",
    testimonial:
      "I had a great time here with my friends. The ambiance is lovely, and the food is simply delicious. Will be back soon!",
  },
  {
    name: "Manish Agarwal",
    image: "./image5.jpg",
    location: "Kolkata, West Bengal",
    testimonial:
      "The fish curry here is to die for. Fresh, flavorful, and cooked to perfection. Highly recommended for seafood lovers.",
  },
];

let count = 0;
setInterval(() => {
  if (count === customers.length - 1) {
    count = 0;
  } else {
    count++;
  }
  change();
}, 5000);

let profile = document.querySelector(".profile");
let testimonial = document.querySelector(".text");
let details = document.querySelector(".details");

function change() {
  profile.style.animation = "none"; // Reset the animation
  testimonial.style.animation = "none"; // Reset the animation
  details.style.animation = "none"; // Reset the animation
  profile.offsetHeight; // Trigger reflow

  profile.setAttribute("src", customers[count].image);
  testimonial.innerText = customers[count].testimonial;
  details.innerHTML = `<p class="name">${customers[count].name}</p>
                         <p class="city">${customers[count].location}</p>`;

  profile.style.animation = "translate 0.75s 1 ease-in forwards";
  testimonial.style.animation = "translate 0.75s 1 ease-in forwards";
  details.style.animation = "translate 0.75s 1 ease-in forwards";
}

change();
