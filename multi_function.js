
 
function prime( ){  
  
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
        document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a1").checked == true){

    let number = document.getElementById("value__").value;
    n = number;
    Count = 0;
    
    if(n <= 1){document.getElementById("result").value = "not prime";}

    else{
        for(let i= 2 ; i <= n/2 ; i++)
        {
            if(n % i == 0)
                {
                    Count++;
                    break; }
        }
        if(Count==0){document.getElementById("result").value = "prime";}
        else{document.getElementById("result").value = " not prime";}
    }
    document.getElementById("function_type").innerHTML = "Prime number (no args no return)";
    }}
   };

   function prime_2(number){  
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b1").checked == true){
        number = document.getElementById("value__").value;
    n = number;
    Count = 0;
    
    if(n <= 1){
    document.getElementById("result").value = "not prime";}

    else{
        for(let i= 2 ; i <= n/2 ; i++)
        {
            if(n % i == 0)
                {
                    Count++;
                    break; }
        }
        if(Count==0){document.getElementById("result").value = "prime";}
            else{document.getElementById("result").value = " not prime";}
    }
    document.getElementById("function_type").innerHTML = "Prime number (with args no return)";
    }}
   };

   //prime_2(document.getElementById("value__").value); .......not working
   //prime_2(121); .......working

   function prime_3(number){  
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c1").checked == true){
        document.getElementById("function_type").innerHTML = "Prime number (with args with return)";
        number = document.getElementById("value__").value;
    n = number;
    Count = 0;
    
    if(n <= 1){
    document.getElementById("result").value = "not prime";}

    else{
        for(let i= 2 ; i <= n/2 ; i++)
        {
            if(n % i == 0)
                {
                    Count++;
                    break; }
        }
        if(Count==0)
        {document.getElementById("result").value = "prime";
            return true;}
            else{document.getElementById("result").value = " not prime";
            return false;}
    }
   
    }}
   };

   function prime_4( ){  
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("d1").checked  == true){
    document.getElementById("function_type").innerHTML = "Prime number (no args with return)";

    let number = document.getElementById("value__").value;
    n = number;
    Count = 0;
    
    if(n <= 1){
    document.getElementById("result").value = "not prime";}

    else{
        for(let i= 2 ; i <= n/2 ; i++)
        {
            if(n % i == 0)
                {
                    Count++;
                    break; }
        }
        if(Count==0){
             document.getElementById("result").value = "prime";
            return true;}
        else{ 
             document.getElementById("result").value = "not prime";
            return false;}                
    }
    }}
   };

   let prime_Expression = function pe(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("e1").checked  == true){
        document.getElementById("function_type").innerHTML = "Prime number (Expression function)";
        number = document.getElementById("value__").value;
        n = number;
        Count = 0;
        if(n <= 1){
            document.getElementById("result").value = "not prime";}
        
            else{
                for(let i= 2 ; i <= n/2 ; i++)
                {
                    if(n % i == 0)
                        {
                            Count++;
                            break; }
                }
                if(Count==0){
                     document.getElementById("result").value = "prime";
                    return true;}
                else{ 
                     document.getElementById("result").value = "not prime";
                    return false;}                
            }}
   }}

   function prime_callback(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    function abc(){
        if(document.getElementById("f1").checked  == true){
            document.getElementById("function_type").innerHTML = "Prime number (Callback function)";
        
            let number = document.getElementById("value__").value;
            n = number;
            Count = 0;
            
            if(n <= 1){
            document.getElementById("result").value = "not prime";}
        
            else{
                for(let i= 2 ; i <= n/2 ; i++)
                {
                    if(n % i == 0)
                        {
                            Count++;
                            break; }
                }
                if(Count==0){document.getElementById("result").value = "prime";}
                else{document.getElementById("result").value = "not prime";}                
            }}
       }
    
       function call(callback)
       {callback();}
    
       call(abc);
   }}
   
   let prime_arrow = (number) => {
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("g1").checked  == true){
    document.getElementById("function_type").innerHTML = "Prime number (Arrow function)";
    number = document.getElementById("value__").value;
    n = number;
    Count = 0;
    if(n <= 1){
        document.getElementById("result").value = "not prime";}
    
        else{
            for(let i= 2 ; i <= n/2 ; i++)
            {
                if(n % i == 0)
                    {
                        Count++;
                        break; }
            }
            if(Count==0){
                 document.getElementById("result").value = "prime";
                return true;}
            else{ 
                 document.getElementById("result").value = "not prime";
                return false;}                
        }}
   }
}
   function prime_Promise(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    var promise = new Promise(function pp(resolve , reject){
        if(document.getElementById("h1").checked  == true){
            document.getElementById("function_type").innerHTML = "Prime number (promise function)";
            let number = document.getElementById("value__").value;
            n = number;
            Count = 0;
            if(n <= 1){
                document.getElementById("result").value = "not prime";}
            
                else{
                    for(let i= 2 ; i <= n/2 ; i++)
                    {
                        if(n % i == 0)
                            {
                                Count++;
                                break; }
                    }
         if(count == 0){resolve(); }
         else{reject(); }
    }}
    });
    promise.then(function(){document.getElementById("result").value = "prime number";}).catch(function(){document.getElementById("result").value = "not prime number";})
}
   }
   function Reverse(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a2").checked == true){
        let number = document.getElementById("value__").value;
        n = (number); 
        //alert(typeof(n));
        rev = 0 ;
        
            while (n > 0){
            let num = n % 10;
            rev = rev * 10 + num ;
            n = parseInt(n/10) ;
        }
        //rev = String(rev);
        document.getElementById("result").value = ""+rev;
     
    document.getElementById("function_type").innerHTML = "Reverse number (no arg no return)";
   }}
   }
   function Reverse_2(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b2").checked == true){
        number = document.getElementById("value__").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
    document.getElementById("result").value = ""+rev;
    document.getElementById("function_type").innerHTML = "Reverse number (with arg no return)";
   }}}

   function Reverse_3(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c2").checked == true){
        document.getElementById("function_type").innerHTML = "Reverse number (with arg with return)";
        number = document.getElementById("value__").value;
        n = number; 
        rev = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            rev = rev * 10 + num ;
        } 
    return document.getElementById("result").value = ""+rev;
    }}}

    function Reverse_4(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("d2").checked == true){
            document.getElementById("function_type").innerHTML = "Reverse number (no arg with return)";
            let number = document.getElementById("value__").value;
            n = number; 
            rev = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                rev = rev * 10 + num ;
            } 
        return document.getElementById("result").value = ""+rev;
    }}}

    let Reverse_Expression = function (number){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("e2").checked == true){
            document.getElementById("function_type").innerHTML = "Reverse number (expression function)";
            number = document.getElementById("value__").value;
            n = number; 
            rev = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                rev = rev * 10 + num ;
            } 
        return document.getElementById("result").value = ""+rev;
        } 
    }}
    
    function Reverse_Callback()
    {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        function rc()
        {if(document.getElementById("f2").checked == true){
            document.getElementById("function_type").innerHTML = "Reverse number (callback function)";
            let number = document.getElementById("value__").value;
            n = number; 
            rev = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                rev = rev * 10 + num ;
            } 
        return document.getElementById("result").value = ""+rev;
    }}
    function call(callback)
       {callback();}
    
       call(rc);
    }
    }
    let Reverse_Arrow = (number) => {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("g2").checked == true){
            document.getElementById("function_type").innerHTML = "Reverse number (Arrow function)";
            number = document.getElementById("value__").value;
            n = number; 
            rev = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                rev = rev * 10 + num ;
            } 
        return document.getElementById("result").value = ""+rev;
        } }
    }

    function Reverse_Promise(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        var promise = new Promise(function adp(resolve , reject){
            if(document.getElementById("h2").checked == true){
                document.getElementById("function_type").innerHTML = "Reverse number (promise function)";
                let number = document.getElementById("value__").value;
                n = number; 
                rev = 0 ;
                while (n>0){
                    let num = n % 10;
                    n = parseInt (n/10);
                    rev = rev * 10 + num ;
                } 
            resolve(); 
        }
        else{reject();}
        });
        promise.then(function(){document.getElementById("result").value = ""+rev;});
    }}
   function Armstrong(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a3").checked == true){
        let number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){document.getElementById("result").value = "Armstrong number";}
        else{document.getElementById("result").value = "not Armstrong number";}

    document.getElementById("function_type").innerHTML = "Armstrong number (no arg no return)";
   }}
   }
   function Armstrong_2(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b3").checked == true){
        number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){document.getElementById("result").value = "Armstrong number";}
        else{document.getElementById("result").value = "not Armstrong number";}

    document.getElementById("function_type").innerHTML = "Armstrong number (with arg no return)";
   }}}

   function Armstrong_3(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c3").checked == true){
        number = document.getElementById("value__").value;
        document.getElementById("function_type").innerHTML = "Armstrong number (with arg with return)";
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){return document.getElementById("result").value = "Armstrong number";}
        else{return document.getElementById("result").value = "not Armstrong number";}
   }}}

   function Armstrong_4(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("d3").checked == true){
        document.getElementById("function_type").innerHTML = "Armstrong number (no arg with return)";
        let number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){return document.getElementById("result").value = "Armstrong number";}
        else{return document.getElementById("result").value = "not Armstrong number";}
   }}}

   let Armstrong_Expression = function (number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("e3").checked == true){
        number = document.getElementById("value__").value;
        document.getElementById("function_type").innerHTML = "Armstrong number (Expression function)";
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){return document.getElementById("result").value = "Armstrong number";}
        else{return document.getElementById("result").value = "not Armstrong number";}
   }  
   }
   }
   function Armstrong_Callback(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
       function ac(){
        if(document.getElementById("f3").checked == true){
            document.getElementById("function_type").innerHTML = "Armstrong number (callback function)";
            let number = document.getElementById("value__").value;
            n = number; 
            temp = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                temp = temp + num*num*num ;
            } 
            if(temp == number){return document.getElementById("result").value = "Armstrong number";}
            else{return document.getElementById("result").value = "not Armstrong number";}
       }
       }
       function call(callback){
           callback();
       }
       call(ac);
   }}

   let Armstrong_Arrow = (number) => {
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("g3").checked == true){
        number = document.getElementById("value__").value;
        document.getElementById("function_type").innerHTML = "Armstrong number (Arrow function)";
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = temp + num*num*num ;
        } 
        if(temp == number){return document.getElementById("result").value = "Armstrong number";}
        else{return document.getElementById("result").value = "not Armstrong number";}
   }
   }
   }
   function Armstrong_Promise(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    var promise = new Promise(function ap(resolve , reject){
        if(document.getElementById("h3").checked == true){
            let number = document.getElementById("value__").value;
            document.getElementById("function_type").innerHTML = "Armstrong number (promise function)";
            n = number; 
            temp = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                temp = temp + num*num*num ;
            } 
         if(temp == number){resolve(); }
         else{reject(); }
    }
    });
    promise.then(function(){document.getElementById("result").value = "Armstrong number";}).catch(function(){document.getElementById("result").value = "not Armstrong number";})
}}

   function Add_Digit(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a4").checked == true){
        let number = document.getElementById("value__").value;
        n = number; 
        sum = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            sum = sum + num ;
        } 
    document.getElementById("result").value = ""+sum;
    document.getElementById("function_type").innerHTML = "Add Digits (no arg no return)";
   }}}

   function Add_Digit_2(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b4").checked == true){
        document.getElementById("function_type").innerHTML = "Add Digits (with arg no return)";
        number = document.getElementById("value__").value;
        n = number; 
        sum = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            sum = sum + num ;
        } 
     document.getElementById("result").value = ""+sum;
    }}}

   function Add_Digit_3(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c4").checked == true){
        document.getElementById("function_type").innerHTML = "Add Digits (with arg with return)";
        number = document.getElementById("value__").value;
        n = number; 
        sum = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            sum = sum + num ;
        } 
    return document.getElementById("result").value = ""+sum;
    }}
   }
   function Add_Digit_4(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("d4").checked == true){
        document.getElementById("function_type").innerHTML = "Add Digits (no arg with return)";
        let number = document.getElementById("value__").value;
        n = number; 
        sum = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            sum = sum + num ;
        } 
    return document.getElementById("result").value = ""+sum;
    }}}

    let Add_Digit_Expression = function (number) {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("e4").checked == true){
            document.getElementById("function_type").innerHTML = "Add Digits (Expression function)";
            number = document.getElementById("value__").value;
            n = number; 
            sum = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                sum = sum + num ;
            } 
        return document.getElementById("result").value = ""+sum;
        }   
    }}

    function Add_Digit_Callback(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        function adc(){
            if(document.getElementById("f4").checked == true){
                document.getElementById("function_type").innerHTML = "Add Digits (callback function)";
                let number = document.getElementById("value__").value;
                n = number; 
                sum = 0 ;
                while (n>0){
                    let num = n % 10;
                    n = parseInt (n/10);
                    sum = sum + num ;
                } 
            return document.getElementById("result").value = ""+sum;
            }
        }
        function call(callback){
            callback();
        }
        call(adc);
    }}

    let Add_Digit_Arrow = (number) => {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("g4").checked == true){
            document.getElementById("function_type").innerHTML = "Add Digits (Arrow function)";
            number = document.getElementById("value__").value;
            n = number; 
            sum = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                sum = sum + num ;
            } 
        return document.getElementById("result").value = ""+sum;
        }
    }}

    function Add_Digit_Promise(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        var promise = new Promise(function adp(resolve , reject){
            if(document.getElementById("h4").checked == true){
                document.getElementById("function_type").innerHTML = "Add Digits (promise function)";
                let number = document.getElementById("value__").value;
                n = number; 
                sum = 0 ;
                while (n>0){
                    let num = n % 10;
                    n = parseInt (n/10);
                    sum = sum + num ;
                } 
            resolve(); 
        }
        else{reject();}
        });
        promise.then(function(){document.getElementById("result").value = ""+sum;});
    }
}
   function Factorial(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a5").checked == true){
        let number = document.getElementById("value__").value;
        n = number; 
        fact = 1 ;
        for(let i=1 ; i<= n ;i++)
        {fact = fact*i;}
    document.getElementById("result").value = ""+fact;
    document.getElementById("function_type").innerHTML = "Factorial (no arg no return)";
   }}
}
   function Factorial_2(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b5").checked == true){
        number = document.getElementById("value__").value;
        n = number; 
        fact = 1 ;
        for(let i=1 ; i<= n ;i++)
        {fact = fact*i;}
    document.getElementById("result").value = ""+fact;
    document.getElementById("function_type").innerHTML = "Factorial (with arg no return)";
   }}}

   function Factorial_3(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c5").checked == true){
        document.getElementById("function_type").innerHTML = "Factorial (with arg with return)";
        number = document.getElementById("value__").value;
        n = number; 
        fact = 1 ;
        for(let i=1 ; i<= n ;i++)
        {fact = fact*i;}
    return document.getElementById("result").value = ""+fact;
    }}}

    function Factorial_4(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("d5").checked == true){
            document.getElementById("function_type").innerHTML = "Factorial (no arg with return)";
            let number = document.getElementById("value__").value;
            n = number; 
            fact = 1 ;
            for(let i=1 ; i<= n ;i++)
            {fact = fact*i;}
        return document.getElementById("result").value = ""+fact;
       }}}

       let Factorial_Expression = function (number) {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("e5").checked == true){
            document.getElementById("function_type").innerHTML = "Factorial (Expression function)";
            number = document.getElementById("value__").value;
            n = number; 
            fact = 1 ;
            for(let i=1 ; i<= n ;i++)
            {fact = fact*i;}
        return document.getElementById("result").value = ""+fact;
        }
       }}

       function Factorial_Callback()
       {if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
           function fc(){
            if(document.getElementById("f5").checked == true){
                document.getElementById("function_type").innerHTML = "Factorial (callback function)";
                let number = document.getElementById("value__").value;
                n = number; 
                fact = 1 ;
                for(let i=1 ; i<= n ;i++)
                {fact = fact*i;}
            return document.getElementById("result").value = ""+fact;
           }
           }
           function call(callback){
               callback();
           }
           call(fc);
       }}

       let Factorial_Arrow = (number) => {
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        if(document.getElementById("g5").checked == true){
            document.getElementById("function_type").innerHTML = "Factorial (Arrow function)";
            number = document.getElementById("value__").value;
            n = number; 
            fact = 1 ;
            for(let i=1 ; i<= n ;i++)
            {fact = fact*i;}
        return document.getElementById("result").value = ""+fact;
        }
       }}

       function Factorial_Promise(){
        if(document.getElementById("value__").value == ""){
            document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
        }
        else if(isNaN(document.getElementById("value__").value)){
            document.getElementById("validation_error").innerHTML="please enter numeric value only";
        }
        else if(document.querySelector('input[name="ab"]:checked') == null){
            document.getElementById("validation_error").innerHTML="select any one option to see the output.";
        }
        else{
        var promise = new Promise(function fp(resolve , reject){
            if(document.getElementById("h5").checked == true){
                document.getElementById("function_type").innerHTML = "Factorial (promise function)";
                let number = document.getElementById("value__").value;
                n = number; 
                fact = 1 ;
                for(let i=1 ; i<= n ;i++)
                {fact = fact*i;}
            resolve(); 
        }
        else{reject();}
        });
        promise.then(function(){document.getElementById("result").value = ""+fact;});
    }}

   function Palindrom(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("a6").checked == true){
        let number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){document.getElementById("result").value = "Palindrom number";}
        else{document.getElementById("result").value = "not Palindrom number";}

    document.getElementById("function_type").innerHTML = "Palindrom number (no arg no return)";
   }}}

   function Palindrom_2(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("b6").checked == true){
        number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){document.getElementById("result").value = "Palindrom number";}
        else{document.getElementById("result").value = "not Palindrom number";}

    document.getElementById("function_type").innerHTML = "Palindrom number (with arg no return)";
   }}}

   function Palindrom_3(number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("c6").checked == true){
        document.getElementById("function_type").innerHTML = "Palindrom number (with arg with return)";
        number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){return document.getElementById("result").value = "Palindrom number";}
        else{return document.getElementById("result").value = "not Palindrom number";}
   }}
}
   function Palindrom_4(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("d6").checked == true){
        document.getElementById("function_type").innerHTML = "Palindrom number (no arg with return)";

        let number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){return document.getElementById("result").value = "Palindrom number";}
        else{return document.getElementById("result").value = "not Palindrom number";}
   }}}

   let Palindrom_Expression = function (number){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("e6").checked == true){
        document.getElementById("function_type").innerHTML = "Palindrom number (Expression function)";
        number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){return document.getElementById("result").value = "Palindrom number";}
        else{return document.getElementById("result").value = "not Palindrom number";}
   }
   }}

   function Palindrom_Callback(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
       function pc(){
        if(document.getElementById("f6").checked == true){
            document.getElementById("function_type").innerHTML = "Palindrom number (callback function)";
    
            let number = document.getElementById("value__").value;
            n = number; 
            temp = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                temp = (temp * 10) + num ;
            } 
            if(number == temp){return document.getElementById("result").value = "Palindrom number";}
            else{return document.getElementById("result").value = "not Palindrom number";}
       }
       }

       function call(callback){
           callback();
       }
       call(pc);
   }}

   let Palindrom_Arrow = (number) =>  {
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
    if(document.getElementById("g6").checked == true){
        document.getElementById("function_type").innerHTML = "Palindrom number (Arrow function)";
        number = document.getElementById("value__").value;
        n = number; 
        temp = 0 ;
        while (n>0){
            let num = n % 10;
            n = parseInt (n/10);
            temp = (temp * 10) + num ;
        } 
        if(number == temp){return document.getElementById("result").value = "Palindrom number";}
        else{return document.getElementById("result").value = "not Palindrom number";}
   }
   }}

   function Palindrom_Promise(){
    if(document.getElementById("value__").value == ""){
        document.getElementById("validation_error").innerHTML="field can't be Empty....please enter value";
    }
    else if(isNaN(document.getElementById("value__").value)){
        document.getElementById("validation_error").innerHTML="please enter numeric value only";
    }
    else if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById("validation_error").innerHTML="select any one option to see the output.";
    }
    else{document.getElementById("validation_error").innerHTML="";
       var promise = new Promise(function pp(resolve , reject){
        if(document.getElementById("h6").checked == true){
            document.getElementById("function_type").innerHTML = "Palindrom number (promise function)";
            number = document.getElementById("value__").value;
            n = number; 
            temp = 0 ;
            while (n>0){
                let num = n % 10;
                n = parseInt (n/10);
                temp = (temp * 10) + num ;
            } 
            if(number == temp){resolve(); }
            else{reject(); }
       }
       });
       promise.then(function(){document.getElementById("result").value = "Palindrom number";}).catch(function(){document.getElementById("result").value = "not Palindrom number";})
   }}
