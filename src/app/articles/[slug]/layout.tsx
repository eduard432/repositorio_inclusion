import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <main className="w-12/12 px-2 lg:w-10/12 mx-auto prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
        <Link href="/" className="px-2 py-1 rounded-md bg-[#4B91BF] text-white" >Regresar al menú principal</Link>
        {children}
      </main>
    )
  }