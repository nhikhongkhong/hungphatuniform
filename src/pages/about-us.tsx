import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaBusinessTime, FaCcVisa } from 'react-icons/fa'
import { LocationMaker } from '@components/icons'
import { AiOutlinePhone, AiOutlineMail, AiOutlineBank } from 'react-icons/ai'
import { HiOutlineCash } from 'react-icons/hi'
import { GiFactory } from 'react-icons/gi'
import { MdSendToMobile } from 'react-icons/md'
import { SliderTop } from '@components/slider-top'
import WithLayout from '@hoc/WithLayout'
import Collection from '@components/collection'
import { LatestCollection, TrendingCollection, PopularCollection } from '@assets/data'
import { Info } from '@assets/info'

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hưng Phát Uniform</title>
        <meta name="description" content="A Product of Vinox Co., Ltd" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="layout">
        <Image src={'/images/slider-image/slider-1.jpg'} width={1349} height={456} alt="image" />
        <div className="mt-5 mb-12 p-5 shadow-2xl border border-gray-300">
          <h1 className="text-xl uppercase font-bold text-center">Kính gửi quý khách hàng</h1>
          <p className="mt-5 text-sm">
            Công ty cổ phần Hưng Phát HD JSC là một công ty hoạt động trong nhiều lĩnh vực May mặc, Thời trang, Điện tử,
            Công nghệ thông tin…. Trong đó trọng điểm tập trung vào may mặc.
            <br />
            <br /> Với may mặc, Hưng Phát là một trong những nhà sản xuất hàng đầu về đồng phục và quần áo bảo hộ lao
            động với xưởng sản xuất trực tiếp có khả năng cung cấp 10.000 đơn vị sản phẩm quần áo mỗi tháng cho thị
            trường trong nước. <br />
            <br />
            Với các nỗ lực không mệt mỏi giành cho nghiên cứu cải tiến chất lượng và nâng cao năng suất lao động cũng
            như năng lực sản xuất, Hưng Phát đang giành được sự tin tưởng hoàn toàn của các khách hàng khó tính .<br />
            <br /> Với đội ngũ cán bộ công nhân viên làm việc chuyên nghiệp, tận tình chúng tôi luôn sẵn sàng đáp ứng
            mọi yêu cầu về số lượng, chất lượng và tiến độ giao hàng của quý khách trên cơ sở hợp tác lâu dài và cùng có
            lợi. Để có thêm thông tin xin vui lòng liên hệ trực tiếp với chúng tôi.
          </p>
        </div>
        <Image src={'/images/slider-image/slider-2.jpg'} width={1349} height={456} alt="image" />
        <div className="mt-5 mb-12 p-5 shadow-2xl border border-gray-300">
          <h1 className="text-xl uppercase font-bold text-center">Tư cách pháp nhân</h1>
          <div className="mt-5 text-sm">
            <div className="col-span-1 break-words">
              <p className="text-sm my-3 flex items-center">
                <span>
                  <GiFactory size={20} />
                </span>
                <span className="ml-2 font-semibold"> {Info.companyFullName}</span>
              </p>
              <p className="text-sm my-3 flex">
                <span>
                  <FaBusinessTime size={20} />
                </span>
                <span className="ml-2"> {Info.businessPaper}</span>
              </p>
              <p className="text-sm my-3 flex">
                <span>
                  <LocationMaker color="" hoverColor="" />
                </span>
                <span className="ml-2">{Info.companyAddress}</span>
              </p>
              <p className="text-sm my-3 flex">
                <span>
                  <AiOutlinePhone size={20} />
                </span>
                <a href={`tel:${Info.hotline}`}>
                  <span className="ml-2">Hotline: {Info.hotline}</span>
                </a>
              </p>
              <p className="text-sm my-3 flex">
                <span>
                  <AiOutlineMail size={20} />
                </span>
                <a href={`mailto:${Info.email}`}>
                  <span className="ml-2">Email: {Info.email}</span>{' '}
                </a>
              </p>
              <p className="text-sm my-3 flex">
                <span>
                  <AiOutlineBank size={20} />
                </span>
                <span className="ml-2">Tài khoản: {Info.bankAccount}</span>{' '}
              </p>
            </div>
          </div>
        </div>
        <Image src={'/images/slider-image/slider-4.jpg'} width={1349} height={456} alt="image" />
        <div className="mt-5 mb-12 p-5 shadow-2xl border border-gray-300">
          <h1 className="text-xl uppercase font-bold text-center">Sản phẩm dịch vụ</h1>
          <p className="my-3 text-sm font-semibold">Công ty cổ phần Hưng Phát HD JSC chuyên cung cấp:</p>
          <ul className="text-sm mx-auto list-disc list-inside md:grid md:grid-cols-3 md:gap-x-2 text-red-800 font-bold">
            <li className="italic"> Đồng phục bảo hộ lao động</li>
            <li className="italic"> Đồng phục công sở - văn phòng</li>
            <li className="italic"> Đồng phục nhà hàng - khách sạn</li>
            <li className="italic"> Đồng phục học sinh các cấp</li>
            <li className="italic"> Đồng phục spa - bệnh viện - bảo vệ </li>
            <li className="italic"> Đồng phục áo gió, phòng sạch, chống cháy</li>
            <li className="italic"> Đồng phục Cafe - fastfood chuyên nghiệp</li>
            <li className="italic"> Đồng phục áo phông sự kiện,quà tặng, phụ kiện đồng phục các loại...</li>
            <li className="italic"> Dụng cụ bảo hộ lao động</li>
            <li className="italic"> Gia công may mặc</li>
          </ul>
        </div>
        <Image src={'/images/slider-image/slider-3.jpg'} width={1349} height={456} alt="image" />
        <div className="mt-5 mb-12 p-5 shadow-2xl border border-gray-300">
          <h1 className="text-xl uppercase font-bold text-center">Chiến lược phát triển</h1>
          <p className="my-3 text-sm">
            Với ưu thế về kinh nghiệm và kiến thức tích lũy trong ngành hàng đồng phục Hưng Phát đang đẩy mạnh phát
            triển thương hiệu riêng của công ty về hàng đồng phục chuyên nghiệp chất lượng cao. Chúng tôi mong muốn mang
            đến cho khách hàng những sản phẩm chất lượng nhất đi kèm với giá thành tốt nhất. <br />
            <br />
            Với hơn 5 năm kinh nghiệm trong lĩnh vực gia công may mặc, đã từng hợp tác với nhiều thương hiệu lớn Hưng
            Phát uniform tự tin sẽ đồng hành cùng khách hàng trong việc xây dựng hình ảnh công ty qua đồng phục.
          </p>
          <p className="mb-3 text-sm font-semibold">Phương châm cũng như tôn chỉ của Hưng Phát uniform:</p>
          <ul className="text-sm mx-auto list-disc list-inside md:grid md:grid-cols-2 md:gap-x-2 text-red-800 font-bold">
            <li className="italic"> 🔥 Chất lượng luôn luôn được ưu tiên hàng đầu</li>
            <li className="italic">
              🔥 Hỗ trợ khách hàng lên ý tưởng, thiết kế maket, chọn mẫu vải, giá cả phù hợp với từng đối tượng khách
              hang
            </li>
            <li className="italic"> 🔥 Thiết kế đột phá, sáng tạo đến từng chi tiết nhỏ</li>
            <li className="italic"> 🔥 Form, dáng chuẩn mang tính thời trang nhưng dễ mặc với đa số</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default WithLayout(AboutUs)
