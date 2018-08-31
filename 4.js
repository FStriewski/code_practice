    function getShortMessages(messages) {
      return messages.filter(item => item.message.length < 50).reduce((a,b) => a.concat(b.message),[])
    }
    
    module.exports = getShortMessages