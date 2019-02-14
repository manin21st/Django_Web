function fnCond()
{
  // Initialize condition
  // alert("a");
}

function fnSearch()
{
  // alert("b");
  // Getting condition
  var syymm = getItem("txtSearch");
  var terms = {"yymm" : syymm};
  var url = "/eis/data/SalesPvsrCym/?search="+syymm;

  // Retrieve queryset from database table
  var queryset = dataSearch(url, terms);
  if (!queryset) {
    alert("dataSearch failed!");
  }

  //-----------------------------------------------------------
  // Drawing chart
  var dataset = [];
  var labels = toArray(queryset, "yymm");
  // alert(labels);
  var data1 = toArray(queryset, "planamt");
  // alert(data1);
  // DrawLineChart("myAreaChart", labels, data1, "판매계획");
  addChart(dataset, data1, "판매계획", 'bar');
  var data2 = toArray(queryset, "rsltamt");
  // alert(data2);
  addChart(dataset, data2, "판매실적", 'bar');
  DrawBarChart("myBarChart", labels, dataset);

  var colors = getColors(labels);
  // alert(colors);
  DrawPieChart("myPieChart", labels, data1, colors);

  //-----------------------------------------------------------
  // Loading datatable
  var names = ["기준년월", "계획수량", "계획금액", "실적수량", "실적금액"];
  // var names = ["yymm", "planqty", "planamt", "rsltqty", "rsltamt"];
  var columns = ["yymm", "planqty", "planamt", "rsltqty", "rsltamt"];
  var tableset = [];
  tableset = toTableSet(queryset, columns);
  // alert(dataset[0]);
  LoadDataTable("dataTable", tableset, names);
}
