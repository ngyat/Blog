import React, {Component} from 'react';
/**
 * 分页模块
 * 未添加点击事件
 */
class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //页面大小
            pageSize: 10,
            //当前位置
            pageIndex: 1,
            //文章条数
            ListCount: 0
        };
    }

    //分页按钮点击事件
    pageBtnClick(index) {
        // console.log(index);
        this.setState({ pageIndex: index });
        //api 请求
    }

    // 生成分页按钮(总页数)
    // 添加 react 路由
    setPageButton(pageCount) {
        var page = [];
        let index = this.state.pageIndex;

        if (pageCount > 0) {
            //添加第一页
            if (index >= 4) {
                page.push(<a href="#" onClick={this.pageBtnClick.bind(this, 1) } key={1}>1</a>)
                if (index > 4)
                    page.push(<span key='hellip'>&hellip; </span>)
            }
            //生成前两页按钮
            if (index > 1) {
                if (index > 2) {
                    page.push(<a href="#" onClick={this.pageBtnClick.bind(this, index - 2) } key={index - 2}>{index - 2}</a>);
                }
                page.push(<a href="#" onClick={this.pageBtnClick.bind(this, index - 1) }  key={index - 1}>{index - 1}</a>);
            }

            page.push(<a href="#" onClick={this.pageBtnClick.bind(this, index) }  className="active" key={index}>{index}</a>);

            //生成后两页按钮
            let temp = pageCount - index;
            if (temp > 0) {
                if (temp > 0) {
                    page.push(<a href="#" onClick={this.pageBtnClick.bind(this, index + 1) }  key={index + 1}>{index + 1}</a>);
                    if (temp >= 2) {
                        page.push(<a href="#" onClick={this.pageBtnClick.bind(this, index + 2) }  key={index + 2}>{index + 2}</a>);
                        if (temp >= 4) {
                            page.push(<span key='hellip'>&hellip; </span>)
                        }
                        if (temp >= 3) {
                            page.push(<a href="#" onClick={this.pageBtnClick.bind(this, pageCount) }  key={pageCount}>{pageCount}</a>)
                        }
                    }
                }
            }
        }
        return page;
    }
    render() {
        //将数量赋值到state
        this.state.ListCount = this.props.ListCount;
        //计算页面的总页数
        var pageCount = Math.ceil(this.state.ListCount / this.state.pageSize);

        return (
            <div className="pagination">
                {/**是否添加 上/下 一页 */}
                { this.state.pageIndex > 1 ? <a role="button" onClick={this.pageBtnClick.bind(this, this.state.pageIndex - 1) } className="button previous">上一页</a> : null}
                <div className="pages">
                    { this.setPageButton(pageCount) }
                </div>
                { pageCount > this.state.pageIndex ? <a href="#" onClick={this.pageBtnClick.bind(this, this.state.pageIndex + 1) } className="button next">下一页</a> : null}
            </div>
        );
    }
}

export default PaginationComponent;


