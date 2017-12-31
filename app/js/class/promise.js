{
  let pro=function (num) {
    console.log('第一步');
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve(num)
      },3000)
    })
  }
  pro(6).then(()=>{
    console.log('第二步');
    return new Promise((resolve,reject)=>{
      if(num<5){
        resolve()
      }else{
        throw new Error('出错了');
      }
    })
  }).then(()=>{
    console.log('第三步');
  }).catch(error=>console.log('参数错误'))

}
