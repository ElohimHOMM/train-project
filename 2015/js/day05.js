const NEGATIVE_STRINGS = ["ab", "cd", "pq", "xy"];

$(function() {
    includeNavbar();

    $("#start-button").click(function() {
        let input = $("#ta-input").val().trim();
        let compTime = $("#input-cb").prop("checked");
        let output = $("#p-output");
        
        let lines = input.split("\n")

        let naughty_strings_1 = 0;
        let nice_strings_1 = 0;

        let naughty_strings_2 = 0;
        let nice_strings_2 = 0;

        for(let index in lines) {
            let line = lines[index];
            setTimeout(() => {
                if (containsAnyNegativeString(line) || 
                    doesNotContainDoubleLetter(line) ||
                    containsTwoOrLessVowels(line)) {
                    naughty_strings_1++;
                } else {
                    nice_strings_1++;
                }

                if (doesNotContainDoubleLetterWithSpace(line) || 
                    doesNotContainRepeatingString(line)) {
                    naughty_strings_2++;
                } else {
                    nice_strings_2++;
                }
                output.html(`Part One:<br>Naughty Strings: ${naughty_strings_1}<br>Nice Strings: ${nice_strings_1}<br><br>Part Two:<br>Naughty Strings: ${naughty_strings_2}<br>Nice Strings: ${nice_strings_2}`);
            }, compTime ? 1 * index : 0);
        };
    });
});

function containsAnyNegativeString(line) {
    for (let index in NEGATIVE_STRINGS) {
        if (line.includes(NEGATIVE_STRINGS[index])) {
            return true;
        }
    }
    return false;
}

function doesNotContainDoubleLetter(line) {
    lastLetter = line[0];
    for(let index in line) {
        if (index == 0) continue;
        if (line[index] === lastLetter) {
            return false
        }
        lastLetter = line[index]
    }
    return true;
}

function containsTwoOrLessVowels(line) {
    let vowels = 0;
    for(let index in line) {
        let letter = line[index];
        if (letter === 'a' || letter === 'e' ||  letter === 'i' || letter === 'o' || letter === 'u') {
            vowels++;
        }
    }
    return vowels < 3;
}

// -----------------------------------------------------------------------

function doesNotContainDoubleLetterWithSpace(line) {
    lastLetter = line[0];
    for(let index in line) {
        if (index == 0 || index == 1) continue;
        if (line[index] === lastLetter) {
            return false
        }
        lastLetter = line[index-1]
    }
    return true;
}

function doesNotContainRepeatingString(line) {
    return line.match(/([a-z][a-z])[a-z]*\1/);
}