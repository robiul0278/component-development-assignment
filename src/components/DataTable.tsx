import React, { useState } from "react";
import type { DataTableProps } from "../types/types";

function DataTable<T extends object>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  // Sorting
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }

      return sortOrder === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
    return sorted;
  }, [data, sortKey, sortOrder]);

  const toggleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Row Selection
  const toggleRowSelection = (row: T) => {
    let updated: T[] = [];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = selectable && selectedRows.length === 0 ? [row] : [...selectedRows, row];
    }
    setSelectedRows(updated);
    if (onRowSelect) onRowSelect(updated);
  };

  return (
    <div className="overflow-x-auto border rounded-md">
      {loading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : sortedData.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No data available</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {selectable && <th className="px-4 py-2 w-12"></th>}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left font-medium text-gray-700 cursor-pointer select-none"
                  onClick={() => col.sortable && toggleSort(col.dataIndex)}
                >
                  <div className="flex items-center gap-1">
                    {col.title}
              {col.sortable && (
    <span>
      {sortKey === col.dataIndex ? (sortOrder === "asc" ? "▲" : "▼") : "▲"}
    </span>
  )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((row, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-100 ${
                  selectedRows.includes(row) ? "bg-blue-100" : ""
                }`}
                onClick={() => selectable && toggleRowSelection(row)}
              >
                {selectable && (
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row)}
                      readOnly
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {col.render
                      ? col.render(row[col.dataIndex], row)
                      : String(row[col.dataIndex] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DataTable;
