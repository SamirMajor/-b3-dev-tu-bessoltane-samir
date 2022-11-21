class Triangle{

    constructor(cote1,cote2,cote3) {
        this.cote1=cote1;
        this.cote2=cote2;
        this.cote3=cote3;
}

getSides(){
        return this.cote1+this.cote2+this.cote3;
}


isIsocele(){
 if(this.cote1==this.cote2 || this.cote1==this.cote3 || this.cote2==this.cote3){
     return true;
 }
 else{
     return false;
 }
}
isEquilateral(){
        if(this.cote1==this.cote2 && this.cote1==this.cote3){
            return true;
        }
        else{
            return false;
        }

}
isRectangle(){
       if(Math.pow(this.cote1,2)==Math.pow(this.cote2,2)+Math.pow(this.cote3,2) || Math.pow(this.cote2,2)==Math.pow(this.cote1,2)+Math.pow(this.cote3,2) || Math.pow(this.cote3,2)==Math.pow(this.cote1,2)+Math.pow(this.cote2,2)){
           return true;
       }
       else{
           return false;
       }

}
getAreaRectangle(){
        if(this.cote1>this.cote2 && this.cote1>this.cote3){
            this.Area=(this.cote2*this.cote3)/2;
        }
        else if(this.cote2>this.cote1 && this.cote2>this.cote3){
            this.Area=(this.cote1*this.cote3)/2;
        }
        else if(this.cote3>this.cote2 && this.cote3>this.cote1){
            this.Area=(this.cote2*this.cote1)/2;
        }
        return this.Area;
}
getAreaTriangle(){
        this.p=this.getSides()/2;
        this.Area=Math.sqrt(this.p*(this.p-this.cote1)*(this.p-this.cote2)*(this.p-this.cote3));
        return this.Area;
}

}

module.exports = {
    Triangle:Triangle
}
