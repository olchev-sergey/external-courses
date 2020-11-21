const dataMockStorage = [
    {
        title: 'Backlog',
        issues: [
            {
                id: 'task1',
                name: 'Login page – performance issues',
            },
            {
                id: 'task2',
                name: 'Sprint bugfix',
            },
            {
                id: 'task3',
                name: 'Sprdsdsddsint bugfix',
            },
        ],
    },
    {
        title: 'Ready',
        issues: [
            {
                id: 'task1',
                name: 'Shop page – performance issues',
            },
            {
                id: 'task2',
                name: 'Checkout bugfix',
            },
            {
                id: 'task3',
                name: 'Shop bug1',
            },
            {
                id: 'task4',
                name: 'Shop bug2',
            },
            {
                id: 'task5',
                name: 'Shop bug3',
            },
            {
                id: 'task6',
                name: 'Shop bug4',
            },
            {
                id: 'task7',
                name: 'Shop bug5',
            },
            {
                id: 'task8',
                name: 'Shop bug6',
            },
            {
                id: 'task9',
                name: 'Shop page – performance issues',
            },
        ],
    },
    {
        title: 'In Progress',
        issues: [
            {
                id: 'task1',
                name: 'User page – performance issues',
            },
            {
                id: 'task2',
                name: 'Auth bugfix',
            },
        ],
    },
    {
        title: 'Finished',
        issues: [
            {
                id: 'task1',
                name: 'Main page – performance issues',
            },
            {
                id: 'task2',
                name: 'Main page bugfix',
            },
        ],
    },
];

if (!localStorage.getItem('dataMock')) {
    localStorage.setItem('dataMock', JSON.stringify(dataMockStorage));
}
