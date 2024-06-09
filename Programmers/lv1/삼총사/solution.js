// https://school.programmers.co.kr/learn/courses/30/lessons/131705
function solution(number) {
    var answer = 0;
    
    var length = number.length;
    
    for (var i=0; i<length; i++) {
        for (var j=i+1; j<length; j++) {
            for (var k=j+1; k<length; k++) {           
                if (number[i] + number[j] + number[k] == 0) {
                    answer++;
                }
            }
        }
    }
    return answer;
}
