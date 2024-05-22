// https://school.programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
    var answer = arr.filter(x => x % divisor == 0);
    
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

/*
function solution(arr, divisor) {
    var answer = [];
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    
    if (answer.length === 0) {
        answer.push(-1);
    } else {
         answer.sort((a,b) => a-b);
    }
    
    
    return answer;
}
*/
