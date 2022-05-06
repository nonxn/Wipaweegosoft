const  letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


  async function cal (){ 
    let test = [];
    let re = [];
    
    for(let i=0;i<=24;i++){
        let o = i+1;
     
        re.push(letter[o]);
         i++ 
         
        let u = i-1;
       
        re.push(letter[u]);
 }


 return re+test;
}

    function delaySaysuccess() {
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("success");
    }, 1000);
    });
    }



    
    async function main(){
      try {
    let a = cal();
    console.log(a); 
  } catch (error) {

    console.log("Error");
     
  }
    }
  
    main();
