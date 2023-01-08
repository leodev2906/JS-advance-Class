const { log } = require("console")

class History {
  history = ['root']
  current = {
    index: 0,
    link: 'root'
  }

  get historyValue() {
    return {
      history: this.history,
      current: this.current
    }
  }

  back() {
    if (this.current.index === 0) {
      return
    }

    this.current = {
      index: this.current.index - 1,
      link: this.history?.[this.current.index - 1]
    }
  }

  next(link) {
    if (typeof link !== 'string') {
      return
    }

    if (!link.length) {
      return
    }

    this.history.push(link)
    this.current = {
      index: this.current.index + 1,
      link
    }
  }

  goto(index) {
    if (index < 0 || index > this.history.length - 1) {
      throw new Error('History is not valid!')
    }

    this.current = {
      index,
      link: this.history?.[index]
    }
  }

  clear() {
    this.history = ['root']
    this.current = {
      index: 0,
      link: 'root'
    }
  }
}

const history = new History()

log({
  current: history.current
})

history.next('youtube.com')

log({
  current: history.current,
  history: history.history,
})

history.back()

log({
  current: history.current,
  history: history.history,
})

history.next('facebook.com')
history.next('zalo.com')


log({
  current: history.current,
  history: history.history,
})


history.goto(1)

log({
  current: history.current,
  history: history.history,
})

log(history.historyValue)