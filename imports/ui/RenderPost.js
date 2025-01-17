import React from 'react';
import PropTypes from 'prop-types';
import {UP_Collection_Access} from './../api/user_posts.js';
export default class RenderPost extends React.Component{

    render(){
        return (
                <div key={this.props.post_prop_obj._id} className='single-block-item-style'>

                    <div className='post'>
                        <div>
                            <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
                            <p className='post__stats'>{this.props.post_prop_obj.votes} Likes {''}</p>
                            <div className='post__actions'>
                                <button className='button button--round' onClick={ () =>{
                                    UP_Collection_Access.update({_id: this.props.post_prop_obj._id},{$inc: {votes: 1}});
                                }}>Like</button>



                                <button className='button button--round' onClick={ () =>{
                                    UP_Collection_Access.remove({_id: this.props.post_prop_obj._id});
                                }}>X</button>
                            </div>
                        </div>
                        



                    </div>
                </div>
        );
    }
};
RenderPost.propTypes = {
    post_prop_obj: PropTypes.object.isRequired,
};
