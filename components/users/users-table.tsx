import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/format";
import type { User } from "@/lib/mock-data";

const statusVariant: Record<User["status"], "success" | "warning" | "destructive"> = {
  active: "success",
  invited: "warning",
  suspended: "destructive"
};

export function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.company}</TableCell>
            <TableCell>{user.plan}</TableCell>
            <TableCell><Badge variant={statusVariant[user.status]}>{user.status}</Badge></TableCell>
            <TableCell>{formatDate(user.joinedAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
