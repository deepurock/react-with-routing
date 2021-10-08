class itemService {
  myList() {
    return Promise.resolve(fetch("http://localhost:3200/"));
  }
  async getItem(itemLink) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].link === itemLink) {
        return Promise.resolve(this.items[i]);
      }
    }

    return null;
  }
}
export default itemService;
