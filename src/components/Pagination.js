import React, {Component} from 'react';
/**
 * 分页模块
 */
class PaginationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            //页面大小
            pageSize:10,
            //当前位置
            pageIndex:1,
            //文章条数
            ListCount:0
        };
    }
    // 生成分页按钮
    setPageButton()
    {
            var page;
            let index=this.state.pageIndex;
            //页总数
            let pageCount=Math.floor(this.state.ListCount/this.state.pageSize);

            if(pageCount>0){
            //生成前两页按钮
            if(index>1)
            {
                page+=<a href="#" className="button previous">上一页</a>;
                if(index>2)
                {
                    page+=<a href="#">{index-2}</a>
                }
                page+=<a href="#">{index-1}</a>
            }

            page+= <a href="#" className="active">{index}</a>

            //生成后两页按钮
            let temp=pageCount-index;
            if(temp>0){
                if(temp>0)
                {
                    page+= <a href="#">{index+1}</a>
                    if(temp>=2)
                    {
                      page+= <a href="#">{index+2}</a>
                      if(temp>=4)
                      {
                        page+=<span>&hellip;</span>
                      }
                       if(temp>=3)
                      {
                        page+=<span>{pageCount}}</span>
                      }
                    }
                    
                }
                page+=<a href="#" className="button next">下一页</a>
            }
        }
           
            
            
            

    // {this.state.pageIndex>1? <a href="#" className="button previous">上一页</a>:''}
    // 				<div className="pages">

    // 					<a href="#" class="active">1</a>
    // 					<a href="#">2</a>
    // 					<a href="#">3</a>
    // 					<a href="#">4</a>
    // 					<span>&hellip;</span>
    // 					<a href="#">20</a>
    // 				</div>
    // 				<a href="#" className="button next">下一页</a>
    return page;
    }
    render() {
        return (
           	<div className="pagination">
                {this.setPageButton()}
			</div>
        );
    }
}

export default PaginationComponent;


