const umrechnung = {
    '<': 0,
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15, 'g': 16, 'h': 17,
    'i': 18, 'j': 19, 'k': 20, 'l': 21, 'm': 22, 'n': 23, 'o': 24, 'p': 25,
    'q': 26, 'r': 27, 's': 28, 't': 29, 'u': 30, 'v': 31, 'w': 32, 'x': 33,
    'y': 34, 'z': 35
};

function charValue(c) {
    if (umrechnung[c.toLowerCase()] !== undefined) return umrechnung[c.toLowerCase()];
    return parseInt(c, 10) || 0
}

function checkDigit(input) {
    const weights = [7, 3, 1];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += charValue(input[i]) * weights[i % 3];
    }
    return sum % 10;
}



function validateInputs(did, birthday, expiration, version, gpz) {
    let ret = "";
    if (!did || !birthday || !expiration || !version || !gpz) {
        ret += "<span class='text-danger'>Nicht alle Felder sind ausgefüllt.</span>";
    }
    if (did.length !== 9 || !/^[\da-zA-Z]{9}$/.test(did)) {
        if (ret !== "") ret += "<br>"
        ret += "<span class='text-danger'>Die Ausweisnummer muss exakt 9 Ziffern oder Buchstaben lang sein.</span>";
    }
    if (birthday.length !== 6 || !/^\d{6}$/.test(birthday)) {
        if (ret !== "") ret += "<br>"
        ret += "<span class='text-danger'>Das Geburtsdatum muss exakt 6 Ziffern lang sein.</span>";
    }
    if (expiration.length !== 6 || !/^\d{6}$/.test(expiration)) {
        if (ret !== "") ret += "<br>"
        ret += "<span class='text-danger'>Das Ablaufdatum muss exakt 6 Ziffern lang sein.</span>";
    }
    if (version.length !== 4 || !/^\d{4}$/.test(version)) {
        if (ret !== "") ret += "<br>"
        ret += "<span class='text-danger'>Die Version muss exakt 4 Ziffern lang sein.</span>";
    }
    if (gpz.length !== 1 || !/^\d$/.test(gpz)) {
        if (ret !== "") ret += "<br>"
        ret += "<span class='text-danger'>Die GPZ muss exakt 1 Ziffer lang sein.</span>";
    }
    return ret;
}

$(function () {
    includeNavbar();
    const didInput = $("#did-input");
    const birthdayInput = $("#birthday-input");
    const expirationInput = $("#expiration-input");
    const versionInput = $("#version-input");
    const gpzInput = $("#gpz-input");
    const output = $("#p-output");

    $("#start-button").click(function () {
        const did = didInput.val().trim();
        const birthday = birthdayInput.val().trim();
        const expiration = expirationInput.val().trim();
        const version = versionInput.val().trim();
        const gpz = gpzInput.val().trim();
        const versionsToggle = $("#input-cb").prop("checked");

        let outputText = validateInputs(did, birthday, expiration, version, gpz);
        if (outputText !== "") {
            output.html(outputText);
            return;
        }

        const p_did = checkDigit(did);
        const p_birth = checkDigit(birthday);
        const p_exp = checkDigit(expiration);

        const gpzString = did + p_did + birthday + p_birth + expiration + p_exp + (versionsToggle ? version : "");

        const p_total = checkDigit(gpzString);
        const isCorrect = p_total.toString() === gpz;

        outputText = `
            <div class='row'>
                <div class='col'>
                    <h4>Einzelprüfziffern</h4>
                    Dokumentennummer: ${did} → Prüfziffer <strong>${p_did}</strong><br>
                    Geburtsdatum: ${birthday} → Prüfziffer <strong>${p_birth}</strong><br>
                    Ablaufdatum: ${expiration} → Prüfziffer <strong>${p_exp}</strong><br>
                    ${versionsToggle ?
                `Version/Optionaldaten: ${version}</strong><br>` :
                `<span class='text-danger'>Versionsnummer wird nicht berücksichtigt.</span><br>`}
                </div>
                <div class='col'>
                    <h4>Gesamtprüfziffer</h4>
                    Verketteter String:<br>
                    <code>${gpzString}</code><br>
                    Berechnete Gesamtprüfziffer: <strong>${p_total}</strong><br>
                    Erwartete GPZ: <strong>${gpz}</strong><br>
                    ${isCorrect
                ? "<div class='text-success'>✅ Stimmt überein.</div>"
                : "<div class='text-danger'>❌ Stimmt nicht überein.</div>"
            }
                </div>
            </div>
        `;

        output.html(outputText);
    });
});