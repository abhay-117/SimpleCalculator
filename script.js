function solve(method) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    axios.post('http://localhost:3002/' + method, {
        num1: parseInt(num1),
        num2: parseInt(num2)
    })
    .then(function (response) {
        if (response.data.answer !== undefined) {
            document.getElementById('head').innerHTML = 'Result: ' + response.data.answer;
        } else if (response.data.error) {
            document.getElementById('head').innerHTML = 'Error: ' + response.data.error;
        } else {
            document.getElementById('head').innerHTML = 'Unknown error!';
        }
    })
    .catch(function (error) {
        console.error("Error occurred:", error);
        document.getElementById('head').innerHTML = 'Error occurred!';
    });
}
