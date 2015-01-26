// Code written by Jared Smith for ch2 chessboard problem
var chess1 = " # # # #"
var chess2 = "# # # # "
var size = 8
for (var linenumber = 1; linenumber <= size; linenumber++) {
  if (linenumber % 2 == 0)
      console.log(chess2);
  else
    console.log(chess1);
}
