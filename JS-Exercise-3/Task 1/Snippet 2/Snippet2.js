const removeTags = (string) => {
  if (string === null || string === "") {
    return "Invalid Data Provided";
  }

  return string.replace(/(<([^>]+)>)/gi, "");
};

document.write(
  removeTags(
    prompt(
      "Please Provide a string",
      "<html><script>alert('Hello World');</script></html>"
    )
  )
);
