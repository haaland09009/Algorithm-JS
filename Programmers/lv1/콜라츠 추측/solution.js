// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
    var answer = 0;
    
    while (num != 1) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num * 3 +  1;
        }
        answer++;
        if (answer > 500) {
            answer = -1;
            break;
        }
    }
    
    return answer;
}
/*
function solution(num) {
    var answer = 0;
    
    if (num == 1) {
        return 0;
    }
    
    while (num != 1) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        answer++;
        if (answer == 500) {
            return -1;
        }
    }
    
    return answer;
}
*/
