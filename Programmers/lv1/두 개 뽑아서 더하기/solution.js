// https://school.programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
    var answer = [];
    
    for (var i=0; i<numbers.length; i++) {
        for (var j=0; j<numbers.length; j++) {
            if (i !== j && answer.indexOf(numbers[i] + numbers[j]) === -1) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}
