import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

function ReviewsSection() {
  return (
    <div className="flex items-center gap-4 text-center  ">
      <div className=' w-10/12 mx-auto'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      </div>
    </div>
  )
}

export default ReviewsSection