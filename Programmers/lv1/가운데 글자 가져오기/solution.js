// https://school.programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {

    return s.length % 2 == 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s.slice(s.length / 2, s.length / 2 + 1);
}
