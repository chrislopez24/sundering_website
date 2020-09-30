import React, { Component } from "react";

const recruitmentListContent = [
    {
        image: 'recruitment-warlock',
        category: 'Affliction',
        title: 'Warlock'
    },
    {
        image: 'recruitment-priest',
        category: 'Shadow',
        title: 'Priest'
    },
    {
        image: 'recruitment-dk',
        category: 'Unholy',
        title: 'Death Knight'
    },
    {
        image: 'recruitment-dh',
        category: 'Havoc',
        title: 'Demon Hunter'
    },
    {
        image: 'recruitment-mage',
        category: '',
        title: 'Mage'
    },
    {
        image: 'recruitment-druid',
        category: 'Feral (jk)',
        title: 'Druid'
    },
    
    
]

class RecruitmentList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = recruitmentListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`recruitment ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <h6><span>{value.category}</span></h6>
                                    <h4><span>{value.title}</span></h4>
                                    <div className="recruitment-button">
                                        <a className="rn-btn" href="#contact">Apply Here!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default RecruitmentList;