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
                'Construo soluções digitais com foco em desenvolvimento web, aprendizado contínuo e evolução profissional.',
            'hero.projects': 'Ver projetos',
            'hero.cv': 'Currículo',

            'about.eyebrow': 'Sobre mim',
            'about.title':
                'Aprender, construir e evoluir.',
            'about.description':
                'Minha formação em Desenvolvimento de Software Multiplataforma combina desenvolvimento, tecnologia, trabalho em equipe e aprendizado contínuo.',

            'about.learn.title': 'Aprender',
            'about.learn.text':
                'Busco ampliar meus conhecimentos por meio da faculdade, cursos, certificações e projetos práticos.',

            'about.build.title': 'Construir',
            'about.build.text':
                'Transformo conhecimentos em projetos que podem ser apresentados, documentados e evoluídos ao longo da formação.',

            'about.evolve.title': 'Evoluir',
            'about.evolve.text':
                'O portfólio acompanha minha trajetória e recebe novos projetos, competências e experiências a cada etapa do curso.',

            'projects.eyebrow': 'Projetos',
            'projects.title':
                'Uma trajetória em construção.',
            'projects.description':
                'Projetos acadêmicos, profissionais e pessoais organizados para acompanhar minha evolução durante o curso.',

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
                'I build digital solutions focused on web development, continuous learning, and professional growth.',
            'hero.projects': 'View projects',
            'hero.cv': 'Resume',

            'about.eyebrow': 'About me',
            'about.title':
                'Learn, build, and evolve.',
            'about.description':
                'My Multiplatform Software Development education combines development, technology, teamwork, and continuous learning.',

            'about.learn.title': 'Learn',
            'about.learn.text':
                'I expand my knowledge through college, courses, certifications, and practical projects.',

            'about.build.title': 'Build',
            'about.build.text':
                'I turn knowledge into projects that can be presented, documented, and improved throughout my education.',

            'about.evolve.title': 'Evolve',
            'about.evolve.text':
                'This portfolio follows my journey and receives new projects, skills, and experiences throughout the course.',

            'projects.eyebrow': 'Projects',
            'projects.title':
                'A journey in progress.',
            'projects.description':
                'Academic, professional, and personal projects organized to follow my development throughout the course.',

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
                    ? './img/icons/br.svg'
                    : './img/icons/us.svg';

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