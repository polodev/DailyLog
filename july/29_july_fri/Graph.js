var graphData = [
  '<div id="c1710cb6-3b0b-4a45-8dfa-8b23a1928f1e" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("c1710cb6-3b0b-4a45-8dfa-8b23a1928f1e", [{"y": [4, 9, 8, 9, 1, 4, 0, 10, 0, 8, 6, 5, 3, 10, 9, 9, 4, 5, 5, 5, 5, 10, 8, 6, 0, 8, 0, 1, 8, 8], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "type": "bar"}], {"title": "My Plot"}, {"linkText": "Export to plot.ly", "showLink": true})</script>',
  '<div id="43e80fe4-169a-4868-b236-096d9de045ae" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("43e80fe4-169a-4868-b236-096d9de045ae", [{"y": [2, 7, 6, 0, 7, 0, 2, 4, 6, 6, 9, 2, 10, 10, 9, 8, 10, 10, 5, 7, 3, 6, 8, 10, 3, 2, 10, 3, 1, 5], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "type": "scatter"}], {"title": "My Plot"}, {"linkText": "Export to plot.ly", "showLink": true})</script>',
  '<div id="bcb99fbd-16cf-4db4-9935-e3a90847dab7" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("bcb99fbd-16cf-4db4-9935-e3a90847dab7", [{"y": [20, 14, 23], "x": ["giraffes", "orangutans", "monkeys"], "type": "bar", "name": "SF Zoo"}, {"y": [12, 18, 29], "x": ["giraffes", "orangutans", "monkeys"], "type": "bar", "name": "LA Zoo"}], {"barmode": "group"})</script>',
  '<div id="bcb99fbd-16cf-4db4-9935-e3a90847dab7" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("bcb99fbd-16cf-4db4-9935-e3a90847dab7", [{"y": [20, 14, 23], "x": ["giraffes", "orangutans", "monkeys"], "type": "bar", "name": "SF Zoo"}, {"y": [12, 18, 29], "x": ["giraffes", "orangutans", "monkeys"], "type": "bar", "name": "LA Zoo"}], {"barmode": "stack"}, {"linkText": "Export to plot.ly", "showLink": true})</script>',
  '<div id="38a3dde8-c043-4e7d-abb0-4a9810407e56" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("38a3dde8-c043-4e7d-abb0-4a9810407e56", [{"marker": {"color": "rgb(49,130,189)"}, "y": [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17], "type": "bar", "name": "Primary Product", "x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}, {"marker": {"color": "rgb(204,204,204)"}, "y": [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16], "type": "bar", "name": "Secondary Product", "x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}], {"barmode": "group", "xaxis": {"tickangle": -45}}, {"linkText": "Export to plot.ly", "showLink": true})</script>',
  '<div id="8bc9bf73-e7aa-4161-a718-2711498815b6" style="height: 100%; width: 100%;" class="plotly-graph-div"></div><script type="text/javascript">window.PLOTLYENV=window.PLOTLYENV || {};window.PLOTLYENV.BASE_URL="https://plot.ly";Plotly.newPlot("8bc9bf73-e7aa-4161-a718-2711498815b6", [{"y": ["giraffes", "orangutans", "monkeys"], "x": [20, 14, 23], "type": "bar", "orientation": "h"}], {}, {"linkText": "Export to plot.ly", "showLink": true})</script>',
]
import React, { Component } from 'react';
export default class Graph extends Component {
  constructor(props) {
    super(props)
    this.runScript = this.runScript.bind(this)
  }
  componentDidMount(){
    this.runScript();
    window.addEventListener('resize', this.runScript)
  }
  runScript(){
    let {data} = this.props;

    let beginnigScriptIndex = data.indexOf('<script') + 31;
    let endScriptIndex = data.indexOf('</script>');
    let  scriptInnerContent = data.substring(beginnigScriptIndex, endScriptIndex);

    window.eval(scriptInnerContent);
    setTimeout(function(){
      let divId = data.substring(9, (data.indexOf("style") -2) );
      document.getElementById('divId').height = '100%';
      document.getElementById('divId').width = '100%';
        window.eval(scriptInnerContent);
    }, 2000)
  }

  render() {
    let {data} = this.props
    let endDivIndex = data.indexOf('</div>') + 6;
    let divContent = data.substring(0, endDivIndex);
    return (
      <div>
        <div style={{height: '100%', width: '100%'}} dangerouslySetInnerHTML={{__html: divContent}} />
      </div>
    );
  }
}
