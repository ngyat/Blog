import React, {Component, PropTypes } from 'react';
import createDateObjects from '../extends/createDateObjects'

class CalendarComponent extends Component {

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
    var dateCells =[];
    let weeks=0;

    createDateObjects(date, weekOffset).map((day, i) =>{
      dateCells.push(<td key={`day-${i}`}><span>{renderDay(day.day)}</span></td>);
      if(day.day.weekday()==6)
      {
        weeks+=1;
        tableHtml.push(<tr key={`week-${weeks}`}>{dateCells}</tr>);
        dateCells=[];
      }
    });


    return (

      <table>
        <caption>{date.format('MMM YYYY') }</caption>
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


      // <div className='Calendar'>
      //   <div className='Calendar-header'>
      //     <button onClick={onPrevMonth}>&laquo; </button>
      //     <div className='Calendar-header-currentDate'>{date.format('MMMM YYYY') }</div>
      //     <button onClick={onNextMonth}>&raquo; </button>
      //   </div>
      //   <div className='Calendar-grid'>
      //     {createDateObjects(date, weekOffset).map((day, i) =>
      //       <div
      //         key={`day-${i}`}
      //         className={`Calendar-grid-item ${day.classNames || ''}`}
      //         onClick={() => onPickDate(day.day) }
      //         >
      //         {renderDay(day.day) }
      //       </div>
      //     ) }
      //   </div>
      // </div>
    );
  }
}

export default CalendarComponent;