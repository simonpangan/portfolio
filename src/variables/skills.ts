type Stack = {
    id: string | number,
    name: string
}

export const skills : Array<Stack> = [
    {
        id : 1,
        name: 'Laravel'
    },
    {
        id : 2,
        name: 'Vue.Js'
    },
    {
        id : 3,
        name: 'React'
    },
    {
        id : 4,
        name: 'Bootstrap'
    },
    {
        id : 5,
        name: 'Tailwind'
    },
    {
        id : 6,
        name: 'MySql'
    },
]

export const backend : Array<Stack> = [
    {
        id : 1,
        name: 'PHP'
    },
    {
        id : 2,
        name: 'Java'
    },
    {
        id : 3,
        name: 'Laravel'
    },
    {
        id : 4,
        name: 'MySql'
    },
    {
        id : 5,
        name: 'PostgreSQL'
    },
]

export const frontend : Array<Stack> = [
    {
        id : 1,
        name: 'Tailwind CSS'
    },
    {
        id : 2,
        name: 'Bootstrap'
    },
    {
        id : 3,
        name: 'Vue.JS'
    },
    {
        id : 4,
        name: 'React'
    },
    {
        id : 5,
        name: 'Javascript'
    },
]

export  const others : Array<Stack> = [
    {
        id: 1,
        name: 'Teaching'
    },
    {
        id: 2,
        name: 'Self-learning'
    },
];

export const techStack : {[key: string]: Array<Stack>} = {
    'Backend' : [
        ...backend
    ],
    'Frontend' : [
        ...frontend
    ],
    'Others' : [
        ...others
    ]
}