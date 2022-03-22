const robot = require('robotjs');

function auto_login(value, accounts) {
    for (let i = 0; i < value; i++) {
        const element = accounts[i];
        robot.setMouseDelay(3000)
        robot.mouseClick();
        robot.mouseClick();
        robot.keyTap('a', 'control');
        robot.keyTap('backspace');
        robot.setKeyboardDelay(100);
        robot.typeString(element.email.toLowerCase());
        robot.setKeyboardDelay(100);
        robot.keyTap('tab');
        robot.setKeyboardDelay(100);
        robot.typeString(element.password)
        robot.keyTap('enter')
        console.log(`Index = ${i}`)
        console.log(element)
    }

}
module.exports = {
    auto_login: auto_login
} 