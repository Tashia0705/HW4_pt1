/* Name: Tashia Boddu
Email: Tashia_Boddu@student.uml.edu 
Project Created: November 26th 2022
Purpose of Project: Understand and create a dynamic table that
interacts with the user. Learn JS and JQuery to integrate validation */

/* Validation of form required and number are true and min and max have set
values */
$().ready(function () {
  $("#signupForm").validate({
    rules: {
      mincol: {
        required: true,
        number: true,
        min: -50,
        max: 50,
      },
      maxcol: {
        required: true,
        number: true,
        min: -50,
        max: 50,
      },
      minrow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
      },
      maxrow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
      }
    },

    /* Messages displayed explaning what the error is and how to fix it
    message is indicated on the same line as the box to indicate it is this
    box that needs to be fixed */
    messages: {
      mincol: {
        required: " Enter A Numerical Value ",
        number: " Enter A Number ",
        min: " Enter A Number Greater Than -50",
        max: " Enter A Number Less Than 50",
      },
      maxcol: {
        required: " Enter A Numerical Value ",
        number: " Enter A Number ",
        min: " Enter A Number Greater Than -50",
        max: " Enter A Number Less Than 50",
      },
      minrow: {
        required: " Enter A Numerical Value ",
        number: " Enter A Number ",
        min: " Enter A Number Greater Than -50",
        max: " Enter A Number Less Than 50",
      },
      maxrow: {
        required: " Enter A Numerical Value ",
        number: " Enter A Number ",
        min: " Enter A Number Greater Than -50",
        max: " Enter A Number Less Than 50",
      }
    }
  });

  /* If all input is correct create a table */
  $('#signupForm').submit(function (event) {
    event.preventDefault();
    if ($('#signupForm').valid()) {
      createTable();
    }
  });
});

/* function that creates an array based in user input */
function array(min, max) {
  let array = [];
  if (min != 0) {
    array.push(0);
  }
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}


/* create the table by storing user input into vars. Use vars to
compute the values for the table using nested for loops.Use arrays
to iterate thought each index to genereate desired result */
function createTable () {
  if (document.querySelector("table")) {
    document.querySelector("table").remove();
  }
  const table = document.createElement('table');

  var minCol = document.getElementById("mincol").value;
  var maxCol = document.getElementById("maxcol").value;
  var minRow = document.getElementById("minrow").value;
  var maxRow = document.getElementById("maxrow").value;

  const column = array(minCol, maxCol);
  const row = array(minRow, maxRow);

  for (var r = 0; r < parseInt(row.length); r++) {
    var x = document.createElement('tr');
    for (var c = 0; c < parseInt(column.length); c++) {
      var y =  document.createElement('td');
      let result = row[r] * column[c];

      if (r === 0 || c === 0) {
        result = row[r] || column[c];
        y.classList.add('header');
      }
      if (r === 0 && c === 0) result = '';
      y.innerHTML = result;
      x.appendChild(y);
    }
    table.appendChild(x);
  }
  const container = document.getElementById("Table");
  container.appendChild(table);
  event.preventDefault();
}
