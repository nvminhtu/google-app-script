
function testReplaceInSheet(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var regExp = /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;


  for(i = 1; i <= sheet.getMaxRows(); i += 1) {
    var r = sheet.getRange('C' + i); // the column need run the replace
    var replace = '';

    if (regExp.exec(r.getValue()) !== null ) {
      var text_replaced = r.getValue().replace(regExp, replace)
      r.setValue(text_replaced);
    }

  }
}

function replaceInSheet(values, to_replace, replace_with) {
  //loop over the rows in the array
  for(var row in values){
    //use Array.map to execute a replace call on each of the cells in the row.
    var replaced_values = values[row].map(function(original_value) {
      return original_value.toString().replace(to_replace,replace_with);
    });

    //replace the original row values with the replaced values
    values[row] = replaced_values;
  }
}
