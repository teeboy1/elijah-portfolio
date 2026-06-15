export default function Head() {
  const title = "Elijah Temitayo — Cybersecurity & Network Operations";
  const description =
    "Elijah Temitayo — Experienced IT professional specialising in Cybersecurity, Network Operations, Incident Management and Data Analysis. Based in Lagos, Nigeria.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ILELAKINWA ELIJAH TEMITAYO",
    jobTitle:
      "Cybersecurity Analyst, Network Operations Engineer, IT Support Specialist, Incident Manager",
    email: "mailto:elnactayo2@gmail.com",
    url: "https://your-domain.example/",
    sameAs: [
      "https://github.com/teeboy1",
      "https://twitter.com/E_baba5858",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <>
      {/* Google Fonts for professional typography */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Cybersecurity, Network Operations, NOC, Incident Management, Data Analysis, IT Support" />
      <meta name="author" content="Elijah Temitayo" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@E_baba5858" />

      <link rel="canonical" href="https://your-domain.example/" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </>
  );
}
