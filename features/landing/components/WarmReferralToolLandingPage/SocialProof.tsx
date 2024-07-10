/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iU2vrDYJrcV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const grayscale = 'grayscale(100%)';
export function SocialProof() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-16 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-gray-400 md:text-xl">
            Being used by the best at
          </h2>
          <div className="flex w-full max-w-5xl flex-nowrap overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-16">
              <img
                alt="Google"
                className="relative top-0.5 object-contain object-center"
                height={40}
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                style={{ filter: grayscale }}
                width={118}
              />
              <img
                alt="Brandguard"
                className="object-contain object-center"
                height={38}
                src="https://assets-global.website-files.com/63b6f125e462a2dc174cc44a/64fe66bd6c52fe1a51fb405a_BrandGuard_Logo_Blue-01.svg"
                style={{ filter: grayscale }}
                width={194.75}
              />
              <img
                alt="Samsung"
                className="relative top-1 object-contain object-center"
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg"
                style={{ filter: grayscale }}
                width={130.5}
              />
              <img
                alt="Synthesis"
                className="object-contain object-center"
                height={40}
                src="https://synthesis.ai/wp-content/uploads/2024/03/Synthesis-Logo.png"
                style={{ filter: grayscale }}
                width={145}
              />
              <img
                alt="Zillow"
                className=" object-contain object-center"
                height={30}
                src="https://s.zillowstatic.com/pfs/static/z-logo-default-visual-refresh.svg"
                style={{ filter: grayscale }}
                width={137.25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
