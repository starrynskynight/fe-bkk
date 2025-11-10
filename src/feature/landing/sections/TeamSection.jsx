import teamData from "../data/team.json";
import TeamCard from "../components/TeamCard";

const TeamSection = () => {
  return (
    <section className="bg-[#f8f9ff] px-6 md:px-12 lg:px-20 py-16 text-[#0b1437] relative">
         <div
        className="absolute top-10 right-0 w-[450px] h-[58px] bg-no-repeat bg-contain bg-right-top pointer-events-none"
        style={{
          backgroundImage: "url('/svg/strip.svg')",
          backgroundAttachment: "local" 
        }}
      ></div>

      <div className="text-left mb-12">
        <h2 className="text-2xl md:text-[36px] font-bold mb-3">Tim BKK SMKN 1 PURWOSARI</h2>
        <p className="text-gray-600 max-w-2xl">
          Tim BKK SMKN 1 Purwosari berdedikasi untuk membimbing siswa menuju
          karier yang sukses. Kami memberikan dukungan menyeluruh, persiapan
          profesional, serta menjalin koneksi kuat dengan dunia industri agar
          lulusan siap meraih tujuan mereka dengan percaya diri.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
export default TeamSection;