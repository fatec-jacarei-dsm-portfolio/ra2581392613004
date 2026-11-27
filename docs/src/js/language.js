(() => {
    const toggle = document.querySelector('[data-language-toggle]');
    const flag = document.querySelector('.language-flag');

    if (!toggle) return;

    const label = toggle.querySelector('span');
    const STORAGE_KEY = 'portfolio-language';

    const translations = {
        pt: {
            'nav.home': 'Início',
            'nav.about': 'Sobre',
            'nav.projects': 'Projetos',
            'nav.tech': 'Tecnologias',
            'nav.info': 'Informações',
            'nav.contact': 'Contato',

            'hero.eyebrow': 'Olá, eu sou a',
            'hero.role':
                'Estudante de Desenvolvimento de Software Multiplataforma',
            'hero.description':
                'Desenvolvo aplicações web do protótipo no Figma à API com banco de dados, e organizo equipes com Scrum para que o projeto chegue à entrega.',
            'hero.projects': 'Ver projetos',
            'hero.cv': 'Currículo',

            'about.eyebrow': 'Sobre mim',
            'about.title':
                'Do protótipo à entrega.',
            'about.description':
                'Estou no 2º semestre de DSM na FATEC Jacareí. Nos projetos integradores, já atuei como desenvolvedora front-end e como Scrum Master, e gosto de estar nos dois lados: construindo a interface e garantindo que o time entregue.',

            'about.learn.title': 'Aprender',
            'about.learn.text':
                'Complemento a faculdade com cursos e certificações em Git, IT Essentials e Metodologias Ágeis, e aplico o que aprendo em projetos práticos.',

            'about.build.title': 'Construir',
            'about.build.text':
                'Desenvolvo interfaces com HTML, CSS, JavaScript e React, e APIs em Node.js com Express e PostgreSQL, sempre com repositório e documentação.',

            'about.evolve.title': 'Organizar',
            'about.evolve.text':
                'Como Scrum Master, conduzo as cerimônias, mantenho backlog e documentação atualizados e acompanho prazos e responsáveis de cada entrega.',

            'projects.eyebrow': 'Projetos',
            'projects.title':
                'O que já construí.',
            'projects.description':
                'Projetos integradores da FATEC, estudos pessoais e, em breve, experiências profissionais.',

            'projects.academic.title':
                'Projetos Acadêmicos',
            'projects.academic.description':
                'Projetos desenvolvidos durante a formação na FATEC.',

            'projects.professional.title':
                'Projetos Profissionais',
            'projects.professional.description':
                'Experiências profissionais que poderão ser incorporadas ao longo da trajetória.',

            'projects.personal.title':
                'Projetos Pessoais',
            'projects.personal.description':
                'Espaço para experimentos, estudos e projetos desenvolvidos por iniciativa própria.',

            'tech.eyebrow': 'Conhecimentos',
            'tech.title':
                'Tecnologias e ferramentas.',
            'tech.description':
                'Tecnologias estudadas e utilizadas ao longo da formação e dos projetos desenvolvidos.',

            'info.eyebrow':
                'Informações complementares',
            'info.title':
                'Além dos projetos.',
            'info.description':
                'Certificações, conhecimentos, interesses que complementam minha trajetória e formação.',

            'contact.eyebrow':
                'Contato profissional',
            'contact.title':
                'Acompanhe meu trabalho!',
            'contact.description':
                'Para acompanhar meus projetos e trajetória profissional, acesse minhas redes profissionais.'
        },

        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.tech': 'Technologies',
            'nav.info': 'Information',
            'nav.contact': 'Contact',

            'hero.eyebrow': 'Hello, I am',
            'hero.role':
                'Multiplatform Software Development Student',
            'hero.description':
                'I build web applications from the Figma prototype to the database-backed API, and I organize teams with Scrum so projects get delivered.',
            'hero.projects': 'View projects',
            'hero.cv': 'Resume',

            'about.eyebrow': 'About me',
            'about.title':
                'From prototype to delivery.',
            'about.description':
                'I am in the 2nd semester of Multiplatform Software Development at FATEC Jacareí. In the integrative projects I have worked as a front-end developer and as Scrum Master, and I enjoy both sides: building the interface and making sure the team delivers.',

            'about.learn.title': 'Learn',
            'about.learn.text':
                'I complement college with courses and certifications in Git, IT Essentials, and Agile Methodologies, and apply what I learn in hands-on projects.',

            'about.build.title': 'Build',
            'about.build.text':
                'I build interfaces with HTML, CSS, JavaScript, and React, and APIs in Node.js with Express and PostgreSQL, always with a repository and documentation.',

            'about.evolve.title': 'Organize',
            'about.evolve.text':
                'As Scrum Master, I run the ceremonies, keep the backlog and documentation up to date, and track deadlines and owners for each delivery.',

            'projects.eyebrow': 'Projects',
            'projects.title':
                'What I have built.',
            'projects.description':
                'FATEC integrative projects, personal studies, and, soon, professional experience.',

            'projects.academic.title':
                'Academic Projects',
            'projects.academic.description':
                'Projects developed during my studies at FATEC.',

            'projects.professional.title':
                'Professional Projects',
            'projects.professional.description':
                'Professional experiences that can be added throughout my career journey.',

            'projects.personal.title':
                'Personal Projects',
            'projects.personal.description':
                'A space for experiments, studies, and projects developed on my own initiative.',

            'tech.eyebrow': 'Knowledge',
            'tech.title':
                'Technologies and tools.',
            'tech.description':
                'Technologies studied and used throughout my education and projects.',

            'info.eyebrow':
                'Additional information',
            'info.title':
                'Beyond the projects.',
            'info.description':
                'Education, certifications, knowledge, and interests that complement my journey.',

            'contact.eyebrow':
                'Professional contact',
            'contact.title':
                'Let’s connect.',
            'contact.description':
                'To follow my projects and professional journey, visit my professional networks.'
        }
    };

    function setLanguage(lang) {
        const dictionary = translations[lang];

        if (!dictionary) return;

        document.documentElement.lang =
            lang === 'pt' ? 'pt-BR' : 'en';

        document
            .querySelectorAll('[data-i18n]')
            .forEach((element) => {
                const key = element.dataset.i18n;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {
                    element.textContent = dictionary[key];
                }
            });

        if (label) {
            label.textContent = lang.toUpperCase();
        }

        if (flag) {
            flag.src =
                lang === 'pt'
                    ? './src/img/icons/br.svg'
                    : './src/img/icons/us.svg';

            flag.alt =
                lang === 'pt'
                    ? 'Português'
                    : 'English';
        }

        toggle.setAttribute(
            'aria-label',
            lang === 'pt'
                ? 'Alterar idioma para inglês'
                : 'Change language to Portuguese'
        );

        toggle.setAttribute(
            'title',
            lang === 'pt'
                ? 'English'
                : 'Português'
        );

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );
    }

    const savedLanguage =
        localStorage.getItem(STORAGE_KEY);

    const initialLanguage =
        savedLanguage === 'en'
            ? 'en'
            : 'pt';

    setLanguage(initialLanguage);

    toggle.addEventListener('click', () => {
        const currentLanguage =
            localStorage.getItem(STORAGE_KEY) || 'pt';

        setLanguage(
            currentLanguage === 'pt'
                ? 'en'
                : 'pt'
        );
    });
})();