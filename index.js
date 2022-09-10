var btn = document.getElementById("btn");
      btn.addEventListener("click", function () {
        var length = document.getElementById("text").value.length;
        if (length == 0) {
          document.getElementById("output").innerHTML =
            "please enter some text";
          setInterval(function () {
            location.reload();
          }, 2000);
        } else {
          var str = document.getElementById("text").value;
          var letters = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ];
          var result = [];
          var repeated = [];
          let count = 0;
          for (var j = 0; j < letters.length; j++) {
            count = 0;
            for (var i = 0; i < str.length; i++) {
              if (str.charAt(i) == letters[j]) {
                count++;
              }
            }
            if (count > 0) {
              result.push(letters[j] + " occurs " + count + " times");
            }
          }
          console.log(result);
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          var words = str.split(" ").length;
          document.getElementById("output").innerHTML =
            "length is: " + length + "<br/>words are:" + words + "<br/>";
          for (var i = 0; i < result.length; i++) {
            var text = document.createTextNode(result[i]);
            document.getElementById("output").appendChild(text);
            document
              .getElementById("output")
              .insertAdjacentHTML("beforeend", "<br/>");
          }
          var strArr = [];
          // const str1 = "ali car ali is";
          const countRepetitive = (str) => {
            strArr = str.split(" ");
            let count = 0;
            for (let i = 0; i < strArr.length; i++) {
              if (i === strArr.lastIndexOf(strArr[i])) {
                continue;
              }
              repeated.push(strArr[i] + ", ");
              count++;
            }
            document
              .getElementById("output")
              .insertAdjacentHTML("beforeend", "<br/><br/>");
            var text = document.createTextNode(
              "There are " + count + " repeated words"
            );
            document.getElementById("output").appendChild(text);
            document
              .getElementById("output")
              .insertAdjacentHTML("beforeend", "<br/><br/>");
            document
              .getElementById("output")
              .insertAdjacentText("beforeend", "The Repeated Words are: ");
            document
              .getElementById("output")
              .insertAdjacentHTML("beforeend", "<br/><br/>");
            return count;
          };
          console.log(countRepetitive(str));
          console.log(repeated);
          for (var i = 0; i < repeated.length; i++) {
            var text = document.createTextNode(repeated[i]);
            document.getElementById("output").appendChild(text);
          }
        }
      });