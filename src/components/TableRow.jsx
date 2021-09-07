export default function TableRow({ name, amount }) {
  return (
    <tr className="table">
      <td className="text=left">{name}</td>
      <td className="text-right">{amount}</td>
    </tr>
  );
}
