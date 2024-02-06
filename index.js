const core = require('@actions/core');

try {
    const timezonesMap = new Map([
        ['US/Hawaii', '-10'],
        ['US/Alaska', '-9'],
        ['US/Pacific', '-8'],
        ['US/Mountain', '-7'],
        ['US/Central', '-6'],
        ['US/Eastern', '-5'],
        ['America/Argentina/Buenos_Aires', '-3'],
        ['Atlantic/Cape_Verde', '-1'],
        ['Etc/UTC', '0'],
        ['Europe/Berlin', '1'],
        ['Europe/Athens', '2'],
        ['Asia/Damascus', '3'],
        ['Asia/Dubai', '4'],
        ['Asia/Kabul', '4.5'],
        ['Asia/Karachi', '5'],
        ['Asia/Kolkata', '5.5'],
        ['Asia/Kathmandu', '5.75'],
        ['Asia/Dhaka', '6'],
        ['Asia/Rangoon', '6.5'],
        ['Asia/Bangkok', '7'],
        ['Asia/Shanghai', '8'],
        ['Asia/Tokyo', '9'],
        ['Australia/Sydney', '10'],
        ['Pacific/Auckland', '12']
    ])
    // set Etc/UTC as default
    const timezone = core.getInput('timezone') || 'Etc/UTC';
    const timezoneOffset = timezonesMap.get(timezone);

    // Based on timezone offset, we can calculate the day of the week
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const newDate = new Date(utc + (3600000 * timezoneOffset));

    // get current day
    const day = newDate.getDay();

    const daysMap = new Map([
        [0, 'Sunday'],
        [1, 'Monday'],
        [2, 'Tuesday'],
        [3, 'Wednesday'],
        [4, 'Thursday'],
        [5, 'Friday'],
        [6, 'Saturday']
    ])

    if (day === 5) {
        core.setFailed('It is Friday! You should not be shipping 🚢 into production');
    } else {
        core.setOutput('message', `It is ${daysMap.get(day)}! You can ship into production 🎉`);
    }
} catch (error) {
    core.setFailed(error.message);
}