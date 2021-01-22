const filterByKeywords = () => {
  const searchData = document.getElementById("search").value.toLowerCase();
  const data = document.getElementById("names").getElementsByTagName("li");
  for (let i = 0; i < data.length; i++) {
    if (data[i].classList.contains("match")) {
      data[i].classList.remove("match");
      data[i].style = "display:none";
    }
    if (data[i].innerHTML.includes("<em>")) {
      const start = data[i].innerHTML.indexOf("<em>");
      const end = data[i].innerHTML.indexOf("</em>");
      const beforeMatch = data[i].innerHTML.slice(0, start);
      const afterMatch = data[i].innerHTML.slice(end, data[i].innerHTML.length);
      const between = data[i].innerHTML.slice(start + 4, end + 3);
      data[i].innerHTML = `${beforeMatch}${between}${afterMatch}`;
    }
  }
  if (searchData.length < 2 || searchData === " ") return;
  for (let i = 0; i < data.length; i++) {
    if (data[i].innerHTML.toLowerCase().indexOf(searchData) !== -1) {
      data[i].classList.add("match");
      data[i].style = "display:block";
    } else {
      data[i].style = "display:none";
      data[i].classList.remove("match");
    }
  }
  highlight(searchData);
};

const highlight = (str) => {
  const data = document.getElementsByClassName("match");
  for (let i = 0; i < data.length; i++) {
    const matchStart = data[i].innerHTML.toLowerCase().indexOf("" + str + "");
    const matchEnd = matchStart + str.length - 1;
    const beforeMatch = data[i].innerHTML.slice(0, matchStart);
    const matchText = data[i].innerHTML.slice(matchStart, matchEnd + 1);
    const afterMatch = data[i].innerHTML.slice(matchEnd + 1);
    data[i].innerHTML = `${beforeMatch}<em>${matchText}</em>${afterMatch}`;
  }
};
