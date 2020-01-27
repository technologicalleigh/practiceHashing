app.register(res, req){
//note that this doesn't show all the variables that require modules called in this file
//and it does not show the schema of the User
//create variables to receive email and password to authenticate
    const email = req.body.email;
    const password = req.body.password;

    //authenticating user by
    User.findOne({email: email}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            if(foundUser){
                /*
                    bcrypt compare the two passwords and returns a result, and if
                    that result is equivalent to true, then template is rendered

               bcrypt.compare(password, foundUser.password, function(err, result){
                   if(result === true)
                   {
                       /* need to find whether or not there are any lists made
                       by this user during the rendering of the login page. to do so,
                       List.find({}) will be used in order to find all list documents
                        List.find({}, function(err, foundLists){
                            res.render('list', {newList: foundLists});
                        });
                   }
               });

            }
        }
    });

}
