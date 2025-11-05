export default function ProductRow({product}){
    // Utilise la bonne propriété : noms (et garde une sécurité)
  const nom = product.noms ?? product.nom ?? "—";
  const style = product.stocked ? {} : { color: "red" };

  return (
    <tr>
      <td style={style}>{nom}</td>
      <td>{product.prix}</td>
    </tr>
  );
}