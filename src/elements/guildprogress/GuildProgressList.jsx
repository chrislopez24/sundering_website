import React ,{ Component }from "react";
import ProgressOne from "../../blocks/progressbar/ProgressOne";
import Data  from '../../data/data.js';

const Icon = ({icon}) => {
    let DynamicIcon = require('react-icons/gi')[icon];
    return (DynamicIcon) ? <DynamicIcon/> : null;
}

class ProgressComponent extends Component{
    render(){
        const {column } = this.props;
        const ProgressContent = Data.ProgressList.slice(0 , this.props.item);
        

        return(
            <React.Fragment>
                <div className="row">
                    {ProgressContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="#progress">
                                <div className="guildprogress guildprogress__style--2">
                                    <div className="icon">
                                        <Icon icon={val.icon}/>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                        <ProgressOne title={val.type} currentBosses={val.currentBosses} totalBosses={val.totalBosses} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ProgressComponent;
