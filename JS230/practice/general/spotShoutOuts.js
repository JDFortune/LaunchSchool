function createNewGoogleDoc() {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the active sheet
  var sheet = spreadsheet.getSheetByName('Form Responses 1'); // Replace 'Sheet1' with your sheet name
  
  // Get the data range (specify the range of cells you want to copy)
  var range = sheet.getRange('B2:F50'); // Range can be altered if need be.
  var values = range.getValues(); // Get the values from the range

  // Grab the category cells (Headers/prompts from the form)
  var cat_range = sheet.getRange('B1:F1');
  var cat_values = cat_range.getValues(); // Grab the values from those cells
  // var str = "Created On: ";
  // cat_values.unshift(str);

  // Create a new Google Doc
  var day = Date() // used for unique document name
  var doc = DocumentApp.create('Shoutouts' + day); // Replace 'New Document' with your desired document name
  
  // Get the body of the new document
  var body = doc.getBody();
  // body.appendParagraph(cat_values.toString());
  //Add Introduction to Shoutouts post
  body.appendParagraph(":zach: Hey everyone! It's time for the SPOT Shout outs! :fire: :fire: :fire:\n\n");

  // Loop through the values and append them to the document for every Shoutout
  var shoutout = "";
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      // body.appendParagraph(((cat_values[0][j] + ' ' + values[i][j]).replace("...", "")).replace("Personal message", "--"));
      shoutout += " ";
      shoutout += ((cat_values[0][j] + ' ' + values[i][j]).replace("...", "")).replace("Personal message", "\n--").replace("From", "\nFrom"); // janky reformatting (feel free to update. I'm not in JS yet.)
    }
    body.appendParagraph(shoutout);
    body.appendParagraph('\n:zach::zach::zach::zach::zach:\n'); // Add a new line after each row
    shoutout = "";
  }
  
  // Save and close the document
  doc.saveAndClose();
  
  // Log the URL of the new document
  Logger.log('New Document URL: ' + doc.getUrl());
}
