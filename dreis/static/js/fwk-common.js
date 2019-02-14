// Global variables
FWK = {};
// FWK.colors = ["#4E73DF", "#2F4A8E", "#337299", "#329588", "#1CC88A", "#B3E4E6", "#E3E3AB", "#98A437", "#B48A3C", "#C15F44", "#BF4040", "#9F47C2"];
FWK.colors = ["#4E73DF", "#9F47C2", "#2F4A8E", "#BF4040", "#337299", "#C15F44", "#329588", "#B48A3C", "#1CC88A", "#98A437", "#B3E4E6", "#E3E3AB"];

// Program Start
$(document).ready(function() {

  // Event Handler
  //$('#btnSearch').click(function(){
  $('#btnSearch').on('click', function() {
    // alert($("#txtSearch").val());
    fnSearch();
  });
  //$('#btnSearch').click(fnSearch());
  $('#txtSearch').on('change', function() {
    //alert('btnSearch');
    // alert($("#txtSearch").val());
  });

  fnCond();
});

// CSRF code (using jQuery): Security Module
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

// input객체의 입력값 가져오기
function getItem(id) {
  return $('#' + id).val();
}
// 객체를 Chart에서 사용할 Array로 변환해서 리턴
function toArray(obj, name) {
  var arr = [];

  $.each(obj, function(i, item) {
    arr[i] = item[name];
  });

  return arr;
}
// Ajax방식을 사용해서 url로부터 JSON객체 받기
function dataSearch(url, terms) {
  var ds;

  $.ajax({
    url: url,
    type: "GET",
    data: terms,
    async: false,
    dataType: "JSON",
    success: function(data) {
      // alert("Success: "+url);
      ds = data;
    },
    error: function() {
      alert("[dataSearch] Error is occured: " + url);
    },
    complete: function() {
      //alert("Completed!");
    }
  });
  return ds;
}


// 객체를 DataTable에서 사용할 DataSet으로 변환해서 리턴
function toTableSet(obj, columns) {
  var ds = [];

  $.each(obj, function(i, item) {
    ds[i] = [];
    for (var j = 0; j < columns.length; j++) {
      ds[i][j] = number_format(item[columns[j]]);
    }
  });

  return ds;
}
// DataTable
function LoadDataTable(id, tableset, names) {
  var titles = [];

  for (var i = 0; i < names.length; i++) {
    titles[i] = {
      title: names[i],
      className: "dt-body-right"
    };
  }

  $("#" + id).DataTable({
    "destroy": true,
    "info": false,
    "paging": false,
    // "ordering": false,
    "searching": false,
    "data": tableset,
    "columns": titles,
    "columnDefs": [
        { className: "dt-head-center", targets: "_all" }
    ],
  });
}


// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Label 수만큼 Chart 색상값 가져오기
function getColors(labels) {
  var arr = [];

  // for (var i = 0; i < labels.length; i++) {
  for (var i in labels) {
    arr[i] = FWK.colors[i];
  }

  return arr;
}
// 2개 이상 Mix된 Chart를 구현하는 경우 Dataset 구성
function addChart(arr, data, label, type) {
  var i = arr.length;

  arr.push({
    label: label,
    backgroundColor: FWK.colors[i],
    // hoverBackgroundColor: "#2e59d9",
    // borderColor: "#4e73df",
    data: data,
    type: type,
  });

  return 1;
}
// 숫자인 경우 천단위 포맷을 지정하는 함수
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
// Area Chart
function DrawLineChart(id, labels, data, tooltip) {
  var ctx = document.getElementById(id);
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: tooltip,
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: data,
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
          }
        }
      }
    }
  });
}
// Pie Chart
function DrawPieChart(id, labels, data, colors) {
  var ctx = document.getElementById(id);
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors
        // backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        // hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: true
      },
      cutoutPercentage: 80,
    },
  });
}
// Bar Chart
function DrawBarChart(id, labels, dataset) {
  var ctx = document.getElementById(id);
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: dataset,
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          },
          maxBarThickness: 25,
        }],
        yAxes: [{
          ticks: {
            min: 0,
            // max: 15000,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return '' + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
          }
        }
      },
    }
  });
}
