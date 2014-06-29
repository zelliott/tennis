Tennis.ApplicationController = Ember.Controller.extend({
  numRows: 100,
  
  columns: function() {
    var dateColumn, openColumn, highColumn, lowColumn, closeColumn;
    dateColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.date.toDateString();
      }
    });
    openColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.open.toFixed(2);
      }
    });
    highColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.high.toFixed(2);
      }
    });
    lowColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.low.toFixed(2);
      }
    });
    closeColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.close.toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }.property(),
  
  content: function() {
    var generatedContent = [];
    for (var i = 0; i < this.get('numRows'); i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      generatedContent.push({
        date: date,
        open:  Math.random() * 100,
        high:  Math.random() * 100 + 50,
        low:   Math.random() * 100 - 50,
        close: Math.random() * 100
      });
    }
    return generatedContent;
  }.property('numRows')
});