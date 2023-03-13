class ItemRepository {
  constructor() {
    this.items = [
      { id: 1, name: "Item 1", description: "Description of Item 1" },
      { id: 2, name: "Item 2", description: "Description of Item 2" },
      { id: 3, name: "Item 3", description: "Description of Item 3" },
    ];
  }

  getAll() {
    return Promise.resolve(this.items);
  }

  getById(id) {
    const item = this.items.find((i) => i.id === id);
    return Promise.resolve(item);
  }

  create(data) {
    const newItem = { id: Date.now(), ...data };
    this.items.push(newItem);
    return Promise.resolve(newItem);
  }

  update(id, data) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }
    const updatedItem = { ...this.items[index], ...data };
    this.items[index] = updatedItem;
    return Promise.resolve(updatedItem);
  }

  delete(id) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }
    const deletedItem = this.items.splice(index, 1)[0];
    return Promise.resolve(deletedItem);
  }
}

module.exports = new ItemRepository();
