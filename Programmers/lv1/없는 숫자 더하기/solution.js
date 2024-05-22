// https://school.programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {

    var sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    
    return 45 - sum;
}
