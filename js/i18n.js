/**
 * Système de traduction (i18n) — Daniela HOLONOU Portfolio
 * Utilise data-i18n / data-i18n-placeholder
 * et persiste le choix de langue dans localStorage.
 */

const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_project: "Projets",
    nav_skill: "Compétences",
    nav_service: "Services",
    nav_contact: "Me contacter",

    hero_greeting: "Je suis",
    cv_download: "Télécharger mon CV",

    about_years_label: "Ans",
    about_years_desc: "d'expérience dans le développement d'applications web.",
    about_intro: "Je suis Développeuse Web Laravel, Développeuse Full Stack, Développeuse Backend Laravel et Designer d'Applications Mobiles. J'accompagne les entreprises dans la conception de solutions web performantes, sécurisées et évolutives en développant des applications métiers, des API REST et des interfaces modernes centrées sur l'expérience utilisateur.",
    about_check1: "Développement d'applications Web Laravel",
    about_check2: "Développement et intégration d'API REST",
    about_check3: "Conception d'interfaces Web & Mobile (UI Design)",
    about_btn_projects: "Découvrir mes projets",
    about_stat1_label: "Projets réalisés",
    about_stat1_desc: "Participation à la réalisation de plateformes de gestion, d'applications métiers, de solutions pour le secteur des assurances, d'API REST, de tableaux de bord et de projets de transformation digitale.",
    about_stat2_label: "Technologies maîtrisées",
    about_stat2_desc: "Laravel, PHP, JavaScript, MySQL, HTML5, CSS3, Bootstrap, Git, API REST, Figma, Canva, Postman, Flutter (bases) et développement d'interfaces responsives.",

    project_title: "Mes projets",
    filter_all: "Tous les projets",
    filter_first: "Application web",
    filter_second: "UI/UX Design",

    project1_title: "Maquette UI — Application de gestion scolaire",
    project1_desc: "Conception d'une interface mobile intuitive sous Figma pour une application de gestion scolaire : tableau de bord, suivi des élèves et navigation fluide.",
    project2_title: "Plateforme e-commerce — ABS Technologie Group",
    project2_desc: "Application web Laravel complète avec espace client, gestion des articles, suivi des commandes et panneau d'administration intégré.",
    project3_title: "Interface web animée",
    project3_desc: "Intégration frontend avec animations fluides réalisées en HTML, Bootstrap, JavaScript et AOS pour une expérience utilisateur moderne et dynamique.",
    project4_title: "UI/UX Design — Application Assinco",
    project4_desc: "Maquettes Figma pour la digitalisation des services d'une compagnie d'assurance : souscription, suivi de sinistres et espace assuré.",
    project5_title: "Référencement des PME — Plateforme CoNEB",
    project5_desc: "Application Laravel multi-profils : espace visiteur, espace entreprise et panneau d'administration pour référencer et valoriser les PME membres de la CoNEB.",
    project6_title: "API REST — Plateforme de streaming manga &amp; animé",
    project6_desc: "Développement d'une API REST testée sous Postman et intégration des interfaces frontend pour une plateforme de lecture et de streaming de mangas et d'animés.",
    project7_title: "Gestion de réservation de stands — GoodTroc",
    project7_desc: "Application web Laravel dédiée à la réservation de stands lors d'événements, avec un espace administratif complet de gestion des exposants et des plannings.",
    project8_title: "Design UI — Plateforme e-commerce",
    project8_desc: "Maquette Figma d'une boutique en ligne : pages produits, panier, tunnel d'achat et tableau de bord vendeur, avec une identité visuelle soignée.",
    project9_title: "Site vitrine — Auto Plus Bénin",
    project9_desc: "Site vitrine responsive pour un garage automobile à Cotonou : présentation des services, galerie, formulaire de contact et section témoignages clients.",

    skill_title: "Compétences & Expériences",
    skill_intro: "Passionnée par le développement web et la conception d'interfaces utilisateur, je développe des applications web modernes avec Laravel et PHP, tout en concevant des interfaces mobiles intuitives. J'accorde une grande importance à la qualité du code, aux bonnes pratiques et à l'expérience utilisateur.",
    skill_subtitle: "Mes compétences",
    tab_experience: "Expériences",
    tab_formation: "Formations",

    exp1_title: "Technicienne Réseau",
    exp2_title: "Développeuse Full Stack Laravel",
    exp3_title: "Stage Professionnel - Développeuse Full Stack",
    exp4_title: "Stage Académique - Développeuse Full Stack",

    edu1_title: "Licence Professionnelle en Génie Télécom & TIC",
    edu2_title: "Baccalauréat Série C",
    edu3_title: "Brevet d'Études du Premier Cycle (BEPC)",

    service_title: "Mes Services",
    service_intro: "J'accompagne les entreprises, startups et entrepreneurs dans la conception d'applications web modernes, sécurisées et évolutives.",
    service_btn: "Discutons de votre projet",
    service1_title: "Développement Web Laravel",
    service1_desc: "Conception d'applications web performantes avec Laravel, PHP, MySQL et Bootstrap. Développement de plateformes métiers, tableaux de bord et systèmes de gestion.",
    service2_title: "Développement Backend & API REST",
    service2_desc: "Création d'API REST sécurisées, authentification, gestion des bases de données, intégration de services tiers et optimisation des performances.",
    service3_title: "Design d'Applications Web & Mobile",
    service3_desc: "Réalisation de maquettes modernes et intuitives avec Figma, adaptées aux applications web et mobiles tout en privilégiant une excellente expérience utilisateur.",
    service4_title: "Développement Full Stack",
    service4_desc: "Développement complet d'applications, de la conception des interfaces utilisateur jusqu'au backend, en passant par les bases de données et les API.",

    contact_title: "Travaillons ensemble !",
    contact_intro: "Vous avez un projet web, une application métier, une API REST ou une interface mobile à concevoir ? Je serais ravie d'échanger avec vous afin de transformer vos idées en solutions performantes.",
    contact_btn: "Me contacter",
    contact_location_label: "Localisation",
    contact_phone_label: "Téléphone",
    contact_email_label: "Adresse e-mail",
    contact_social_label: "Retrouvez-moi sur",
    contact_form_intro: "Vous souhaitez collaborer sur un projet, recruter une développeuse ou simplement obtenir des informations ? Remplissez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.",
    form_name_label: "Nom complet",
    form_name_placeholder: "Nom",
    form_email_label: "Adresse e-mail",
    form_email_placeholder: "Adresse e-mail",
    form_subject_label: "Sujet",
    form_subject_placeholder: "Sujet",
    form_message_label: "Votre message",
    form_message_placeholder: "Votre message",
    form_submit: "Envoyer le message",

    footer_rights: "Tout droits réservés.",

    hero_typed: "Développeuse Web Laravel, Développeuse Full Stack, Développeuse Backend Laravel, Designer d'Applications Mobiles"
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_project: "Projects",
    nav_skill: "Skills",
    nav_service: "Services",
    nav_contact: "Contact Me",

    hero_greeting: "I am",
    cv_download: "Download my CV",

    about_years_label: "Years",
    about_years_desc: "of experience in web application development.",
    about_intro: "I'm a Laravel Web Developer, Full Stack Developer, Laravel Backend Developer, and Mobile App Designer. I help companies design high-performing, secure, and scalable web solutions by building business applications, REST APIs, and modern interfaces centered on user experience.",
    about_check1: "Laravel web application development",
    about_check2: "REST API development and integration",
    about_check3: "Web & mobile interface design (UI Design)",
    about_btn_projects: "Discover my projects",
    about_stat1_label: "Completed projects",
    about_stat1_desc: "Involved in building management platforms, business applications, insurance sector solutions, REST APIs, dashboards, and digital transformation projects.",
    about_stat2_label: "Technologies mastered",
    about_stat2_desc: "Laravel, PHP, JavaScript, MySQL, HTML5, CSS3, Bootstrap, Git, REST API, Figma, Canva, Postman, Flutter (basics), and responsive interface development.",

    project_title: "My projects",
    filter_all: "All projects",
    filter_first: "Web application",
    filter_second: "UI/UX Design",

    project1_title: "UI Mockup — School Management App",
    project1_desc: "Design of an intuitive mobile interface in Figma for a school management application: dashboard, student tracking, and smooth navigation.",
    project2_title: "E-commerce Platform — ABS Technologie Group",
    project2_desc: "Complete Laravel web application with customer area, product management, order tracking, and integrated admin panel.",
    project3_title: "Animated Web Interface",
    project3_desc: "Frontend integration with smooth animations built with HTML, Bootstrap, JavaScript, and AOS for a modern, dynamic user experience.",
    project4_title: "UI/UX Design — Assinco Application",
    project4_desc: "Figma mockups for digitalizing an insurance company's services: subscription, claims tracking, and policyholder area.",
    project5_title: "SME Directory — CoNEB Platform",
    project5_desc: "Multi-profile Laravel application: visitor area, company area, and admin panel to list and promote CoNEB member SMEs.",
    project6_title: "REST API — Manga &amp; Anime Streaming Platform",
    project6_desc: "Development of a REST API tested with Postman and frontend integration for a manga and anime reading and streaming platform.",
    project7_title: "Booth Reservation Management — GoodTroc",
    project7_desc: "Laravel web application dedicated to booth reservations for events, with a complete admin area for managing exhibitors and schedules.",
    project8_title: "UI Design — E-commerce Platform",
    project8_desc: "Figma mockup of an online store: product pages, cart, checkout flow, and seller dashboard, with a polished visual identity.",
    project9_title: "Showcase Website — Auto Plus Bénin",
    project9_desc: "Responsive showcase website for an auto garage in Cotonou: services overview, gallery, contact form, and customer testimonials section.",

    skill_title: "Skills & Experience",
    skill_intro: "Passionate about web development and user interface design, I build modern web applications with Laravel and PHP while designing intuitive mobile interfaces. I place great importance on code quality, best practices, and user experience.",
    skill_subtitle: "My skills",
    tab_experience: "Experience",
    tab_formation: "Education",

    exp1_title: "Network Technician",
    exp2_title: "Full Stack Laravel Developer",
    exp3_title: "Professional Internship - Full Stack Developer",
    exp4_title: "Academic Internship - Full Stack Developer",

    edu1_title: "Professional Bachelor's Degree in Telecom & ICT Engineering",
    edu2_title: "High School Diploma, Science Track (Série C)",
    edu3_title: "Junior High School Diploma (BEPC)",

    service_title: "My Services",
    service_intro: "I help companies, startups, and entrepreneurs design modern, secure, and scalable web applications.",
    service_btn: "Let's discuss your project",
    service1_title: "Laravel Web Development",
    service1_desc: "Design of high-performing web applications with Laravel, PHP, MySQL, and Bootstrap. Development of business platforms, dashboards, and management systems.",
    service2_title: "Backend Development & REST APIs",
    service2_desc: "Creation of secure REST APIs, authentication, database management, third-party service integration, and performance optimization.",
    service3_title: "Web & Mobile App Design",
    service3_desc: "Creation of modern, intuitive mockups with Figma, tailored for web and mobile applications with a focus on excellent user experience.",
    service4_title: "Full Stack Development",
    service4_desc: "Complete application development, from user interface design to backend, including databases and APIs.",

    contact_title: "Let's work together!",
    contact_intro: "Do you have a web project, business application, REST API, or mobile interface to design? I'd love to talk with you and turn your ideas into high-performing solutions.",
    contact_btn: "Contact me",
    contact_location_label: "Location",
    contact_phone_label: "Phone",
    contact_email_label: "Email address",
    contact_social_label: "Find me on",
    contact_form_intro: "Want to collaborate on a project, hire a developer, or just get more information? Fill out the form below and I'll get back to you as soon as possible.",
    form_name_label: "Full name",
    form_name_placeholder: "Name",
    form_email_label: "Email address",
    form_email_placeholder: "Email address",
    form_subject_label: "Subject",
    form_subject_placeholder: "Subject",
    form_message_label: "Your message",
    form_message_placeholder: "Your message",
    form_submit: "Send message",

    footer_rights: "All rights reserved.",

    hero_typed: "Laravel Web Developer, Full Stack Developer, Laravel Backend Developer, Mobile App Designer"
  }
};

let typedInstance = null;

function initTyped(lang) {
  const typedOutput = document.querySelector('.typed-text-output');
  if (!typedOutput) return;

  if (typeof Typed === 'undefined') {
    console.warn('Typed.js non chargé');
    return;
  }

  const typedText = translations[lang].hero_typed;
  const strings = typedText ? typedText.split(',').map(s => s.trim()) : [''];

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedOutput.innerHTML = '';

  typedInstance = new Typed('.typed-text-output', {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: true,
    cursorChar: '|'
  });
}

function applyLanguage(lang) {
  if (!translations[lang]) {
    console.warn('Langue non supportée:', lang);
    return;
  }

  console.log('🔄 Application de la langue:', lang);

  // 1. Mettre à jour les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      // ✅ SOLUTION CORRIGÉE : Conserver les icônes
      const icon = el.querySelector('i, .fa, .fas, .far, .fab, .bi');
      if (icon) {
        // Si l'élément a une icône, on garde l'icône et on met le texte à côté
        el.innerHTML = '';
        el.appendChild(icon);
        // Ajouter un espace si nécessaire
        const textNode = document.createTextNode(' ' + translations[lang][key]);
        el.appendChild(textNode);
      } else {
        // Si pas d'icône, on remplace tout le contenu
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // 2. Mettre à jour les placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // 3. Mettre à jour le bouton de langue
  const langButton = document.querySelector('.navbar-lang .btn');
  if (langButton) {
    const flagSpan = langButton.querySelector('.lang-flag');
    const textSpan = langButton.querySelector('span:last-child');
    if (flagSpan) flagSpan.textContent = lang === 'en' ? '🇬🇧' : '🇫🇷';
    if (textSpan) textSpan.textContent = lang === 'en' ? 'En' : 'Fr';
  }

  // 4. Sauvegarder et mettre à jour la langue
  document.documentElement.lang = lang;
  localStorage.setItem('site-lang', lang);

  // 5. Réinitialiser Typed
  initTyped(lang);
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('site-lang') || 'fr';
  console.log('🌐 Langue sauvegardée:', savedLang);
  
  applyLanguage(savedLang);

  // Écouteurs pour les options de langue
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      console.log('🔀 Changement vers:', lang);
      applyLanguage(lang);
      
      // Fermer le dropdown
      const dropdown = this.closest('.dropdown-menu');
      if (dropdown) {
        const toggle = dropdown.previousElementSibling;
        if (toggle && toggle.classList.contains('dropdown-toggle')) {
          toggle.click();
        }
      }
    });
  });
});