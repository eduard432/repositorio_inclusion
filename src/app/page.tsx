import Link from "next/link";

const articles = [
  {
    title: "Accesibilidad en Computadoras",
    desc: "Descubre herramientas para agilizar el uso de una computadora",
    img: "https://i.pinimg.com/736x/de/0d/87/de0d8775d21ffc398bbd2b4e8c061209.jpg",
    href: "blog1",
  },
  {
    title: "Herramientas de Accesibilidad en Dispositivos Móviles",
    desc: "Descubre cómo los dispositivos móviles pueden ser herramientas para personas con discapacidades visuales y auditivas.",
    img: "https://st2.depositphotos.com/4218696/47626/i/950/depositphotos_476261554-stock-photo-happy-disabled-black-man-in.jpg",
    href: "blog2",
  },
  {
    title: "Herramientas de Accesibilidad en Navegadores",
    desc: "",
    img: "https://i.blogs.es/ed6a0c/hero/1366_2000.jpeg,
    href: "blog3",
  },
  {
    title: "Accesibilidad en Google Maps",
    desc: "Google Maps ofrece opciones de rutas accesibles para personas con discapacidades motrices",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/09/cd/9d/09cd9d82-a550-68da-5b47-3d0662632c44/logo_maps_ios_color-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/1200x630wa.png",
    href: "blog4",
  },
  {
    title: "Herramientas Basadas en IA para Personas con Discapacidad",
    desc: "Herramientas basadas en IA mejoran la accesibilidad y promueven la inclusión para personas con diversas discapacidades.",
    img: "https://cdn.prod.website-files.com/64c96252c4314a904a4fb7bd/6722933ac6ab116274337e2b_La%20Inteligencia%20Artificial%20ofrece%20alternativas%20para%20las%20personas%20que%20tienen%20alguna%20discapacidad.webp",
    href: "blog5",
  },
]

type CardProps = {
  title: string;
  desc: string;
  img: string;
  href: string;
};

const Card = ({ title, desc, img, href }: CardProps) => {
  return (
    <Link key={title} href={href}>
      <article className="bg-[#D0E7F7] min-h-96 border border-slate-300 rounded-md cursor-pointer">
        <img
          className="h-52 w-full object-cover"
          src={img}
          alt={`Imagen - ${title}`}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{desc}</p>
        </div>
      </article>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-12/12 px-2 lg:w-10/12 mx-auto">
      {articles.map(({desc, href, img, title}, i) => (
        <Card
          key={i}
          title={title}
          img={img}
          href={`/articles/${href}`}
          desc={desc}
        />
      ))}
    </main>
  );
}
