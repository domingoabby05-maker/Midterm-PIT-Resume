PROMPTS.md

Entry #1

Tool Used: ChatGPT
"how can i make about me card as size as the right cards"

AI Output (summary or screenshot reference):
.container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1; /* makes all cards same width */
}

.about-card {
  flex: 1; /* same size as others */
}

How I used/modified it in my project:
I adjusted my layout using flexbox and applied equal height styling so that my About Me section visually matches the size of the cards on the right side, improving overall balance in my portfolio design.


---

Entry #2

Tool Used: ChatGPT
Prompt:
"my profile picture cant be seen even though i already made a folder to gather all of my connected files"

AI Output:
⚡ Quick checklist
✅ Correct path
✅ Correct file name (case-sensitive)
✅ Image exists in folder
✅ Correct extension (.jpg, .png, etc.)

How I used/modified it in my project:
I fixed my file path and ensured the image folder is correctly referenced in my HTML. After correcting the directory structure, my profile picture displayed properly on the website.


---

Entry #3

Tool Used: ChatGPT
Prompt (copy-paste exactly):
"I want that whenever I click a navigation contents, it will highlight whats on it"

AI Output (summary or screenshot reference):
<a href="#home" class="nav-link">Home</a>
<a href="#about" class="nav-link">About</a>
<a href="#projects" class="nav-link">Projects</a>

<section id="home"></section>
<section id="about"></section>
<section id="projects"></section>

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

How I used/modified it in my project:
I implemented JavaScript to dynamically highlight the selected navigation item. This improved user experience by clearly indicating which section is currently active.
