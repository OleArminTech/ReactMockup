let count = 0
let intervalID = 0
let functionvar = null

const countTracker = () => {
  console.log("Tracker fire")
  if(count === 0){
    console.log("Yeap")
    clearInterval(intervalID)
    functionvar()

  } else{
    count -= 1
    console.log("New count: " + count)
  }
}

export const resetIntervals = () => {
  clearInterval(intervalID)
  intervalID = 0
}

export const setCountdown = (testtest, time) => {
  console.log("Start countdown")
  count = time
  functionvar = testtest
  console.log("Count: " + count + " - Time: " + time + " - Function: " + functionvar)
  intervalID = setInterval(countTracker, 1000)
}
