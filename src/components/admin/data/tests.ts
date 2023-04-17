export const TEST_TITLES = [
    {
        id: 1,
        createdDate: "20.02.2023",
        updatedDate: "17.04.2023",
        testTitle: "Matematika asoslari fanidan savollar",
        testCount: 10,
        testTimeLimit: 60,
        testStatus: false,
    },
    {
        id: 2,
        createdDate: "20.02.2023",
        updatedDate: "17.04.2023",
        testTitle: "Dasturlash tillari vazifalari haqida",
        testCount: 10,
        testTimeLimit: 60,
        testStatus: true,
    },
]

export const TESTS = [
    {
        id: 1,
        createdDate: "20.02.2023",
        updatedDate: "17.04.2023",
        testTitleId: 2,
        testTitle: "Dasturlash tillari vazifalari haqida",
        testQuestions: [
            {
                id: 1,
                createdDate: "20.02.2023",
                updatedDate: "17.04.2023",
                question: "Javascript dasturlash tili qaysi muhit uchun moslashtirilgan?",
                answers: [
                    {
                        id: 1,
                        answer: "Browser uchun",
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        answer: "Server uchun",
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        answer: "Aynan mobile telefonlar uchun",
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        answer: "Javascript dasturlash tili universal til hisoblanadi",
                        isCorrect: false,
                    },
                ]
            },
            {
                id: 1,
                createdDate: "20.02.2023",
                updatedDate: "17.04.2023",
                question: "Java dasturlash tili qaysi muhit uchun moslashtirilgan?",
                answers: [
                    {
                        id: 1,
                        answer: "Backend uchun",
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        answer: "Server uchun",
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        answer: "Aynan mobile telefonlar uchun",
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        answer: "Javascript dasturlash tili universal til hisoblanadi",
                        isCorrect: false,
                    },
                ]
            },
        ]
    }
]