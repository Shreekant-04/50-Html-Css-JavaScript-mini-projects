const images = [
  "#2B2B2B", // Dark Gray
  "#36454F", // Charcoal
  "#001F3F", // Navy Blue
  "#004D40", // Deep Teal
  "#808000", // Olive Green
  "#F0F0F0", // Light Gray
  "#F5F5F5", // Off-White
  "#E0F7FA", // Pale Blue
  "#F5DEB3", // Warm Beige
  "#FFFACD", // Pale Yellow
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1449553728176-2ba1d6062517?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const apiUrls = {
  all: "https://quotes-api-chi.vercel.app/quotes",
  success: "https://quotes-api-chi.vercel.app/quotes/random?type=success",
  inspirational:
    "https://quotes-api-chi.vercel.app/quotes/random?type=inspirational",
  selfConfidence:
    "https://quotes-api-chi.vercel.app/quotes/random?type=selfconfidence",
};

document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.querySelector("#category-select");
  const theme = document.querySelector(".theme");
  const themeToggle = document.querySelector("#theme-toggle");
  const searchForm = document.querySelector(".search-container");

  // Theme Setup
  initializeTheme();
  addThemeSelectionListeners();
  let category = localStorage.getItem("quote") || "all";
  categorySelect.value = category;
  fetchRandomQuote();
  categorySelect.addEventListener("change", () => {
    localStorage.setItem("quote", categorySelect.value);
    fetchRandomQuote();
  });

  // Search Form Submission Handler
  searchForm.addEventListener("submit", searchQuotesOnGoogle);

  // Theme Toggle Button
  themeToggle.addEventListener("click", () => {
    theme.classList.toggle("active");
  });
});

// Functions
const initializeTheme = () => {
  let background = localStorage.getItem("theme") || "#2b2b2b";
  if (background.startsWith("#")) {
    document.querySelector("body").style.background = background;
  } else {
    document.querySelector(
      "body"
    ).style.background = `center / cover no-repeat url(${background})`;
  }
};

const addThemeSelectionListeners = () => {
  const theme = document.querySelector(".theme");
  images.forEach((img) => {
    let div = document.createElement("div");
    div.classList.add("theme-options");
    if (img.startsWith("#")) {
      div.style.background = img;
    } else {
      div.style.backgroundImage = `url(${img})`;
    }
    div.addEventListener("click", () => {
      localStorage.setItem("theme", img);
      initializeTheme();
    });
    theme.appendChild(div);
  });
};

const fetchRandomQuote = async () => {
  let category = localStorage.getItem("quote") || "all";
  try {
    const response = await fetch(apiUrls[category]);
    const data = await response.json();
    const { quote, author } = data.response;
    displayQuote(quote, author);
  } catch (error) {
    document.querySelector(".header .tab").textContent =
      "Failed to load quote. Please try again.";
  }
};

const displayQuote = (quote, author) => {
  const headerTab = document.querySelector(".header .tab");
  const authorTab = document.querySelector(".header .author");
  let displayedText = "";
  let authorText = "- ";

  // Reset content
  headerTab.textContent = "";
  authorTab.textContent = "";

  // Animate Quote Text
  quote.split("").forEach((char, index) => {
    setTimeout(() => {
      displayedText += char;
      headerTab.textContent = displayedText;
    }, 50 * index);
  });

  // Animate Author Text
  setTimeout(() => {
    author.split("").forEach((char, index) => {
      setTimeout(() => {
        authorText += char;
        authorTab.textContent = authorText;
      }, 50 * index);
    });
  }, 50 * (quote.length + 1));
};

const searchQuotesOnGoogle = (event) => {
  event.preventDefault();
  const searchBar = document.querySelector(".search-bar");
  const query = searchBar.value.trim();
  if (query) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.location.href = googleSearchUrl;
  }
};
