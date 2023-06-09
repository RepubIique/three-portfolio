import { common, education, milne, mypass } from '../assets'

import css from '../assets/tech/css.png'
import docker from '../assets/tech/docker.png'
import figma from '../assets/tech/figma.png'
import git from '../assets/tech/git.png'
import html from '../assets/tech/html.png'
import javascript from '../assets/tech/javascript.png'
import mongodb from '../assets/tech/mongodb.png'
import nodejs from '../assets/tech/nodejs.png'
import reactjs from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import tailwind from '../assets/tech/tailwind.png'
import typescript from '../assets/tech/typescript.png'
import threejs from '../assets/tech/threejs.png'
import dollar from '../assets/tech/dollar.png'
import cat from '../assets/tech/cat.png'
import angular from '../assets/tech/angular.png'
import neo4j from '../assets/tech/neo4j.png'
import java from '../assets/tech/java.png'
import nestjs from '../assets/tech/nestjs.png'
import aws from '../assets/tech/aws.png'
import ionic from '../assets/tech/ionic.png'

import nanobar from '../assets/nanobar.jpg'
import travel from '../assets/travel.jpg'
import solar from '../assets/solar.jpg'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const services = [
    {
        title: 'React Developer',
    },
    {
        title: 'Full Stack Developer',
    },
]

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'aws',
        icon: aws,
    },
    {
        name: 'ionic',
        icon: ionic,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'angular',
        icon: angular,
    },
    {
        name: 'neo4j',
        icon: neo4j,
    },
    {
        name: 'java',
        icon: java,
    },
    {
        name: 'nestjs',
        icon: nestjs,
    },
    {
        name: 'dollar',
        icon: dollar,
    },
    {
        name: 'cat',
        icon: cat,
    },
]

const experiences = [
    {
        title: 'Software Engineer',
        company_name: 'Education Horizons',
        icon: education,
        iconBg: '#FFFFFF',
        date: 'Jan 2022 - Present',
        points: [
            'Spearheaded the development and implementation of key product features, resulting in significant increases in efficiency and quality that directly contributed to achieving critical company business goals.',
            'Collaborated closely with product managers to identify MVP requirements and translate them into well-defined user stories in an Agile environment, ensuring that all stakeholders were aligned on project scope and deliverables.',
            'SME in contract testing methodology, a critical component of the micro-services architecture implemented in the school software, ensuring high levels of reliability and quality in the system.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Software Engineer',
        company_name: 'MyPass Global',
        icon: mypass,
        iconBg: '#0C1748',
        date: 'Oct 2020 - Jan 2022',
        points: [
            'Engineered modern PWA in Angular (TypeScript), Java, and Neo4j.',
            'Contributed to the design and architecture of the SaaS platform, ensuring scalability, performance, and reliability of the underlying infrastructure and systems.',
            'Participated in code reviews, pair programming, and other collaborative development practices to ensure high-quality code and adherence to coding standards.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
        ],
    },
    {
        title: 'JR Full Stack Developer (Contract)',
        company_name: 'Common Extract',
        icon: common,
        iconBg: '#FFFFFF',
        date: 'Dec 2019 - Oct 2020',
        points: [
            'Successfully architected and built a versatile IoT progressive web app that leveraged the MQTT protocol to communicate with a custom-built Arduino board, using the Ionic framework delivering a highly reliable and scalable solution.',
            'Provided regular consultations and technical support to clients to ensure clear communication, effective project management, and timely delivery of project requirements, resulting in high levels of customer satisfaction and repeat business.',
            'Developed and implemented features which increased the efficiency and quality of the product to achieve company business goal.',
        ],
    },
    {
        title: 'Systems Admin',
        company_name: 'Mille Agrigroup',
        icon: milne,
        iconBg: '#FFFFFF',
        date: 'Jan 2019 - Oct 2020',
        points: [
            'Made a custom program to read and analysis data from temperature probes using vanilla JS and Bootstrap for industrial machines',
            'Data entry and maintaining company database with SQL',
        ],
    },
]

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
]

const projects = [
    {
        name: 'Nanobar',
        description:
            'Web appplication for vending machines. Pay through the app and the vending machine will dispense your order',
        tags: [
            {
                name: 'ionic-react',
                color: 'blue-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'green-text-gradient',
            },
            {
                name: 'mqtt',
                color: 'pink-text-gradient',
            },
        ],
        image: nanobar,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Travel Itinerary',
        description:
            'Web application that enables users to plan travel itineray together in the same session',
        tags: [
            {
                name: 'bootstrap',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: travel,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Solar Solutions',
        description:
            'A simple solar app for western australia that allows user to calculate their solar usage base on their usage',
        tags: [
            {
                name: 'noSQL',
                color: 'blue-text-gradient',
            },
            {
                name: 'ionic-react',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: solar,
        source_code_link: 'https://github.com/',
    },
]

export { services, technologies, experiences, testimonials, projects }
