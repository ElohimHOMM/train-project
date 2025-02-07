

$(function() {
    includeNavbar();
    $("#start-button").click(function() {
        let input = $("#ta-input").val();
        let floor = 0;
        let output = $("#p-output");
        let bufferString = '';
        let done = 1;
        let basement = false;
        let basement_cycle = 0;

        output.html("Computing...");
        
        for(let index in input) {
            let char = input[index];
            setTimeout(() => {
                if (bufferString.length > 50) {
                    bufferString = bufferString.slice(1, bufferString.length-1);
                }
                bufferString += char;

                if (char === '(') {
                    floor++;
                } else if (char === ')') {
                    floor--;
                }

                if(floor < 0 && basement == false) {
                    basement = true;
                    basement_cycle = parseInt(index) + 1;
                }
                let status = index + 1 === input.length ? "Computing done" : "Computing..."
                output.html(status + "<br>" + bufferString + "<br>Done: " + done + "/" + input.length + "<br>Basement entered: " + basement + (basement_cycle != 0 ? (" / " + basement_cycle) : "") + "<br>Floor: " + floor);
                done++;
            }, 1 * index);
        }
        output.html('Computing done<br>Floor: ' + floor)
    });
});