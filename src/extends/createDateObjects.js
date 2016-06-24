import moment from 'moment';
import { range, takeWhile, last } from 'lodash';


export default function createDateObject(date, weekOffset = 0) {
    //获取开始时间
    const startOfMobth = date.startOf('monent');

    let diff = startOfMobth.weekday() - weekOffset;
    if (diff < 0) {
        diff += 7;
    }

    const prevMonthDays = Array.from({ length: diff }, (v, k) => v + 0).map(n => ({
        day: startOfMobth.clone().subtract(diff - n, 'days'),
        classNames: 'prevMonth'
    }));

    const currentMonthDays = Array.from({ length: date.dayInMonth() }, (v, k) => v + 1).map(index => ({
        day: moment([date.year(), date.month(), index])
    }));
    const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

    const nextMonthDays = takeWhile(range(1, 7), n => (daysAdded + n) % 7 !== 0).map((n) => ({
        day: last(currentMonthDays).day.clone().add(n, 'days'),
        classNames: 'nextMonth'
    }));

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}