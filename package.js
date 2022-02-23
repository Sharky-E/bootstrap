// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'twbs:bootstrap', // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '5.1.3',
  git: 'https://github.com/twbs/bootstrap.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client')
})
//just a test¡£¡£¡£²âÊÔÒ»ÏÂgit clone ï¼ˆä¹±ç ä¸ºï¼šã€‚ã€‚ã€‚æµ‹è¯•ä¸€ä¸‹ï¼‰
//just a test è§£å†³ä¹±ç 