const north = '^';
const south = 'v';
const west = '<';
const east = '>';
const directions = [north, south, west, east];

$(function() {
    includeNavbar();
    $("#start-button").click(function() {
        let input = $("#ta-input").val().trim();
        let compTime = $("#input-cb").prop("checked");
        let output = $("#p-output");

        let position = [0, 0];
        let santa = [0, 0];
        let roboSanta = [0, 0];
        let houses = new Set(["0-0"]);
        let housesYearTwo = new Set(["0-0"]);

        let isSanta = true;

        for(let index = 0; index < input.length; index++) {
            let char = input[index];

            setTimeout(() => {
                move(position, char)
                houses.add(toString(position));
                if (isSanta) {
                    move(santa, char);
                    housesYearTwo.add(toString(santa));
                    isSanta = !isSanta;
                } else {
                    move(roboSanta, char);
                    housesYearTwo.add(toString(roboSanta));
                    isSanta = !isSanta;
                }

                let status = parseInt(index) + 1 === input.length ? "Computing done" : "Computing..."
                output.html(`${status}<br><br>Year One:<br>Last House: X: ${position[0]} - Y: ${position[1]}<br>List of unique houses: ${houses.size}<br><br>Year Two:<br>Santa: X: ${santa[0]} - Y: ${santa[1]}<br>Robo-Santa: X: ${roboSanta[0]} - Y: ${roboSanta[1]}<br>List of unique houses: ${housesYearTwo.size}`);
            }, compTime ? 1 * index : 0);
        }
    });
});

function move(array, char) {
    array[0] += char === north;
    array[0] -= char === south;
    array[1] += char === west;
    array[1] -= char === east;
}

function toString(array) {
    return array[0] + "-" + array[1];
}