import React from 'react';

import chart from '@/pages/Blog/Articles/Internship-Chart.png'
import transfer from '@/pages/Blog/Articles/Internship-service.png'
import analytics from '@/pages/Blog/Articles/Internship-analytics.png'
import chartPackage from '@/pages/Blog/Articles/Internship-package.png'
import email from '@/pages/Blog/Articles/Internship-Email.png'
import cron from '@/pages/Blog/Articles/Internship-cron.png'
import ArticleLayout from "@/components/Layout/ArticleLayout";


function BlogContentInfo() {
    return (
       <ArticleLayout>
           <p className="fs-5 fw-light mt-4">
               My role of as an intern involves participation in all stages of the Software Development Life Cycle.
               i reports to  respective Solutions Managers of the projects I am deployed to,
               which may be short-term or long-term engagements.
               The projects may involve working closely with clients,
               or at times working off-site at the client’s location depending on the needs of the project
               and my own willingness.
               Clients can be customers or representatives of other groups within the company.
               Projects are usually team-based,
               where I am going to work alongside other Software Developer to deliver solutions to clients.
           </p>
           <hr/>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">
                   1. Transfer Dashboard module from backend service to report service
               </h3>
               <img className="img-fluid" src={transfer} />
               <p className="fs-5 fw-normal">
                   The red core solutions which is the organization I am working implements the micro-service pattern. Which means the application is divided into multiple services rather than one single entity. My very first task in the organization is to move source code from one service to the another which if you might guest from backend service to report service.
               </p>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">
                   2. Find a Vue.JS package for rendering charts
               </h3>
               <img className="img-fluid" src={chartPackage} />
               <p className="fs-5 fw-normal mt-3">
                   I was task to find any 3rd party vue.js chart package such that our life is going to be easier rather than creating it from scratch.
                   The first thing I did to accomplish this is so search “Top Vue.Js Chart Package” in google.
                   Then, I browse each websites listed by google and read each articles I see in order to use the most stable package
                   as much as possible and of course the one that is easier to use.
                   I ended up using vue-chartjs which is a wrapper for the plain chart js using plain javascript
               </p>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">3. Created vue charts components</h3>
               <img className="img-fluid" src={chart} />
               <p className="fs-5 fw-normal mt-3">
                   I already now have a 3rd party vue js package to use. The task to me now is to use the library to create reusable vue js  charts components that is going to be use by the organization.
               </p>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">4. Created Analytics and Summary Query</h3>
               <img className="img-fluid" src={analytics} />
               <p className="fs-5 fw-normal mt-3">
                   In relation to the previous mention task, how can we display charts without any data? So the goal of this task is to generate SQL queries using the LARAVEL ELOQUENT to get the data needed for each chart and return it in the API
               </p>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">5. Issue resolution cron service</h3>
               <img className="img-fluid" src={cron} />
               <p className="fs-5 fw-normal mt-3">
                   This task focuses on improving the existing cron service code base of red core.
                   I was task to double check and correct the code created by the old developers
               </p>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">6. Issue Resolution email enhancement</h3>
               <img className="img-fluid" src={email} />
               <p className="fs-5 fw-normal mt-3">
                   My final task in red core is just improving the email being sent to respective recipients.  I was task to add an additional code to the existing code base to include the notifier(the one who created the issue in the system) to the receipents of the email.
               </p>
           </div>
           <hr/>
           <p className="fs-5 fw-lighter">Overall, I learn a lot from my internship with red core. In fact, one of the biggest take away is what microservice is  all about. Before my internship, I am very curious what micro-service was since I hear it every time and such pattern was use by big companies like facebook. With my internship in red core I was able to experience Micro-service in action. I learn how they implement the pattern. What the pros and cons of it and how to implement it on my own.
           </p>
       </ArticleLayout>
    );
}

export default BlogContentInfo;