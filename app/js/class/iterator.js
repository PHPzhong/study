{
  let arr=['a',1,3,5,'b'];
  let iterator=arr[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

{
  let obj={
    a:[1,2,3],
    b:[4,5,6],
    [Symbol.iterator](){
      let self = this;
      let index = 0;
      let arr = self.a.concat(self.b);
      let len = arr.length;
      return{
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }}else{
              return {
                value:arr[index++],
                done:true
              }
            }
          }
        }
      }
    }
    let objj = obj[Symbol.iterator]();
    console.log(objj.next());
    console.log(objj.next());
    console.log(objj.next());
    console.log(objj.next());
    console.log(objj.next());
    console.log(objj.next());
    console.log(objj.next());
    for(let value of obj){
      console.log(value);
    }
  }
