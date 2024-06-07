// https://school.programmers.co.kr/learn/courses/30/lessons/12918#
function solution(s) {
    var answer = false;

    if ((s.length === 4 || s.length === 6) && parseInt(s) == s) {
        answer = true;
    }
    
    return answer;
}
