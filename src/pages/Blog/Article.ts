import NSTP from '@/pages/Blog/Articles/NSTP.jpg';
import college from '@/pages/Blog/Articles/college.jpg';

import chart from '@/pages/Blog/Articles/Internship-Chart.png'
import transfer from '@/pages/Blog/Articles/Internship-service.png'
import analytics from '@/pages/Blog/Articles/Internship-analytics.png'
import chartPackage from '@/pages/Blog/Articles/Internship-package.png'
import email from '@/pages/Blog/Articles/Internship-Email.png'
import cron from '@/pages/Blog/Articles/Internship-cron.png'

export default interface Article {
    id: number,
    title: string,
    subtitle: string,
    img: string,
    date: string,
    blog?: string
};

const collegeReflection =
    '        <p className="fs-5 fw-light mt-4">I cannot believe  that I am writing this blog as my graduation nears. Never did I think time would fly by so fast. I still remember my very first day in benilde, the INTERAKTIV 2018, where I got the opportunity to learn more about my blockmates, be oriented about the history of the institution and what I can expect in college. As a freshman, I always feel that senior year was a distant thought. I remember being intimidated by my professors and the higher batch of thesis. That many students are unable to graduate on time because they are unable to pass and have been stuck in Benilde for years. When I finally get to my senior year, I\'m so nervous because I know this is the time when you\'re going to be heavily tested by taking ISPROJ-1 and ISPROJ-2. It\'s terrifying just thinking about it.  Now, there are only a few months until I graduate and we all put on our caps and gowns. A few months before our lives truly begin. This is for sure going to be one of the most significant event of my life. It will give me a sense of completion, it going to proved that all of my hard work pays off, and it’ll give me a greater appreciation for my opportunities.</p>\n' +
    '           <p className="fs-5 fw-light mt-4">Right now, I have a mixed of thousand of emotions and yet I have no words to describe it.\n' +
    '               There’s a lot of things I’ve learned and realized and I’m gonna tell you 3 of them.\n' +
    '           </p>\n' +
    '\n' +
    '           <hr/>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">Connect with Individuals from Different Backgrounds</h3>\n' +
    '               <p className="fs-5 fw-normal">This is probably one of the biggest adjustment I made once I enter benilde. There are so many students from different countries. This is the reason why I learn how to speak and communicate  in english confidently and fluently. I also learn to break out of my comfort zone and experiencing new cultures, cuisines, and traditions. From eating chinese foods, korean foods, european foods you name it. I experience all of this myself whenever I have a foreigner friend who is going to treat me for lunch or dinner.</p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">Self - Discipline</h3>\n' +
    '               <p className="fs-5 fw-normal">\n' +
    '                   With no one to look after you, self-discipline will become an important part of your college experience. Because distractions in the form of people and activities will continue to appear in front of you. You must learn to avoid them in the long run for your own safety. Self-discipline is one of the most important qualities of a student and should be instilled in them from the start because it will help them immensely in college when they are all alone, especially those living away from home. You must create and adhere to a study schedule.\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">Sometimes things don’t work out as planned</h3>\n' +
    '               <p className="fs-5 fw-normal">\n' +
    '                   Entering college, I have a lot of expectations for myself. I thought I’m going to graduate on time. I thought I’m going to graduate magna cum laude like my mom. Well, both of these did not work out. I was not able to graduate on time and got delay for 1 year because of my thesis. And as for the latter, poor decision making suich as choosing the best groupmates cost me to get higher grades.  So it’s safe to say that for me, college didn’t go as expected.\n' +
    '               </p>\n' +
    '               <p className="fs-5 fw-normal">\n' +
    '                   The biggest lesson I’ve learned from this is that life happens, but things still work out in the end.  For instance, most of my friends graduated the year before me. I was so scared about finishing school without them, but then I ended up winning the best thesis award. So things didn’t work out as I planned, but in some ways I think they’re better than what I thought they’d <be className=""></be>\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <hr/>\n' +
    '           <p className="fs-5 fw-lighter">\n' +
    '               Approaching the finish line, the question now is what should I do next? What are my career goals? To be honest I don’t know! I love and hate at the same time the uncertainty of life. I hate planning in advance – only to end up with nothing. This already happen to me!!\n' +
    '               But right now, in the next five years I see myself being a student again taking my master’s degree in computer science. I love studying!! Other than that, i don’t know. Probably I am going to take some certifications like ISACA because I want to develop my skills in information security.\n' +
    '           </p>'
;

const experientialLearning =
    '<p className="fs-5 fw-light mt-4">Every day is a new day which means each of us have the opportunity to learn and to experience something new. Every opportunity I receive no matter how big it is -- I always seize that. For me to learn from it and to use that experience for the betterment of not just me but to also share that knowledge to other people. Before I enter CSB, I have no idea what going to be my minor and major subject. All I know is that NSTP is going to be one of my subjects since it is mandatory to all college institution. As I choose CWTS as my program, I have no regrets at all and seize this opportunity to help the community in the best way I can be.</p>'
    + '<p className="fs-5 fw-light mt-4">It’s been a hell of an experience for me. With me traveling almost 1 hr from manila to las pinas it was fine for me although it was quite costly going to our designated area. But looking back, CWTS serves as a steppingstone for me to see things outside my boundary. I found a sense of fulfillment as I enjoyed every lesson and activities, we’ve prepared for our nanays in Markham Village. I believe that the things we shared to each other will help me in my effort to learn from it and succeed in the future. I\'ve learned that I should exercise my patience dealing with the people in the community. My fondest memory in the community service was the exposure trip on the very first week. It was when we got the chance to meet the people in the community. I really treasured that moment because it made us feel that they shared a part of their lives to us. I\'m very proud that I\'m one of the students who experienced it. It made me realize that I\'m really blessed and  served as an eye-opener for me. To be aware of the current situation not just in the community we have visited, but for the whole country. It was a process of influencing and directing activities towards goal accomplishment. </p>'
    + '<p className="fs-5 fw-light mt-4">Over-all, CWTS taught me three things: patience, deeper appreciation in life, and valuing education more. First, I learned how to be patient in terms of teaching nanay(s) in Markham village as well encouraging them to join us in our activities since most of them are busy working on their household activities. Each of them have different personalities so I have to extend my patience and be more flexible when it comes to teaching them. Second is deeper appreciation in life. I realized that I am more than blessed because I get to study in a good institution while others are struggling hard financially just to attend school every day. I also learned to value education more since this is the only foundation we build for our future.</p>'
    + '<p className="fs-5 fw-light mt-4">My community service is unforgettable, I\'m looking forward for the next upcoming NSTP class and hoping that they would not face the challenges we’ve face like the tardiness of my groupmates. This really affect our performance in terms of maximing our time as we wait for them before we start our activity. But as we progress week by week  we solved it by using the time to arrange the chairs and making sure that the materials we’ll use for the day is complete. We also used it to gather the participants so that when our groupmates arrive we can start immediately. Als, the most challenging part is the Gathering of participants since our participants is mothers they are often who do the household chores and it is very unfortunate that saturday is the day they do it and it is the same time as our immersion. It was solved by using the door to door technique, where we visit the house of each mother to find see if they can spare some time to participate and also asking for Nanay Jane’s help.</p>'
    + '<p className="fs-5 fw-light mt-4">For my recommendation to the upcoming NSTP class, I would recommend that each student must be prepared in all aspects of their service-learning. This includes a clear understanding of task and role, the skills and information required by the task, an awareness of safety precautions and knowledge about and sensitivity to the people with whom they will be working. Also, Students must know how to adjust their time upon travelling to the location as this would be one of the common factors that would cause delay on the given schedule for the activity.</p>'
;

const internshipLearning =
    '           <p className="fs-5 fw-light mt-4">\n' +
    '               My role of as an intern involves participation in all stages of the Software Development Life Cycle.\n' +
    '               i reports to  respective Solutions Managers of the projects I am deployed to,\n' +
    '               which may be short-term or long-term engagements.\n' +
    '               The projects may involve working closely with clients,\n' +
    '               or at times working off-site at the client’s location depending on the needs of the project\n' +
    '               and my own willingness.\n' +
    '               Clients can be customers or representatives of other groups within the company.\n' +
    '               Projects are usually team-based,\n' +
    '               where I am going to work alongside other Software Developer to deliver solutions to clients.\n' +
    '           </p>\n' +
    '           <hr/>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">\n' +
    '                   1. Transfer Dashboard module from backend service to report service\n' +
    '               </h3>\n' +
    '               <img className="img-fluid" src='+transfer+' />\n' +
    '               <p className="fs-5 fw-normal">\n' +
    '                   The red core solutions which is the organization I am working implements the micro-service pattern. Which means the application is divided into multiple services rather than one single entity. My very first task in the organization is to move source code from one service to the another which if you might guest from backend service to report service.\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">\n' +
    '                   2. Find a Vue.JS package for rendering charts\n' +
    '               </h3>\n' +
    '               <img className="img-fluid" src='+chartPackage+' />\n' +
    '               <p className="fs-5 fw-normal mt-3">\n' +
    '                   I was task to find any 3rd party vue.js chart package such that our life is going to be easier rather than creating it from scratch.\n' +
    '                   The first thing I did to accomplish this is so search “Top Vue.Js Chart Package” in google.\n' +
    '                   Then, I browse each websites listed by google and read each articles I see in order to use the most stable package\n' +
    '                   as much as possible and of course the one that is easier to use.\n' +
    '                   I ended up using vue-chartjs which is a wrapper for the plain chart js using plain javascript\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">3. Created vue charts components</h3>\n' +
    '               <img className="img-fluid" src='+chart+' />\n' +
    '               <p className="fs-5 fw-normal mt-3">\n' +
    '                   I already now have a 3rd party vue js package to use. The task to me now is to use the library to create reusable vue js  charts components that is going to be use by the organization.\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">4. Created Analytics and Summary Query</h3>\n' +
    '               <img className="img-fluid" src='+analytics+' />\n' +
    '               <p className="fs-5 fw-normal mt-3">\n' +
    '                   In relation to the previous mention task, how can we display charts without any data? So the goal of this task is to generate SQL queries using the LARAVEL ELOQUENT to get the data needed for each chart and return it in the API\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">5. Issue resolution cron service</h3>\n' +
    '               <img className="img-fluid" src='+cron+' />\n' +
    '               <p className="fs-5 fw-normal mt-3">\n' +
    '                   This task focuses on improving the existing cron service code base of red core.\n' +
    '                   I was task to double check and correct the code created by the old developers\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <div>\n' +
    '               <h3 className="fs-4 fw-semibold mt-3">6. Issue Resolution email enhancement</h3>\n' +
    '               <img className="img-fluid" src='+email+' />\n' +
    '               <p className="fs-5 fw-normal mt-3">\n' +
    '                   My final task in red core is just improving the email being sent to respective recipients.  I was task to add an additional code to the existing code base to include the notifier(the one who created the issue in the system) to the receipents of the email.\n' +
    '               </p>\n' +
    '           </div>\n' +
    '           <hr/>\n' +
    '           <p className="fs-5 fw-lighter">Overall, I learn a lot from my internship with red core. In fact, one of the biggest take away is what microservice is  all about. Before my internship, I am very curious what micro-service was since I hear it every time and such pattern was use by big companies like facebook. With my internship in red core I was able to experience Micro-service in action. I learn how they implement the pattern. What the pros and cons of it and how to implement it on my own.\n' +
    '           </p>\n'
;

export const articles: Array<Article> = [
    {
        id: 1,
        title: "Reflection on College Life",
        subtitle: "I discussed here the lessons I learned from college life and my plans moving forward",
        img: college,
        date: 'November 24, 2022',
        blog: collegeReflection
    },
    {
        id: 3,
        title: "Internship Learning",
        subtitle: "I list down here the tasks and output of my virtual internship.",
        img: 'https://www.studyinternational.com/wp-content/uploads/2020/12/virtual-internships.jpg',
        date: 'November 24, 2022',
        blog: internshipLearning
    },
    {
        id: 2,
        title: "One with the Plight of the poor",
        subtitle: "My reflection regarding my community service during my NSTP",
        img: NSTP,
        date: 'November 24, 2022',
        blog: experientialLearning
    },
];



