import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams = useParams();
  console.log(urlParams);

  return (
    <>
      <h1>Blog Detail</h1>
      <p>This is the detail of {urlParams.slug}</p>
    </>
  );
}
