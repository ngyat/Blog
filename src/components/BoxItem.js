import React, {Component} from 'react';

// require('../assets/css/main.css');
/**
 * 首页文章item
 */

class BoxItemComponent extends Component {
    render() {
        return (

            //切记jsx 需要一个标签包裹住
            //hander 标题跟简介
            <article className="box post post-excerpt" >
                <header>
                    <h2><a href="#">{this.props.data.title}</a></h2>
                    <p>{this.props.data.synopsis}</p>
                </header>
                {//右侧年月日及点赞数
                    }
                <div className="info">
                    <span className="date">
                        <span className="month">{this.props.data.Month}</span>
                        <span className="day">{this.props.data.Day}</span>
                        <span className="year">, {this.props.data.Year}</span>
                    </span>
                   { /**
                     赞数
                     */}
                    <ul className="stats">
                        <li><a href="#" className="icon fa-comment">{this.props.data.stats[0]}</a></li>
                        <li><a href="#" className="icon fa-heart">{this.props.data.stats[1]}</a></li>
                        <li><a href="#" className="icon fa-twitter">{this.props.data.stats[2]}</a></li>
                        <li><a href="#" className="icon fa-facebook">{this.props.data.stats[3]}</a></li>
                    </ul>
                </div>
                {
                    /**
                     * 如果图片为空的不必显示
                     */
                }
                {this.props.data.image!=''?  <a href="#" className="image featured"> <img src={this.props.data.image} alt={this.props.data.title} /></a>:''}
                <p>
                  {this.props.data.info}
                </p>
            </article>
        );
    }
}

BoxItemComponent.defaultProps = {
};
export default BoxItemComponent;
