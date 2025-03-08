// variables to store both, before-click and on-click background colors of buttons
const normLPinky = 'rgb(255, 160, 122)';
const lPinky = 'rgb(184, 83, 44)';

const normLRing = 'rgb(240, 128, 128)';
const lRing = 'rgb(180, 81, 81)';

const normLMiddle = 'rgb(119, 136, 153)';
const lMiddle = 'rgb(44, 88, 133)';

const normLIndex = 'rgb(135, 206, 250)';
const lIndex = 'rgb(49, 144, 204)';

const normRIndex = 'rgb(173, 216, 230)';
const rIndex = 'rgb(44, 119, 145)';

const normRMiddle = 'rgb(144, 238, 144)';
const rMiddle = 'rgb(60, 187, 60)';

const normRRing = 'rgb(255, 184, 194)';
const rRing = 'rgb(180, 70, 84)';

const normRPinky = 'rgb(255, 255, 155)';
const rPinky = 'rgb(192, 192, 52)';

const normCapslock = 'rgb(255, 222, 173)';
const capslock = 'rgb(194, 138, 54)';

const normSpaceAlt = 'rgb(32, 178, 170)';
const spaceAlt = 'rgb(9, 109, 104)';

const allAlphaUpper = () => {
    // function to convert all alphabets into uppercase
    document.querySelector('.Keyq').innerHTML = 'Q';
    document.querySelector('.Keyw').innerHTML = 'W';
    document.querySelector('.Keye').innerHTML = 'E';
    document.querySelector('.Keyr').innerHTML = 'R';
    document.querySelector('.Keyt').innerHTML = 'T';
    document.querySelector('.Keyy').innerHTML = 'Y';
    document.querySelector('.Keyu').innerHTML = 'U';
    document.querySelector('.Keyi').innerHTML = 'I';
    document.querySelector('.Keyo').innerHTML = 'O';
    document.querySelector('.Keyp').innerHTML = 'P';
    document.querySelector('.Keya').innerHTML = 'A';
    document.querySelector('.Keys').innerHTML = 'S';
    document.querySelector('.Keyd').innerHTML = 'D';
    document.querySelector('.Keyf').innerHTML = 'F';
    document.querySelector('.Keyg').innerHTML = 'G';
    document.querySelector('.Keyh').innerHTML = 'H';
    document.querySelector('.Keyj').innerHTML = 'J';
    document.querySelector('.Keyk').innerHTML = 'K';
    document.querySelector('.Keyl').innerHTML = 'L';
    document.querySelector('.Keyz').innerHTML = 'Z';
    document.querySelector('.Keyx').innerHTML = 'X';
    document.querySelector('.Keyc').innerHTML = 'C';
    document.querySelector('.Keyv').innerHTML = 'V';
    document.querySelector('.Keyb').innerHTML = 'B';
    document.querySelector('.Keyn').innerHTML = 'N';
    document.querySelector('.Keym').innerHTML = 'M';
}

const allAlphaLower = () => {
    // function to convert all alphabets into lowercase
    document.querySelector('.Keyq').innerHTML = 'q';
    document.querySelector('.Keyw').innerHTML = 'w';
    document.querySelector('.Keye').innerHTML = 'e';
    document.querySelector('.Keyr').innerHTML = 'r';
    document.querySelector('.Keyt').innerHTML = 't';
    document.querySelector('.Keyy').innerHTML = 'y';
    document.querySelector('.Keyu').innerHTML = 'u';
    document.querySelector('.Keyi').innerHTML = 'i';
    document.querySelector('.Keyo').innerHTML = 'o';
    document.querySelector('.Keyp').innerHTML = 'p';
    document.querySelector('.Keya').innerHTML = 'a';
    document.querySelector('.Keys').innerHTML = 's';
    document.querySelector('.Keyd').innerHTML = 'd';
    document.querySelector('.Keyf').innerHTML = 'f';
    document.querySelector('.Keyg').innerHTML = 'g';
    document.querySelector('.Keyh').innerHTML = 'h';
    document.querySelector('.Keyj').innerHTML = 'j';
    document.querySelector('.Keyk').innerHTML = 'k';
    document.querySelector('.Keyl').innerHTML = 'l';
    document.querySelector('.Keyz').innerHTML = 'z';
    document.querySelector('.Keyx').innerHTML = 'x';
    document.querySelector('.Keyc').innerHTML = 'c';
    document.querySelector('.Keyv').innerHTML = 'v';
    document.querySelector('.Keyb').innerHTML = 'b';
    document.querySelector('.Keyn').innerHTML = 'n';
    document.querySelector('.Keym').innerHTML = 'm';
}

const allShiftedSymbols = () => {
    // function which changes all the numericals and symbols to their shifted symbols
    document.querySelector('.Keyblacktick').innerHTML = '~';
    document.querySelector('.Keyone').innerHTML = '!';
    document.querySelector('.Keytwo').innerHTML = '@';
    document.querySelector('.Keythree').innerHTML = '#';
    document.querySelector('.Keyfour').innerHTML = '$';
    document.querySelector('.Keyfive').innerHTML = '%';
    document.querySelector('.Keysix').innerHTML = '^';
    document.querySelector('.Keyseven').innerHTML = '&';
    document.querySelector('.Keyeight').innerHTML = '*';
    document.querySelector('.Keynine').innerHTML = '(';
    document.querySelector('.Keyzero').innerHTML = ')';
    document.querySelector('.Keyminus').innerHTML = '_';
    document.querySelector('.KeyequalsTo').innerHTML = '+';
    document.querySelector('.KeyopenedBracket').innerHTML = '{';
    document.querySelector('.KeyclosedBracket').innerHTML = '}';
    document.querySelector('.KeybackSlash').innerHTML = '|';
    document.querySelector('.Keysemicolon').innerHTML = ':';
    document.querySelector('.Keyquote').innerHTML = '"';
    document.querySelector('.Keycomma').innerHTML = '<';
    document.querySelector('.Keyfullstop').innerHTML = '>';
    document.querySelector('.KeyfrontSlash').innerHTML = '?';
}

const allNonShiftedSymbols = () => {
    // function which changes all the numericals and symbols to their original numericals and symbols
    document.querySelector('.Keyblacktick').innerHTML = '`';
    document.querySelector('.Keyone').innerHTML = '1';
    document.querySelector('.Keytwo').innerHTML = '2';
    document.querySelector('.Keythree').innerHTML = '3';
    document.querySelector('.Keyfour').innerHTML = '4';
    document.querySelector('.Keyfive').innerHTML = '5';
    document.querySelector('.Keysix').innerHTML = '6';
    document.querySelector('.Keyseven').innerHTML = '7';
    document.querySelector('.Keyeight').innerHTML = '8';
    document.querySelector('.Keynine').innerHTML = '9';
    document.querySelector('.Keyzero').innerHTML = '0';
    document.querySelector('.Keyminus').innerHTML = '-';
    document.querySelector('.KeyequalsTo').innerHTML = '=';
    document.querySelector('.KeyopenedBracket').innerHTML = '[';
    document.querySelector('.KeyclosedBracket').innerHTML = ']';
    document.querySelector('.KeybackSlash').innerHTML = '\\';
    document.querySelector('.Keysemicolon').innerHTML = ';';
    document.querySelector('.Keyquote').innerHTML = "'";
    document.querySelector('.Keycomma').innerHTML = ',';
    document.querySelector('.Keyfullstop').innerHTML = '.';
    document.querySelector('.KeyfrontSlash').innerHTML = '/';
}

window.onload = () => {
    document.addEventListener('keyup', (event) => {
        //function mainly responsible for recognizing the first key press and fading out start message and then fading in the main keyboard
        const x = event.which || event.keyCode;
        if (typeof x == 'number') {
            document.querySelector('div.startMsg').classList.toggle('hideToggle');
            document.querySelector('div.keyboard').classList.toggle('showToggle');
            // $('div.startMsg').fadeOut('fast');
            // $('div.keyboard').fadeIn('slow');
        }
        document.getElementById('textArea').disabled = false; // enabling textarea after the first keyup event
        document.querySelector('#textArea').focus(); //textarea will be focused automatically when any key is pressed
    }, { once: true });

    window.addEventListener('mouseup', () => {
        document.querySelector('#textArea').focus(); //textarea will be focused automatically when even when the focus is out textarea, so textarea will never lose focus because that is what is important
    });
}

// variable to keep checking if capslock on or off and if it is either of them then certain capslocked or non-capslocked keys will be shown on the window
let isCapslockOn;
document.addEventListener('keydown', (e) => {
    // function to check over alphabets when capslock is either on or off
    if (e.getModifierState('CapsLock')) {
        isCapslockOn = true;
        document.querySelector('div.Keycapslock').style.color = 'rgb(120, 120, 25)'; // CAPSLOCK text color
        allAlphaUpper();
        if (e.getModifierState('KeyShift')) {
            allAlphaLower();
        }
    } else {
        isCapslockOn = false;
        document.querySelector('div.Keycapslock').style.color = 'black'; // CAPSLOCK text color
        allAlphaLower();
        if (e.getModifierState('KeyShift')) {
            allAlphaUpper();
        }
    }
});

document.addEventListener('keydown', (event) => {
    // Events which will happen if a specific key is pressed Down
    // Events refers to highlight of specific key when that specific key is pressed on keyboard
    const e = event.which;
    switch (e) {
        case 192:
            document.querySelector('div.Keyblacktick').style.backgroundColor = lPinky;
            break;
        case 49:
            document.querySelector('div.Keyone').style.backgroundColor = lPinky;
            break;
        case 50:
            document.querySelector('div.Keytwo').style.backgroundColor = lRing;
            break;
        case 51:
            document.querySelector('div.Keythree').style.backgroundColor = lMiddle;
            break;
        case 52:
            document.querySelector('div.Keyfour').style.backgroundColor = lIndex;
            break;
        case 53:
            document.querySelector('div.Keyfive').style.backgroundColor = lIndex;
            break;
        case 54:
            document.querySelector('div.Keysix').style.backgroundColor = rIndex;
            break;
        case 55:
            document.querySelector('div.Keyseven').style.backgroundColor = rIndex;
            break;
        case 56:
            document.querySelector('div.Keyeight').style.backgroundColor = rMiddle;
            break;
        case 57:
            document.querySelector('div.Keynine').style.backgroundColor = rRing;
            break;
        case 48:
            document.querySelector('div.Keyzero').style.backgroundColor = rPinky;
            break;
        case 189 || 173:
            document.querySelector('div.Keyminus').style.backgroundColor = rPinky;
            break;
        case 187 || 61:
            document.querySelector('div.KeyequalsTo').style.backgroundColor = rPinky;
            break;
        case 8:
            document.querySelector('div.Keybackspace').style.backgroundColor = rPinky;
            break;
        case 9:
            event.preventDefault();
            document.getElementById('textArea').value += '    ';
            document.querySelector('div.Keytab').style.backgroundColor = lPinky;
            break;
        case 81:
            document.querySelector('div.Keyq').style.backgroundColor = lPinky;
            break;
        case 87:
            document.querySelector('div.Keyw').style.backgroundColor = lRing;
            break;
        case 69:
            document.querySelector('div.Keye').style.backgroundColor = lMiddle;
            break;
        case 82:
            document.querySelector('div.Keyr').style.backgroundColor = lIndex;
            break;
        case 84:
            document.querySelector('div.Keyt').style.backgroundColor = lIndex;
            break;
        case 89:
            document.querySelector('div.Keyy').style.backgroundColor = rIndex;
            break;
        case 85:
            document.querySelector('div.Keyu').style.backgroundColor = rIndex;
            break;
        case 73:
            document.querySelector('div.Keyi').style.backgroundColor = rMiddle;
            break;
        case 79:
            document.querySelector('div.Keyo').style.backgroundColor = rRing;
            break;
        case 80:
            document.querySelector('div.Keyp').style.backgroundColor = rPinky;
            break;
        case 219:
            document.querySelector('div.KeyopenedBracket').style.backgroundColor = rPinky;
            break;
        case 221:
            document.querySelector('div.KeyclosedBracket').style.backgroundColor = rPinky;
            break;
        case 220:
            document.querySelector('div.KeybackSlash').style.backgroundColor = rPinky;
            break;
        case 20:
            document.querySelector('div.Keycapslock').style.backgroundColor = capslock;
            break;
        case 65:
            document.querySelector('div.Keya').style.backgroundColor = lPinky;
            break;
        case 83:
            document.querySelector('div.Keys').style.backgroundColor = lRing;
            break;
        case 68:
            document.querySelector('div.Keyd').style.backgroundColor = lMiddle;
            break;
        case 70:
            document.querySelector('div.Keyf').style.backgroundColor = lIndex;
            break;
        case 71:
            document.querySelector('div.Keyg').style.backgroundColor = lIndex;
            break;
        case 72:
            document.querySelector('div.Keyh').style.backgroundColor = rIndex;
            break;
        case 74:
            document.querySelector('div.Keyj').style.backgroundColor = rIndex;
            break;
        case 75:
            document.querySelector('div.Keyk').style.backgroundColor = rMiddle;
            break;
        case 76:
            document.querySelector('div.Keyl').style.backgroundColor = rRing;
            break;
        case 186:
            document.querySelector('div.Keysemicolon').style.backgroundColor = rPinky;
            break;
        case 222:
            document.querySelector('div.Keyquote').style.backgroundColor = rPinky;
            break;
        case 13:
            document.querySelector('div.Keyenter').style.backgroundColor = rPinky;
            break;
        case 16:
            document.querySelector('div.KeylShift').style.backgroundColor = lPinky;
            document.querySelector('div.KeyrShift').style.backgroundColor = rPinky;
            allShiftedSymbols();
            isCapslockOn ? allAlphaLower() : allAlphaUpper();
            break;
        case 90:
            document.querySelector('div.Keyz').style.backgroundColor = lPinky;
            break;
        case 88:
            document.querySelector('div.Keyx').style.backgroundColor = lRing;
            break;
        case 67:
            document.querySelector('div.Keyc').style.backgroundColor = lMiddle;
            break;
        case 86:
            document.querySelector('div.Keyv').style.backgroundColor = lIndex;
            break;
        case 66:
            document.querySelector('div.Keyb').style.backgroundColor = lIndex;
            break;
        case 78:
            document.querySelector('div.Keyn').style.backgroundColor = rIndex;
            break;
        case 77:
            document.querySelector('div.Keym').style.backgroundColor = rIndex;
            break;
        case 188:
            document.querySelector('div.Keycomma').style.backgroundColor = rMiddle;
            break;
        case 190:
            document.querySelector('div.Keyfullstop').style.backgroundColor = rRing;
            break;
        case 191:
            document.querySelector('div.KeyfrontSlash').style.backgroundColor = rPinky;
            break;
        case 17:
            document.querySelector('div.KeylCtrl').style.backgroundColor = lPinky;
            document.querySelector('div.KeyrCtrl').style.backgroundColor = rPinky;
            break;
        case 91:
            document.querySelector('div.Keywin').style.backgroundColor = lPinky;
            break;
        case 18:
            event.preventDefault();
            document.querySelector('div.KeylAlt').style.backgroundColor = spaceAlt;
            document.querySelector('div.KeyrAlt').style.backgroundColor = spaceAlt;
            break;
        case 32:
            document.querySelector('div.Keyspace').style.backgroundColor = spaceAlt;
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', (event) => {
    // Events which will happen if a specific key is pressed Up
    // Events refers to de-emphasize/normal-state of specific key when that specific key is pressed up on keyboard
    const e = event.which;
    switch (e) {
        case 192:
            document.querySelector('div.Keyblacktick').style.backgroundColor = normLPinky;
            break;
        case 49:
            document.querySelector('div.Keyone').style.backgroundColor = normLPinky;
            break;
        case 50:
            document.querySelector('div.Keytwo').style.backgroundColor = normLRing;
            break;
        case 51:
            document.querySelector('div.Keythree').style.backgroundColor = normLMiddle;
            break;
        case 52:
            document.querySelector('div.Keyfour').style.backgroundColor = normLIndex;
            break;
        case 53:
            document.querySelector('div.Keyfive').style.backgroundColor = normLIndex;
            break;
        case 54:
            document.querySelector('div.Keysix').style.backgroundColor = normRIndex;
            break;
        case 55:
            document.querySelector('div.Keyseven').style.backgroundColor = normRIndex;
            break;
        case 56:
            document.querySelector('div.Keyeight').style.backgroundColor = normRMiddle;
            break;
        case 57:
            document.querySelector('div.Keynine').style.backgroundColor = normRRing;
            break;
        case 48:
            document.querySelector('div.Keyzero').style.backgroundColor = normRPinky;
            break;
        case 189 || 173:
            document.querySelector('div.Keyminus').style.backgroundColor = normRPinky;
            break;
        case 187 || 61:
            document.querySelector('div.KeyequalsTo').style.backgroundColor = normRPinky;
            break;
        case 8:
            document.querySelector('div.Keybackspace').style.backgroundColor = normRPinky;
            break;
        case 9:
            document.querySelector('div.Keytab').style.backgroundColor = normLPinky;
            break;
        case 81:
            document.querySelector('div.Keyq').style.backgroundColor = normLPinky;
            break;
        case 87:
            document.querySelector('div.Keyw').style.backgroundColor = normLRing;
            break;
        case 69:
            document.querySelector('div.Keye').style.backgroundColor = normLMiddle;
            break;
        case 82:
            document.querySelector('div.Keyr').style.backgroundColor = normLIndex;
            break;
        case 84:
            document.querySelector('div.Keyt').style.backgroundColor = normLIndex;
            break;
        case 89:
            document.querySelector('div.Keyy').style.backgroundColor = normRIndex;
            break;
        case 85:
            document.querySelector('div.Keyu').style.backgroundColor = normRIndex;
            break;
        case 73:
            document.querySelector('div.Keyi').style.backgroundColor = normRMiddle;
            break;
        case 79:
            document.querySelector('div.Keyo').style.backgroundColor = normRRing;
            break;
        case 80:
            document.querySelector('div.Keyp').style.backgroundColor = normRPinky;
            break;
        case 219:
            document.querySelector('div.KeyopenedBracket').style.backgroundColor = normRPinky;
            break;
        case 221:
            document.querySelector('div.KeyclosedBracket').style.backgroundColor = normRPinky;
            break;
        case 220:
            document.querySelector('div.KeybackSlash').style.backgroundColor = normRPinky;
            break;
        case 20:
            document.querySelector('div.Keycapslock').style.backgroundColor = normCapslock;
            break;
        case 65:
            document.querySelector('div.Keya').style.backgroundColor = normLPinky;
            break;
        case 83:
            document.querySelector('div.Keys').style.backgroundColor = normLRing;
            break;
        case 68:
            document.querySelector('div.Keyd').style.backgroundColor = normLMiddle;
            break;
        case 70:
            document.querySelector('div.Keyf').style.backgroundColor = normLIndex;
            break;
        case 71:
            document.querySelector('div.Keyg').style.backgroundColor = normLIndex;
            break;
        case 72:
            document.querySelector('div.Keyh').style.backgroundColor = normRIndex;
            break;
        case 74:
            document.querySelector('div.Keyj').style.backgroundColor = normRIndex;
            break;
        case 75:
            document.querySelector('div.Keyk').style.backgroundColor = normRMiddle;
            break;
        case 76:
            document.querySelector('div.Keyl').style.backgroundColor = normRRing;
            break;
        case 186:
            document.querySelector('div.Keysemicolon').style.backgroundColor = normRPinky;
            break;
        case 222:
            document.querySelector('div.Keyquote').style.backgroundColor = normRPinky;
            break;
        case 13:
            document.querySelector('div.Keyenter').style.backgroundColor = normRPinky;
            break;
        case 16:
            document.querySelector('div.KeylShift').style.backgroundColor = normLPinky;
            document.querySelector('div.KeyrShift').style.backgroundColor = normRPinky;
            allNonShiftedSymbols();
            isCapslockOn ? allAlphaUpper() : allAlphaLower();
            break;
        case 90:
            document.querySelector('div.Keyz').style.backgroundColor = normLPinky;
            break;
        case 88:
            document.querySelector('div.Keyx').style.backgroundColor = normLRing;
            break;
        case 67:
            document.querySelector('div.Keyc').style.backgroundColor = normLMiddle;
            break;
        case 86:
            document.querySelector('div.Keyv').style.backgroundColor = normLIndex;
            break;
        case 66:
            document.querySelector('div.Keyb').style.backgroundColor = normLIndex;
            break;
        case 78:
            document.querySelector('div.Keyn').style.backgroundColor = normRIndex;
            break;
        case 77:
            document.querySelector('div.Keym').style.backgroundColor = normRIndex;
            break;
        case 188:
            document.querySelector('div.Keycomma').style.backgroundColor = normRMiddle;
            break;
        case 190:
            document.querySelector('div.Keyfullstop').style.backgroundColor = normRRing;
            break;
        case 191:
            document.querySelector('div.KeyfrontSlash').style.backgroundColor = normRPinky;
            break;
        case 17:
            document.querySelector('div.KeylCtrl').style.backgroundColor = normLPinky;
            document.querySelector('div.KeyrCtrl').style.backgroundColor = normRPinky;
            break;
        case 91:
            document.querySelector('div.Keywin').style.backgroundColor = normLPinky;
            break;
        case 18:
            document.querySelector('div.KeylAlt').style.backgroundColor = normSpaceAlt;
            document.querySelector('div.KeyrAlt').style.backgroundColor = normSpaceAlt;
            break;
        case 32:
            document.querySelector('div.Keyspace').style.backgroundColor = normSpaceAlt;
            break;
        default:
            break;
    }
});

window.addEventListener('blur', () => {
    // function to bring all keys to their normal color in the case when window's focus is lost due to any case and if any key is prevented from keydown at that moment when focus was lost, so this function can resolve the problem and won't let happen that mess in frontend
    document.querySelector('div.Keyblacktick').style.backgroundColor = normLPinky;
    document.querySelector('div.Keyone').style.backgroundColor = normLPinky;
    document.querySelector('div.Keytwo').style.backgroundColor = normLRing;
    document.querySelector('div.Keythree').style.backgroundColor = normLMiddle;
    document.querySelector('div.Keyfour').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyfive').style.backgroundColor = normLIndex;
    document.querySelector('div.Keysix').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyseven').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyeight').style.backgroundColor = normRMiddle;
    document.querySelector('div.Keynine').style.backgroundColor = normRRing;
    document.querySelector('div.Keyzero').style.backgroundColor = normRPinky;
    document.querySelector('div.Keyminus').style.backgroundColor = normRPinky;
    document.querySelector('div.KeyequalsTo').style.backgroundColor = normRPinky;
    document.querySelector('div.Keybackspace').style.backgroundColor = normRPinky;
    document.querySelector('div.Keytab').style.backgroundColor = normLPinky;
    document.querySelector('div.Keyq').style.backgroundColor = normLPinky;
    document.querySelector('div.Keyw').style.backgroundColor = normLRing;
    document.querySelector('div.Keye').style.backgroundColor = normLMiddle;
    document.querySelector('div.Keyr').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyt').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyy').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyu').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyi').style.backgroundColor = normRMiddle;
    document.querySelector('div.Keyo').style.backgroundColor = normRRing;
    document.querySelector('div.Keyp').style.backgroundColor = normRPinky;
    document.querySelector('div.KeyopenedBracket').style.backgroundColor = normRPinky;
    document.querySelector('div.KeyclosedBracket').style.backgroundColor = normRPinky;
    document.querySelector('div.KeybackSlash').style.backgroundColor = normRPinky;
    document.querySelector('div.Keycapslock').style.backgroundColor = normCapslock;
    document.querySelector('div.Keya').style.backgroundColor = normLPinky;
    document.querySelector('div.Keys').style.backgroundColor = normLRing;
    document.querySelector('div.Keyd').style.backgroundColor = normLMiddle;
    document.querySelector('div.Keyf').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyg').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyh').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyj').style.backgroundColor = normRIndex;
    document.querySelector('div.Keyk').style.backgroundColor = normRMiddle;
    document.querySelector('div.Keyl').style.backgroundColor = normRRing;
    document.querySelector('div.Keysemicolon').style.backgroundColor = normRPinky;
    document.querySelector('div.Keyquote').style.backgroundColor = normRPinky;
    document.querySelector('div.Keyenter').style.backgroundColor = normRPinky;
    document.querySelector('div.KeylShift').style.backgroundColor = normLPinky;
    document.querySelector('div.KeyrShift').style.backgroundColor = normRPinky;
    document.querySelector('div.Keyz').style.backgroundColor = normLPinky;
    document.querySelector('div.Keyx').style.backgroundColor = normLRing;
    document.querySelector('div.Keyc').style.backgroundColor = normLMiddle;
    document.querySelector('div.Keyv').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyb').style.backgroundColor = normLIndex;
    document.querySelector('div.Keyn').style.backgroundColor = normRIndex;
    document.querySelector('div.Keym').style.backgroundColor = normRIndex;
    document.querySelector('div.Keycomma').style.backgroundColor = normRMiddle;
    document.querySelector('div.Keyfullstop').style.backgroundColor = normRRing;
    document.querySelector('div.KeyfrontSlash').style.backgroundColor = normRPinky;
    document.querySelector('div.KeylCtrl').style.backgroundColor = normLPinky;
    document.querySelector('div.KeyrCtrl').style.backgroundColor = normRPinky;
    document.querySelector('div.Keywin').style.backgroundColor = normLPinky;
    document.querySelector('div.KeylAlt').style.backgroundColor = normSpaceAlt;
    document.querySelector('div.KeyrAlt').style.backgroundColor = normSpaceAlt;
    document.querySelector('div.Keyspace').style.backgroundColor = normSpaceAlt;
});
