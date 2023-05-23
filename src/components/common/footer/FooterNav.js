export default function FooterNav({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold mb-6">{title}</h3>
      <ul className="font-medium space-y-4">
        {links?.map((item, key) => (
          <li key={key}>
            <a
              href={item?.href ?? "#"}
              className="text-gray-500 hover:text-gray-700"
            >
              {item?.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
