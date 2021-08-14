let countdown = 10;
setTimeout(function () {
  document.getElementById("display").innerHTML = countdown--;
  setTimeout(function () {
    document.getElementById("display").innerHTML = countdown--;
    setTimeout(function () {
      document.getElementById("display").innerHTML = countdown--;
      setTimeout(function () {
        document.getElementById("display").innerHTML = countdown--;
        setTimeout(function () {
          document.getElementById("display").innerHTML = countdown--;
          setTimeout(function () {
            document.getElementById("display").innerHTML = countdown--;
            setTimeout(function () {
              document.getElementById("display").innerHTML = countdown--;
              setTimeout(function () {
                document.getElementById("display").innerHTML = countdown--;
                setTimeout(function () {
                  document.getElementById("display").innerHTML = countdown--;
                  setTimeout(function () {
                    document.getElementById("display").innerHTML = countdown--;
                    setTimeout(function () {
                      document.getElementById("display").innerHTML =
                        "call back init";
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);
