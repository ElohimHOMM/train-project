$(function() {
    includeNavbar();

    $("#start-button").click(function() {
        let input = $("#ta-input").val().trim();
        let compTime = $("#input-cb").prop("checked");
        let output = $("#p-output");

        let salt = 0;
        let key = md5(input + salt);

        output.html(`Computing...<br><br>Input: ${input + salt}<br>Key: ${key}`);
        while (key.slice(0, 6) !== '000000') {
            salt++;
            key = md5(input + salt);
            console.log(salt);
        }
    });
});