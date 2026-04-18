import Head from "next/head";
import Image from "next/image";

const QUOTES = [
  {
    text: "Tugas kita hanya mengangkat tangan dalam doa, sisanya biar Tuhan yang turun tangan.",
    author: "Youth Motivation"
  },
  {
    text: "Healing terbaik bukanlah me-time, melainkan God’s time.",
    author: "Community Wisdom"
  },
  {
    text: "Rencana kita mungkin tidak cepat, tetapi rencana Tuhan selalu tepat.",
    author: "Faith Guide"
  },
  {
    text: "Jangan seorangpun menganggap engkau rendah karena engkau muda.",
    author: "1 Timotius 4:12"
  },
  {
    text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
    author: "Filipi 4:13"
  },
  {
    text: "Satu jam bersama Tuhan akan mengubah 23 jam lainnya.",
    author: "Daily Prayer"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Youth Calvary | GBI Calvary Cirebon Youth Group</title>
        <meta name="description" content="Official website for Youth Calvary, the youth community of GBI Calvary Cirebon. Empowering youth to shine for Christ." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 px-8 py-4 flex justify-between items-center transition-all">
        <div className="text-xl font-bold gradient-text">YOUTH CALVARY</div>
        <div className="hidden md:flex gap-8 text-sm font-semibold opacity-80">
          <a href="#about" className="hover:text-[hsl(var(--primary))] transition-colors">Tentang Kami</a>
          <a href="#vision" className="hover:text-[hsl(var(--primary))] transition-colors">Visi & Misi</a>
          <a href="#quotes" className="hover:text-[hsl(var(--primary))] transition-colors">Motivasi</a>
          <a href="#join" className="btn-primary" style={{ padding: '0.4rem 1.2rem' }}>Gabung</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Youth Calvary Worship"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsla(var(--background),0.5)] to-[hsl(var(--background))]" />
        </div>
        
        <div className="container relative z-10 text-center animate-fade-in-up">
          <h1 className="mb-6">
            <span className="block text-xl md:text-2xl font-semibold opacity-90 mb-4">Selamat Datang di Community</span>
            <span className="gradient-text uppercase tracking-tighter">Youth Calvary</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
            Wadah pemuda remaja GBI Calvary Cirebon untuk bertumbuh, berbagi, dan berdampak bagi generasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="btn-primary">Mulai Perjalananmu</a>
            <a href="#about" className="btn-primary" style={{ background: 'transparent', border: '1px solid hsla(var(--foreground), 0.2)' }}>Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass p-2">
          <Image
            src="/community.png"
            alt="Youth Calvary Community"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="animate-fade-in-up">
          <h2 className="gradient-text">Siapa Kami?</h2>
          <p className="text-lg opacity-80 mb-6 leading-relaxed">
            Youth Calvary adalah komunitas pemuda dan remaja dari GBI Calvary Cirebon. Kami percaya bahwa masa muda adalah waktu yang paling berharga untuk menemukan tujuan hidup dalam Tuhan.
          </p>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Bersama-sama, kita membangun lingkungan yang suportif, kreatif, dan penuh kasih untuk setiap individu berkembang sesuai talenta yang Tuhan berikan.
          </p>
          <div className="glass p-6 border-l-4 border-[hsl(var(--primary))]">
            <p className="italic opacity-90 font-medium">
              "Jangan seorangpun menganggap engkau rendah karena engkau muda. Jadilah teladan bagi orang-orang percaya."
            </p>
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section id="quotes" className="bg-[hsla(var(--primary),0.05)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="gradient-text">Wall of Inspiration</h2>
            <p className="opacity-70">Kata-kata motivasi untuk menguatkan langkahmu hari ini.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUOTES.map((quote, i) => (
              <div key={i} className="glass p-8 hover:-translate-y-2 transition-transform h-full flex flex-col justify-between">
                <blockquote className="text-xl font-medium mb-6 opacity-90 leading-snug">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sm font-bold gradient-text not-italic">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="container text-center">
        <h2 className="gradient-text">Visi & Misi</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="glass p-10">
            <h3 className="mb-4">Visi</h3>
            <p className="opacity-80">Menjadi generasi yang berdampak, berakar dalam iman, dan bercahaya bagi dunia.</p>
          </div>
          <div className="glass p-10">
            <h3 className="mb-4">Misi</h3>
            <ul className="text-left space-y-4 opacity-80 list-disc list-inside px-4">
              <li>Membangun persekutuan yang kuat dan penuh kasih.</li>
              <li>Memberdayakan talenta muda melalui pelayanan kreatif.</li>
              <li>Menjangkau generasi muda di Cirebon dan sekitarnya.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="container">
        <div className="glass p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))] blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--accent))] blur-[120px] opacity-20" />
          
          <h2 className="gradient-text mb-6">Siap Bergabung?</h2>
          <p className="max-w-xl mx-auto text-xl opacity-80 mb-10">
            Datang dan rasakan hangatnya kebersamaan di Youth Calvary. Kami menantimu!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-left">
              <p className="font-bold">Ibadah Rutin:</p>
              <p className="opacity-70">Setiap Sabtu, 18.00 WIB</p>
              <p className="opacity-70">Jl. Yos Sudarso No. 44, Cirebon</p>
            </div>
            <a href="https://www.instagram.com/gbicalvarycirebon" className="btn-primary">Kunjungi Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[hsla(var(--foreground),0.1)]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 text-sm">
          <div>© 2024 Youth Calvary - GBI Calvary Cirebon. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
