import React, {Component, PropTypes } from 'react';
import Calendar  from './Calendar';
import moment from 'moment';

/**
 * 左边导航栏
 */
class SidebarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            Index: 0
        };
         this.navs=[{ Name: '最近文章', Path: '' }, { Name: '文章列表', Path: '' }, { Name: '关于我的', Path: '' }, { Name: '联系方式', Path: '' }];


    }

    static PropTypes={
        index:PropTypes.number.isRequired
    }
    static defaultProps={
        index:1
    }

    render() {
        this.state.Index=this.props.index;
        return (
            <div id="sidebars">
                <h1 id="logo"><a href="#">NgYat</a></h1>

                {/**菜单 */}
                <nav id="nav">
                    <ul>
                    {
                        this.navs.map((d,i)=>{
                           return <li key={`nav${i}`} className={i==this.state.Index?'current':''}><a href="#">{d.Name}</a></li>
                        })
                    }
                    </ul>
                </nav>

                <section className="box search">
                    <form method="post" action="#">
                        <input type="text" className="text" name="search" placeholder="搜索" />
                    </form>
                </section>

                <section className="box text-style1">
                    <div className="inner">
                        <p>
                            <strong>公告: </strong> A free and fully responsive HTML5 site template designed by <a href="http://n33.co/">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a>
                        </p>
                    </div>
                </section>

                <section className="box recent-posts">
                    <header>
                        <h2>最近文章</h2>
                    </header>
                    <ul>
                        <li><a href="#">Lorem ipsum dolor</a></li>
                        <li><a href="#">Feugiat nisl aliquam</a></li>
                        <li><a href="#">Sed dolore magna</a></li>
                        <li><a href="#">Malesuada commodo</a></li>
                        <li><a href="#">Ipsum metus nullam</a></li>
                    </ul>
                </section>

                <section className="box recent-comments">
                    <header>
                        <h2>最新回复</h2>
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
                            onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
                            onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
                            date={this.state.date}
                            onPickDate={(date) => console.log(date) }
                            renderDay={(day) => day.format('D') }
                            />
                    </div>
                </section>

            </div>
        );
    }
}

export default SidebarComponent;