class TimerModel {
  constructor({ minute, second, hour }) {
    this.initialValues = { hour, minute, second }
    this.hour = hour
    this.minute = minute
    this.second = second
  }

  get time() {
    return { hour: this.hour, second: this.second, minute: this.minute }
  }
}

class TimerController {
  #intervalId = NaN
  #subscribers = {}
  constructor(timerModel) {
    this.timerModel = timerModel
  }

  get isFinished() {
    return this.timerModel.hour === 0 && this.timerModel.minute === 0 && this.timerModel.second === 0
  }

  #notify() { Object.values(this.#subscribers).forEach(f => f(this.timerModel.time)) }

  #update() {
    if(this.isFinished) {
      clearInterval(this.#intervalId)
      this.#subscribers = []
      return this
    } 
    
    if(this.timerModel.second === 0) {
      this.timerModel.second = 59
      if(this.timerModel.minute === 0) {
        this.timerModel.hour -= 1
        this.timerModel.minute = 59
      } else this.timerModel.minute -= 1
    } else this.timerModel.second -= 1
    this.#notify()
    return this
  }

  start() {
    this.#notify()
    this.#intervalId = setInterval(() => {
      this.#update()
    }, 1000)
    return this
  }

  stop() {
    clearInterval(this.#intervalId)
    return this
  }

  reset() {
    this.timerModel.hour = this.timerModel.initialValues.hour
    this.timerModel.minute = this.timerModel.initialValues.minute
    this.timerModel.second = this.timerModel.initialValues.second
    return this.stop()
  }

  subscribe(key, cb) { this.#subscribers[key] = cb }
  unsubscribe(key) { delete this.#subscribers[key] }

}

const timer = new TimerModel({ minute: 0, second: 10, hour: 0 })
const timerController = new TimerController(timer)

timerController.subscribe('view', ({ minute, hour, second }) => {
  minute = minute >= 10 ? minute : `0${minute}`
  hour = hour >= 10 ? hour : `0${hour}`
  second = second >= 10 ? second : `0${second}`
  console.log(`${hour}:${minute}:${second}`)
})
timerController.start()
