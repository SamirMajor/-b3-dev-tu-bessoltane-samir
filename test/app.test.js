const Cercle = require("../src/cercle").Cercle;
const Cube = require('../src/app').Cube;
const expect = require('chai').expect;
const Triangle=require('../src/triangle').Triangle;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions',function (){
    it('1. The Triangle is Equilateral', function(done) {
        let t1 = new Triangle(2,2,2);
        expect(t1.isEquilateral()).to.equal(true );
        done();
    });
    it('2. The Triangle is Isocele',function (done){
        let t2=new Triangle(3,2,3);
        expect(t2.isIsocele()).to.equal(true);
        done();
    });
    it('3. The Triangle is Rectangle',function (done){
        let t3=new Triangle(5,3,4);
        expect(t3.isRectangle()).to.equal(true);
        done();
    });
    it('4. The Triangle is Rectangle',function (done){
        let t4=new Triangle(5,3,4);
        expect(t4.isRectangle()).to.equal(true);
        done();
    });
    it('5. Aire Triangle Rectangle',function (done){
        let t5=new Triangle(5,3,4);
        expect(t5.getAreaRectangle()).to.equal(6);
        done();
    });
    it('6. Aire Triangle Quelconque',function (done){
        let t6=new Triangle(5,3,4);
        expect(t6.getAreaTriangle()).to.equal(6);
        done();
    });
});

describe('Testing the Cercle Functions', function() {
    it('1. Perimetre d un cercle', function(done) {
        let cl1 = new Cercle(10);
        let p = 10*Math.PI*2;
        expect(cl1.getPerimetre()).to.equal(p);
        done();
    });
    it('2. Aire d un cercle', function (done) {
        let cl2=new Cercle(12);
        let Aire=Math.PI*(12*12);
        expect(cl2.getAireCercle()).to.equal(Aire);
        done();
    });


});
