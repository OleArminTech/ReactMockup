let count = 0
let intervalID = 0
let functionvar = null

const countTracker = () => {
  if(count === 0){
    console.log("Countdown complete")
    clearInterval(intervalID)
    functionvar()

  } else{
    console.log(count)
    count -= 1
  }
}

export const resetIntervals = () => {
  clearInterval(intervalID)
  intervalID = 0
}

export const setCountdown = (testtest, time) => {
  count = time
  functionvar = testtest
  console.log("Start countdown with time: " + time + "second(s):")
  intervalID = setInterval(countTracker, 1000)
}
