// AI Tools Database
const aiTools = [
{
name: "ChatGPT",
icon: "🤖",
category: "Writing",
description: "AI assistant for writing, learning and answering questions.",
url: "https://chatgpt.com/"
},
{
name: "Google Gemini",
icon: "✨",
category: "Writing",
description: "AI assistant for ideas, research and everyday tasks.",
url: "https://gemini.google.com/"
},
{
name: "Claude",
icon: "🧠",
category: "Writing",
description: "AI assistant for writing, analysis and learning.",
url: "https://claude.ai/"
},
{
name: "Grammarly",
icon: "📝",
category: "Writing",
description: "Improve grammar, spelling and writing quality.",
url: "https://www.grammarly.com/"
},
{
name: "Copy.ai",
icon: "✍️",
category: "Writing",
description: "Create marketing content and written ideas.",
url: "https://www.copy.ai/"
},

{
    name: "Canva AI",
    icon: "🎨",
    category: "Image",
    description: "Create designs and explore AI-powered design features.",
    url: "https://www.canva.com/"
},
{
    name: "Adobe Firefly",
    icon: "🖼️",
    category: "Image",
    description: "Explore AI-powered image creation and editing.",
    url: "https://firefly.adobe.com/"
},
{
    name: "Leonardo AI",
    icon: "🌄",
    category: "Image",
    description: "Generate creative images using AI.",
    url: "https://leonardo.ai/"
},
{
    name: "Ideogram",
    icon: "💡",
    category: "Image",
    description: "Create AI-generated images and designs.",
    url: "https://ideogram.ai/"
},
{
    name: "Remove.bg",
    icon: "✂️",
    category: "Image",
    description: "Remove backgrounds from images.",
    url: "https://www.remove.bg/"
},

{
    name: "Runway",
    icon: "🎬",
    category: "Video",
    description: "Explore AI-powered video creation and editing.",
    url: "https://runwayml.com/"
},
{
    name: "Pika",
    icon: "🎥",
    category: "Video",
    description: "Create videos using AI tools.",
    url: "https://pika.art/"
},
{
    name: "InVideo AI",
    icon: "📹",
    category: "Video",
    description: "Create videos from text prompts.",
    url: "https://invideo.io/"
},
{
    name: "VEED",
    icon: "🎞️",
    category: "Video",
    description: "Online video editing with AI features.",
    url: "https://www.veed.io/"
},

{
    name: "GitHub Copilot",
    icon: "💻",
    category: "Coding",
    description: "AI coding assistant for developers.",
    url: "https://github.com/features/copilot"
},
{
    name: "Replit",
    icon: "👨‍💻",
    category: "Coding",
    description: "Build and run coding projects online.",
    url: "https://replit.com/"
},
{
    name: "Cursor",
    icon: "⌨️",
    category: "Coding",
    description: "AI-powered code editor.",
    url: "https://cursor.com/"
},

{
    name: "Notion AI",
    icon: "📚",
    category: "Productivity",
    description: "Organize notes and improve productivity.",
    url: "https://www.notion.com/"
},
{
    name: "Perplexity",
    icon: "🔎",
    category: "Productivity",
    description: "AI-powered search and research assistant.",
    url: "https://www.perplexity.ai/"
},
{
    name: "DeepL",
    icon: "🌐",
    category: "Productivity",
    description: "Translate text using AI-powered translation.",
    url: "https://www.deepl.com/"
}
];

// Get HTML elements
const toolsContainer = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category");
const noResults = document.getElementById("noResults");

// Current selected category
let selectedCategory = "All";

// Display AI tools
function displayTools(tools) {

toolsContainer.innerHTML = "";

noResults.hidden = tools.length !== 0;

tools.forEach(tool => {

    const card = document.createElement("div");
    card.className = "tool-card";

    const icon = document.createElement("div");
    icon.className = "tool-icon";
    icon.textContent = tool.icon;

    const title = document.createElement("h3");
    title.textContent = tool.name;

    const description = document.createElement("p");
    description.textContent = tool.description;

    const category = document.createElement("span");
    category.className = "tool-category";
    category.textContent = tool.category;

    const link = document.createElement("a");
    link.className = "visit-btn";
    link.textContent = "Visit Website →";
    link.href = tool.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    card.append(icon, title, description, category, link);

    toolsContainer.appendChild(card);
});
}

// Search and filter tools
function filterTools() {

const searchText = searchInput.value.toLowerCase();

const filteredTools = aiTools.filter(tool => {

    const matchesSearch =
        tool.name.toLowerCase().includes(searchText) ||
        tool.description.toLowerCase().includes(searchText) ||
        tool.category.toLowerCase().includes(searchText);

    const matchesCategory =
        selectedCategory === "All" ||
        tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
});

displayTools(filteredTools);
}

// Search input event
searchInput.addEventListener("input", filterTools);

// Category button events
categoryButtons.forEach(button => {

button.addEventListener("click", () => {

    selectedCategory = button.dataset.category;

    categoryButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    filterTools();
});
});

// Display all tools when website opens
displayTools(aiTools);
