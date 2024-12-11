interface IWorkHistory {
  company: string
  company_url?: string
  date: string
  role: string
  description: string
}
interface IProject {
  name: string
  url: string,
  date: string
  description: string
}
interface ISkill {
  title: string
  level: number
}
const interests: string[] = [
    'Music Production',
    'Guitar',
    'Poetry',
    'Technology'
]
const work_history: IWorkHistory[] = [
  {
    company: 'Center Health',
    company_url: 'https://duo.center.health',
    date: 'Jan 2021 – June 2024',
    role: 'Full-stack developer',
    description: `<p>
        I contributed significantly to the development of a completely revamped version of the app, resolving critical front-end and back-end issues and implementing features that positively impacted patients' lives.
        <br>
        These included in-app reminders for taking medication, logging meals, conducting blood-glucose tests, AI-powered push notifications with personalized insights, and healthy meal suggestions triggered by restaurant visits.
        <br>
        The project consisted of three main components:
        <br>
        <ul class="list-disc m-4">
             <li>Back-End: After a few months, I advanced to the role of lead back-end developer. I migrated the codebase from vanilla JavaScript to TypeScript, implemented unit and end-to-end (E2E) testing, and enhanced the payment and subscription system using Stripe and Shopify.</li>
             <li>Product Page: I migrated the codebase from AngularJS to Svelte and developed new features to improve functionality and user experience.</li>
             <li>Main App: I transitioned much of the legacy code from AngularJS to Svelte, resolved critical bugs, and delivered new features to enhance app performance and usability.</li>
        </ul>
        <br>
      </p>`
  },
  {
    company: 'Devvly',
    company_url: 'https://devvly.com',
    date: 'jan 2019 - Jan 2021',
    role: 'Full-stack developer',
    description: `<p>
      Lead developer for around 3 years, took the lead on many projects, and delivered many of them from concept to completion, using PHP, Node.js, Vue.js, and Angular, and within a few months, I've helped the company gain more profit.
      </p>`
  },
  {
    company: 'Fanovit',
    date: 'jan 2019 - Dec 2019',
    role: 'Full-stack developer',
    description: `<p>
      Full-stack developer for around 1 year, worked on many projects using PHP & Node.js.
      </p>`
  },
  {
    company: 'Duckraid',
    company_url: 'https://duckraid.com',
    date: 'jan 2019 - Jan 2019',
    role: 'Full-stack developer',
    description: `<p>Implemented the front-end and backend using Laravel (PHP), VueJS and Angular 4</p>`
  },
];

const projects: IProject[] = [
  {
    name: 'Mooti',
    url: 'https://mooti.store',
    date: 'Nov 2024',
    description: 'Improved Shopify store performance and SEO, fixed some bugs.',
  },
  {
    name: 'BriteVue',
    url: 'https://britevue.com',
    date: 'Jan 2021',
    description: 'Implemented the front-end using Vue.js.',
  },
  {
    name: 'Feeds Paragraphs',
    url: 'https://www.drupal.org/project/feeds_para_mapper',
    date: 'Apr 2020',
    description: 'I developed this Drupal module when i was migrating Daleel Madani platform, and still maintaining it until this day.',
  },
  {
    name: 'Daleel Madani',
    url: 'https://daleel-madani.org',
    date: 'Jan 2019',
    description: `
        Along with Fanovit dev team, i migrated the platform from Drupal 5 to Drupal 8.
        <ul class="list-disc mx-6">
          <li>Wrote many custom modules.</li>
          <li>Modified existing Drupal 5 modules to work with Drupal 8.</li>
          <li>Implemented large portion of the current theme.</li>
        </ul>`,
  },
]
const skills: ISkill[] = [
  { "title": "Laravel", "level": 10 },
  { "title": "FastAPI", "level": 10 },
  { "title": "Symfony", "level": 10 },
  { "title": "Drupal", "level": 10 },
  { "title": "PHPUnit framework", "level": 10 },
  { "title": "Docker", "level": 10 },
  { "title": "Prompt Engineering", "level": 10 },
  { "title": "Stripe API", "level": 10 },
  { "title": "NodeJs", "level": 10 },
  { "title": "Express JS", "level": 10 },
  { "title": "GraphQL", "level": 10 },
  { "title": "Apollo Server", "level": 10 },
  { "title": "Svelte.js", "level": 10 },
  { "title": "React Native", "level": 10 },
  { "title": "ReactJs", "level": 10 },
  { "title": "Ionic 2+", "level": 10 },
  { "title": "Angular 5+", "level": 10 },
  { "title": "Vue JS", "level": 10 },
  { "title": "Tailwind", "level": 10 },
  { "title": "Bootstrap", "level": 10 },
  { "title": "JQuery", "level": 7 },
  { "title": "Jasmine", "level": 7 },
  { "title": "Mocha", "level": 7 },
  { "title": "Mysql and Mongodb", "level": 7 },
  { "title": "Wordpress plugin development", "level": 7 },
  { "title": "Elastic Search", "level": 7 },
  { "title": "AWS", "level": 7 },
  { "title": "Linux command line/general management", "level": 7 },
  { "title": "Redis", "level": 5 },
  { "title": "Wordpress theming", "level": 5 }
]

const work_el = document.getElementById("work");
for (let i = 0; i < work_history.length; ++i) {
  const wrapper = document.createElement('div');
  wrapper.className = 'company-item'
  const title_el = document.createElement('div')
  const date_el = document.createElement('p')
  const description_el = document.createElement('div')
  if (work_history[i].company_url) {
    const href = document.createElement('a')
    href.innerText = work_history[i].company
    href.href = work_history[i].company_url
    href.target = '_blank'
    title_el.innerText = work_history[i].role + ', ';
    title_el.appendChild(href)
  } else {
    title_el.innerText = work_history[i].role + ', ' + work_history[i].company;
  }
  title_el.className = 'text-lg mt-3';
  date_el.innerText = work_history[i].date;
  date_el.className = 'mb-3';
  description_el.innerHTML = work_history[i].description
  description_el.className = 'mb-4'
  wrapper.append(title_el, date_el, description_el)
  work_el.appendChild(wrapper)
}

const projects_el = document.getElementById("projects");
for (let i = 0; i < projects.length; ++i) {
  const wrapper = document.createElement('div');
  wrapper.className = 'project-item'
  const name_el = document.createElement('div')
  const date_el = document.createElement('p')
  const description_el = document.createElement('div')
  if (projects[i].url) {
    const href = document.createElement('a')
    href.innerText = projects[i].name
    href.href = projects[i].url
    href.target = '_blank'
    name_el.appendChild(href)
  } else {
    name_el.innerText = projects[i].name;
  }
  name_el.className = 'text-lg mt-3';
  date_el.innerText = projects[i].date;
  date_el.className = 'mb-3';
  description_el.innerHTML = projects[i].description
  description_el.className = 'mb-4'
  wrapper.append(name_el, date_el, description_el)
  projects_el.appendChild(wrapper)
}

const skills_el = document.getElementById("skills");
for (let i = 0; i < skills.length; ++i) {
  const title_el = document.createElement('p')
  title_el.innerText = skills[i].title;
  const progress_con_el = document.createElement("span")
  progress_con_el.className = 'progress-con mb-4'
  const progress_el = document.createElement("span")
  progress_el.className = 'progress'
  progress_el.style.width = (skills[i].level * 10).toString() +  '%';
  progress_con_el.appendChild(progress_el)
  skills_el.append(title_el, progress_con_el)
}

const interests_el = document.getElementById("interests");
for (let i = 0; i < interests.length; ++i) {
  const title_el = document.createElement('p')
  title_el.innerText = interests[i];
  interests_el.append(title_el)
}



