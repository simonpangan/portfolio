import NSTP from '@/pages/Blog/Articles/NSTP.jpg';
import college from '@/pages/Blog/Articles/college.jpg';

export default interface Article {
    id: number,
    title: string,
    subtitle: string,
    img: string,
    date: string,
    blog?: string
};

const experientialLearning =
    '<p className="fs-5 fw-light mt-4">Every day is a new day which means each of us have the opportunity to learn and to experience something new. Every opportunity I receive no matter how big it is -- I always seize that. For me to learn from it and to use that experience for the betterment of not just me but to also share that knowledge to other people. Before I enter CSB, I have no idea what going to be my minor and major subject. All I know is that NSTP is going to be one of my subjects since it is mandatory to all college institution. As I choose CWTS as my program, I have no regrets at all and seize this opportunity to help the community in the best way I can be.</p>'
    + '<p className="fs-5 fw-light mt-4">It’s been a hell of an experience for me. With me traveling almost 1 hr from manila to las pinas it was fine for me although it was quite costly going to our designated area. But looking back, CWTS serves as a steppingstone for me to see things outside my boundary. I found a sense of fulfillment as I enjoyed every lesson and activities, we’ve prepared for our nanays in Markham Village. I believe that the things we shared to each other will help me in my effort to learn from it and succeed in the future. I\'ve learned that I should exercise my patience dealing with the people in the community. My fondest memory in the community service was the exposure trip on the very first week. It was when we got the chance to meet the people in the community. I really treasured that moment because it made us feel that they shared a part of their lives to us. I\'m very proud that I\'m one of the students who experienced it. It made me realize that I\'m really blessed and  served as an eye-opener for me. To be aware of the current situation not just in the community we have visited, but for the whole country. It was a process of influencing and directing activities towards goal accomplishment. </p>'
    + '<p className="fs-5 fw-light mt-4">Over-all, CWTS taught me three things: patience, deeper appreciation in life, and valuing education more. First, I learned how to be patient in terms of teaching nanay(s) in Markham village as well encouraging them to join us in our activities since most of them are busy working on their household activities. Each of them have different personalities so I have to extend my patience and be more flexible when it comes to teaching them. Second is deeper appreciation in life. I realized that I am more than blessed because I get to study in a good institution while others are struggling hard financially just to attend school every day. I also learned to value education more since this is the only foundation we build for our future.</p>'
    + '<p className="fs-5 fw-light mt-4">My community service is unforgettable, I\'m looking forward for the next upcoming NSTP class and hoping that they would not face the challenges we’ve face like the tardiness of my groupmates. This really affect our performance in terms of maximing our time as we wait for them before we start our activity. But as we progress week by week  we solved it by using the time to arrange the chairs and making sure that the materials we’ll use for the day is complete. We also used it to gather the participants so that when our groupmates arrive we can start immediately. Als, the most challenging part is the Gathering of participants since our participants is mothers they are often who do the household chores and it is very unfortunate that saturday is the day they do it and it is the same time as our immersion. It was solved by using the door to door technique, where we visit the house of each mother to find see if they can spare some time to participate and also asking for Nanay Jane’s help.</p>'
    + '<p className="fs-5 fw-light mt-4">For my recommendation to the upcoming NSTP class, I would recommend that each student must be prepared in all aspects of their service-learning. This includes a clear understanding of task and role, the skills and information required by the task, an awareness of safety precautions and knowledge about and sensitivity to the people with whom they will be working. Also, Students must know how to adjust their time upon travelling to the location as this would be one of the common factors that would cause delay on the given schedule for the activity.</p>'
;

export const articles: Array<Article> = [
    {
        id: 1,
        title: "Reflections on College Life",
        subtitle: "I discussed here the lessons I learned from college life and my plans moving forward",
        img: college,
        date: 'November 24, 2022',
        blog: experientialLearning
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



