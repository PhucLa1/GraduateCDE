export type testCase = {
    id:number,
    isLock: boolean,
    input: any,
    expectOutput: any,
    realityOutput?: any,
    timeProcess?:number
}