function search() {
    var goods = document.getElementById("goods").value;
    var location = document.getElementById("location").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        displayResults(this);
      }
    };
    xhttp.open("GET", "search.php?goods=" + goods + "&location=" + location, true);
}  