$(function(){

    $('[data-toggle="tooltip"]').tooltip();   
    $('#submit').click(function(){

        postRequest()
    })
             $("#uploadFile").click(function(){
        uploadFiles()
    })
    function uploadFiles(){
            let status=$("#status");
             
            let bar=$(".bar")
            let percent= $('.percent');
            // var input= document.getElementById(inputId);

            let filed = $('#files')
            var formData= new FormData(filed);
            for(let i=0; i!=filed.length; i++){

                
                formData.append("files",filed[i]);
            }
          
            $.ajax({
                "url":"http://localhost:49681/api/Upload",
               " data":formData,
                "processData":false,
                "contentType":false,
                "type":"POST",
                beforeSend:function(){
                    status.empty();
                let percentage = '0%';
                    bar.width(percentage);
                    percent.html(percentage)
       
               },
               uploadProgress:function(event,position,total, percentComplete){
                   let percentVal= percentComplete + '0%';
                    bar.width(percentVal)
                    percent.html(percentVal)
               },
               completed:function(xhr){
                   
                   status.html(xhr.responseText)
               }, 
       
                success:function(data){
                    alert("sent")

                }

            })

        }
    
       


    function postRequest(){
        let  firstName=$('.firstName').val();
        let  lastName=$('.lastName').val();
        let  userName=$(' .userName').val();
        let  email=$(' .email').val()
        let  address=$(' .address').val();
        let  password=$('.password').val();
        let  confirmPassword=$(' .confirmPassword').val();
        
        let sDate= new Date()
        var menberId= "ABC"+"/"+ sDate.getFullYear()+"/"+ sDate.getSeconds()+ "/"+lastName.slice(0,3).toUpperCase() 
       
       var data2={
          " transactionID": menberId
       }
        

        var data={
            "FirstName":firstName,
            "LastName":lastName,
            "userName":userName,
            "Email":email,
            "Address" :address,
            "Password":password
            
        }
                
                $.ajax({
            "url":"http://localhost:49681/api/TransactionNumbers",
            "method":"post",
            "contentType":"Application/json",
            "data":JSON.stringify(data2),
            success:function(data){ 
            },
            error: function(e){
                alert(JSON.stringify(e))
    
            }
        })

setTimeout(() => {
        $.ajax({
            "url":"http://localhost:49681/api/Users",
            "method":"post",
            "contentType":"Application/json",
            "data":JSON.stringify(data),
            success:function(data){
                
        alert("successful")
        document.location.href="view.html"
        
            },
            error: function(e){
                alert(JSON.stringify(e))
    
            }
        })
    
}, 5000);
        
    }


})