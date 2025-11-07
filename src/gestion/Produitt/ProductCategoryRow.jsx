export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th
        colSpan="2"
        className="bg-light text-primary fw-bold text-center py-2"
        style={{ fontSize: '1.1rem' }}
      >
        {category}
      </th>
    </tr>
  );
}