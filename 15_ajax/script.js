$(document).ready(function () {
  $.ajax({
      url: "https://reqres.in/api/users/",
      success: function (response) {
          for (let user in response['data']) {
              var email = response['data'][user]['email'];
              var name = response['data'][user]['first_name'];
              $("#userList").append("<p>" + email + '- ' + name + "</p>");
          }
      }
  });
});
