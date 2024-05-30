function manipulatePassword(input) {
    let password = input[0];

    let isUpperCase = char => /[A-Z]/.test(char);
    let isLowerCase = char => /[a-z]/.test(char);
    let isDigit = char => /\d/.test(char);
    let isValidChar = char => /[a-zA-Z0-9_]/.test(char);

    let validatePassword = () => {
        if (password.length < 8) {
            console.log("Password must be at least 8 characters long!");
            return false;
        }
        if (!password.split('').every(isValidChar)) {
            console.log("Password must consist only of letters, digits and _!");
            return false;
        }
        if (!password.split('').some(isUpperCase)) {
            console.log("Password must consist at least one uppercase letter!");
            return false;
        }
        if (!password.split('').some(isLowerCase)) {
            console.log("Password must consist at least one lowercase letter!");
            return false;
        }
        if (!password.split('').some(isDigit)) {
            console.log("Password must consist at least one digit!");
            return false;
        }
        return true;
    };

    let commands = input.slice(1);
    for (const command of commands) {
        const [cmd, ...args] = command.split(" ");
        switch (cmd) {
            case "Make":
                let action = args[0];
                let index = parseInt(args[1]);
                if (action === "Upper") {
                    password = password.substring(0, index) + password[index].toUpperCase() + password.substring(index + 1);
                    console.log(password);
                } else if (action === "Lower") {
                    password = password.substring(0, index) + password[index].toLowerCase() + password.substring(index + 1);
                    console.log(password);
                }
                break;
            case "Insert":
                const insertIndex = parseInt(args[0]);
                const char = args[1];
                if (insertIndex >= 0 && insertIndex <= password.length) {
                    password = password.substring(0, insertIndex) + char + password.substring(insertIndex);
                    console.log(password);
                }
                break;
            case "Replace":
                let replaceChar = args[0];
                let replaceValue = parseInt(args[1]);
                for (let i = 0; i < password.length; i++) {
                    if (password[i] === replaceChar) {
                        let asciiValue = password.charCodeAt(i) + replaceValue;
                        let newChar = String.fromCharCode(asciiValue);
                        password = password.substring(0, i) + newChar + password.substring(i + 1);
                    }
                }
                console.log(password);
                break;
            case "Validation":
                validatePassword();
                break;
        }
    }
}


manipulatePassword([
    "invalidpassword*",
    "Add 2 p",
    "Replace i -50",
    "Replace * 10",
    "Make Upper 2",
    "Validation",
    "Complete"
]);



