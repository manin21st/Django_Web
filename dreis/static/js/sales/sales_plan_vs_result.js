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
  var cid = "myAreaChart";
  var labels = toArray(queryset, "yymm");
  // alert(labels);
  var data = toArray(queryset, "planamt");
  // alert(data);
  var tooltip = "매출액";
  DrawLineChart(cid, labels, data, tooltip);

  //-----------------------------------------------------------
  // Loading datatable
  var tid = "dataTable";
  var names = ["기준년월", "계획수량", "계획금액", "실적수량", "실적금액"];
  var columns = ["yymm", "planqty", "planamt", "rsltqty", "rsltamt"];
  var dataset = toDataSet(queryset, columns);
  // alert(dataset[0]);
  LoadDataTable(tid, dataset, names);
}
