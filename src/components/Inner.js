import React, {Component} from 'react';
import Box from './BoxItem';
require('../assets/css/main.css');


//获取模拟数据的json
var innerDatas = require('../data/Page.json');

//利用自函数，将年月日拆分成指定的格式
innerDatas = (function FormatTheData(innerDatas) {
  let Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  //遍历json 数据
  for (var i = 0; i < innerDatas.length; i++) {
    var singleData = innerDatas[i];
    //将时间戳转换成时间 并取值
    var time = new Date(parseInt(singleData.data) * 1000);

    singleData.Month = Months[time.getMonth() - 1];
    singleData.Year = time.getFullYear();
    singleData.Day = time.getDay();
    innerDatas[i] = singleData;

  }
  return innerDatas;
})(innerDatas);

class SiderberComponent extends Component {

  
  //初始化state
  constructor(props) {
    super(props);
    this.state = {
      innerArr: []
    };
  }
  render() {

    var inners = [];
    //将所有的插件集合起来
    innerDatas.forEach(function(value){
      inners.push(<Box data={value}/>);
    });
    return (
      <div className="inner">
        {inners}
        {/**分页选项 以后需要封装成插件 */}
        <div className="pagination">
         { /**<a href="#" class="button previous">Previous Page</a>*/}
          <div className="pages">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <span>&hellip;</span>
            <a href="#">20</a>
          </div>
          <a href="#" className="button next">Next Page</a>
        </div>
      </div>
      )}}


      SiderberComponent.defaultProps = {
      };

      export default SiderberComponent;
