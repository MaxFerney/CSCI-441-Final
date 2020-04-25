import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

import App from './../imports/ui/App.js';

//get form data


Meteor.startup(()=>{

    Tracker.autorun(()=>{
        const allPostsInDB = UP_Collection_Access.find({}, {sort: {mTime: -1}}).fetch();
        let title = 'Facebook.com';
        let footer = '\u00A9 facebook';

        ReactDOM.render(<App passedPropTitle={title} passedPropModerator='Guest' passedPropAllPosts={allPostsInDB} passedPropFooter={footer}/>, document.getElementById('content'));
    });




});
