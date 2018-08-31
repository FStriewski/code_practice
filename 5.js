function checkUsersValid(goodUsers) { 
      
    return function allUsersValid(submittedUsers) {
        
        let validIds = []
        goodUsers.every(user => validIds.push(user.id))

        return  submittedUsers.every( user => 
            validIds.includes(user.id) 
        )
    };
}

module.exports = checkUsersValid