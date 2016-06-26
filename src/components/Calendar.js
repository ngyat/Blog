import React, {Component, PropTypes } from 'react';
import createDateObjects from '../extends/createDateObjects'

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    weekOffset: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    renderDay: PropTypes.func,
    onNextMonth: PropTypes.func.isRequired,
    onPrevMonth: PropTypes.func.isRequired,
    onPickDate: PropTypes.func
  }

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D')
  }

  render() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth, onPickDate } = this.props;
    const tableHtml = [];
    var dateCells = [];
    let weeks = 0;
    createDateObjects(date, weekOffset).map((day, i) => {
      if (day.classNames == 'prevMonth' || day.classNames == 'nextMonth') {
        dateCells.push(<td key={`day-${i}`} className={day.classNames}>
          <span>{renderDay(day.day) }</span>
        </td>);

      } else {
        dateCells.push(<td key={`day-${i}`} className={day.classNames}>
          <a role="button" onClick={ ()=>onPickDate(day.day)}>{renderDay(day.day) }</a>
        </td>);
      }
      if (day.day.weekday() == 6) {
        weeks += 1;
        tableHtml.push(<tr key={`week-${weeks}`}>{dateCells}</tr>);
        dateCells = [];
      }
    });

    return (
      <table>
        <caption >
          <a role='button' style={{ float: 'left', padding: '0px 0px 0px 15px',width:'50px' }} onClick={onPrevMonth}>‹</a>
          {date.format('MMM YYYY') }
          <a  role="button" style={{ float: 'right', padding: '0px 15px 0px 0px',width:'50px'  }} onClick={onNextMonth}> ›</a>
        </caption>
        <thead>
          <tr>
            <th scope="col" title="Monday">M</th>
            <th scope="col" title="Tuesday">T</th>
            <th scope="col" title="Wednesday">W</th>
            <th scope="col" title="Thursday">T</th>
            <th scope="col" title="Friday">F</th>
            <th scope="col" title="Saturday">S</th>
            <th scope="col" title="Sunday">S</th>
          </tr>
        </thead>
        <tbody>
          {tableHtml}
        </tbody>
      </table>
    );
  }
}

export default CalendarComponent;