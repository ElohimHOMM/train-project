$(function() {
    includeNavbar();

    $("#start-button").click(function() {
        let input = $("#ta-input").val().split("\n");
        let output = $("#p-output");
        let wrappingPaperSqFeet = 0;
        let ribbonTotal = 0;

        output.html("Computing...");

        for(let index in input) {
            let element = input[index].split('x');
            setTimeout(() => {
                let length = element[0];
                let width = element[1];
                let height = element[2];

                let sides = [length * width, width * height, length * height];
                let slack = Math.min(...sides);
                wrappingPaperSqFeet += (2 * sides[0] + 2 * sides[1] + 2 * sides[2] + slack);

                let bow = length * width * height;
                let wrapLength = 0;
                if (sides.indexOf(slack) === 0) {
                    wrapLength = 2 * length + 2 * width;
                } else if (sides.indexOf(slack) === 1) {
                    wrapLength = 2 * width + 2 * height;
                } else if (sides.indexOf(slack) === 2) {
                    wrapLength = 2 * length + 2 * height;
                } else {
                    alert("Something went wrong...");
                }
                ribbonTotal += bow + wrapLength;

                let status = parseInt(index) + 1 === input.length ? "Computing done" : "Computing..."
                output.html(`${status}<br><br>Stats of last gift:<br>Length: ${length}<br>Width: ${width}<br>Height: ${height}<br>Smallest side (Slack): ${slack}<br>Bow Length: ${bow}<br>Wrap Ribbon Length: ${wrapLength}<br><br>Total Wrapping Paper Square Feet: ${wrappingPaperSqFeet}<br>Total Ribbon Length: ${ribbonTotal}`);
            }, 2 * index);
        }
    });
});