import moment from 'moment';
import {
  range,
  takeWhile,
  last
} from 'lodash';


export default function createDateObject(date, weekOffset = 0) {
  //定位到当月一号0点0分
  const startOfMonth = date.startOf('month');

  //获取一号是星期几
  let diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  //获取一号星期前几天 例如 （星期三） 得到（星期一 星期二）
  const prevMonthDays = range(0, diff).map(n => ({
    //克隆 subtract：减去
    day: startOfMonth.clone().subtract(diff - n, 'days'),
    classNames: 'prevMonth'
  }));

  const currentMonthDays = range(1, date.daysInMonth() + 1).map(index => ({
    day: moment([date.year(), date.month(), index])
  }));

  const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;
//获取下个月剩余的星期天数
  const nextMonthDays = takeWhile(range(1, 7), n => (daysAdded + n) % 7 !== 0).map((n) => ({
    day: last(currentMonthDays).day.clone().add(n, 'days'),
    classNames: 'nextMonth'
  }));

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}