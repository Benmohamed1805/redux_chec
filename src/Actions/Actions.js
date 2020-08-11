export const CountUp=()=>{
    return {type:"INCREMENT"}
}
export const Countdown=()=>{
    return{type:"DECREMENT"}
}
export const InCount=(a)=>{
    return {type:"COUNT",payload:a}
}