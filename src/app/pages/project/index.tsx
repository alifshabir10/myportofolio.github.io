import Image from "next/image"

export default function MyProject() {

   const dataMyProject = [
      {
         id: 1,
         title: "Pengembangan Aplikasi Logistik Analog",
         description: [
            "Mengembangkan aplikasi logistik Analog dan Sentral Cargo untuk pengiriman barang cargo.",
            "Menggunakan Vue JS dan Ant Design untuk menciptakan antarmuka pengguna yang responsif dan efisien.",
            // "Berfokus pada pelacakan pengiriman yang akurat dan efisien, membantu meningkatkan kualitas layanan."
         ],
         image: "/website/analog1.png",
      },
      {
         id: 2,
         title: "Pengembangan Aplikasi Logistik Analog",
         description: [
            "Mengembangkan aplikasi logistik Analog dan Sentral Cargo untuk pengiriman barang cargo.",
            "Menggunakan Vue JS dan Ant Design untuk menciptakan antarmuka pengguna yang responsif dan efisien.",
            // "Berfokus pada pelacakan pengiriman yang akurat dan efisien, membantu meningkatkan kualitas layanan."
         ],
         image: "/website/sentral.png",
      },

      {
         id: 3,
         title: "Procurement Siloam",
         description: [
            'Membangun aplikasi logistik "Siloam" untuk mengoptimalkan proses pemeriksaan dokumen pengadaan dalam pengiriman barang.',
            'Menggunakan kombinasi Node JS, Next JS, dan Tailwind CSS untuk menciptakan tampilan yang modern dan intuitif.',
            // 'Menyederhanakan proses verifikasi dokumen, meningkatkan efisiensi dan akurasi dalam logistik pengiriman.',
         ],
         image: "/website/siloam.jpeg",
      },
      {
         id: 4,
         title: "Volta Indonesia",
         description: [
            "Mengembangkan website untuk Toko Volta Indonesia guna mempromosikan dan menjual sepeda motor listrik kepada pelanggan.",
            "Memanfaatkan Node JS, Next JS, dan Tailwind CSS untuk menciptakan pengalaman berbelanja yang lancar dan interaktif."

         ],
         image: "/website/volta2.png",
      },
      {
         id: 5,
         title: "Camy Collaboration Academy",
         description: [
            'Melakukan pekerjaan lepas di proyek-proyek Camy.',
            'Menambahkan fitur-fitur seperti pemesanan pelatihan, pengambilan profil pengguna, dan reset kata sandi.',
            // 'Menunjukkan kemampuan untuk beradaptasi dengan berbagai lingkungan pengembangan.'

         ],
         image: "/website/camy.png",
      },
   ]
   return (
      <div className="text-center">
         <div id="project" className="capitalize text-white font-semibold text-2xl md:text-4xl mb-3">
            My Project
         </div>
         <div className="grid md:grid-cols-2 mt-3 gap-10">
            {dataMyProject.map((value, key) => (
               <div key={key} className=" ">
                  <p className="text-sm md:text-base mb-2  md:text-left font-bold">{value.title}</p>
                  <div className="grid gap-2">

                     <div className="rounded-md shadow-md overflow-hidden">
                        <img src={value.image} alt="" width="w-full" />
                     </div>

                  </div>
                  <ol className="text-xs md:text-sm mt-2 mb-4 md:text-justify">
                     {value.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                     ))}
                  </ol>
               </div>
            ))}
         </div>
      </div>
   )
}