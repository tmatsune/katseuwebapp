

export type clothesLis = {
    lisObj: {
        id: string;
        title: string;
        cost: number;
        quantity: number;
    }[]
}
export type clothesObj = {
    obj: {
        id: string;
        title: string;
        cost: number;
        quantity: number;
    }
}
export type clothesProps = {
    id: string;
    title: string;
    cost: number;
    quantity: number; 
}
let lis:string [] = [];
let nums:number [] = [];

const add = (x:number, y:number, z?: string):void => {
    let res:number = x + y;
    console.log(z);
}
const addRet = (x:number, y:number):number => {
    return x + y;
}


