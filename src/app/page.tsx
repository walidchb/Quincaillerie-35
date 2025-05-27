"use client";
import Image from "next/image";
// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "@/components/modal";
// import Select from "react-select";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

const wilayas = [
  {
    id: "1",
    code: "1",
    name: "Adrar",
    ar_name: "أدرار",
    longitude: "27.9766155",
    latitude: "-0.20396",
    delivery_price_domicile: 1400,
    delivery_price_office: 970,
  },
  {
    id: "2",
    code: "2",
    name: "Chlef",
    ar_name: "الشلف",
    longitude: "36.1691245",
    latitude: "1.3539002",
    delivery_price_domicile: 850,
    delivery_price_office: 520,
  },
  {
    id: "3",
    code: "3",
    name: "Laghouat",
    ar_name: "الأغواط",
    longitude: "33.7873735",
    latitude: "2.8829115",
    delivery_price_domicile: 950,
    delivery_price_office: 620,
  },
  {
    id: "4",
    code: "4",
    name: "Oum El Bouaghi",
    ar_name: "أم البواقي",
    longitude: "35.8726014",
    latitude: "7.1180248",
    delivery_price_domicile: 850,
    delivery_price_office: 520,
  },
  {
    id: "5",
    code: "5",
    name: "Batna",
    ar_name: "باتنة",
    longitude: "35.32147",
    latitude: "3.1066502",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "6",
    code: "6",
    name: "Béjaïa",
    ar_name: "بجاية",
    longitude: "36.7695969",
    latitude: "5.0085855",
    delivery_price_domicile: 800,
    delivery_price_office: 520,
  },
  {
    id: "7",
    code: "7",
    name: "Biskra",
    ar_name: "بسكرة",
    longitude: "34.8515041",
    latitude: "5.7246709",
    delivery_price_domicile: 950,
    delivery_price_office: 620,
  },
  {
    id: "8",
    code: "8",
    name: "Bechar",
    ar_name: "بشار",
    longitude: "31.5977602",
    latitude: "-1.8540446",
    delivery_price_domicile: 1100,
    delivery_price_office: 720,
  },
  {
    id: "9",
    code: "9",
    name: "Blida",
    ar_name: "البليدة",
    longitude: "36.4803023",
    latitude: "2.8009379",
    delivery_price_domicile: 600,
    delivery_price_office: 470,
  },
  {
    id: "10",
    code: "10",
    name: "Bouira",
    ar_name: "البويرة",
    longitude: "36.2084234",
    latitude: "3.925049",
    delivery_price_domicile: 700,
    delivery_price_office: 520,
  },
  {
    id: "11",
    code: "11",
    name: "Tamanrasset",
    ar_name: "تمنراست",
    longitude: "22.2746227",
    latitude: "5.6754684",
    delivery_price_domicile: 1600,
    delivery_price_office: 1120,
  },
  {
    id: "12",
    code: "12",
    name: "Tbessa",
    ar_name: "تبسة",
    longitude: "35.4117259",
    latitude: "8.110545",
    delivery_price_domicile: 900,
    delivery_price_office: 570,
  },
  {
    id: "13",
    code: "13",
    name: "Tlemcen",
    ar_name: "تلمسان",
    longitude: "34.8959541",
    latitude: "-1.3150979",
    delivery_price_domicile: 900,
    delivery_price_office: 570,
  },
  {
    id: "14",
    code: "14",
    name: "Tiaret",
    ar_name: "تيارت",
    longitude: "35.3599899",
    latitude: "1.3916159",
    delivery_price_domicile: 850,
    delivery_price_office: 520,
  },
  {
    id: "15",
    code: "15",
    name: "Tizi Ouzou",
    ar_name: "تيزي وزو",
    longitude: "36.7002068",
    latitude: "4.075957",
    delivery_price_domicile: 750,
    delivery_price_office: 520,
  },
  {
    id: "16",
    code: "16",
    name: "Alger",
    ar_name: "الجزائر",
    longitude: "36.7538259",
    latitude: "3.057841",
    delivery_price_domicile: 500,
    delivery_price_office: 370,
  },
  {
    id: "17",
    code: "17",
    name: "Djelfa",
    ar_name: "الجلفة",
    longitude: "34.6672467",
    latitude: "3.2993118",
    delivery_price_domicile: 950,
    delivery_price_office: 570,
  },
  {
    id: "18",
    code: "18",
    name: "Jijel",
    ar_name: "جيجل",
    longitude: "36.7962714",
    latitude: "5.7504845",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "19",
    code: "19",
    name: "Se9tif",
    ar_name: "سطيف",
    longitude: "36.1905173",
    latitude: "5.4202134",
    delivery_price_domicile: 800,
    delivery_price_office: 400,
  },
  {
    id: "20",
    code: "20",
    name: "Saefda",
    ar_name: "سعيدة",
    longitude: "34.841945",
    latitude: "0.1483583",
    delivery_price_domicile: 900,
    delivery_price_office: 570,
  },
  {
    id: "21",
    code: "21",
    name: "Skikda",
    ar_name: "سكيكدة",
    longitude: "36.8777912",
    latitude: "6.9357204",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "22",
    code: "22",
    name: "Sidi Bel Abbes",
    ar_name: "سيدي بلعباس",
    longitude: "35.206334",
    latitude: "-0.6301368",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "23",
    code: "23",
    name: "Annaba",
    ar_name: "عنابة",
    longitude: "36.9184345",
    latitude: "7.7452755",
    delivery_price_domicile: 850,
    delivery_price_office: 520,
  },
  {
    id: "24",
    code: "24",
    name: "Guelma",
    ar_name: "قالمة",
    longitude: "36.4569088",
    latitude: "7.4334312",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "25",
    code: "25",
    name: "Constantine",
    ar_name: "قسنطينة",
    longitude: "36.319475",
    latitude: "6.7370571",
    delivery_price_domicile: 800,
    delivery_price_office: 520,
  },
  {
    id: "26",
    code: "26",
    name: "Medea",
    ar_name: "المدية",
    longitude: "36.2838408",
    latitude: "2.7728462",
    delivery_price_domicile: 800,
    delivery_price_office: 520,
  },
  {
    id: "27",
    code: "27",
    name: "Mostaganem",
    ar_name: "مستغانم",
    longitude: "35.9751841",
    latitude: "0.1149273",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "28",
    code: "28",
    name: "M'Sila",
    ar_name: "المسيلة",
    longitude: "35.7211476",
    latitude: "4.5187283",
    delivery_price_domicile: 850,
    delivery_price_office: 570,
  },
  {
    id: "29",
    code: "29",
    name: "Mascara",
    ar_name: "معسكر",
    longitude: "35.382998",
    latitude: "0.1542592",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "30",
    code: "30",
    name: "Ouargla",
    ar_name: "ورقلة",
    longitude: "32.1961967",
    latitude: "4.9634113",
    delivery_price_domicile: 950,
    delivery_price_office: 670,
  },
  {
    id: "31",
    code: "31",
    name: "Oran",
    ar_name: "وهران",
    longitude: "35.7066928",
    latitude: "-0.6405861",
    delivery_price_domicile: 800,
    delivery_price_office: 520,
  },
  {
    id: "32",
    code: "32",
    name: "El Bayadh",
    ar_name: "البيض",
    longitude: "32.5722756",
    latitude: "0.950011",
    delivery_price_domicile: 1100,
    delivery_price_office: 670,
  },

  {
    id: "34",
    code: "34",
    name: "Bordj Bou Arreridj",
    ar_name: "برج بوعريريج",
    longitude: "36.0686488",
    latitude: "4.7691823",
    delivery_price_domicile: 800,
    delivery_price_office: 520,
  },
  {
    id: "35",
    code: "35",
    name: "Boumerdes",
    ar_name: "بومرداس",
    longitude: "36.7564181",
    latitude: "3.4917212",
    delivery_price_domicile: 700,
    delivery_price_office: 520,
  },
  {
    id: "36",
    code: "36",
    name: "El Tarf",
    ar_name: "الطارف",
    longitude: "36.7534258",
    latitude: "8.2984543",
    delivery_price_domicile: 850,
    delivery_price_office: 520,
  },

  {
    id: "38",
    code: "38",
    name: "Tissemsilt",
    ar_name: "تيسمسيلت",
    longitude: "35.6021906",
    latitude: "1.802187",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "39",
    code: "39",
    name: "El Oued",
    ar_name: "الوادي",
    longitude: "33.3714492",
    latitude: "6.8573436",
    delivery_price_domicile: 950,
    delivery_price_office: 670,
  },
  {
    id: "40",
    code: "40",
    name: "Khenchela",
    ar_name: "خنشلة",
    longitude: "35.4263293",
    latitude: "7.1414137",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "41",
    code: "41",
    name: "Souk Ahras",
    ar_name: "سوق أهراس",
    longitude: "36.277849",
    latitude: "7.9592299",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "42",
    code: "42",
    name: "Tipaza",
    ar_name: "تيبازة",
    longitude: "36.5980966",
    latitude: "2.4085379",
    delivery_price_domicile: 700,
    delivery_price_office: 520,
  },
  {
    id: "43",
    code: "43",
    name: "Mila",
    ar_name: "ميلة",
    longitude: "36.4514882",
    latitude: "6.2487316",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "44",
    code: "44",
    name: "Ain Defla",
    ar_name: "عين الدفلى",
    longitude: "36.1283915",
    latitude: "2.1772514",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "45",
    code: "45",
    name: "Naama",
    ar_name: "النعامة",
    longitude: "33.1995605",
    latitude: "-0.8021968",
    delivery_price_domicile: 1100,
    delivery_price_office: 670,
  },
  {
    id: "46",
    code: "46",
    name: "Ain Temouchent",
    ar_name: "عين تموشنت",
    longitude: "35.404044",
    latitude: "-1.0580975",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "47",
    code: "47",
    name: "Ghardaïa",
    ar_name: "غرداية",
    longitude: "32.5891743",
    latitude: "3.7455655",
    delivery_price_domicile: 950,
    delivery_price_office: 500,
  },
  {
    id: "48",
    code: "48",
    name: "Relizane",
    ar_name: "غليزان",
    longitude: "35.8050195",
    latitude: "0.867381",
    delivery_price_domicile: 900,
    delivery_price_office: 520,
  },
  {
    id: "49",
    code: "49",
    name: "Timimoun",
    ar_name: "تيميمون",
    longitude: "33.947222",
    latitude: "5.922222",
    delivery_price_domicile: 1400,
    delivery_price_office: 0,
  },

  {
    id: "51",
    code: "51",
    name: "Ouled Djellal",
    ar_name: "أولاد جلال",
    longitude: "34.433333",
    latitude: "5.066667",
    delivery_price_domicile: 950,
    delivery_price_office: 620,
  },
  {
    id: "52",
    code: "52",
    name: "Béni Abbès",
    ar_name: "بني عباس",
    longitude: "21.327778",
    latitude: "0.955556",
    delivery_price_domicile: 1100,
    delivery_price_office: 970,
  },
  {
    id: "53",
    code: "53",
    name: "In Salah",
    ar_name: "عين صالح",
    longitude: "30.133333",
    latitude: "-2.166667",
    delivery_price_domicile: 1600,
    delivery_price_office: 0,
  },
  {
    id: "54",
    code: "54",
    name: "in Guezzam",
    ar_name: "عين قزام",
    longitude: "33.108333",
    latitude: "6.063889",
    delivery_price_domicile: 1600,
    delivery_price_office: 0,
  },

  {
    id: "55",
    code: "55",
    name: "Touggourt",
    ar_name: "تقرت",
    longitude: "33.108333",
    latitude: "6.063889",
    delivery_price_domicile: 950,
    delivery_price_office: 670,
  },

  {
    id: "57",
    code: "57",
    name: "El MGhair",
    ar_name: "المغير",
    longitude: "27.197222",
    latitude: "2.483333",
    delivery_price_domicile: 950,
    delivery_price_office: 0,
  },
  {
    id: "58",
    code: "58",
    name: "El Meniaa",
    ar_name: "المنيعة",
    longitude: "19.572222",
    latitude: "5.769444",
    delivery_price_domicile: 1000,
    delivery_price_office: 0,
  },
];

const productPrice = 3950; // Original price
export default function ProductPage() {
  // const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    // e.preventDefault();
    setLoading(true);
    // setError(null);
    // formik.setSubmitting(true);

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          wilaya: values.wilaya.name,
          deliveryType: values.deliveryType === "home" ? "Home" : "Desk",
          deliveryPrice: deliveryPrice,
          orderPrice: productPrice,
          total: (deliveryPrice || 0) + productPrice,
          status: "Ordered",
          orderDate: formatDate(new Date()),
        }),
      });

      if (response.ok) {
        setShowSuccesModal(true);
        formik.resetForm();
        // handleEvent(values?.deliveryPrice + 1950);
        // alert('Order submitted successfully');
        setLoading(false);
      } else {
        setLoading(false);
        formik.resetForm();
        setShowFailedModal(true);
        const errorData = await response.json();
        console.log(errorData.message || "Failed to submit order");
      }
    } catch (err) {
      setLoading(false);
      formik.resetForm();
      setShowFailedModal(true);

      console.error("Error submitting form:", err);
      // setError('Error submitting form');
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      deliveryType: "home",
      wilaya: { id: "", name: "" },
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("مطلوب"),
      lastName: Yup.string().required("مطلوب"),
      phone: Yup.string().required("مطلوب"),
      deliveryType: Yup.string().required(),
      wilaya: Yup.object({
        id: Yup.string().required(),
        name: Yup.string().required(),
      })
        .nullable()
        .required("الولاية مطلوبة"),
    }),
    onSubmit: handleSubmit,
  });

  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);
  const [deliveryPriceHome, setDeliveryPriceHome] = useState<number | null>(
    null
  );
  const [deliveryPriceOffice, setDeliveryPriceOffice] = useState<number | null>(
    null
  );

  useEffect(() => {
    const selectedWilaya = wilayas.find(
      (wilaya) => wilaya.id === formik?.values?.wilaya?.id
    );

    if (selectedWilaya) {
      setDeliveryPrice(
        formik.values.deliveryType === "home"
          ? selectedWilaya.delivery_price_domicile
          : selectedWilaya.delivery_price_office
      );
      setDeliveryPriceHome(selectedWilaya.delivery_price_domicile);
      setDeliveryPriceOffice(selectedWilaya.delivery_price_office);
    } else {
      setDeliveryPrice(null);
      setDeliveryPriceHome(null);
      setDeliveryPriceOffice(null);
    }
  }, [formik.values.wilaya, formik.values.deliveryType]);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const [loading, setLoading] = useState(false);
  const [showSuccesModal, setShowSuccesModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const closeModal = () => {
    // formik.resetForm();
    setShowFailedModal(false);
    setShowSuccesModal(false);
    setLoading(false);
    formik.resetForm();
  };

  return (
    <div
      dir="rtl"
      className="bg-white p-4 space-y-6 flex flex-col items-center "
    >
      {/* Navbar */}
      <nav className="flex  w-full justify-center items-center bg-gray-300 text-white overflow-hidden px-6 h-26 rounded">
        {/* <span className="text-xl font-semibold text-blue-400">مرحبا !</span> */}
        <Image
          src="/logo.png"
          alt="Banner Image"
          width={100}
          height={200}
          className="w-auto h-48  object-cover"
        />
      </nav>

      <button
        type="button"
        className="mydiv text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 "
      >
        تخفيضات محدودة المدة ⏰ -20%
      </button>
      <h1 className="text-black text-4xl font-semibold ">
        شواية + فحم مضغوط + شاليمو + قارورة غاز + اعواد الشواء
      </h1>

      {/* Image Slider */}
      <div dir="ltr" className="mb-6">
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          <div>
            <Image
              src="/four.png"
              alt="Banner Image"
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div>
            <Image
              src="/one.jpg"
              alt="Banner Image"
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div>
            <Image
              src="/two.jpg"
              alt="Banner Image"
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div>
            <Image
              src="/three.jpg"
              alt="Banner Image"
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </Carousel>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className=" text-black  ">
        <div className="bg-gray-100 p-4 rounded shadow-md space-y-4">
          {/* First Name */}
          <div>
            <label className="block mb-1 text-xl font-semibold">الاسم :</label>
            <input
              type="text"
              name="firstName"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-600 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-xl font-semibold">اللقب :</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-xl font-semibold">الهاتف:</label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-600 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          {/* Wilaya Select */}
          <div>
            <label className="block mb-1 text-xl font-semibold ">
              الولاية :
            </label>
            <select
              name="wilaya"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              value={formik.values.wilaya.name || ""}
              onChange={(e) => {
                const selectedOption = wilayas.find(
                  (wilaya) => wilaya.id === e.target.value
                );

                formik.setFieldValue("wilaya", {
                  id: selectedOption?.id || "",
                  name: selectedOption?.name || "",
                });
              }}
              onBlur={() => formik.setFieldTouched("wilaya", true)}
            >
              <option value="" disabled>
                اختر الولاية
              </option>
              {wilayas.map((wilaya) => (
                <option key={wilaya.id} value={wilaya.id}>
                  {wilaya.name} ({wilaya.ar_name})
                </option>
              ))}
            </select>
            {formik.touched.wilaya && formik.errors.wilaya && (
              <div className="text-red-600 text-sm"> الولاية مطلوبة</div>
            )}
          </div>

          {/* Delivery Type */}
        </div>

        <div className="bg-gray-100 p-4 my-8 rounded shadow-md space-y-4">
          <label className="block  mb-2 text-xl font-semibold">
            نوع التوصيل:
          </label>
          <div className="flex flex-col gap-2">
            <label>
              <input
                className="border rounded p-2 mx-2"
                type="radio"
                name="deliveryType"
                value="home"
                checked={formik.values.deliveryType === "home"}
                onChange={formik.handleChange}
              />
              توصيل إلى المنزل - {deliveryPriceHome} دج
            </label>
            <label>
              <input
                className="border rounded p-2 mx-2"
                type="radio"
                name="deliveryType"
                value="desk"
                checked={formik.values.deliveryType === "desk"}
                onChange={formik.handleChange}
              />{" "}
              توصيل إلى المكتب - {deliveryPriceOffice} دج
            </label>
          </div>
        </div>

        <div className="relative w-[90vw] md:w-[50vw] mx-auto  p-6 bg-gray-100 rounded-lg shadow-lg">
          <Image
            src="/promo.png"
            alt="promo"
            className={`absolute left-6 sm:left-6 -top-4  sm:-top-14 h-18 w-18  sm:h-32 sm:w-32   `}
            width={400}
            height={400}
            // fill
            style={{ transform: "scale(1.4)", rotate: "-15deg" }}
            priority
          />

          <h2 className={`text-md sm:text-2xl font-bold mb-4 text-right`}>
            ملخص الطلب
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-md sm:text-lg">سعر المنتج :</span>
            <span className="text-md sm:text-lg">
              <span className="line-through text-red-500">4800 دج</span>- {"  "}
              <span className="text-green-500"> {productPrice} دج</span>
            </span>
          </div>
          {/* <div className="flex justify-between items-center mb-2">
              <span className="text-lg">Promotion:</span>
              <span className="text-lg text-red-500">- {10} %</span>
            </div> */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-md sm:text-lg">تكلفة التوصيل :</span>
            <span className="text-md sm:text-lg">
              {deliveryPrice !== null ? `${deliveryPrice} دج` : "---"}
            </span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center font-bold text-xl">
            <span className="ml-2">الإجمالي :</span>
            <span>{productPrice + (deliveryPrice || 0)} دج</span>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={() => {
            if (formik.isValid) {
              formik.handleSubmit();
            }
          }}
          disabled={!formik.isValid || loading}
          className={`w-full my-4 rounded border-b-4 ${
            loading
              ? "border-violet-400 bg-violet-200 hover:border-violet-200 hover:bg-violet-100"
              : "border-violet-700 bg-violet-500 hover:border-violet-500 hover:bg-violet-400"
          }  px-4 py-2 font-bold text-white `}
          type="submit"
        >
          {loading ? (
            <span className="animate-pulse text-violet-800">جاري الإرسال</span>
          ) : (
            <span> اطلب الآن</span>
          )}{" "}
        </button>
      </form>

      {showSuccesModal && (
        <Modal onClose={closeModal} className={"w-[99vw] sm:w-[50vw]"}>
          <div className="mb-3 flex items-center">
            <h1 className={"font-inter text-lg font-medium  text-green-700"}>
              تم الطلب بنجاح
            </h1>
          </div>
          <div className="mb-4">
            <span className="text-slate-800 text-xl font-normal font-inter leading-tight">
              تم تأكيد الطلب، سنتواصل معك لتأكيد طلبك.
            </span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-blue-700 hover:bg-blue-800 text-gray-50 text-md py-2 px-4 h-12 md:h-12 lg:h-11 font-inter rounded-md shadow-md transition duration-300 ease-in-out"
            >
              فهمت
            </button>
          </div>
        </Modal>
      )}
      {showFailedModal && (
        <Modal onClose={closeModal} className={"w-[99vw] sm:w-[50vw]"}>
          <div className="mb-3 flex items-center">
            <h1 className={"font-inter text-lg font-medium  text-red-500"}>
              فشل في الطلب
            </h1>
          </div>
          <div className="mb-4">
            <span className="text-slate-800 text-xl font-normal font-inter leading-tight">
              حدثت مشكلة أثناء إتمام طلبك، يرجى المحاولة مرة أخرى.
            </span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-blue-700 hover:bg-blue-800 text-gray-50 text-md py-2 px-4 h-12 md:h-12 lg:h-11 font-inter rounded-md shadow-md transition duration-300 ease-in-out"
            >
              حاول مرة أخرى
            </button>
          </div>
        </Modal>
      )}

      {loading && (
        <Modal onClose={closeModal} className={"w-[99vw] sm:w-[20vw]"}>
          <div className="mb-3 flex items-center justify-center">
            <span className="animate-pulse text-4xl pt-4 text-gray-800">
              جاري الإرسال
            </span>
          </div>
        </Modal>
      )}
    </div>
  );
}
