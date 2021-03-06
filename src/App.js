import React from 'react';
import './css/App.css';
import Loader from './components/Loader.js'
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contacts from './components/Contacts.js';

export default class App extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            currentScroll: 0,
            currentSection : 'home', 
            loaded: false,
            progress: 0
        };
    }

    navItems = [
        {
            name: 'home'
        },
        {
            name: 'about'
        },
        {
            name: 'projects'
        },
        {
            name: 'contacts'
        }
    ];

    socialMedia = [
        {
            name: 'LinkedIn',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>,
            link: 'https://www.linkedin.com/in/vedansh-mishra-016121220/'
        },
        {
            name: 'Facebook',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>,
            link: 'https://www.facebook.com/'
        },
        {
            name: 'Instagram',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>,
            link: 'https://www.instagram.com/vedansh_mishra41'
        },
        {
            name: 'GitHub',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>,
            link: 'https://www.github.com/AttractiveDog'
        },
        {
            name: 'Twitter',
            icon: <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
            <path d="
              M 630, 425
              A 195, 195 0 0 1 331, 600
              A 142, 142 0 0 0 428, 570
              A  70,  70 0 0 1 370, 523
              A  70,  70 0 0 0 401, 521
              A  70,  70 0 0 1 344, 455
              A  70,  70 0 0 0 372, 460
              A  70,  70 0 0 1 354, 370
              A 195, 195 0 0 0 495, 442
              A  67,  67 0 0 1 611, 380
              A 117, 117 0 0 0 654, 363
              A  65,  65 0 0 1 623, 401
              A 117, 117 0 0 0 662, 390
              A  65,  65 0 0 1 630, 425
              Z"
              />
          </svg>,
                        link: 'https://twitter.com/vedanshm41'
        }
    ];

    project_icons = {
        "ext-link": {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg>,
            link_title: 'Link to external website'
        },
        "github": {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>,
            link_title: 'Link to GitHub repository'
        },
        "mail": {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>,
            link_title: 'Contact Vedansh to know more!'
        }
    };

    projects = [ 
        {
            title: 'Messaging Website',
            image: [require('./media/img.png')],
            gif: require('./media/img.png'),
            desc: 'This project first project with React Js and firebase. I was learning plain',
            more: 'https://messaz-6a603.web.app',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['ReactJS', 'Firebase']
        },
        {
            title: 'E-commercerce',
            image: [require('./media/img.png')],
            desc: 'This is the project was most complex project ever in my life till now. It is a fully useable website with payment integration using stipe',
            more: 'https://codeshopr.netlify.com',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['ReactJS', 'Firebase', 'Stripe']
        },
        {
            title: 'Video Confrence Website',
            image: [require('./media/img.png'), require('./media/img.png'), require('./media/img.png')],
            desc: 'It was too frustating project but I completed it somehow. It is made by ReactJS and ExpressJS',
            more: 'https://github.com/AttractiveDog/eqeduquanta',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['ReactJS', 'expressJS', 'javascript', 'nodeJS']
        },
        {
            title: 'Social Media',
            image: [require('./media/img.png'), require('./media/img.png'), require('./media/img.png')],
            desc: 'It was a piece of cake for me but sometime it got stuck. But it work very effeciently.',
            more: 'https://socialcode.vercel.app/',
            link_title: this.project_icons['mail'].link_title,
            icon: this.project_icons['mail'].icon,
            tech: ['ReactJS', 'expressJS', 'javascript', 'nodeJS']
        },
        {
            title: 'Twitter Clone',
            image: [require('./media/img.png')],
            desc: 'This project was a time taking but the final result is ver good. People can actually use this for daily purpose.',
            more: 'https://twitter-test1.vercel.app/',
            link_title: this.project_icons['mail'].link_title,
            icon: this.project_icons['mail'].icon,
            tech: ['ReactJS', 'expressJS', 'javascript', 'nodeJS']
        },
        {
            title: 'Hao! | 1:1 Chatting',
            image: [require('./media/img.png')],
            desc: 'I have already made a chatting website but it wasent 1:1. But now it is completed.',
            more: 'https://hao-omega.vercel.app/',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['nextJS', 'expressJS', 'javascript', 'nodeJS', 'Firebase']

        },
        {
            title: 'FPS Shooter!',
            image: [require('./media/img.png')],
            desc: 'This is the project was not of my busniess but when I started it attracted me and I am loving it a lot',
            more: 'https://youtu.be/bFb7hCHSPtE',
            link_title: this.project_icons['mail'].link_title,
            icon: this.project_icons['mail'].icon,
            tech: ['unity', 'C#']

        },
        {
            title: 'Video confrencening 2.0',
            image: [require('./media/img.png')],
            desc: ' It took a lot of time to ehnance and add more functionality to its predecessor. Made with Next.Js',
            more: 'https://mediacall.vercel.app/',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['nextJS', 'expressJS', 'javascript', 'nodeJS', 'Firebase']

        },
        {
            title: 'Face Detctor',
            image: [require('./media/img.png')],
            desc: ' It took a lot of time to ehnance and add more functionality to its predecessor. Made with Next.Js',
            more: 'https://youtu.be/L6Hg3dZBL80',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['python', 'openCV']

        },
        {
            title: 'Air Canvas',
            image: [require('./media/img.png')],
            desc: 'This project was the best project with Python and Open CV I have ever made. I was learning Hard',
            more: 'https://youtu.be/6rsu7PR1eWg',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['python', 'openCV', 'collections']

        }, 
        {
            title: 'Ethereum Sending Web 3.0 Project',
            image: [require('./media/img.png')],
            desc: 'This is my first ever blockchain project for sending and receiving ethereum. It has lots of amazing stuff in the backend including Solidity language! ',
            more: 'https://deployment-for-ethereum-project.vercel.app/',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['web 3.0', 'Solidity', 'reactjs','vitejs', 'Javascript']

        },
        {
            title: 'Emotion-Detection',
            image: [require('./media/img.png')],
            desc: 'Another masterpiece of python and open-cv. But it has a lots of dealing with Tensorflow',
            more: 'https://github.com/AttractiveDog/emotion-detection',
            link_title: this.project_icons['github'].link_title,
            icon: this.project_icons['github'].icon,
            tech: ['python', 'tensorflow', 'open-cv', 'harcasscade']

        } 

    ]
    
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    loadingDoneCallback = () => {
        this.setState({ loaded: true });
    }

    updateProgressCallback = (amount) => {
        this.setState({progress: amount});
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate = () => {
        if(this.state.loaded){
            document.body.style.overflowY = "visible";
            this.slideInHeaderElements();
        }
    }

    slideInHeaderElements = () => {
        document.getElementsByClassName("scene")[0].style.animation = "fadeInRight .3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
        var welcome_children = document.getElementById("welcome").childNodes;
        var delay;
        for (var i = 0; i < welcome_children.length; i++) {
            delay = i+1;
            welcome_children[i].style.animation = "fadeInLeft .3s cubic-bezier(0.645, 0.045, 0.355, 1) ."+delay+"s forwards";
        }
    }

    handleScroll = evt => {
        this.updateScroll();
        this.updateSection();
        this.slideInVisibleElements();
    }

    slideInVisibleElements = () => {
        var elements = Array.from(document.getElementsByClassName('to-slide'));

        elements.forEach(e => {
            if(this._isInViewPort(e)) {
                e.classList.remove("to-slide");
                //the last token indicates the direction
                var dir = e.classList[e.classList.length-1];
                e.classList.remove(dir);
                e.classList.add("fade-in-"+dir);
            }
        })
    }

    _isInViewPort = (element) => {
        var bounding = element.getBoundingClientRect();

        if (((window.innerHeight || document.documentElement.clientHeight) - bounding.top)/100 >= 2) {
            return true;
        } else {
            return false;
        }
    }

    updateScroll = () => {
        var offset;
        if(window.pageYOffset !== undefined)
            offset = window.pageYOffset;
        else
            offset = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        this.setState({ currentScroll : offset });
    }

    updateSection = () => {
        var sections = Array.from(document.getElementsByTagName('section'))
                            .filter(x => {
                               return x.offsetTop - this.state.currentScroll <= 1;
                            });
        var closest = sections[sections.length - 1];
        if(closest) {
            this.toggleSidebar(closest.getAttribute('id'), this.state.currentSection, document.getElementById('contacts-sidebar'));
            this.setState({ currentSection : closest.getAttribute('id') });
        }

    }

    toggleSidebar = (currSect, oldSect, sidebar) => {
        if(currSect === 'contacts') {
            if(sidebar.classList.contains('fade-in-left')) {
                sidebar.classList.remove('fade-in-left');
            }
            sidebar.classList.add('fade-out-left');
        } else if(currSect !== 'contacts' && oldSect === 'contacts') {
            if(sidebar.classList.contains('fade-out-left')) {
                sidebar.classList.remove('fade-out-left');
            }
            sidebar.classList.add('fade-in-left');
        }
    }

    render() {
        var header = (
            <Header progressCallback={this.updateProgressCallback}/>
        );
        if (!this.state.loaded) {
            return (
                <div className="page-container">
                    <Loader progress={this.state.progress} loadingDoneCallback={this.loadingDoneCallback}/>
                    {header}
                </div>
            );
        } else {
            return (
                <div className="page-container">
                    <Navbar items={this.navItems} currentSection={this.state.currentSection}/>
                    {header}
                    <About /> 
                    <Projects list={this.projects}/>
                    <Contacts contacts={this.socialMedia}/>
                </div>
            );
        }
    }
}
