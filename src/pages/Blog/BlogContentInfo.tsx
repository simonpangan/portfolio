import React from 'react';

import ui1 from '../../assets/img/ui-is-communication-ui-design-book.jpg';
import ui2 from '../../assets/img/ui-design-book-pages-adham-dannaway-2000x993.jpg';


function BlogContentInfo() {
    return (
       <>
           <p className="fs-5 fw-light mt-4">Contrary to popular belief, user interface design isn’t just about
               creating pretty pixels. Of course, making an interface look great is important, but there’s much more to
               it than that. Learning the how and why behind interface design will ensure that every design detail has
               a logical purpose behind it.</p>
           <p className="fs-5 fw-light mt-4">Contrary to popular belief, user interface design isn’t just about
               creating pretty pixels. Of course, making an interface look great is important, but there’s much more to
               it than that. Learning the how and why behind interface design will ensure that every design detail has
               a logical purpose behind it.</p>
           <p className="fs-5 fw-light mt-4">Contrary to popular belief, user interface design isn’t just about
               creating pretty pixels. Of course, making an interface look great is important, but there’s much more to
               it than that. Learning the how and why behind interface design will ensure that every design detail has
               a logical purpose behind it.</p>
           <p className="fs-5 fw-light mt-4">
               I’m also writing my own <a href="#">UI design book&nbsp;</a>
               &nbsp;to
               provide a faster and more practical way to learn UI design. Solve almost any UI design problem with a
               handful of powerful guidelines. You don’t need to be creative or artistic, just apply the guidelines
               systematically based on objective logic. Check it out.</p>
           <img className="img-fluid" src={ui1} />
           <hr/>
           <h2 className="mt-4">My top 3 UI design books</h2>
           <p className="fs-5 fw-light mt-2">I’d suggest reading these first as they cover the essentials:
               practical UI design tools and fundamentals, the psychology behind an interface, and the business
               side of persuasion and selling.</p>
           <div>
               <img className="img-fluid" src={ui2} />
               <h3 className="fs-4 fw-semibold mt-3">1. UI is Communication</h3>
               <p className="text-muted">By Everett N McKay</p>
               <p className="fs-5 fw-normal">This book is not about detailed theories; instead, it focuses on
                   providing you with the practical tools you need to solve real-life UI design problems. UI
                   design
                   is often seen in a very subjective way, as pretty pixels on a screen. The author’s premise
                   is
                   that it’s not about aesthetics – rather, UI design is actually an objective way to
                   communicate
                   to users. I like how an interface is compared to a conversation. What should it say to the
                   user,
                   how should it say it and when? Simply writing down the conversation between the interface
                   and
                   the user can lay a strong foundation for the UI design. There are plenty of real examples
                   and
                   design makeovers to help you see the concepts in practice, too, which is helpful.</p>
               <p className="fs-5 fw-bolder text-primary">
                   A great read for designers looking for objective, practical UI design tools to solve real-life
                   problems.
               </p>
               <a className="btn btn-outline-primary d-block d-md-inline" href="#">Link </a>
           </div>
           <hr/>
           <p className="fs-5 fw-lighter">I hope you’ve found this round-up of UI design books helpful in your
               search for your next read. Let me know if you’ve read any other great UI design books too, as
               I’m always looking to expand my reading list. I’ve also put together a list of&nbsp;&nbsp;<span
                   className="text-decoration-underline">my favourite UX design books</span>&nbsp;in case
               you’re interested. Happy reading.<br/>
           </p>
           <p className="fs-5 fw-light">
               <em>As an Amazon Associate I earn from qualifying purchases.</em>
           </p>
       </>
    );
}

export default BlogContentInfo;