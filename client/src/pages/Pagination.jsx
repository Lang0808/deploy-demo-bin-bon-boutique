import React from "react";

class Pagination extends React.Component{
    render(){
        var prev=(this.props.page-1>0 ? this.props.page-1: 1);
        var first=(this.props.page==1?1 : this.props.page-1);
        var middle=(this.props.page==1? 2 : this.props.page);
        var last=(this.props.page==1? 3 : parseInt(this.props.page)+1);
        var next=parseInt(this.props.page)+1;
        return (
            <nav area-label="Page navigation example">
                <ul className="pagination">
                    <li className="pagination"><a className="page-link" href="/All/1">Go to page 1</a></li>
                    <li className="pagination"><a className="page-link" href={`/All/${prev}`}>Previous</a></li>
                    <li className="pagination"><a className="page-link" href={`/All/${first}`}>{first}</a></li>
                    <li className="pagination"><a className="page-link" href={`/All/${middle}`}>{middle}</a></li>
                    <li className="pagination"><a className="page-link" href={`/All/${last}`}>{last}</a></li>
                    <li className="pagination"><a className="page-link" href={`/All/${next}`}>Next</a></li>
                </ul>
                </nav>
        );
    }
}

export default Pagination;