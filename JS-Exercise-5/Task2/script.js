//On any word is entered this function is awaken
const filterByKeywords = () => {
  //Get the search keywords
  const searchData = document.getElementById("search").value.toLowerCase();
  //Get all the nodes of ul for data
  const data = document.getElementById("names").getElementsByTagName("li");
  //This loop is used to remove the match class which is
  //entered if the search keywords exist in the tag and hide it
  for (let i = 0; i < data.length; i++) {
    if (data[i].classList.contains("match")) {
      data[i].classList.remove("match");
      data[i].style = "display:none";
    }
    if (searchData.length < 2) {
      data[i].style = "display:block";
    }
    //id there is em tag which is entered by the highlight function for highlighting the match tag
    //remove all em tags
    if (data[i].innerHTML.includes("<em>")) {
      const start = data[i].innerHTML.indexOf("<em>");
      const end = data[i].innerHTML.indexOf("</em>");
      const beforeMatch = data[i].innerHTML.slice(0, start);
      const afterMatch = data[i].innerHTML.slice(end, data[i].innerHTML.length);
      const between = data[i].innerHTML.slice(start + 4, end + 3);
      data[i].innerHTML = `${beforeMatch}${between}${afterMatch}`;
    }
  }
  //If the search term is less then 2  or is blank then return
  if (searchData.length < 2 || searchData === " ") return;
  //Loop for if the text contains the searchkeywords then mark them with the help of adding match class
  for (let i = 0; i < data.length; i++) {
    if (data[i].innerHTML.toLowerCase().indexOf(searchData) !== -1) {
      data[i].classList.add("match");
      data[i].style = "display:block";
    } else {
      data[i].style = "display:none";
      data[i].classList.remove("match");
    }
  }
  //Call the highlight function with the search Keywords
  highlight(searchData);
};

//Function is used for highlighting the text in which there are match class
const highlight = (str) => {
  //get all elemenets which  has match class
  const data = document.getElementsByClassName("match");
  for (let i = 0; i < data.length; i++) {
    //Get the start of matching string
    const matchStart = data[i].innerHTML.toLowerCase().indexOf("" + str + "");
    //Get the end of matching string
    const matchEnd = matchStart + str.length - 1;
    //Get the text before match
    const beforeMatch = data[i].innerHTML.slice(0, matchStart);
    //Get the matched text
    const matchText = data[i].innerHTML.slice(matchStart, matchEnd + 1);
    //Get the text after match
    const afterMatch = data[i].innerHTML.slice(matchEnd + 1);
    //render out the em tag which will highlight the searchstring
    data[i].innerHTML = `${beforeMatch}<em>${matchText}</em>${afterMatch}`;
  }
};
