// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    var answer = '';
    
    for (var i=1; i<food.length; i++) {
        var cnt = Math.floor(food[i] / 2);
        answer += String(i).repeat(cnt);
    }
    
    return answer + "0" + [...answer].reverse().join('');
}

/*
function solution(food) {
    var answer = '';
    
    for (var i=1; i<food.length; i++) {
        var cnt = Math.floor(food[i] / 2);
        answer += String(i).repeat(cnt);
    }
    var word = answer;
    answer += "0";
    
    for (var i=word.length-1; i>=0; i--) {
        answer += word[i];
    }
    
    
    return answer;
}
*/
