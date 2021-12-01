
export default {
  setItem (key: string, val: unknown) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem('manger', JSON.stringify(storage))
  },
  getItem (key: string) {
    return this.getStorage()[key]
  },
  clearItem (key: string) {
    delete this.getStorage()[key]
  },
  clearAll () {
    window.localStorage.clear()
  },
  getStorage () {
    return JSON.parse(window.localStorage.getItem('manger') || '{}')
  }
}
