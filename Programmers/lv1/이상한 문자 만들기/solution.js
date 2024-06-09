// https://school.programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
    var answer = '';
    
    var idx = 0;
    
    for (var i=0; i<s.length; i++) {
        var letter = s.substring(i, i+1);
        if (letter === " ") {
            idx = 0;
        } else if (idx % 2 == 0) {
            letter = letter.toUpperCase();
            idx++;
        } else {
            letter = letter.toLowerCase();
            idx++;
        }
        answer += letter;
    }
    return answer;
}



/*
function solution(s) {
    var answer = '';
    
    var idx = 0;
    for (var i=0; i<s.length; i++) {
        var letter = s.substring(i, i+1);
        if (letter === " ") {
            idx = 0;
            answer += letter;
            continue;
        }
        if (idx % 2 == 0) {
            answer += letter.toUpperCase();
        } else {
            answer += letter.toLowerCase();
        }
        idx++;
    }
    
    return answer;
    */
