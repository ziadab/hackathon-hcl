import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useState } from "react";

const AdminBooks = () => {
  const [pageSize, setPageSize] = useState<number>(5);

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "title",
      flex: 1.5,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      minWidth: 140,
    },
    {
      field: "author",
      headerName: "author",
      flex: 1,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      minWidth: 140,
    },
    {
      field: "category",
      headerName: "category",
      flex: 1,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      minWidth: 100,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      minWidth: 150,
    },
    {
      field: "borrowed_by",
      headerName: "borrowed by",
      flex: 1,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      type: "number",
      minWidth: 120,
    },
    {
      field: "return_date",
      headerName: "return date",
      flex: 1,
      headerClassName: "text-gray-400",
      align: "center",
      headerAlign: "center",
      minWidth: 200,
      type: "date",
    },
    {
      field: "additional_fees",
      headerName: "additional fees",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "text-gray-400",
      minWidth: 120,
    },
  ];

  const rows: GridRowsProp = [
    {
      id: 1,
      title: "fd",
      author: "asda",
      category: "ada",
      status: "asd",
      borrowed_by: "fsf",
      return_date: new Date(),
      additional_fees: "opfbj",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold mt-10">Books</h2>
      <hr className="mt-2" />
      <div className="h-[450px] mt-16">
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={60}
          loading={rows.length === 0}
          className="max-w-[1500px] px-6"
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableRowSelectionOnClick
          onCellClick={(param, event) => event.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default AdminBooks;
