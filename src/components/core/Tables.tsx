import DataTable, { createTheme } from "react-data-table-component";
import styled from "styled-components";

const customStyles = {
  rows: {
    style: {
      padding: "22px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#e5eaea",
      padding: "20px",
    },
  },
  //   cells: {
  //     style: {
  //       paddingLeft: "8px", // override the cell padding for data cells
  //       paddingRight: "8px",
  //     },
  //   },
};

createTheme(
  "solarized",
  {
    text: {
      primary: "black",
    },
    background: {
      default: "00FFFFFF",
    },
    // context: {
    //   background: "#cb4b16",
    //   text: "#FFFFFF",
    // },
    divider: {
      default: "#d5d5d5",
    },
    // action: {
    //   button: "rgba(0,0,0,.54)",
    //   hover: "rgba(0,0,0,.08)",
    //   disabled: "rgba(0,0,0,.12)",
    // },
  },
  "dark"
);

function Tables({ data, columns }: any) {
  return (
    <DataTable
      columns={columns}
      persistTableHead
      data={data}
      customStyles={customStyles}
      theme="solarized"
    />
  );
}

export default Tables;
