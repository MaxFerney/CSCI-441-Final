import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


export default class AddTopic extends React.Component{
    processFormData(event){
        event.preventDefault();
        let newTopic = event.target.formInputNameAttribute.value;
        let time = new Date().getTime();
        if (newTopic){
            event.target.formInputNameAttribute.value = '';
            UP_Collection_Access.insert({
                topic: newTopic,
                votes: this.props.votes,
                mTime: time,
            });
        }
    }
    render(){
        return (
            <div className='single-block-item-style'>
                <form className='form' onSubmit={this.processFormData.bind(this)}>
                    <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Write a new post...'/>
                    <button className='button'>Post</button>
                </form>
            </div>
        );
    }
};
