import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ProgressList = [
    {
        icon: <FiCast />,
        title: 'Nyalo\'tha',
        description: 'Placeholder Description'
    },
    {
        icon: <FiLayers />,
        title: 'Placeholder 2',
        description: 'Placeholder Description.'
    },
    {
        icon: <FiUsers />,
        title: 'Placeholder 3',
        description: 'Placeholder Description.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Placeholder 4',
        description: 'Placeholder Description.'
    },
    {
        icon: <FiUsers />,
        title: 'Placeholder 5',
        description: 'Placeholder Description.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Placeholder 6',
        description: 'Placeholder Description.'
    }
]


class ProgressComponent extends Component{
    render(){
        const {column } = this.props;
        const ProgressContent = ProgressList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ProgressContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="#progress">
                                <div className="guildprogress guildprogress__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
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
