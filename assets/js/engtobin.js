var charCodes=new Array(80); charCodes["a"]="01100001";
charCodes["b"]="01100010";
charCodes["c"]="01100011";
charCodes["d"]="01100100";
charCodes["e"]="01100101";
charCodes["f"]="01100110";
charCodes["g"]="01100111";
charCodes["h"]="01101000";
charCodes["i"]="01101001";
charCodes["j"]="01101010";
charCodes["k"]="01101011";
charCodes["l"]="01101100";
charCodes["m"]="01101101";
charCodes["n"]="01101110";
charCodes["o"]="01101111";
charCodes["p"]="01110000";
charCodes["q"]="01110001";
charCodes["r"]="01110010";
charCodes["s"]="01110100";
charCodes["t"]="01110100";
charCodes["u"]="01110101";
charCodes["v"]="01110110";
charCodes["w"]="01110111";
charCodes["x"]="01111000";
charCodes["y"]="01111001";
charCodes["z"]="01111010";
charCodes["1"]="00110001";
charCodes["2"]="00110010";
charCodes["3"]="00110011";
charCodes["4"]="00110100";
charCodes["5"]="00110101";
charCodes["6"]="00110110";
charCodes["7"]="00110111";
charCodes["8"]="00111000";
charCodes["9"]="00111001";
charCodes["0"]="00110000";
charCodes["A"]="01000001";
charCodes["B"]="01000010";
charCodes["C"]="01000011";
charCodes["D"]="01000100";
charCodes["E"]="01000101";
charCodes["F"]="01000110";
charCodes["G"]="01000111";
charCodes["H"]="01001000";
charCodes["I"]="01001001";
charCodes["J"]="01001010";
charCodes["K"]="01001011";
charCodes["L"]="01001100";
charCodes["M"]="01001101";
charCodes["N"]="01001110";
charCodes["O"]="01001111";
charCodes["P"]="01010000";
charCodes["Q"]="01010001";
charCodes["R"]="01010010";
charCodes["S"]="01010011";
charCodes["T"]="01010100";
charCodes["U"]="01010101";
charCodes["V"]="01010110";
charCodes["W"]="01010111";
charCodes["X"]="01011000";
charCodes["Y"]="01011001";
charCodes["Z"]="01011010";
charCodes["!"]="00100001";
charCodes["'\'"]="00100010";
charCodes["#"]="00100011";
charCodes["$"]="00100100";
charCodes["%"]="00100101";
charCodes["&"]="00100110";
charCodes["'"]="00100111";
charCodes["("]="00101000";
charCodes[")"]="00101001";
charCodes["*"]="00101010";
charCodes["+"]="00101011";
charCodes[","]="00101100";
charCodes["-"]="00101101";
charCodes["."]="00101110";
charCodes["/"]="00101111";
charCodes["?"]="00111111";
charCodes["@"]="01000000";
charCodes["␣"]="00100000";
charCodes["_"]="01011111";

var temp=''

function encodeToBin() {
  document.morsecode.chars.value=document.morsecode.chars.value;
  document.morsecode.codebox.value="";
  temp=''

  var chars=document.morsecode.chars.value.split(" ").join("␣");

  for (a=0; a<chars.length; a++) {
    if (chars[a]!=" ") {
      if (window.charCodes[chars[a]]) {
        document.morsecode.codebox.value+=charCodes[chars[a]]+"    ";
        temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
      }
      else
      temp+=chars[a]+"=(None)\n";
    }
    else temp+="\n";
  }
  document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
}
