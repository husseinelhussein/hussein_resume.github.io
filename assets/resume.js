var interests = [
    'Music Production',
    'Guitar',
    'Poetry',
    'Technology'
];
var work_history = [
    {
        company: 'Center Health',
        company_url: 'https://duo.center.health',
        date: 'Jan 2021 – June 2024',
        role: 'Full-stack developer',
        description: "<p>\n        I contributed significantly to the development of a completely revamped version of the app, resolving critical front-end and back-end issues and implementing features that positively impacted patients' lives.\n        <br>\n        These included in-app reminders for taking medication, logging meals, conducting blood-glucose tests, AI-powered push notifications with personalized insights, and healthy meal suggestions triggered by restaurant visits.\n        <br>\n        The project consisted of three main components:\n        <br>\n        <ul class=\"list-disc m-4\">\n             <li>Back-End: After a few months, I advanced to the role of lead back-end developer. I migrated the codebase from vanilla JavaScript to TypeScript, implemented unit and end-to-end (E2E) testing, and enhanced the payment and subscription system using Stripe and Shopify.</li>\n             <li>Product Page: I migrated the codebase from AngularJS to Svelte and developed new features to improve functionality and user experience.</li>\n             <li>Main App: I transitioned much of the legacy code from AngularJS to Svelte, resolved critical bugs, and delivered new features to enhance app performance and usability.</li>\n        </ul>\n        <br>\n      </p>"
    },
    {
        company: 'Devvly',
        company_url: 'https://devvly.com',
        date: 'jan 2019 - Jan 2021',
        role: 'Full-stack developer',
        description: "<p>\n      Lead developer for around 3 years, took the lead on many projects, and delivered many of them from concept to completion, using PHP, Node.js, Vue.js, and Angular, and within a few months, I've helped the company gain more profit.\n      </p>"
    },
    {
        company: 'Fanovit',
        date: 'jan 2019 - Dec 2019',
        role: 'Full-stack developer',
        description: "<p>\n      Full-stack developer for around 1 year, worked on many projects using PHP & Node.js.\n      </p>"
    },
    {
        company: 'Duckraid',
        company_url: 'https://duckraid.com',
        date: 'jan 2019 - Jan 2019',
        role: 'Full-stack developer',
        description: "<p>Implemented the front-end and backend using Laravel (PHP), VueJS and Angular 4</p>"
    },
];
var skills = [
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
];
var work_el = document.getElementById("work");
for (var i = 0; i < work_history.length; ++i) {
    var wrapper = document.createElement('div');
    wrapper.className = 'company-item';
    var title_el = document.createElement('div');
    var date_el = document.createElement('p');
    var description_el = document.createElement('div');
    if (work_history[i].company_url) {
        var href = document.createElement('a');
        href.innerText = work_history[i].company;
        href.href = work_history[i].company_url;
        href.target = '_blank';
        title_el.innerText = work_history[i].role + ', ';
        title_el.appendChild(href);
    }
    else {
        title_el.innerText = work_history[i].role + ', ' + work_history[i].company;
    }
    title_el.className = 'text-lg mt-3';
    date_el.innerText = work_history[i].date;
    date_el.className = 'mb-3';
    description_el.innerHTML = work_history[i].description;
    description_el.className = 'mb-4';
    wrapper.append(title_el, date_el, description_el);
    work_el.appendChild(wrapper);
}
var skills_el = document.getElementById("skills");
for (var i = 0; i < skills.length; ++i) {
    var title_el = document.createElement('p');
    title_el.innerText = skills[i].title;
    var progress_con_el = document.createElement("span");
    progress_con_el.className = 'progress-con mb-4';
    var progress_el = document.createElement("span");
    progress_el.className = 'progress';
    progress_el.style.width = (skills[i].level * 10).toString() + '%';
    progress_con_el.appendChild(progress_el);
    skills_el.append(title_el, progress_con_el);
}
var interests_el = document.getElementById("interests");
for (var i = 0; i < interests.length; ++i) {
    var title_el = document.createElement('p');
    title_el.innerText = interests[i];
    interests_el.append(title_el);
}
