// Fonction pour afficher tous les articles
function displayArticles(filteredArticles) {
    const articlesContainer = document.getElementById("articlesContainer");
    articlesContainer.innerHTML = "";
    document.getElementById("articleContent").style.display = "none";
    articlesContainer.style.display = "flex";

    filteredArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        const image = document.createElement("img");
        image.src = article.image;
        image.alt = article.title;
        image.onerror = function() {
            image.src = "chemin/vers/image-de-remplacement.jpg";
            image.alt = "Image non disponible";
        };

        const title = document.createElement("h3");
        title.innerText = article.title;

        const contentPreview = document.createElement("p");
        contentPreview.innerText = getSentencePreview(article.content.join(" "), 100); // Utiliser join pour convertir le tableau en chaîne

        articleElement.appendChild(image);
        articleElement.appendChild(title);
        articleElement.appendChild(contentPreview);

        articleElement.addEventListener("click", function () {
            history.pushState({ article }, "", `#article-${article.id}`);
            displayArticleContent(article);
        });

        articlesContainer.appendChild(articleElement);
    });
}

// Fonction pour afficher le contenu complet d'un article
function displayArticleContent(article) {
    const articleContent = document.getElementById("articleContent");
    const articlesContainer = document.getElementById("articlesContainer");

    articleContent.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h2>${article.title}</h2>
    `;

    article.content.forEach(item => {
        if (typeof item === "string") {
            articleContent.innerHTML += `<p>${item}</p>`;
        } else if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt;
            img.onerror = function() {
                img.src = "chemin/vers/image-de-remplacement.jpg";
                img.alt = "Image non disponible";
            };
            articleContent.appendChild(img);
        }
    });

    articlesContainer.style.display = "none";
    articleContent.style.display = "block";
}

// Gestion du bouton retour du téléphone
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.article) {
        displayArticleContent(event.state.article);
    } else {
        document.getElementById("articleContent").style.display = "none";
        document.getElementById("articlesContainer").style.display = "flex";
    }
});

// Fonction de recherche
function searchArticles() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.join(" ").toLowerCase().includes(query) // Utiliser join pour convertir le tableau en chaîne
    );
    displayArticles(filteredArticles);
}

// Fonction pour obtenir un aperçu de phrase
function getSentencePreview(content, maxLength) {
    if (content.length <= maxLength) {
        return content;
    }

    let preview = content.substring(0, maxLength);
    const lastSpaceIndex = preview.lastIndexOf(" ");

    if (lastSpaceIndex !== -1) {
        preview = preview.substring(0, lastSpaceIndex);
    }

    return preview + "...";
}

// Initialisation
displayArticles(articles);
