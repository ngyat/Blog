// require('normalize.css');
// // require('styles/App.scss');
//
// import React, {Component} from 'react';
//
// let yeomanImage = require('../images/yeoman.png');
//
//
//
//
// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!hello world</div>
//       </div>
//     );
//   }
// }
//
//
// AppComponent.defaultProps = {
// };
//
// export default AppComponent;

import React, {Component} from 'react';
import Inner from './Inner'
import Sidebar from './Sidebar'
class HomeComponent extends Component {
    render() {
        return (
            <div>
                {/**文章列表 */}
                <Inner/>
                {/**导航栏 */}
                <Sidebar index={0}/>


            </div>
        );
    }
}

export default HomeComponent;