import DataTable, { createTheme } from "react-data-table-component";

const columns = [
  {
    name: <p className="text-[15px] text-black font-bold">Full name</p>,
    selector: (row: any) => row.fullname,
    width: "15%",
  },
  {
    name: <p className="text-[15px] text-black font-bold">Email</p>,
    selector: (row: any) => row.email,
    width: "15%",
  },
  {
    name: <p className="text-[15px] text-black font-bold">CV (structured)</p>,
    selector: (row: any) => row.CVstructured,
    width: "10%",
  },
  {
    name: <p className="text-[15px] text-black font-bold">CV (file)</p>,
    selector: (row: any) => row.CVfile,
    width: "10%",
  },
  {
    name: <p className="text-[15px] text-black font-bold">Score</p>,
    selector: (row: any) => row.score,
    width: "10%",
  },
  {
    name: <p className="text-[15px] text-black font-bold">Features</p>,
    selector: (row: any) => row.features,
    width: "40%",
  },
];

const data = [
  {
    id: 1,
    fullname: "Beetlejuice",
    email: "bee@juice.com",
    CVstructured: (
      <a href="www.google.com" target="_blank">
        Open
      </a>
    ),
    CVfile: "Download",
    score: "85",
    features: "3yrs. experience in ML | M. Tech | PyTorch | LLM | AWS",
  },
  {
    id: 2,
    fullname: "Demo",
    email: "demo@adam.com",
    CVstructured: "Open",
    CVfile: "Download",
    score: "91",
    features: "5yrs. experience in ML | M. Tech | AWS",
  },
];

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

function Tables() {
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
