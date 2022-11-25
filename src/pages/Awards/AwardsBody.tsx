import React from 'react';


function AwardsBody() {
    return (
       <>
           <div>
               {/*<img className="img-fluid" src={ui2} />*/}
               <h3 className="fs-4 fw-semibold mt-3">1. CharitAble</h3>
               <p className="fs-5 fw-normal">
                   CharitAble is created as part of IS Capstone Project requirement. The goal is to develop a web application that will remove benefactors' barriers to charitable giving such as transparency, lack of information, and interaction. The project earned the best thesis award.
               </p>
               <a className="btn btn-outline-primary d-block d-md-inline"
                  href="https://github.com/simonpangan/charitAble"
                  target="_blank">
                   Source Code
               </a>
           </div>
           <div>
               <h3 className="fs-4 fw-semibold mt-3">2. The rise and fall of Pokemon Go</h3>
               <p className="fs-5 fw-normal">
                   The link below contains my answer to one of our quizzes in our IT-Audit class. It’s about the rise and fall of Pokemon Go, the gaming app. The exact feedback of my professor is “The best quiz output from your class. Congrats!”
               </p>
               <a className="btn btn-outline-primary d-block d-md-inline"
                  href="https://docs.google.com/document/d/1QU_KRNvzxEuufhFzxNFwMf77E2PqOFkrb8-VLpgt3Bg/edit?usp=sharing" target="_blank">
                   Link
               </a>
           </div>
           <div>
               {/*<img className="img-fluid" src={ui2} />*/}
               <h3 className="fs-4 fw-semibold mt-3">3. Inflow</h3>
               <p className="fs-5 fw-normal">
                   Inflow is short for Information Overflow.
                   It was created as part of the final academic project for the web development subject using the larave
                   l framework.
                   The goal of the project is to improve the existing flowchart of Benilde.
                   Surprisingly, we got an exception in our authorship exam in our class as this was awarded as one of the
                   top projects in our class
               </p>
               <a className="btn btn-outline-primary d-block d-md-inline"
                  href="https://github.com/simonpangan/BenildeProjects/tree/master/inflow-project"
                  target="_blank">
                   Source Code
               </a>
           </div>
       </>
    );
}

export default AwardsBody;