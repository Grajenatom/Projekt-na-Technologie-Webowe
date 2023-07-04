import { Checkbox } from "@/components/ui/Checkbox";

import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { DataTableRowActions } from "./DataTableRowActions";

export const Columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        f
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "client_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client_id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("client_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product_id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("product_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];