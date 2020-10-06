module.exports = function toReadable (number) {
    let hundredths = Math.floor(number/100);
    let decimals = Math.floor((number - hundredths*100)/10)
    let singleNumber = number - hundredths*100 - decimals*10;

    let readableNumber = '';
    if (number === 0) {
        readableNumber = 'zero';
    }

    if (hundredths) {
        switch(hundredths) {
            case 1:
                readableNumber += 'one';
                break;
            case 2:
                readableNumber += 'two';
                break;
            case 3:
                readableNumber += 'three';
                break;
            case 4:
                readableNumber += 'four';
                break;
            case 5:
                readableNumber += 'five';
                break;
            case 6:
                readableNumber += 'six';
                break;
            case 7:
                readableNumber += 'seven';
                break;
            case 8:
                readableNumber += 'eight';
                break;
            case 9:
                readableNumber += 'nine';
                break;
        }
        readableNumber += ' hundred';
    }
    if (decimals) {
        switch(decimals) {
            case 1: 
                switch(singleNumber) {
                    case 0: 
                        readableNumber += ' ten';
                        break;
                    case 1:
                        readableNumber += ' eleven';
                        break;
                    case 2:
                        readableNumber += ' twelve';
                        break;
                    case 3:
                        readableNumber += ' thirteen';
                        break;
                    case 4:
                        readableNumber += ' fourteen';
                        break;
                    case 5:
                        readableNumber += ' fifteen';
                        break;
                    case 6:
                        readableNumber += ' sixteen';
                        break;
                    case 7:
                        readableNumber += ' seventeen';
                        break;
                    case 8: 
                        readableNumber += ' eighteen';
                        break;
                    case 9: 
                        readableNumber += ' nineteen';
                        break;
                }
                break;
            case 2: 
                readableNumber += ' twenty';
                break;
            case 3:
                readableNumber += ' thirty';
                break;
            case 4:
                readableNumber += ' forty';
                break;
            case 5:
                readableNumber += ' fifty';
                break;
            case 6: 
                readableNumber += ' sixty';
                break;
            case 7:
                readableNumber += ' seventy';
                break;
            case 8:
                readableNumber += ' eighty';
                break;
            case 9:
                readableNumber += ' ninety';
                break;
        }
    }

    if (decimals != 1) {
        switch(singleNumber) {
            case 1:
                readableNumber += ' one';
                break;
            case 2:
                readableNumber += ' two';
                break;
            case 3:
                readableNumber += ' three';
                break;
            case 4:
                readableNumber += ' four';
                break;
            case 5:
                readableNumber += ' five';
                break;
            case 6:
                readableNumber += ' six';
                break;
            case 7:
                readableNumber += ' seven';
                break;
            case 8:
                readableNumber += ' eight';
                break;
            case 9:
                readableNumber += ' nine';
                break;
        }
    }
    
    return readableNumber.trim();
}
