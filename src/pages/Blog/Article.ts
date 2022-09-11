import Me from "../../assets/img/me.jpg";


export const articles: Array<Article> = [
    {
        title: "Button design tips to avoid common mistakes",
        subtitle: "Practical button design tips to avoid common usability and accessibility problems.",
        img: Me,
        date: 'April 11, 1999'
    },
    {
        title: "Button design tips to avoid common mistakes",
        subtitle: "Practical button design tips to avoid common usability and accessibility problems.",
        img: Me,
        date: 'April 11, 2000'
    },
];

export default  interface Article  {
    title: string,
    subtitle: string,
    img: string,
    date: string
};

