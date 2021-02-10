const staircase = (n) => {
  for (var i=0; i<n; i++) {
    var line = "";
    for (var j=0; j<n; j++) {
      if (j > i) line = line.concat(" ");
    }
    for (var j=0; j<n; j++) {
      if (j <= i) line = line.concat("#");
    }
    console.log(line);
  }
};

staircase(6);
