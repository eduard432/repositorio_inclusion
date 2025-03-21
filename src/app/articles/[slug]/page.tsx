export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
      <Post />
  );
}

export function generateStaticParams() {
  return [...new Array(5)].map((_,i) => ({slug: "blog"+(i+1)}));
}

export const dynamicParams = false;
