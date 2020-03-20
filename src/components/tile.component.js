import React, {Component} from "react";
import Gringo from '../img/gringo.jpg';

export default class Tile extends Component
{
    constructor(props)
    {
        super(props);
        this.sendCandidat = this.sendCandidat.bind(this);
    }

    sendCandidat()
    {
        this.props.chooseCandidat(this.props.candidat);
    }

    render()
    {

        return (
            <div className="col-5 card">
                <div className="header">
                    <div className="title">
                        {this.props.candidat.name}
                    </div>
                    <div className="subtitle">
                        {this.props.candidat.partit}
                    </div>
                </div>
                <div className="content">
                    <img src={Gringo} alt=""/>
                </div>
                <div className="btn-bar">
                    <div className='btn btn-primary-light' onClick={ this.sendCandidat }>Choisir</div>
                </div>
            </div>
        );
    }
}
