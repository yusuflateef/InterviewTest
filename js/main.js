$(function () {


    getRequest()
    function getRequest() {
        $.ajax({
            "url": "",
            "type": "get",
            beforeSend: function () {

            },

            success: function (data) {



            }, error: function (e) {

            }
        })

    }

    function postRequest() {
        let data = {

        }
        $.ajax({
            "url": "",
            "type": "post",

            beforeSend: function () {

            },

            success: function (data) {



            }, error: function (e) {

            }
        })
    }


})