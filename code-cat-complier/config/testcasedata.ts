export const TestCaseData = [
    {
        id:1,
        isLock: false,
        input: "1,2,3,4,5",
        expectOutput: `7\n`
    },
    {
        id:2,
        isLock: false,
        input: "2,2,3,4",
        expectOutput: 5
    },
    {
        id:3,
        isLock: true,
        input: "1,2,4,4",
        expectOutput: 5
    },
    {
        id:4,
        isLock: true,
        input: "1,2,3,4",
        expectOutput: 5
    }
]