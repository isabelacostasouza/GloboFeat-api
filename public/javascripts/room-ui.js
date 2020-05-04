$(document).ready(function(){

    var username = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 2];
    var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';

    $.ajax({
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      url: api_url,
      success: function(jsondata){

        let users = Object.keys(Object(jsondata.users));

        for (let i = 0; i < users.length; i++) {
            if (users[i].includes(username)) {
                let navbar_without_login = document.getElementById('navbar_without_login');
                navbar_without_login.style.display = 'none';

                let navbar = document.getElementById('navbar');
                navbar.style.display = 'block';

                $('#username').text(users[i]);
                $("#user_picture").attr("src", ('../../../images/user_pics/' + users[i] + '.jpg'));
            }
        }
      }
    });

    //Dragging userlist and chatbox
    $('#drag').on('mousedown', function(e){
        var $dragable = $(this).parent(),
            startHeight = $dragable.height(),
            pY = e.pageY;
        $(document).on('mouseup', function(e){
            $(document).off('mouseup').off('mousemove');
        });
        $(document).on('mousemove', function(me){
            var my = (me.pageY - pY);
            $dragable.css({
                height: startHeight + my,
            });
        });
    });
});