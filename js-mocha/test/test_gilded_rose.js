var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  describe('Normal Item', () =>{

    it("should decrease quality by 1", function() {
      const gildedRose = new Shop([ new Item('item', 15, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('item');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(9);
    });

    it("should decrease quality by 2", function() {
      const gildedRose = new Shop([ new Item('item', 0, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('item');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(48);
    });

    it("should not change quality", function() {
      const gildedRose = new Shop([ new Item('item', -1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('item');
      expect(items[0].sellIn).to.equal(-2);
      expect(items[0].quality).to.equal(0);
    });

  })

  describe('Legendary Item', () => {
    it("should not alter", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
      expect(items[0].sellIn).to.equal(10);
      expect(items[0].quality).to.equal(80);
    });
  })

  describe('Backstage passes', () => {

    it("should not change quality", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(20);
    });

    it("should increase quality by 2", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(22);
    });
  
    it("should increase quality by 3", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(4);
      expect(items[0].quality).to.equal(23);
    });
  
    it("should drop quality to 0", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(0);
    });

    it("should increase quality by 2", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(22);
    });
  
    it("should increase quality by 3", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(4);
      expect(items[0].quality).to.equal(23);
    });
  
    it("should increase quality to 50", function() {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(50);
    });
  });

  describe('Aged Brie', () =>{

    it("should increase quality by 1", function() {
      const gildedRose = new Shop([ new Item('Aged Brie', 15, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(21);
    });

    it("should not increase quality", function() {
      const gildedRose = new Shop([ new Item('Aged Brie', 15, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(50);
    });

  })

  describe('Conjured', () =>{

    it("should decrease quality by 2", function() {
      const gildedRose = new Shop([ new Item('Conjured', 15, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Conjured');
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(8);
    });

    it("should decrease quality by 4", function() {
      const gildedRose = new Shop([ new Item('Conjured', 0, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Conjured');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(46);
    });

    it("should not change quality", function() {
      const gildedRose = new Shop([ new Item('Conjured', -1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('Conjured');
      expect(items[0].sellIn).to.equal(-2);
      expect(items[0].quality).to.equal(0);
    });

  })
});