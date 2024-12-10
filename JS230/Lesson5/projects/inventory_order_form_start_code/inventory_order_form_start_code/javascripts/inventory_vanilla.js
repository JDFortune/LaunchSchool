  let inventory;

  (function() {
    let lastId =  0;
    const collection = [];

    function setDate() {
      let date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
    }


    inventory = {

      cacheTemplate: function() {
        let itemTemplateHTML = document.querySelector('#inventory_item').innerHTML;
        this.template = Handlebars.compile(itemTemplateHTML); // template could be hidden
      },

      add() {
        lastId++;
        let item = {
          id: lastId,
          name: '',
          stock_number: '',
          quantity: 1
        };
        collection.push(item);

        return item;
      },

      remove: function(id) {
        let item = collection.find(i => i.id === id);
        collection.splice(collection.indexOf(item), 1);
      },

      get: function(id) {
        let found_item;

        collection.forEach(item => {
          if (item.id === id) found_item = item;
        });

        return found_item;
      },

      update: function(itemRow) {
        let id = this.findID(itemRow);
        let item = this.get(id);

        item.name = itemRow.querySelector("[name^=item_name]").value;
        item.stock_number = itemRow.querySelector("[name^=item_stock_number]").value;
        item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
      },

      newItem: function(event) {
        event.preventDefault();
        let item = this.add();
        
        document.querySelector('#inventory')
                .insertAdjacentHTML('beforeend', this.template({id: item.id}));
      },

      findParent: function(event) {
        return event.target.closest('tr');
      },

      findID: function(itemElement) {
        return +itemElement.querySelector("input[type=hidden]").value;
      },

      deleteItem: function(event) {
        event.preventDefault();
        if (event.target.classList.contains('delete')) {
          let item = this.findParent(event);
          this.remove(this.findID(item));
          item.remove();
        }
      },

      updateItem: function(event) {
        if (event.target.tagName === 'INPUT');
        let item = this.findParent(event);

        this.update(item);
      },

      bindEvents: function() {
        document.querySelector('#add_item')
                .addEventListener('click', this.newItem.bind(this));
        document.querySelector('#inventory')
                .addEventListener('click', this.deleteItem.bind(this));
        document.querySelector('#inventory')
                .addEventListener('focusout', this.updateItem.bind(this));
      },

      init() {
        setDate();
        this.cacheTemplate();
        this.bindEvents();
      },
    }
  })();

  document.addEventListener('DOMContentLoaded', e => inventory.init.bind(inventory)());