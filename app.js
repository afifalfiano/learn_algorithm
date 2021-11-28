
function joinedLogger(level, sep) {
  return function f(...messages) {
    const data = [];
      for(let i = 0; i < messages.length; i++) {
          if (messages[i].level >= level) {
                data.push(messages[i].text);
          }
      }
    console.log(data.join(sep));
    fs.createWriteStream(process.env.OUTPUT_PATH).write(data.join(sep));                
  };
}
    
function weekdayText(weekdays) {
    return function getText(days)  {
        if (days >= 0) {
            for(let i = 0; i < weekdays.length; i++) {
                if (days === i) {
                    console.log(weekdays[i]);
                    return weekdays[i];
                }
            }
        }
        throw "Error: Invalid weekday number";            
    }
}

module.exports = {joinedLogger, weekdayText};
