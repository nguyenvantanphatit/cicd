import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="container mx-auto py-12">
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Câu hỏi chung</h2>
      <ul className="list-none space-y-4">
        <li className="border-b border-gray-200 pb-4">
          <h3 className="font-bold">Có thể sử dụng Landwind trong các dự án mã nguồn mở không?</h3>
          <p>Có thể. Landwind là thư viện mã nguồn mở cung cấp các thành phần tương tác được xây dựng dựa trên Tailwind CSS, bao gồm nút, menu thả xuống, modal, thanh điều hướng, v.v.</p>
        </li>
        <li className="border-b border-gray-200 pb-4">
          <h3 className="font-bold">Có tệp Figma nào có sẵn không?</h3>
          <p>Có. Bạn có thể tải xuống tệp Figma cho Landwind tại đây: https://www.figma.com/community/file/1125744163617429490/landwind-tailwind-css-landing-page.</p>
        </li>
        <li>
          <h3 className="font-bold">Sự khác biệt giữa Landwind và Tailwind UI là gì?</h3>
          <p>Landwind là thư viện cung cấp các thành phần tương tác được xây dựng dựa trên Tailwind CSS, trong khi Tailwind UI là bộ sưu tập các thành phần UI được thiết kế sẵn.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Câu hỏi về Landwind</h2>
      <ul className="list-none space-y-4">
        <li className="border-b border-gray-200 pb-4">
          <h3 className="font-bold">Làm cách nào để bắt đầu với Landwind?</h3>
          <p>Bạn có thể tham khảo hướng dẫn này để bắt đầu sử dụng Landwind: https://steamcommunity.com/sharedfiles/filedetails/?id=2643208790.</p>
        </li>
        <li>
          <h3 className="font-bold">Làm cách nào để thêm các thành phần Landwind vào dự án của tôi?</h3>
          <p>Bạn có thể cài đặt Landwind thông qua npm hoặc Yarn:

            ```
            npm install landwind
            ```

            ```
            yarn add landwind
            ```

            Sau khi cài đặt, bạn có thể import các thành phần Landwind vào dự án của mình.</p>
        </li>
      </ul>
    </section>
  </main>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Tấn Phát</h1>
          <h1>Tấn Phát</h1>
          <h1>Tấn Phát</h1>
          <h1>Tấn Phát</h1>
          
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
    </>
  );
}
