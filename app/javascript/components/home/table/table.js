import React, { component, Component } from 'react';
import Item from './item';
import ActiveItem from './activeItem';

class Table extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const items = this.props.course_modules.map( (data) => {
            return (
                // TODO : add active items
                <Item key={data.id} title={data.title} description={data.description}/>
            )
        })

        return(
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">React for Rails Dev</h2>
                        {items}
                    </div>
                </div>
            </div>
        )
    };
}

export default Table;