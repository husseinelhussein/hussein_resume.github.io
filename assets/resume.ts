interface IWorkHistory {
  company: string
  date: string
  role: string
  description: string
}
interface ISkill {
  title: string
  level: number
}
const work_history: IWorkHistory[] = [
  {
    company: 'Center Health',
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
    date: 'jan 2019 - Jan 2021',
    role: 'Full-stack developer',
    description: `<p>
      Lead developer for 4 years, took the lead on many projects, and delivered many of them from concept to completion, using PHP, Node.js, Vue.js, and Angular, and within a few months, I've helped the company gain more profit.
      </p>`
  },
  {
    company: 'Fanovit',
    date: 'jan 2019 - Dec 2019',
    role: 'Full-stack developer',
    description: `<p>
      Lead developer for 4 years, took the lead on many projects, and delivered many of them from concept to completion, using PHP, Node.js, Vue.js, and Angular, and within a few months, I've helped the company gain more profit.
      </p>`
  },
  {
    company: 'Duckraid',
    date: 'jan 2019 - Jan 2019',
    role: 'Full-stack developer',
    description: `<p>Implemented the front-end and backend using Laravel (PHP), VueJS and Angular 4</p>`
  },
];
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
  let wrapper = document.createElement('div');
  let title_el = document.createElement('div')
  let date_el = document.createElement('p')
  let description_el = document.createElement('div')
  title_el.innerText = work_history[i].role + ', ' + work_history[i].company;
  title_el.className = 'text-lg mt-3';
  date_el.innerText = work_history[i].date;
  date_el.className = 'mb-3';
  description_el.innerHTML = work_history[i].description
  description_el.className = 'mb-4'
  wrapper.append(title_el, date_el, description_el)
  work_el.appendChild(wrapper)
}

const skills_el = document.getElementById("skills");
for (let i = 0; i < skills.length; ++i) {
  let title_el = document.createElement('p')
  title_el.innerText = skills[i].title;
  let progress_con_el = document.createElement("span")
  progress_con_el.className = 'progress-con mb-4'
  let progress_el = document.createElement("span")
  progress_el.className = 'progress'
  progress_el.style.width = (skills[i].level * 10).toString() +  '%';
  progress_con_el.appendChild(progress_el)
  skills_el.append(title_el, progress_con_el)
}


