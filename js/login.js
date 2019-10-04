

$(function(){
   
$("#button").click(function(e){
    e.preventDefault();
  // 
    $("#button").html('<img src="Interviewtest/img/loader1.gif">')
    login()
})

    function login(){

    

    let getList= localStorage.getItem('list')
        registeredList=JSON.parse(getList)
        let loginCred={
                "name": $('.username').val(),
                "email": $('.password').val()
              }
        
                if(registeredList.username===loginCred.username)
                {
                    $.ajax({
                        "url":" http://localhost:3004/login",
                        "contentType":"Application/json",
                        "method":"post",
                        "data":JSON.stringify(loginCred),
                       
                        success:function(data){
                            $("#button").html('Login')
                            alert("you are welcome")
            
                        },
                        error:function(e){
                            alert("", JSON.stringify(e))
                        }
            
                    })
                }
                else{
                    alert("you have enter a wrong username or password")
                }
       
    }
})