import type { Language } from '../types'

type TranslationDict = {
  nav: {
    home: string
    about: string
    projects: string
    experience: string
    skills: string
    hobbies: string
    contact: string
  }
  hero: {
    greeting: string
    title: string
    subtitle: string
    cta: { projects: string; contact: string; cv: string }
  }
  about: {
    sectionTitle: string
    p1: string
    p2: string
    p3: string
    photoAlt: string
    status: string
  }
  projects: {
    sectionTitle: string
    sectionSubtitle: string
    caseStudy: string
    github: string
    demo: string
    techStack: string
    publikum: { title: string; description: string }
    raydar: { title: string; description: string }
    gain: { title: string; description: string }
    byte33: { title: string; description: string }
  }
  experience: {
    sectionTitle: string
    sectionSubtitle: string
    present: string
    sikri: { role: string; description: string }
    learnlab: { role: string; description: string }
    uia: { role: string; description: string }
    uiaBachelor: { role: string; description: string }
    kiwi: { role: string; description: string }
    freelance: { role: string; description: string }
  }
  skills: {
    sectionTitle: string
    sectionSubtitle: string
    frontend: string
    backend: string
    design: string
    tools: string
    systems: string
  }
  hobbies: {
    sectionTitle: string
    sectionSubtitle: string
    guitar: { title: string; description: string }
    weightlifting: { title: string; description: string }
    cycling: { title: string; description: string }
    design: { title: string; description: string }
  }
  contact: {
    sectionTitle: string
    subtitle: string
    openTo: string
    email: string
    github: string
    linkedin: string
    formNote: string
    send: string
  }
  footer: {
    built: string
    rights: string
  }
  cv: {
    download: string
    note: string
  }
  common: {
    current: string
    viewAll: string
    learnMore: string
    close: string
  }
}

const en: TranslationDict = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    hobbies: 'Hobbies',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    title: 'Software Engineer, Designer & Creative Technologist',
    subtitle: 'Software Engineer at Sikri AS · Graphic Designer for Learnlab · Incoming INDØK master student at UiA',
    cta: {
      projects: 'View Projects',
      contact: 'Contact Me',
      cv: 'Download CV',
    },
  },
  about: {
    sectionTitle: 'About Me',
    p1: 'I\'m a software engineer and designer who likes to build things that matter. Currently working at Sikri AS on public-sector tech, creating visual work for Learnlab, and about to start my master\'s in Industrial Economics and Technology Management (INDØK) at UiA.',
    p2: 'My work sits at the intersection of engineering and design — I care about how systems are built as much as how they look and feel. I\'ve written operating systems in C and Assembly, built mobile apps, and designed brand identities. The variety keeps things interesting.',
    p3: 'Outside of work and study, I play guitar, lift weights, cycle, and keep exploring creative technology wherever it leads. I\'m open to interesting software roles, design collaborations, and freelance projects.',
    photoAlt: 'Profile photo placeholder',
    status: 'Open to opportunities',
  },
  projects: {
    sectionTitle: 'Projects',
    sectionSubtitle: 'A selection of things I\'ve built — from low-level systems to mobile products.',
    caseStudy: 'Case Study',
    github: 'GitHub',
    demo: 'Demo',
    techStack: 'Tech Stack',
    publikum: {
      title: 'Publikum CSR vs SSR',
      description: 'Bachelor thesis project evaluating Client-Side Rendering and Server-Side Rendering for a public document access platform. Explored performance, accessibility, and architecture trade-offs in production-like scenarios.',
    },
    raydar: {
      title: 'RayDar',
      description: 'UV index app on the Play Store that recommends sunscreen and reminds users to reapply based on real-time weather and UV data. Built with mobile-first product thinking and Firebase integration.',
    },
    gain: {
      title: 'GAIN',
      description: 'Web app with AI integration designed for gamers who want to stay active. Provides quick workouts between gaming sessions, gamifies movement, and rewards physical activity — making fitness accessible without leaving the desk.',
    },
    byte33: {
      title: 'The Byte of 33',
      description: 'A 32-bit operating system written in C and Assembly from scratch. Supports paging, interrupt handling, a keyboard piano, and a text editor. Runs entirely in QEMU — a deep dive into how computers actually work.',
    },
  },
  experience: {
    sectionTitle: 'Experience',
    sectionSubtitle: 'Where I\'ve worked, what I\'ve studied, and what I\'m building toward.',
    present: 'Present',
    sikri: {
      role: 'Software Engineer',
      description: 'Building and maintaining software for the Norwegian public sector. Working with frontend technologies in a production environment, contributing to document management and access systems used by government organisations.',
    },
    learnlab: {
      role: 'Graphic Designer',
      description: 'Creating visual content for Learnlab\'s educational platform — SVG graphics, graphic design, illustration of books and educational materials, and character design. Responsible for brand consistency and communication design across digital and print.',
    },
    uia: {
      role: 'MSc — Industrial Economics & Technology Management (INDØK)',
      description: 'Master\'s programme combining engineering, economics, and management at the University of Agder. Bridges technical depth with strategic and organisational thinking — preparing for roles at the intersection of technology and business.',
    },
    uiaBachelor: {
      role: 'BSc — Computer Engineering',
      description: 'Three-year bachelor\'s programme in computer engineering covering software development, algorithms, systems programming, databases, networks, and project methodology. Built a solid foundation across both practical and theoretical aspects of ICT engineering.',
    },
    kiwi: {
      role: 'Retail Employee',
      description: 'Working in the checkout, restocking shelves (påfyll av varer), and keeping a high standard throughout the store. Focused on delivering good customer service in a busy grocery environment.',
    },
    freelance: {
      role: 'Freelance Artist',
      description: 'Independent creative work spanning illustration, graphic design, painting (physical and digital), and visual communication. Worked with clients on branding, digital art, and custom commissions — developing both craft and the ability to work autonomously.',
    },
  },
  skills: {
    sectionTitle: 'Skills',
    sectionSubtitle: 'Technologies and tools I work with across engineering and design.',
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Tools',
    systems: 'Systems & Low-level',
  },
  hobbies: {
    sectionTitle: 'Beyond the Screen',
    sectionSubtitle: 'The things that keep me curious, grounded, and creative outside of work.',
    guitar: {
      title: 'Guitar',
      description: 'Playing guitar is where I go when I need to think without thinking. It\'s about feel, timing, and expression — skills that transfer more directly to design and engineering than most people expect.',
    },
    weightlifting: {
      title: 'Weightlifting',
      description: 'Consistency compounds. Lifting taught me that showing up regularly and making small improvements adds up to something significant over time — a principle that applies well beyond the gym.',
    },
    cycling: {
      title: 'Cycling',
      description: 'Long rides give me space to process and reset. There\'s something about covering distance under your own power that makes problems feel more tractable when you get back to the desk.',
    },
    design: {
      title: 'Design & Art',
      description: 'I\'ve always been drawn to visual communication — whether it\'s typography, composition, illustration, or motion. Design is how I translate ideas into things people can see and feel.',
    },
  },
  contact: {
    sectionTitle: 'Get in Touch',
    subtitle: 'Whether it\'s a job, a collaboration, a freelance project, or just a conversation — I\'d love to hear from you.',
    openTo: 'Open to opportunities, collaborations, and interesting projects.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    formNote: 'Clicking "Send Message" opens your email client with a pre-filled message.',
    send: 'Send Message',
  },
  footer: {
    built: 'Built with React, TypeScript & Framer Motion',
    rights: 'All rights reserved.',
  },
  cv: {
    download: 'Download CV',
    note: 'CV available as PDF',
  },
  common: {
    current: 'Current',
    viewAll: 'View All',
    learnMore: 'Learn More',
    close: 'Close',
  },
}

const nb: TranslationDict = {
  nav: {
    home: 'Hjem',
    about: 'Om meg',
    projects: 'Prosjekter',
    experience: 'Erfaring',
    skills: 'Ferdigheter',
    hobbies: 'Hobbyer',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hei, jeg er',
    title: 'Programvareutvikler, designer og kreativ teknolog',
    subtitle: 'Programvareutvikler hos Sikri AS · Grafisk designer for Learnlab · Kommende INDØK-masterstudent ved UiA',
    cta: {
      projects: 'Se prosjekter',
      contact: 'Kontakt meg',
      cv: 'Last ned CV',
    },
  },
  about: {
    sectionTitle: 'Om meg',
    p1: 'Jeg er en programvareutvikler og designer som liker å bygge ting som betyr noe. Jeg jobber for øyeblikket hos Sikri AS med offentlig sektor-teknologi, skaper visuelt innhold for Learnlab, og er i ferd med å begynne på en master i industriell økonomi og teknologiledelse (INDØK) ved UiA.',
    p2: 'Arbeidet mitt befinner seg i skjæringspunktet mellom ingeniørfag og design — jeg bryr meg like mye om hvordan systemer er bygget som hvordan de ser ut og føles. Jeg har skrevet operativsystemer i C og Assembly, bygget mobilapper og designet merkevareidentiteter.',
    p3: 'Utenfor jobb og studier spiller jeg gitar, løfter vekter, sykler og utforsker kreativ teknologi. Jeg er åpen for interessante programvareutvikler-stillinger, designsamarbeid og frilansprosjekter.',
    photoAlt: 'Profilbilde (plassholder)',
    status: 'Åpen for muligheter',
  },
  projects: {
    sectionTitle: 'Prosjekter',
    sectionSubtitle: 'Et utvalg av ting jeg har bygget — fra lavnivåsystemer til mobilprodukter.',
    caseStudy: 'Case Study',
    github: 'GitHub',
    demo: 'Demo',
    techStack: 'Teknologistabel',
    publikum: {
      title: 'Publikum CSR vs SSR',
      description: 'Bacheloroppgave som evaluerer klientsiderendering og serversiderendering for en plattform for offentlig dokumenttilgang. Utforsket ytelse, tilgjengelighet og arkitekturavveininger i produksjonslignende scenarier.',
    },
    raydar: {
      title: 'RayDar',
      description: 'UV-indeks-app på Play Store som anbefaler solkrem og minner brukere om å påføre på nytt basert på sanntids vær- og UV-data. Bygget med mobil-first produkttenkning og Firebase-integrasjon.',
    },
    gain: {
      title: 'GAIN',
      description: 'Nettapp med AI-integrasjon designet for spillere som ønsker å holde seg aktive. Tilbyr raske treningsøkter mellom spilløkter, gamifiserer bevegelse og belønner fysisk aktivitet.',
    },
    byte33: {
      title: 'The Byte of 33',
      description: 'Et 32-bits operativsystem skrevet i C og Assembly fra bunnen av. Støtter paging, avbruddhåndtering, klaviatur-piano og en teksteditor. Kjører i QEMU — et dybdedykk i hvordan datamaskiner faktisk fungerer.',
    },
  },
  experience: {
    sectionTitle: 'Erfaring',
    sectionSubtitle: 'Hvor jeg har jobbet, hva jeg har studert, og hva jeg bygger mot.',
    present: 'Nå',
    sikri: {
      role: 'Programvareutvikler',
      description: 'Bygger og vedlikeholder programvare for norsk offentlig sektor. Arbeider med frontendteknologier i et produksjonsmiljø og bidrar til dokumenthåndterings- og tilgangssystemer.',
    },
    learnlab: {
      role: 'Grafisk designer',
      description: 'Lager visuelt innhold for Learnlabs utdanningsplattform — SVG-grafikk, grafisk design, illustrasjon av bøker og læringsmateriell, og karakterdesign. Ansvarlig for merkevekonsistens og kommunikasjonsdesign på tvers av digitale og trykte flater.',
    },
    uia: {
      role: 'Master — Industriell økonomi og teknologiledelse (INDØK)',
      description: 'Masterprogram som kombinerer ingeniørfag, økonomi og ledelse ved Universitetet i Agder. Bygger bro mellom teknisk dybde og strategisk tenkning — for roller i skjæringspunktet mellom teknologi og næringsliv.',
    },
    uiaBachelor: {
      role: 'Bachelor — Dataingeniørfag',
      description: 'Treårig bachelorprogram i dataingeniørfag med fokus på programvareutvikling, algoritmer, systemprogrammering, databaser, nettverk og prosjektmetodikk. Bygde et solid faglig fundament innen IKT-ingeniørfag.',
    },
    kiwi: {
      role: 'Butikkmedarbeider',
      description: 'Arbeid i kassen, påfyll av varer og opprettholdelse av høy standard i butikken. Fokus på god kundeservice i et hektisk dagligvaremiljø.',
    },
    freelance: {
      role: 'Frilanskunstner',
      description: 'Selvstendig kreativt arbeid innen illustrasjon, grafisk design, maling (fysisk og digital) og visuell kommunikasjon. Jobbet med kunder på merkevarebygging, digital kunst og skreddersydde oppdrag.',
    },
  },
  skills: {
    sectionTitle: 'Ferdigheter',
    sectionSubtitle: 'Teknologier og verktøy jeg arbeider med innen utvikling og design.',
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Verktøy',
    systems: 'Systemer og lavnivå',
  },
  hobbies: {
    sectionTitle: 'Utover skjermen',
    sectionSubtitle: 'Tingene som holder meg nysgjerrig, jordet og kreativ utenfor jobben.',
    guitar: {
      title: 'Gitar',
      description: 'Å spille gitar er der jeg drar når jeg trenger å tenke uten å tenke. Det handler om følelse, timing og uttrykk — ferdigheter som overføres mer direkte til design og ingeniørfag enn de fleste forventer.',
    },
    weightlifting: {
      title: 'Styrketrening',
      description: 'Konsistens gir resultater. Styrketrening lærte meg at regelmessig oppmøte og små forbedringer gir noe betydelig over tid — et prinsipp som gjelder langt utenfor treningsstudioet.',
    },
    cycling: {
      title: 'Sykling',
      description: 'Lange turer gir meg rom til å prosessere og nullstille. Det er noe med å tilbakelegge distanse under egen kraft som gjør problemer mer håndterbare.',
    },
    design: {
      title: 'Design og kunst',
      description: 'Jeg har alltid vært tiltrukket av visuell kommunikasjon — typografi, komposisjon, illustrasjon og bevegelse. Design er hvordan jeg oversetter ideer til noe folk kan se og føle.',
    },
  },
  contact: {
    sectionTitle: 'Ta kontakt',
    subtitle: 'Enten det er en jobb, et samarbeid, et frilansprosjekt eller bare en samtale — jeg hører gjerne fra deg.',
    openTo: 'Åpen for muligheter, samarbeid og interessante prosjekter.',
    email: 'E-post',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    formNote: 'Å klikke "Send melding" åpner e-postklienten din med en forhåndsutfylt melding.',
    send: 'Send melding',
  },
  footer: {
    built: 'Bygget med React, TypeScript og Framer Motion',
    rights: 'Alle rettigheter forbeholdt.',
  },
  cv: {
    download: 'Last ned CV',
    note: 'CV tilgjengelig som PDF',
  },
  common: {
    current: 'Nåværende',
    viewAll: 'Se alle',
    learnMore: 'Les mer',
    close: 'Lukk',
  },
}

const nn: TranslationDict = {
  nav: {
    home: 'Heim',
    about: 'Om meg',
    projects: 'Prosjekt',
    experience: 'Erfaring',
    skills: 'Ferdigheiter',
    hobbies: 'Hobby',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hei, eg er',
    title: 'Programvareutviklar, designar og kreativ teknolog',
    subtitle: 'Programvareutviklar hjå Sikri AS · Grafisk designar for Learnlab · Komande INDØK-masterstudent ved UiA',
    cta: {
      projects: 'Sjå prosjekt',
      contact: 'Kontakt meg',
      cv: 'Last ned CV',
    },
  },
  about: {
    sectionTitle: 'Om meg',
    p1: 'Eg er ein programvareutviklar og designar som likar å byggja ting som betyr noko. Eg arbeider for tida hjå Sikri AS med offentleg sektor-teknologi, skapar visuelt innhald for Learnlab, og er i ferd med å byrja på ein master i industriell økonomi og teknologileiing (INDØK) ved UiA.',
    p2: 'Arbeidet mitt ligg i skjeringspunktet mellom ingeniørfag og design — eg bryr meg like mykje om korleis system er bygde som korleis dei ser ut og kjennest. Eg har skrive operativsystem i C og Assembly, bygd mobilapplikasjonar og designa merkevareidentitetar.',
    p3: 'Utanfor jobb og studium spelar eg gitar, løfter vekter, syklar og utforskar kreativ teknologi. Eg er open for interessante programvareutviklar-stillingar, designsamarbeid og frilansprosjekt.',
    photoAlt: 'Profilbilete (plassholder)',
    status: 'Open for moglegheiter',
  },
  projects: {
    sectionTitle: 'Prosjekt',
    sectionSubtitle: 'Eit utval av ting eg har bygd — frå lågnivasystem til mobilprodukt.',
    caseStudy: 'Case Study',
    github: 'GitHub',
    demo: 'Demo',
    techStack: 'Teknologistabel',
    publikum: {
      title: 'Publikum CSR vs SSR',
      description: 'Bacheloroppgåve som evaluerer klientsidegjengiving og serversidegjengiving for ein plattform for offentleg dokumenttilgang.',
    },
    raydar: {
      title: 'RayDar',
      description: 'UV-indeks-app på Play Store som tilrår solkrem og minner brukarar om å påføra på nytt basert på sanntids vêr- og UV-data.',
    },
    gain: {
      title: 'GAIN',
      description: 'Nettapp med KI-integrasjon designa for spelarar som vil haldast aktive. Tilbyr raske treningsøkter mellom speløkter og gamifiserer rørsle.',
    },
    byte33: {
      title: 'The Byte of 33',
      description: 'Eit 32-bits operativsystem skrive i C og Assembly frå botnen av. Støttar paging, avbrotshandtering, klaviaturpiano og ein tekstediktor. Køyrer i QEMU.',
    },
  },
  experience: {
    sectionTitle: 'Erfaring',
    sectionSubtitle: 'Kvar eg har arbeidd, kva eg har studert, og kva eg byggjer mot.',
    present: 'No',
    sikri: {
      role: 'Programvareutviklar',
      description: 'Byggjer og vedlikeheld programvare for norsk offentleg sektor. Arbeider med frontendteknologiar i eit produksjonsmiljø.',
    },
    learnlab: {
      role: 'Grafisk designar',
      description: 'Skapar visuelt innhald for Learnlabs utdanningsplattform — SVG-grafikk, grafisk design, illustrasjon av bøker og læringsmateriell, og karakterdesign. Ansvarleg for merkevekonsistens og kommunikasjonsdesign.',
    },
    uia: {
      role: 'Master — Industriell økonomi og teknologileiing (INDØK)',
      description: 'Masterprogram som kombinerer ingeniørfag, økonomi og leiing ved Universitetet i Agder. Bygger bru mellom teknisk djupn og strategisk tenking.',
    },
    uiaBachelor: {
      role: 'Bachelor — Dataingeniørfag',
      description: 'Treårig bachelorprogram i dataingeniørfag med fokus på programvareutvikling, algoritmar, systemprogrammering, databasar, nettverk og prosjektmetodikk. Bygde eit solid fagleg fundament innan IKT-ingeniørfag.',
    },
    kiwi: {
      role: 'Butikkmedarbeidar',
      description: 'Arbeid i kassen, påfyll av varer og oppretthald av høg standard i butikken. Fokus på god kundeservice i eit hektisk daglegvaremiljø.',
    },
    freelance: {
      role: 'Frilanskunstnar',
      description: 'Sjølvstendig kreativt arbeid innan illustrasjon, grafisk design, måling (fysisk og digital) og visuell kommunikasjon. Jobba med kundar på merkevarebygging, digital kunst og skreddarsydde oppdrag.',
    },
  },
  skills: {
    sectionTitle: 'Ferdigheiter',
    sectionSubtitle: 'Teknologiar og verktøy eg arbeider med innan utvikling og design.',
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Verktøy',
    systems: 'System og lagnivå',
  },
  hobbies: {
    sectionTitle: 'Utover skjermen',
    sectionSubtitle: 'Tinga som held meg nysgjerrig, jordnær og kreativ utanfor jobben.',
    guitar: {
      title: 'Gitar',
      description: 'Å spela gitar er dit eg dreg når eg treng å tenkja utan å tenkja. Det handlar om kjensle, timing og uttrykk.',
    },
    weightlifting: {
      title: 'Styrketrening',
      description: 'Konsistens gjev resultat. Styrketrening lærte meg at regelmessig oppmøte og små forbetringar gjev noko viktig over tid.',
    },
    cycling: {
      title: 'Sykling',
      description: 'Lange turar gjev meg rom til å prosessera og nullstilla. Det er noko med å leggja avstand bak seg under eiga kraft.',
    },
    design: {
      title: 'Design og kunst',
      description: 'Eg har alltid vore tiltrekt av visuell kommunikasjon — typografi, komposisjon, illustrasjon og rørsle.',
    },
  },
  contact: {
    sectionTitle: 'Ta kontakt',
    subtitle: 'Anten det er ein jobb, eit samarbeid, eit frilansprosjekt eller berre ein samtale — eg høyrer gjerne frå deg.',
    openTo: 'Open for moglegheiter, samarbeid og interessante prosjekt.',
    email: 'E-post',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    formNote: 'Å klikka "Send melding" opnar e-postklienten din med ei førehandsutfylt melding.',
    send: 'Send melding',
  },
  footer: {
    built: 'Bygd med React, TypeScript og Framer Motion',
    rights: 'Alle rettar føreheldt.',
  },
  cv: {
    download: 'Last ned CV',
    note: 'CV tilgjengeleg som PDF',
  },
  common: {
    current: 'Noverande',
    viewAll: 'Sjå alle',
    learnMore: 'Les meir',
    close: 'Lukk',
  },
}

const pl: TranslationDict = {
  nav: {
    home: 'Strona główna',
    about: 'O mnie',
    projects: 'Projekty',
    experience: 'Doświadczenie',
    skills: 'Umiejętności',
    hobbies: 'Hobby',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Cześć, jestem',
    title: 'Inżynier oprogramowania, designer i twórca technologiczny',
    subtitle: 'Inżynier oprogramowania w Sikri AS · Grafik w Learnlab · Przyszły student magistra INDØK na UiA',
    cta: {
      projects: 'Projekty',
      contact: 'Kontakt',
      cv: 'Pobierz CV',
    },
  },
  about: {
    sectionTitle: 'O mnie',
    p1: 'Jestem inżynierem oprogramowania i designerem, który lubi tworzyć rzeczy mające znaczenie. Aktualnie pracuję w Sikri AS nad technologiami dla sektora publicznego, tworzę projekty graficzne dla Learnlab i zaczynam studia magisterskie z Ekonomii Przemysłowej i Zarządzania Technologią (INDØK) na UiA.',
    p2: 'Moja praca leży na styku inżynierii i designu — równie dużo uwagi poświęcam temu, jak systemy są budowane, jak i temu, jak wyglądają i działają. Pisałem systemy operacyjne w C i Assembly, budowałem aplikacje mobilne i projektowałem identyfikacje wizualne. Różnorodność utrzymuje zainteresowanie.',
    p3: 'Poza pracą i studiami gram na gitarze, ćwiczę na siłowni, jeżdżę na rowerze i nieustannie eksploruję kreatywne technologie. Jestem otwarty na ciekawe projekty programistyczne, współprace designerskie i zlecenia freelancerskie.',
    photoAlt: 'Zdjęcie profilowe',
    status: 'Otwarty na nowe możliwości',
  },
  projects: {
    sectionTitle: 'Projekty',
    sectionSubtitle: 'Wybrane projekty — od niskopoziomowych systemów po aplikacje mobilne.',
    caseStudy: 'Opis projektu',
    github: 'GitHub',
    demo: 'Demo',
    techStack: 'Technologie',
    publikum: {
      title: 'Publikum CSR vs SSR',
      description: 'Projekt pracy dyplomowej oceniający renderowanie po stronie klienta i serwera dla platformy dostępu do dokumentów publicznych. Zbadano kompromisy wydajnościowe, dostępności i architektury w scenariuszach zbliżonych do produkcji.',
    },
    raydar: {
      title: 'RayDar',
      description: 'Aplikacja UV na Play Store, która zaleca krem z filtrem i przypomina o jego ponownym nałożeniu na podstawie danych pogodowych i UV w czasie rzeczywistym. Zbudowana z myślą mobile-first i integracją z Firebase.',
    },
    gain: {
      title: 'GAIN',
      description: 'Aplikacja internetowa z integracją AI dla graczy, którzy chcą pozostać aktywni. Zapewnia krótkie treningi między sesjami gamingowymi, grywalizuje ruch i nagradza aktywność fizyczną.',
    },
    byte33: {
      title: 'The Byte of 33',
      description: '32-bitowy system operacyjny napisany od zera w C i Assembly. Obsługuje stronicowanie, obsługę przerwań, klawiaturowe pianino i edytor tekstu. Działa w środowisku QEMU.',
    },
  },
  experience: {
    sectionTitle: 'Doświadczenie',
    sectionSubtitle: 'Miejsca pracy, uczelnie i to, co buduję na przyszłość.',
    present: 'Teraz',
    sikri: {
      role: 'Inżynier oprogramowania',
      description: 'Budowanie i utrzymywanie oprogramowania dla norweskiego sektora publicznego. Praca z technologiami frontendowymi w środowisku produkcyjnym, wkład w systemy zarządzania dokumentami i dostępu używane przez instytucje rządowe.',
    },
    learnlab: {
      role: 'Grafik',
      description: 'Tworzenie treści wizualnych dla platformy edukacyjnej Learnlab — grafika SVG, grafika użytkowa, ilustracje książek i materiałów edukacyjnych oraz projektowanie postaci. Odpowiedzialność za spójność marki w komunikacji cyfrowej i drukowanej.',
    },
    uia: {
      role: 'Magister — Ekonomia Przemysłowa i Zarządzanie Technologią (INDØK)',
      description: 'Program magisterski łączący inżynierię, ekonomię i zarządzanie na Uniwersytecie Agder. Łączy głębię techniczną z myśleniem strategicznym i organizacyjnym — przygotowuje do ról na styku technologii i biznesu.',
    },
    uiaBachelor: {
      role: 'Licencjat — Inżynieria komputerowa',
      description: 'Trzyletni program licencjacki z inżynierii komputerowej obejmujący programowanie, algorytmy, programowanie systemowe, bazy danych, sieci i metodologię projektową. Solidna podstawa zarówno w praktycznych, jak i teoretycznych aspektach inżynierii ICT.',
    },
    kiwi: {
      role: 'Pracownik sklepu',
      description: 'Praca przy kasie, uzupełnianie półek i utrzymywanie wysokich standardów w sklepie. Skupienie na dobrej obsłudze klienta w środowisku handlu detalicznego spożywczego.',
    },
    freelance: {
      role: 'Freelance artysta',
      description: 'Niezależna praca twórcza obejmująca ilustrację, grafikę, malarstwo (fizyczne i cyfrowe) oraz komunikację wizualną. Praca z klientami nad brandingiem, sztuką cyfrową i indywidualnymi zleceniami — rozwijanie warsztatu i umiejętności pracy samodzielnej.',
    },
  },
  skills: {
    sectionTitle: 'Umiejętności',
    sectionSubtitle: 'Technologie i narzędzia, których używam w inżynierii i designie.',
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Narzędzia',
    systems: 'Systemy i niski poziom',
  },
  hobbies: {
    sectionTitle: 'Poza ekranem',
    sectionSubtitle: 'To, co mnie ciekawi, utrzymuje mnie na ziemi i rozbudza kreatywność poza pracą.',
    guitar: {
      title: 'Gitara',
      description: 'Gra na gitarze to miejsce, do którego idę, gdy muszę myśleć bez myślenia. Chodzi o wyczucie, timing i ekspresję — umiejętności, które przenoszą się do designu i inżynierii bardziej bezpośrednio, niż większość ludzi oczekuje.',
    },
    weightlifting: {
      title: 'Siłownia',
      description: 'Konsekwencja procentuje. Siłownia nauczyła mnie, że regularne pojawianie się i dokonywanie małych postępów sumuje się w coś znaczącego — zasada, która obowiązuje daleko poza siłownią.',
    },
    cycling: {
      title: 'Kolarstwo',
      description: 'Długie przejazdy dają mi przestrzeń do przetwarzania i resetowania. Jest coś w pokonywaniu dystansu własną siłą, co sprawia, że problemy wydają się bardziej rozwiązywalne, gdy wracasz do biurka.',
    },
    design: {
      title: 'Design i sztuka',
      description: 'Zawsze byłem zafascynowany komunikacją wizualną — czy to typografią, kompozycją, ilustracją czy ruchem. Design to sposób, w jaki tłumaczę pomysły na rzeczy, które ludzie mogą zobaczyć i poczuć.',
    },
  },
  contact: {
    sectionTitle: 'Kontakt',
    subtitle: 'Czy to praca, współpraca, projekt freelancerski czy zwykła rozmowa — chętnie porozmawiam.',
    openTo: 'Otwarty na możliwości, współprace i interesujące projekty.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    formNote: 'Kliknięcie „Wyślij wiadomość" otwiera klienta e-mail z przygotowaną wiadomością.',
    send: 'Wyślij wiadomość',
  },
  footer: {
    built: 'Zbudowane z React, TypeScript i Framer Motion',
    rights: 'Wszelkie prawa zastrzeżone.',
  },
  cv: {
    download: 'Pobierz CV',
    note: 'CV dostępne jako PDF',
  },
  common: {
    current: 'Aktualnie',
    viewAll: 'Zobacz wszystkie',
    learnMore: 'Dowiedz się więcej',
    close: 'Zamknij',
  },
}

export const translations: Record<Language, TranslationDict> = { en, nb, nn, pl }
export type { TranslationDict }
