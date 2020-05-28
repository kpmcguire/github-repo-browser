import React from "react"
import SmartDataTable from "react-smart-data-table"


export default function smartDataTable(props) {

  return <SmartDataTable data={props.data} sortable={props.sortable} filterable={props.filterable} filterValue={props.filterValue} perPage={props.perPage} headers={props.headers}/>
  
}
