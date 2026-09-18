"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/aria/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/aria/table"

const tableData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "管理者",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "ユーザー",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "ユーザー",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "編集者",
  },
]

export function CheckboxInTable() {
  return (
    <Table aria-label="ユーザー" selectionMode="multiple">
      <TableHeader>
        <TableHead className="w-8">
          <Checkbox
            id="select-all-checkbox"
            name="select-all-checkbox"
            slot="selection"
          />
        </TableHead>
        <TableHead isRowHeader>名前</TableHead>
        <TableHead>メールアドレス</TableHead>
        <TableHead>役割</TableHead>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <Checkbox
                id={`row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                slot="selection"
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
