var chess1 = " # # # #"
var chess2 = "# # # # "
for (var linenumber = 1; linenumber <= 8; linenumber++) {
  if (linenumber % 2 == 0)
      console.log(chess2);
  else
    console.log(chess1);
}
