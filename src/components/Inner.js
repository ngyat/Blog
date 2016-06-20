import React, {Component} from 'react';
import Box from './BoxItem';
import Pagination from './Pagination';
require('../assets/css/main.css');

/**
 * 首页文章列表（包含子分页按钮及子模块）
 */


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
  for (var i = 0; i < innerDatas.articles.length; i++) {
    var singleData = innerDatas.articles[i];
    //将时间戳转换成时间 并取值
    var time = new Date(parseInt(singleData.data) * 1000);

    singleData.Month = Months[time.getMonth() - 1];
    singleData.Year = time.getFullYear();
    singleData.Day = time.getDay();
    innerDatas.articles[i] = singleData;

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

    innerDatas.articles.forEach(function (value) {
      inners.push(<Box data={value}/>);
    });
    return (
      <div className="inner">
        {/**文章列表 */}
        {inners}

        {/**分页选项 以后需要封装成插件 */}
        <Pagination ListCount={innerDatas.ListCount}/>
      </div>
    )
  }
}


SiderberComponent.defaultProps = {
};

export default SiderberComponent;
