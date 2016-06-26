import React, {Component} from 'react';
import Calendar  from './Calendar';
import moment from 'moment';
import 'moment/locale/nb';

/**
 * 左边导航栏
 */
class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        };
    }
    onNextMonth() {
        debugger;
        this.setState({ date: this.state.date.clone().add(1, 'months') });
    }
    render() {

        return (
            <div id="sidebar">
                {/**Logo */}
                <h1 id="logo"><a href="#">NgYat</a></h1>
                {/**Nav */}
                <nav id="nav">
                    <ul>
                        <li className="current"><a href="#">Latest Post</a></li>
                        <li><a href="#">Archives</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </nav>
                {/**Search */}
                <section className="box search">
                    <form method="post" action="#">
                        <input type="text" className="text" name="search" placeholder="Search" />
                    </form>
                </section>

                {/**Text 公告 */}
                <section className="box text-style1">
                    <div className="inner">
                        <p>
                            <strong>公告: </strong> A free and fully responsive HTML5 site template designed by <a href="http://n33.co/">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a>
                        </p>
                    </div>
                </section>

                {/**Recent Posts 热门文章 */}
                <section className="box recent-posts">
                    <header>
                        <h2>Recent Posts</h2>
                    </header>
                    <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Feugiat nisl aliquam</a></li>
                        <li><a href="#">Sed dolore magna</a></li>
                        <li><a href="#">Malesuada commodo</a></li>
                        <li><a href="#">Ipsum metus nullam</a></li>
                    </ul>
                </section>

                {/** Recent Comments 热门回复 */}
                <section className="box recent-comments">
                    <header>
                        <h2>Recent Comments</h2>
                    </header>
                    <ul>
                        <li>case on <a href="#">Lorem ipsum dolor</a></li>
                        <li>molly on <a href="#">Sed dolore magna</a></li>
                        <li>case on <a href="#">Sed dolore magna</a></li>
                    </ul>
                </section>

                {/**日历控件 */}
                <section className="box calendar">
                    <div className="inner">
                        <Calendar
                            onNextMonth={this.onNextMonth }
                            onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
                            date={this.state.date}
                            onPickDate={(date) => console.log(date) }
                            renderDay={(day) => day.format('D') }
                            />
                    </div>
                </section>

                {/**copyright */}
                <ul id="copyright">
                    <li>&copy; Untitled.</li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        );
    }
}

export default SidebarComponent;