const { log } = require("console")

class Wishlist {
  list = []

  constructor(wishlist) {
    this.wishlist = wishlist
  }

  addItem(title) {
    this.list.push({
      title: title,
      id: this.list.length
    })
  }

  addListItem(listItem) {
    this.list = this.list.concat(listItem.map((title, index) => ({
      title,
      id: this.list.length + index
    })))
  }

  removeItem(itemId) {
    this.list.filter(item => item?.id !== itemId)
  }

  includes(itemId) {
    return this.list.some(item => item.id === itemId)
  }

  toString() {
    return JSON.stringify(this.list)
  }

  groupByTitle() {
    const result = {}

    if (!this.list.length) {
      return {}
    }

    this.list.forEach(({ title }) => {
      if (!result.hasOwnProperty(title)) {
        Object.assign(result, {
          [title]: this.list.filter(item => item.title === title)
        })
      }
    })

    return result
  }
}

const wl = new Wishlist()

wl.addItem('wl 1')

log({
  wishlist: wl.list
})

wl.addListItem([
  'wl 2', 'wl 3', 'wl 2', 'wl 1'
])

log({
  wishlist: wl.list
})

log(wl.groupByTitle('wl 1'))
