module.exports = {

    'facebookAuth' : {
        'clientID'      : '1769248379775864', // your App ID
        'clientSecret'  : 'a5c5024ea440083a2b8dadab51f9a892', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    }

};
