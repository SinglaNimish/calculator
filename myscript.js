 <script>
        function show(a) {
            document.getElementById("number").value += a;
            x = document.getElementById("number").value;
        }
        function erase() {
            document.getElementById("number").value = "";
        }
        function answer() {
            document.getElementById("number").value = eval(x);
        }
        function del() {
            var str = document.getElementById("number").value;
            str = str.slice(0, -1);
            document.getElementById("number").value = str;

        }

    </script>
