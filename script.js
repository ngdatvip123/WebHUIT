function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Vui lòng nhập số hợp lệ!";
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = "Không thể chia cho 0!";
                } else {
                    result = num1 / num2;
                }
                break;
        }
    }

    document.getElementById('result').innerText = `Kết quả: ${result}`;
}