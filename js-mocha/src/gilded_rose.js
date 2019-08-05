class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){

    this.items = items;

    this.itemsConfig = {
      'Normal': {
        class: NormalItem,
        min: 0,
        max: 50
      },
      'Aged Brie': {
        class: Brie,
        min: 0,
        max: 50
      },
      'Backstage passes to a TAFKAL80ETC concert': {
        class: Backstage,
        min: 0,
        max: 50
      },
      'Sulfuras, Hand of Ragnaros': {
        class: Sulfuras,
        min: 0,
        max: 80
      },
      'Conjured': {
        class: Conjured,
        min: 0,
        max: 50
      }
    }
  }

  getConfig(name){
    if (name in this.itemsConfig){
      return this.itemsConfig[name];
    }else{
      return this.itemsConfig['Normal'];
    }
  }

  updateQuality() {

    for (let item of this.items){

      let config = this.getConfig(item.name);
      let klass = config.class;

      let currentItem = new klass(item.name, item.sellIn, item.quality, config.min, config.max);
      
      currentItem.updateQuality();

      item.sellIn = currentItem.sellIn;
      item.quality = currentItem.quality;

    }

    return this.items;
  }
}

class NormalItem extends Item {

  constructor(name, sellIn, quality, min, max){
    super(name, sellIn, quality);
    this.min = min;
    this.max = max;
  }

  incrementQuality(delta){
    this.quality = Math.min(this.quality + delta, this.max);
  }

  decrementQuality(delta){
    this.quality = Math.max(this.quality - delta, this.min); 
  }

  updateQuality(){
    this.sellIn -= 1;

    if(this.sellIn < 0){
      this.decrementQuality(2);
    }else{
      this.decrementQuality(1);
    }
  }

}

class Brie extends NormalItem {

  constructor(name, sellIn, quality, min, max) {
    super(name, sellIn, quality, min, max);
  }

  updateQuality() {
    this.sellIn -= 1;
    this.incrementQuality(1);
  }

}

class Backstage extends NormalItem {

  constructor(name, sellIn, quality, min, max) {
    super(name, sellIn, quality, min, max);
  }

  updateQuality() {

    this.sellIn -= 1;

    if (this.sellIn <= 10 && this.sellIn > 5) {
      this.incrementQuality(2);
    }else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.incrementQuality(3);
    }else if (this.sellIn <= 0){
      this.quality = 0;
    }
  }

}

class Sulfuras extends NormalItem {

  constructor(name, sellIn, quality, min, max) {
    super(name, sellIn, quality, min, max);
  }

  updateQuality() {

  }

}

class Conjured extends NormalItem {

  constructor(name, sellIn, quality, min, max) {
    super(name, sellIn, quality, min, max);
  }

  updateQuality() {

    this.sellIn -= 1;

    if(this.sellIn < 0){
      this.decrementQuality(4);
    }else{
      this.decrementQuality(2);
    }
  }

}

module.exports = {
  Item,
  Shop
}
