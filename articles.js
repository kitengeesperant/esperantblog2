const articles = [
    { 
        id: 1,
        title: "Introduction à la programmation", 
        content: [
            "**Voici le début du premier article. Il parle de l'introduction à la programmation.**",
            { type: "image", src: "images/article1.jpg", alt: "Image d'illustration" },
            "Et voici la suite du contenu, avec une image insérée au milieu.",
            { type: "image", src: "images/article1-2.jpg", alt: "Autre image d'illustration" },
            "Et enfin, la fin de l'article."
        ],
        image: "images/article1.jpg"
    },
    { 
        id: 2,
        title: "Les bases du JavaScript", 
        content: [
            "Dans cet article, nous abordons les bases du JavaScript et son utilisation.",
            { type: "image", src: "images/article2-1.jpg", alt: "Image JavaScript" },
            "Suite du contenu sur les bases de JavaScript.",
        ],
        image: "images/article2.jpg"
    },
    { 
        id: 3,
        title: "Les outils de développement web", 
        content: [
            "Cet article explique les outils essentiels pour le développement web, y compris les IDE et les navigateurs.",
            { type: "image", src: "images/article3-1.jpg", alt: "Outils de développement" },
            "Suite du contenu sur les outils de développement web.",
        ],
        image: "images/article3.jpg"
    },
    { 
        id: 4,
        title: "Le HTML et le CSS", 
        content: [
            "Le HTML et le CSS sont les bases du développement web. Cet article couvre leur utilisation.",
            { type: "image", src: "images/article4-1.jpg", alt: "HTML et CSS" },
            "Suite du contenu sur HTML et CSS.",
        ],
        image: "images/article4.jpg"
    },
    { 
        id: 5,
        title: "Le Responsive Design", 
        content: [
            "Le responsive design est essentiel pour rendre un site compatible avec différents appareils. Découvrez les meilleures pratiques.",
            { type: "image", src: "images/article5-1.jpg", alt: "Responsive Design" },
            "Suite du contenu sur le responsive design.",
        ],
        image: "images/article5.jpg"
    }
];
