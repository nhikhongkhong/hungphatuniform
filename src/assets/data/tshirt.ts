const collection = [
  { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
  { imgSrc: '/images/t-shirt/tshirt-3.jpg', title: 'Áo phông T03' },
  { imgSrc: '/images/t-shirt/tshirt-4.jpg', title: 'Áo phông T04' },
  { imgSrc: '/images/t-shirt/tshirt-5.jpg', title: 'Áo phông T05' },
  { imgSrc: '/images/t-shirt/tshirt-6.jpg', title: 'Áo phông T06' },
  { imgSrc: '/images/t-shirt/tshirt-7.jpg', title: 'Áo phông T07' },
  { imgSrc: '/images/t-shirt/tshirt-8.jpg', title: 'Áo phông T08' },
  { imgSrc: '/images/t-shirt/tshirt-9.jpg', title: 'Áo phông T09' },
  { imgSrc: '/images/t-shirt/tshirt-10.jpg', title: 'Áo phông T010' },
  { imgSrc: '/images/t-shirt/tshirt-11.jpg', title: 'Áo phông T011' },
  { imgSrc: '/images/t-shirt/tshirt-12.jpg', title: 'Áo phông T012' },
  { imgSrc: '/images/t-shirt/tshirt-13.jpg', title: 'Áo phông T013' },
  { imgSrc: '/images/t-shirt/tshirt-14.jpg', title: 'Áo phông T014' },
  { imgSrc: '/images/t-shirt/tshirt-15.jpg', title: 'Áo phông T015' },
  { imgSrc: '/images/t-shirt/tshirt-16.jpg', title: 'Áo phông T016' },
  { imgSrc: '/images/t-shirt/tshirt-17.jpg', title: 'Áo phông T017' },
  { imgSrc: '/images/t-shirt/tshirt-18.jpg', title: 'Áo phông T018' },
  { imgSrc: '/images/t-shirt/tshirt-19.jpg', title: 'Áo phông T019' },
  { imgSrc: '/images/t-shirt/tshirt-20.jpg', title: 'Áo phông T020' },
  { imgSrc: '/images/t-shirt/tshirt-21.jpg', title: 'Áo phông T021' },
  { imgSrc: '/images/t-shirt/tshirt-22.jpg', title: 'Áo phông T022' },
  { imgSrc: '/images/t-shirt/tshirt-23.jpg', title: 'Áo phông T023' },
  { imgSrc: '/images/t-shirt/tshirt-24.jpg', title: 'Áo phông T024' },
  { imgSrc: '/images/t-shirt/tshirt-25.jpg', title: 'Áo phông T025' },
  { imgSrc: '/images/t-shirt/tshirt-26.jpg', title: 'Áo phông T026' },
  { imgSrc: '/images/t-shirt/tshirt-27.jpg', title: 'Áo phông T027' },
  { imgSrc: '/images/t-shirt/tshirt-28.jpg', title: 'Áo phông T028' },
  { imgSrc: '/images/t-shirt/tshirt-29.jpg', title: 'Áo phông T029' },
  { imgSrc: '/images/t-shirt/tshirt-30.jpg', title: 'Áo phông T030' },
  { imgSrc: '/images/t-shirt/tshirt-31.jpg', title: 'Áo phông T031' },
  { imgSrc: '/images/t-shirt/tshirt-32.jpg', title: 'Áo phông T032' },
  { imgSrc: '/images/t-shirt/tshirt-33.jpg', title: 'Áo phông T033' },
  { imgSrc: '/images/t-shirt/tshirt-34.jpg', title: 'Áo phông T034' },
  { imgSrc: '/images/t-shirt/tshirt-35.jpg', title: 'Áo phông T035' },
  { imgSrc: '/images/t-shirt/tshirt-36.jpg', title: 'Áo phông T036' },
  { imgSrc: '/images/t-shirt/tshirt-37.jpg', title: 'Áo phông T037' },
  { imgSrc: '/images/t-shirt/tshirt-38.jpg', title: 'Áo phông T038' },
  { imgSrc: '/images/t-shirt/tshirt-39.jpg', title: 'Áo phông T039' },
  { imgSrc: '/images/t-shirt/tshirt-40.jpg', title: 'Áo phông T040' },
  { imgSrc: '/images/t-shirt/tshirt-41.jpg', title: 'Áo phông T041' },
  { imgSrc: '/images/t-shirt/tshirt-42.jpg', title: 'Áo phông T042' },
  { imgSrc: '/images/t-shirt/tshirt-43.jpg', title: 'Áo phông T043' },
  { imgSrc: '/images/t-shirt/tshirt-44.jpg', title: 'Áo phông T044' },
  { imgSrc: '/images/t-shirt/tshirt-45.jpg', title: 'Áo phông T045' },
  { imgSrc: '/images/t-shirt/tshirt-46.jpg', title: 'Áo phông T046' },
]

export default collection

const WORK_PATH = 't-shirt'
const WORK_NAME = 'tshirt'
const WINTER_PATH = 'winter-uniform'
const WINTER_NAME = 'winter'
const OFFICE_PATH = 'office-uniform'
const OFFICE_NAME = 'office'
const TSHIRT_PATH = 'protection-uniform'
const TSHIRT_NAME = 'protection'

const _collection = []

for (let i = 1; i <= 47; i++) {
  //   let k = Math.floor(Math.random() * 15) > 0 ? Math.floor(Math.random() * 15) : 2
  //   let m = Math.floor(Math.random() * 15) > 0 ? Math.floor(Math.random() * 15) : 2
  //   let n = Math.floor(Math.random() * 15) > 0 ? Math.floor(Math.random() * 15) : 2
  _collection.push({
    imgSrc: `/images/${WORK_PATH}/${WORK_NAME}-${i}.jpg`,
    title: `Áo phông T0${i}`,
    code: `T0${i}`,
  })
  //   _collection.push({ imgSrc: `/images/${OFFICE_PATH}/${OFFICE_NAME}-${m}.jpg`, title: `Đồng phục công sở OFF0${m}` })
  //   _collection.push({ imgSrc: `/images/${WINTER_PATH}/${WINTER_NAME}-${n}.jpg`, title: `Đồng phục mùa đông WINT0${n}` })
}
