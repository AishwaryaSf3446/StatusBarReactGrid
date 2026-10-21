import{j as e}from"./index-CTAXdLKx.js";import{R as f,r as c}from"./index-D5jfS-9e.js";import{G as d,u,S as L,c as h,D as E,O as H}from"./useGridTheme-Bsck2O66.js";import"./client-Spw3EFno.js";import{u as m}from"./useAllModules-BNWh-A20.js";import{g as I}from"./data-BWtMvUiQ.js";import"./usePager-C8AnP6LO.js";import"./usePinning-i2SzOel8.js";import"./useFilter-I23OUfjZ.js";import"./useDetailGrid-BD3ekyOm.js";import"./usePivotModule-BUXj0NGk.js";import"./iframe-rmP_wkB1.js";import"../sb-preview/runtime.js";const p=I(50),J=I(1234),te={title:"Grid/Status Bar",component:d,tags:["autodocs"]};new E({url:"https://services.odata.org/V4/Northwind/Northwind.svc/Orders",adaptor:new H});const l={render:()=>{const t=f.useRef(null),[r,a]=f.useState(""),j=u("material"),P={enabled:!0,items:[{type:"TotalRowCount",position:"Left",key:"totalRows",statusPanelParams:{valueFormatter:n=>new Intl.NumberFormat(n.locale).format(n.value)}},{type:"FilteredRowCount",position:"Left",key:"filteredRows"},{type:"TotalAndFilteredRowCount",position:"Center",key:"TotalAndFilteredRowCount"},{type:"SelectedRowCount",position:"Right",key:"selectedRows"}]};return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>{var g;const n=(g=t.current)==null?void 0:g.getStatusPanel("totalRows");a(n?`Found ${n.type} panel with key "${n.key}".`:"Status panel is not mounted.")},children:"Get total-row panel"}),e.jsx("p",{"aria-live":"polite",children:r}),e.jsx(d,{ref:t,dataSource:J,virtualizationSettings:{enabled:!0},filterSettings:{enabled:!0},height:400,columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer Name",width:150},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:100,format:"C2"},{field:"ShipCity",headerText:"Ship City",width:120}],enableHover:!1,selectionSettings:{enableToggle:!0,mode:L.Multiple},statusBarSettings:P,modules:m,theme:j})]})}},i={render:()=>{const t=c.createRef(),r=u("material"),a={enabled:!0,items:[{type:"TotalRowCount",position:"Left",key:"totalRows"},{type:"SelectionAggregates",position:"Right",key:"aggregates",statusPanelParams:{aggregateFunctions:["Sum","Average","Count","Min","Max"]}}]};return e.jsx("div",{style:{height:"calc(100vh - 60px)"},children:e.jsx(d,{ref:t,dataSource:p,height:400,enableHover:!1,columns:[{field:"OrderID",headerText:"Order ID",width:100,isPrimaryKey:!0},{field:"CustomerName",headerText:"Customer Name",width:150},{field:"Freight",headerText:"Freight",width:100,format:"C2"},{field:"Quantity",headerText:"Quantity",width:100,type:"number"}],selectionSettings:{type:h.Cell,mode:"Multiple"},statusBarSettings:a,modules:m,theme:r})})}},s={render:()=>{const t=c.createRef(),r=u("material"),a={enabled:!0,items:[{type:"TotalRowCount",position:"Left",key:"total"},{type:"FilteredRowCount",position:"Left",key:"filtered"},{type:"TotalAndFilteredRowCount",position:"Center",key:"both"},{type:"SelectedRowCount",position:"Right",key:"selected"}]};return e.jsx("div",{style:{height:"calc(100vh - 60px)"},children:e.jsx(d,{ref:t,dataSource:p,columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer Name",width:150},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:100,format:"C2"}],selectionSettings:{type:h.Row},statusBarSettings:a,modules:m,theme:r})})}},o={render:()=>{const t=c.createRef(),r=u("material"),a={enabled:!1};return e.jsx("div",{style:{height:"calc(100vh - 60px)"},children:e.jsx(d,{ref:t,dataSource:p,columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer Name",width:150},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"}],selectionSettings:{type:h.Row},statusBarSettings:a,modules:m,theme:r})})}};var y,S,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const gridRef: React.RefObject<GridRef> = React.useRef<GridRef>(null);
    const [panelDescription, setPanelDescription] = React.useState<string>('');
    const theme: Theme = useGridTheme('material');
    const statusBarSettings: StatusBarSettings = {
      enabled: true,
      items: [{
        type: 'TotalRowCount',
        position: 'Left',
        key: 'totalRows',
        statusPanelParams: {
          valueFormatter: (args: StatusBarValueFormatterArgs) => new Intl.NumberFormat(args.locale).format(args.value)
        }
      }, {
        type: 'FilteredRowCount',
        position: 'Left',
        key: 'filteredRows'
      }, {
        type: 'TotalAndFilteredRowCount',
        position: 'Center',
        key: 'TotalAndFilteredRowCount'
      }, {
        type: 'SelectedRowCount',
        position: 'Right',
        key: 'selectedRows'
      }]
    };
    return <div>\r
                <button type="button" onClick={(): void => {
        const panel: {
          key?: string;
          type: string;
        } | undefined = gridRef.current?.getStatusPanel('totalRows');
        setPanelDescription(panel ? \`Found \${panel.type} panel with key "\${panel.key}".\` : 'Status panel is not mounted.');
      }}>\r
                    Get total-row panel\r
                </button>\r
                <p aria-live="polite">{panelDescription}</p>\r
                <Grid ref={gridRef} dataSource={statusBarData} virtualizationSettings={{
        enabled: true
      }}
      // pageSettings={{enabled: true, pageSize: 10}}
      filterSettings={{
        enabled: true
      }} height={400} columns={[{
        field: 'OrderID',
        headerText: 'Order ID',
        width: 100
      }, {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: 150
      }, {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        type: 'date',
        format: 'yMd'
      }, {
        field: 'Freight',
        headerText: 'Freight',
        width: 100,
        format: 'C2'
      }, {
        field: 'ShipCity',
        headerText: 'Ship City',
        width: 120
      }]} enableHover={false}
      //  selectionSettings={ { type: SelectionMode.Multiple } }
      selectionSettings={{
        enableToggle: true,
        mode: SelectionMode.Multiple
      }} statusBarSettings={statusBarSettings} modules={GridAllModules} theme={theme} />\r
            </div>;
  }
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var w,T,C,x,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const gridRef: React.RefObject<GridRef> = createRef<GridRef>();
    const theme: Theme = useGridTheme('material');
    const statusBarSettings: StatusBarSettings = {
      enabled: true,
      items: [{
        type: 'TotalRowCount',
        position: 'Left',
        key: 'totalRows'
      }, {
        type: 'SelectionAggregates',
        position: 'Right',
        key: 'aggregates',
        statusPanelParams: {
          aggregateFunctions: ['Sum', 'Average', 'Count', 'Min', 'Max']
        }
      }]
    };
    return <div style={{
      height: 'calc(100vh - 60px)'
    }}>\r
                <Grid ref={gridRef} dataSource={data} height={400} enableHover={false} columns={[{
        field: 'OrderID',
        headerText: 'Order ID',
        width: 100,
        isPrimaryKey: true
      }, {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: 150
      }, {
        field: 'Freight',
        headerText: 'Freight',
        width: 100,
        format: 'C2'
      }, {
        field: 'Quantity',
        headerText: 'Quantity',
        width: 100,
        type: 'number'
      }]} selectionSettings={{
        type: SelectionType.Cell,
        mode: 'Multiple'
      }} statusBarSettings={statusBarSettings} modules={GridAllModules} theme={theme} />\r
            </div>;
  }
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:"Status Bar with Selection Aggregates showing sum, average, min, max of numeric cells.",...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var b,B,v,O,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const gridRef: React.RefObject<GridRef> = createRef<GridRef>();
    const theme: Theme = useGridTheme('material');
    const statusBarSettings: StatusBarSettings = {
      enabled: true,
      items: [{
        type: 'TotalRowCount',
        position: 'Left',
        key: 'total'
      }, {
        type: 'FilteredRowCount',
        position: 'Left',
        key: 'filtered'
      }, {
        type: 'TotalAndFilteredRowCount',
        position: 'Center',
        key: 'both'
      }, {
        type: 'SelectedRowCount',
        position: 'Right',
        key: 'selected'
      }]
    };
    return <div style={{
      height: 'calc(100vh - 60px)'
    }}>\r
                <Grid ref={gridRef} dataSource={data} columns={[{
        field: 'OrderID',
        headerText: 'Order ID',
        width: 100
      }, {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: 150
      }, {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        type: 'date',
        format: 'yMd'
      }, {
        field: 'Freight',
        headerText: 'Freight',
        width: 100,
        format: 'C2'
      }]} selectionSettings={{
        type: SelectionType.Row
      }} statusBarSettings={statusBarSettings} modules={GridAllModules} theme={theme} />\r
            </div>;
  }
}`,...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.source},description:{story:"Status Bar with custom positioning showing metrics in left, center, and right sections.",...(F=(O=s.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var k,G,M,A,N;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const gridRef: React.RefObject<GridRef> = createRef<GridRef>();
    const theme: Theme = useGridTheme('material');
    const statusBarSettings: StatusBarSettings = {
      enabled: false
    };
    return <div style={{
      height: 'calc(100vh - 60px)'
    }}>\r
                <Grid ref={gridRef} dataSource={data} columns={[{
        field: 'OrderID',
        headerText: 'Order ID',
        width: 100
      }, {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: 150
      }, {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        type: 'date',
        format: 'yMd'
      }]} selectionSettings={{
        type: SelectionType.Row
      }} statusBarSettings={statusBarSettings} modules={GridAllModules} theme={theme} />\r
            </div>;
  }
}`,...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"Status Bar disabled (off by default) - no status bar rendered.",...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};const re=["BasicStatusBar","StatusBarWithAggregates","StatusBarWithCustomLayout","StatusBarDisabled"];export{l as BasicStatusBar,o as StatusBarDisabled,i as StatusBarWithAggregates,s as StatusBarWithCustomLayout,re as __namedExportsOrder,te as default};
