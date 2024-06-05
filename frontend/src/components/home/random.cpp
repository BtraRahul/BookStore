#include <iostream>
#include <stack>
#include <string>
using namespace std;

int applyOperation(char op, int b, int a) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}

int Calculator(string str) {
    stack<int> values;
    stack<char> ops;

    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ' ') {
            continue;
        } else if (str[i] >= '0' && str[i] <= '9') {
            int num = 0;
            while (i < str.length() && str[i] >= '0' && str[i] <= '9') {
                num = num * 10 + (str[i] - '0');
                i++;
            }
            values.push(num);
            i--;
        } else if (str[i] == '(') {
            ops.push(str[i]);
        } else if (str[i] == ')') {
            while (ops.top() != '(') {
                int val2 = values.top();
                values.pop();
                int val1 = values.top();
                values.pop();
                char op = ops.top();
                ops.pop();
                values.push(applyOperation(op, val2, val1));
            }
            ops.pop();
        } else if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
            while (!ops.empty() && ops.top() != '(' && ((str[i] == '*' || str[i] == '/') || (ops.top() == '+' || ops.top() == '-'))) {
                int val2 = values.top();
                values.pop();
                int val1 = values.top();
                values.pop();
                char op = ops.top();
                ops.pop();
                values.push(applyOperation(op, val2, val1));
            }
            ops.push(str[i]);
        }
    }

    while (!ops.empty()) {
        int val2 = values.top();
        values.pop();
        int val1 = values.top();
        values.pop();
        char op = ops.top();
        ops.pop();
        values.push(applyOperation(op, val2, val1));
    }

    return values.top();
}

int main() {
    cout << Calculator("6*(4/2)+3*1") << endl; // Output: 15
    cout << Calculator("6/3-1") << endl; // Output: 1
    return 0;
}
