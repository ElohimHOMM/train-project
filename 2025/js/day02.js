$(function () {
    includeNavbar();
    $("#start-button").click(function () {
        let input = $("#ta-input").val().trim().split("\n");
        let compTime = $("#input-cb").prop("checked");
        let degrees = 50;
        let output = $("#p-output");
        let zeroesPart1 = 0;
        let zeroesPart2 = 0;
        let zeroes = 0;

        for (let index in input) {
            let line = input[index]
            setTimeout(() => {
                let rotation = line.substring(1) % 100;
                let operation = line[0];
                zeroesPart2 += Math.floor(line.substring(1) / 100);

                if (operation == 'L') {
                    if (degrees < rotation) {
                        zeroesPart2 += 1;
                    }
                    rotation *= -1;
                    rotation += 100;
                } else if (operation == 'R') {
                    if ((100 - degrees) < rotation) {
                        zeroesPart2 += 1;
                    }
                }

                degrees += rotation;
                degrees %= 100;

                if (degrees == 0) {
                    zeroesPart1 += 1;
                    zeroesPart2 += 1;
                }
                output.html(`Rotation: ${rotation}<br>Operation: ${operation}<br>Degrees: ${degrees}<br>Part 1 Zeroes: ${zeroesPart1}<br>Part 2 Zeroes: ${zeroesPart2}`);
            }, compTime ? 1000 * index : 0);
        }
    });
});