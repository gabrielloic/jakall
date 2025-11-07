export default function ProductRow({ product }) {
  const nameStyle = {
    color: product.stocked ? '#000' : 'red',
    fontWeight: product.stocked ? '500' : '400',
  };

  return (
    <tr>
      <td style={nameStyle}>{product.noms}</td>
      <td className="text-end">{product.prix}</td>
    </tr>
  );
}