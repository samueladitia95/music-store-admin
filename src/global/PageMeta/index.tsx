import Head from "next/head";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";

export default function PageMeta({
  title,
  description,
  keywords,
  disableTitle = false,
}: {
  title: string;
  description: string;
  keywords: string;
  disableTitle?: boolean;
}) {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "SET_TITLE", payload: title });
  }, [dispatch, title]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Samuel Aditia" />
        {/* Need Investigation
        Membuat google index setiap halaman secara individual
        Tidak langsung semua websitenya */}
        <meta name="robots" content="noindex" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {!disableTitle && (
        <div className="block md:hidden mt-4 mb-2">
          <p className="text-2xl font-medium">{title}</p>
        </div>
      )}
    </>
  );
}
