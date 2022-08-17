import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  return <div>Detail</div>;
}
