import React from 'react';
import PropTypes from 'prop-types';
export default class TitleBar extends React.Component{
    renderModerator(){
        if (this.props.moderator){
            return <p className='title-bar__moderator'>User: {this.props.moderator}</p>;
        } else {
            return <p className='title-bar__moderator'>User: Guest</p>;
        }
    }

    render(){
        return (
            <div className='title-bar__wrapper'>
                <div className='title-bar'>
                    <h1>{this.props.title}</h1>
                    {this.renderModerator()}
                </div>
            </div>
        );
    }
};
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    moderator: PropTypes.string,
};
