// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
    var answer = 0;
    
    var len = p.length;
    
    for (var i=0; i<t.length-len+1; i++) {
        if (Number(t.substring(i, i+len)) <= Number(p)) {
            answer++;
        }
    }
    
    return answer;
}
