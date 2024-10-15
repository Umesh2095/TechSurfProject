// Tab switching logic
const designTab = document.getElementById("design-tab");
const dataTab = document.getElementById("data-tab");
const designContent = document.getElementById("design-content");
const dataContent = document.getElementById("data-content");

designTab.addEventListener("click", () => {
  designTab.classList.add("active");
  dataTab.classList.remove("active");
  designContent.classList.add("active");
  dataContent.classList.remove("active");
});

dataTab.addEventListener("click", () => {
  dataTab.classList.add("active");
  designTab.classList.remove("active");
  dataContent.classList.add("active");
  designContent.classList.remove("active");
});

// Drag and drop functionality
const canvas = document.getElementById("canvas");
const componentItems = document.querySelectorAll(".component-item");

// Allow dragging of components
componentItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.dataset.type);
  });
});

// Enable dropping components into canvas
canvas.addEventListener("dragover", (e) => {
  e.preventDefault();
});

canvas.addEventListener("drop", (e) => {
  e.preventDefault();
  const componentType = e.dataTransfer.getData("text/plain");
  dropComponent(componentType);
});

// Add dropped component to canvas
function dropComponent(type) {
  const component = document.createElement("div");
  component.classList.add("dropped-component");

  switch (type) {
    case "header":
      component.innerHTML = "<h1>Header Component</h1>";
      break;
    case "text-block":
      component.innerHTML = "<p>This is a text block.</p>";
      break;
    case "image":
      component.innerHTML =
        "<img src='https://via.placeholder.com/150' alt='Placeholder Image'>";
      break;
    case "button":
      component.innerHTML = "<button>Click Me</button>";
      break;
    case "list":
      component.innerHTML = "<ul><li>List Item 1</li><li>List Item 2</li></ul>";
      break;
    case "about-us":
      component.innerHTML = `
        <h2>About Us</h2>
        <p>Our mission is to provide the best services. We have a rich history of serving customers and delivering top-notch solutions.</p>
      `;
      break;
    case "services":
      component.innerHTML = `
        <h2>Our Services/Products</h2>
        <p>We offer a wide range of products including Software Development, Consulting Services, and Cloud Solutions.</p>
        <ul>
          <li>Software Development</li>
          <li>Consulting Services</li>
          <li>Cloud Solutions</li>
        </ul>
      `;
      break;
    case "blog-news":
      component.innerHTML = `
        <h2>Latest News</h2>
        <p>Stay updated with the latest news and insights from our blog. Check out our latest posts!</p>
      `;
      break;
    default:
      component.innerHTML = "<p>Unknown Component</p>";
  }

  canvas.appendChild(component);
}
