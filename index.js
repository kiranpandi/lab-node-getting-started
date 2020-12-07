class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }
  add(item) {
   this.items.push(item);
   this.items.sort((a,b)=>(a-b));
   this.length = this.length + 1;
  }
  get(pos) {
    if(this.items.indexOf(pos) == -1){
      throw new Error('OutOfBounds');
    }
    else{
      let ele = this.items[pos];
      return ele;
    }
  }
  max() {
    if(this.items.length > 0){
      return Math.max(...this.items);
    }
    else{
      throw new Error('EmptySortedList');
    }
  }
  min() {
    if(this.items.length > 0){
      return Math.min(...this.items);
    }
    else{
      throw new Error('EmptySortedList');
    }
  }
  avg() {
    if(this.items.length > 0){
      const tot = this.items.reduce( (tot,item) => tot+item,0 )
      return tot/this.items.length;
    }
    else{
      throw new Error('EmptySortedList');
    }
  }
  sum() {
    if(this.items.length > 0){
      const tot = this.items.reduce( (tot,item) => tot+item,0 )
      return tot;
    }
    else{
      return 0 ;
    }
  }
  
};

module.exports = SortedList;
